import React from 'react';
import { Gift, ExternalLink } from 'lucide-react';

const InfoPanel: React.FC = () => {
  const handleKibomClick = () => {
    window.open('https://www.kibon.com.br/home.html', '_blank');
  };

  return (
    <div className="bg-gradient-to-r from-[#D9731A] to-[#BF3939] rounded-xl p-6 text-white shadow-lg">
      <div className="flex items-center space-x-3 mb-4">
        <Gift className="w-8 h-8" />
        <h2 className="text-xl font-bold">Sistema de Pontos</h2>
      </div>
      <p className="text-white/90 mb-4 leading-relaxed">
        Cada ponto vale <strong>1 centavo</strong> e pode ser trocado por produtos incríveis da loja da Kibom!
      </p>
      <button 
        onClick={handleKibomClick}
        className="inline-flex items-center space-x-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors duration-200"
      >
        <span>Visitar Loja Kibom</span>
        <ExternalLink className="w-4 h-4" />
      </button>
    </div>
  );
};

export default InfoPanel;