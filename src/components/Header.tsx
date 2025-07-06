import React from 'react';
import { MessageCircle, Users, Youtube } from 'lucide-react';

interface HeaderProps {
  onDiscordClick: () => void;
  onWhatsAppClick: () => void;
  onYouTubeClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onDiscordClick, onWhatsAppClick, onYouTubeClick }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#BF247A] to-[#812B8C] shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="https://henriquesilva.dev/me.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=1" 
              alt="Tio Rick" 
              className="w-12 h-12 rounded-full border-2 border-white shadow-md"
            />
            <div>
              <h1 className="text-white font-bold text-lg md:text-xl">
                Tio Rick
              </h1>
              <p className="text-white/80 text-sm hidden md:block">
                Curso de Programação
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <button 
              onClick={onDiscordClick}
              className="p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors duration-200"
              title="Discord"
            >
              <MessageCircle className="w-5 h-5 text-white" />
            </button>
            <button 
              onClick={onWhatsAppClick}
              className="p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors duration-200"
              title="WhatsApp"
            >
              <Users className="w-5 h-5 text-white" />
            </button>
            <button 
              onClick={onYouTubeClick}
              className="p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors duration-200"
              title="YouTube"
            >
              <Youtube className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;