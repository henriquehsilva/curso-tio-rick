import React from 'react';
import { Code, MessageSquare, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary/20 py-16 px-4">
      <div className="container mx-auto">  
        <div className="border-t border-primary/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 text-gray-300 mb-4 md:mb-0">
              <span>Feito com</span>
              <Heart className="h-4 w-4 text-highlight" />
              <span>pelo Tio Rick</span>
            </div>
            <div className="text-gray-300 text-sm">
              © 2025 Curso de Programação do Tio Rick. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;