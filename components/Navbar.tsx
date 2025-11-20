import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onNavigate: (page: 'home' | 'privacy' | 'terms' | 'refund') => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate('home');
    // Give time for the home view to render if we were on a legal page
    setTimeout(() => {
      const element = document.querySelector(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleHomeClick = () => {
    onNavigate('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: '遊戲特色', id: '#features' },
    { name: '傳說英雄', id: '#heroes' },
    { name: '遊戲畫面', id: '#gallery' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-hero-dark/95 backdrop-blur-md border-b border-white/10 py-2 md:py-3 shadow-lg' : 'bg-transparent py-4 md:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer group gap-3" onClick={handleHomeClick}>
             <img 
              src="https://mumu.tw/linehero/official_web/favi/web-app-manifest-512x512.png" 
              alt="LineHero Logo" 
              className="h-10 md:h-14 w-auto object-contain transition-transform hover:scale-105 drop-shadow-[0_0_5px_rgba(255,215,0,0.3)]"
             />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <button 
                key={link.name} 
                onClick={() => handleNavClick(link.id)}
                className="text-gray-300 hover:text-hero-gold transition-colors text-sm font-bold tracking-wider"
              >
                {link.name}
              </button>
            ))}
            <a 
              href="https://wiki.linehero.tw"
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-hero-gold transition-colors text-sm font-bold tracking-wider flex items-center gap-1"
            >
              Wiki 攻略
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <a 
              href="https://line.me/"
              target="_blank"
              rel="noreferrer"
              className="bg-[#06C755] hover:bg-[#05b64d] text-white px-6 py-2 rounded-md shadow-[0_0_15px_rgba(6,199,85,0.4)] transition-all font-bold text-sm transform hover:scale-105 flex items-center gap-2"
            >
              <span>開始冒險</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-hero-gold focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-hero-panel border-b border-white/10 absolute w-full shadow-2xl">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.id)}
                className="block w-full text-left px-3 py-3 text-base font-bold text-gray-300 hover:text-hero-gold hover:bg-white/5 rounded-lg"
              >
                {link.name}
              </button>
            ))}
            <a
                href="https://wiki.linehero.tw"
                target="_blank"
                rel="noreferrer"
                className="block w-full text-left px-3 py-3 text-base font-bold text-gray-300 hover:text-hero-gold hover:bg-white/5 rounded-lg"
              >
                Wiki 攻略
              </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;