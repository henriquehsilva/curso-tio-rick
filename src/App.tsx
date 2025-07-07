import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import AlunoCard from './components/AlunoCard';
import InfoPanel from './components/InfoPanel';

interface Aluno {
  id: number;
  nome: string;
  apelido: string;
  pontos: number;
  avatar: string;
}

function App() {
  const [alunos, setAlunos] = useState<Aluno[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/meusalunos.json', { cache: "no-store" })
      .then(response => response.json())
      .then(data => {
        setAlunos(data.alunos);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erro ao carregar alunos:', error);
        setLoading(false);
      });
  }, []);

  const filteredAlunos = alunos.filter(aluno =>
    aluno.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    aluno.apelido.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDiscordClick = () => {
    window.open('https://discord.gg/yfbV9mma', '_blank');
  };

  const handleWhatsAppClick = () => {
    window.open('https://chat.whatsapp.com/FMeHWAiUr0H1gSesmjk7vy?mode=r_c', '_blank');
  };

  const handleYouTubeClick = () => {
    window.open('https://aulas.henriquesilva.dev', '_blank');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#2A2359] to-[#812B8C] flex items-center justify-center">
        <div className="text-white text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-lg">Carregando alunos...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2A2359] to-[#812B8C]">
      <Header 
        onDiscordClick={handleDiscordClick}
        onWhatsAppClick={handleWhatsAppClick}
        onYouTubeClick={handleYouTubeClick}
      />
      
      <main className="pt-20 pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Ranking dos Alunos
              </h1>
              <p className="text-white/80 text-lg">
                Conheça os estudantes do curso e seus pontos!
              </p>
            </div>

            <SearchBar 
              searchTerm={searchTerm} 
              onSearchChange={setSearchTerm} 
            />

            <div className="mb-8">
              <InfoPanel />
            </div>

            <div className="grid gap-4 md:gap-6">
              {filteredAlunos.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-white/80 text-lg">
                    {searchTerm ? 'Nenhum aluno encontrado.' : 'Nenhum aluno cadastrado.'}
                  </p>
                </div>
              ) : (
                filteredAlunos
                  .sort((a, b) => b.pontos - a.pontos)
                  .map((aluno, index) => (
                    <div key={aluno.id} className="relative">
                      {index < 3 && (
                        <div className="absolute -top-2 -left-2 bg-gradient-to-r from-[#D9731A] to-[#BF3939] text-white text-xs font-bold px-2 py-1 rounded-full z-10">
                          #{index + 1}
                        </div>
                      )}
                      <AlunoCard aluno={aluno} />
                    </div>
                  ))
              )}
            </div>

            <div className="mt-8 text-center">
              <p className="text-white/60 text-sm">
                Total de alunos: {alunos.length}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;