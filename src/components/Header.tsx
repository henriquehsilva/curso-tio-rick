import React, { useState } from 'react';
import { Menu, X, Code } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-primary/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Code className="h-8 w-8 text-secondary" />
            <span className="text-xl font-bold text-white">Tio Rick</span>
          </div>
          
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-primary/20 pt-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left hover:text-accent transition-colors"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('roadmap')}
                className="text-left hover:text-accent transition-colors"
              >
                Roadmap
              </button>
              <button 
                onClick={() => scrollToSection('technologies')}
                className="text-left hover:text-accent transition-colors"
              >
                Tecnologias
              </button>
              <button 
                onClick={() => scrollToSection('community')}
                className="text-left hover:text-accent transition-colors"
              >
                Comunidade
              </button>
              <button className="bg-secondary hover:bg-secondary/80 px-6 py-2 rounded-full font-medium transition-colors text-center">
                Inscreva-se
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;