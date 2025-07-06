import React from 'react';
import { Trophy, Star } from 'lucide-react';

interface Aluno {
  id: number;
  nome: string;
  apelido: string;
  pontos: number;
  avatar: string;
}

interface AlunoCardProps {
  aluno: Aluno;
}

const AlunoCard: React.FC<AlunoCardProps> = ({ aluno }) => {
  const getPointsColor = (pontos: number) => {
    if (pontos >= 1500) return 'text-[#D9731A]';
    if (pontos >= 1000) return 'text-[#BF247A]';
    return 'text-[#812B8C]';
  };

  const getPointsIcon = (pontos: number) => {
    if (pontos >= 1500) return <Trophy className="w-5 h-5" />;
    return <Star className="w-5 h-5" />;
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-100">
      <div className="flex items-center space-x-4">
        <img 
          src={aluno.avatar} 
          alt={aluno.nome}
          className="w-16 h-16 rounded-full object-cover border-2 border-[#BF247A]"
        />
        <div className="flex-1">
          <h3 className="font-semibold text-lg text-[#2A2359]">{aluno.nome}</h3>
          <p className="text-gray-600 text-sm mb-2">@{aluno.apelido}</p>
          <div className={`flex items-center space-x-2 ${getPointsColor(aluno.pontos)}`}>
            {getPointsIcon(aluno.pontos)}
            <span className="font-bold text-lg">{aluno.pontos.toLocaleString()}</span>
            <span className="text-sm text-gray-500">pontos</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlunoCard;