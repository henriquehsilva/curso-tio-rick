import React from 'react';
import { Code, Database, Globe, Brain } from 'lucide-react';

const Technologies: React.FC = () => {
  const technologies = [
    {
      name: 'Ruby',
      icon: <Code className="h-12 w-12" />,
      description: 'Linguagem elegante e produtiva para backend',
      color: 'text-highlight',
      bgColor: 'bg-highlight/10',
      borderColor: 'border-highlight/30',
    },
    {
      name: 'JavaScript',
      icon: <Globe className="h-12 w-12" />,
      description: 'A linguagem da web moderna',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
      borderColor: 'border-secondary/30',
    },
    {
      name: 'Python',
      icon: <Brain className="h-12 w-12" />,
      description: 'Poder para Data Science e IA',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      borderColor: 'border-accent/30',
    },
  ];

  return (
    <section id="technologies" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Tecnologias que Você Vai <span className="text-secondary">Dominar</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Aprenda as linguagens mais demandadas do mercado, cada uma com suas especialidades
            e aplicações práticas no mundo real.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {technologies.map((tech, index) => (
            <div key={index} className={`${tech.bgColor} p-8 rounded-3xl border-2 ${tech.borderColor} hover:scale-105 transition-all duration-300 text-center group`}>
              <div className={`${tech.color} mb-6 flex justify-center group-hover:animate-float`}>
                {tech.icon}
              </div>
              <h3 className={`text-2xl font-bold mb-4 ${tech.color}`}>
                {tech.name}
              </h3>
              <p className="text-gray-300 mb-6">
                {tech.description}
              </p>
              <div className="space-y-2">
                {tech.name === 'Ruby' && (
                  <>
                    <div className="text-sm text-gray-400">• Programação Orientada a Objetos</div>
                    <div className="text-sm text-gray-400">• Ruby on Rails</div>
                    <div className="text-sm text-gray-400">• APIs RESTful</div>
                  </>
                )}
                {tech.name === 'JavaScript' && (
                  <>
                    <div className="text-sm text-gray-400">• ES6+ Moderno</div>
                    <div className="text-sm text-gray-400">• React & Vue.js</div>
                    <div className="text-sm text-gray-400">• Node.js</div>
                  </>
                )}
                {tech.name === 'Python' && (
                  <>
                    <div className="text-sm text-gray-400">• Pandas & NumPy</div>
                    <div className="text-sm text-gray-400">• Machine Learning</div>
                    <div className="text-sm text-gray-400">• Data Visualization</div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;