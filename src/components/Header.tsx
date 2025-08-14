import React, { useState } from 'react';
import { Menu, X, Volume2, VolumeX, Bot } from 'lucide-react';

interface HeaderProps {
  currentSection: string;
  onNavigate: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentSection, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'events', label: 'Events' },
    { id: 'team', label: 'Team' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' }
  ];

  const toggleMusic = () => {
    setIsMusicPlaying(!isMusicPlaying);
    // In a real implementation, you'd control audio here
  };

  return (
    <header className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm border-b border-cyan-500/20 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Bot className="w-8 h-8 text-cyan-400" />
            <span className="text-xl font-bold text-white">RoboClub AEC</span>
          </div>

          <nav className="hidden lg:flex space-x-8">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-sm font-medium transition-colors duration-200 hover:text-cyan-400 ${
                  currentSection === item.id ? 'text-cyan-400' : 'text-gray-300'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleMusic}
              className="p-2 rounded-lg bg-cyan-600/20 hover:bg-cyan-600/30 transition-colors duration-200"
              title="Toggle Background Music"
            >
              {isMusicPlaying ? (
                <Volume2 className="w-5 h-5 text-cyan-400" />
              ) : (
                <VolumeX className="w-5 h-5 text-gray-400" />
              )}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4">
            <nav className="space-y-2">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-2 rounded-lg transition-colors duration-200 ${
                    currentSection === item.id
                      ? 'bg-cyan-600/20 text-cyan-400'
                      : 'text-gray-300 hover:bg-slate-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;