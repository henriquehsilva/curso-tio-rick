import React from 'react';
import { ChevronRight, CheckCircle } from 'lucide-react';

const Roadmap: React.FC = () => {
  const roadmapSteps = [
    {
      phase: 'Fase 1',
      title: 'Fundamentos',
      description: 'Lógica de programação e desenvolvimento backend',
      technologies: ['Ruby', 'POO', 'Algoritmos'],
      color: 'from-highlight to-highlight/60',
      textColor: 'text-highlight',
      bgColor: 'bg-highlight/10',
    },
    {
      phase: 'Fase 2',
      title: 'Front-end Web',
      description: 'Desenvolvimento de interfaces modernas',
      technologies: ['JavaScript', 'React', 'CSS'],
      color: 'from-secondary to-secondary/60',
      textColor: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
    {
      phase: 'Fase 3',
      title: 'Data Science & IA',
      description: 'Análise de dados e inteligência artificial',
      technologies: ['Python', 'ML', 'Data Analysis'],
      color: 'from-accent to-accent/60',
      textColor: 'text-accent',
      bgColor: 'bg-accent/10',
    },
  ];

  return (<p></p>);
};

export default Roadmap;