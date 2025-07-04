import React from 'react';
import { Heart } from 'lucide-react';

const AboutCourse: React.FC = () => {
  return (
    <section id="roadmap" className="py-20 px-4 bg-primary/10">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Feito com <span className="text-secondary">Carinho</span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Este curso foi especialmente pensado para meus sobrinhos e sobrinhas, para que cada um tenha a oportunidade de explorar o mundo da tecnologia de forma completa e divertida.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutCourse;
