import React from 'react';
import { Play, Users, Trophy } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Curso de Programação
            <br />
            <span className="text-secondary">do Tio Rick</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Aprenda programação do zero ao profissional com Ruby, JavaScript e Python. 
            Uma jornada completa com comunidade ativa e suporte contínuo.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="https://youtu.be/q0ztDihtB5w"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary hover:bg-secondary/80 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Play className="h-5 w-5" />
              Começar Agora
            </a>
            <a
              href="https://discord.gg/NjkbuPD2"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-accent text-accent hover:bg-accent hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Users className="h-5 w-5" />
              Entrar no Discord
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-primary/30 p-6 rounded-2xl border border-primary/50 hover:border-secondary/50 transition-colors">
              <div className="bg-secondary/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Do Zero ao Pro</h3>
              <p className="text-gray-300">Comece sem conhecimento prévio e torne-se um programador completo</p>
            </div>
            
            <div className="bg-primary/30 p-6 rounded-2xl border border-primary/50 hover:border-secondary/50 transition-colors">
              <div className="bg-secondary/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Comunidade Ativa</h3>
              <p className="text-gray-300">Suporte contínuo no Discord com colegas e mentores</p>
            </div>
            
            <div className="bg-primary/30 p-6 rounded-2xl border border-primary/50 hover:border-secondary/50 transition-colors">
              <div className="bg-secondary/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Prática Constante</h3>
              <p className="text-gray-300">Projetos reais e exercícios para consolidar o aprendizado</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;