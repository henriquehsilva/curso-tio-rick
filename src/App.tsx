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
    window.open('https://www.youtube.com/@henriquesilvadev', '_blank');
  };

  const handleGithubClick = () => {
    window.open('https://github.com/CURSO-DE-PROGRAMACAO-DO-TIO-RICK', '_blank');
  };

  const handleLinkedinClick = () => {
    window.open('https://www.linkedin.com/groups/10164029/', '_blank');
  };

  const handleGptClick = () => {
    window.open('https://chatgpt.com/g/g-6870247c27c0819194c42f30af2e8ca0-gpt-do-tio-rick', '_blank');
  };

  const handleBlogClick = () => {
    window.open('https://dev.to/@henriquesilvadev', '_blank');
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
        onGithubClick={handleGithubClick}
        onLinkedinClick={handleLinkedinClick}
        onGptClick={handleGptClick}
        onBlogClick={handleBlogClick}
      />
      
      <main className="pt-20 pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="mb-6">
                <button
                  onClick={() => window.open('./roadmap.html', '_blank')}
                  className="bg-white text-[#812B8C] hover:bg-purple-100 font-semibold py-2 px-4 rounded-full shadow-md transition"
                >
                  Roadmap do Curso
                </button>
              </div>
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
      <footer className="bg-[#1F1B45] text-white py-10 mt-16">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-2xl font-bold mb-4">Apoie-nos!</h2>
          <p className="text-white/80 mb-6">
            O <strong>Projeto Curso de Programação do Tio Rick</strong> é financiado pela comunidade.
            Junte-se a nós para empoderar alunos em todo o Brasil apoiando o Projeto!
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="https://livepix.gg/tiorick"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold px-6 py-2 rounded-full transition shadow-md"
            >
              Doe agora
            </a>
            <a
              href="https://youtu.be/_ESr5aGXqmc?si=s4qcRZXT-wLKCGgl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:underline font-medium px-4 py-2"
            >
              Saber mais
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;