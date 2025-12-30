import React, { useEffect, useState } from 'react';
import { Page } from '../types';

interface NavbarProps {
  onNavigate: (page: Page) => void;
}

type NavLink =
  | { label: string; type: 'section'; target: string }
  | { label: string; type: 'page'; target: Page };

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

  const handleSectionNav = (selector: string) => {
    setMobileMenuOpen(false);
    onNavigate('home');
    setTimeout(() => {
      const element = document.querySelector(selector);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 80);
  };

  const handlePageNav = (page: Page) => {
    setMobileMenuOpen(false);
    onNavigate(page);
  };

  const navLinks: NavLink[] = [
    { label: '遊戲特色', type: 'section', target: '#features' },
    { label: '主打英雄', type: 'section', target: '#heroes' },
    { label: '遊戲畫面', type: 'section', target: '#gallery' },
    { label: '玩法介紹', type: 'page', target: 'game-intro-line' },
    { label: '遊戲公告', type: 'page', target: 'announcements' },
    { label: '商城 / 儲值', type: 'page', target: 'shop' },
  ];

  const handleHomeClick = () => {
    onNavigate('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || mobileMenuOpen ? 'bg-hero-dark/80 backdrop-blur-xl border-b border-white/10 shadow-lg' : 'bg-transparent py-4 md:py-6'
        }`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-hero-gold/5 to-transparent opacity-0 hover:opacity-100 transition-opacity pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer group gap-3" onClick={handleHomeClick}>
            <div className="relative">
              <div className="absolute inset-0 bg-hero-gold blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <img
                src="https://mumu.tw/linehero/official_web/favi/web-app-manifest-512x512.png"
                alt="LineHero Logo"
                className="relative h-10 md:h-12 w-auto object-contain transition-transform group-hover:scale-105 drop-shadow-[0_0_5px_rgba(255,215,0,0.3)]"
              />
            </div>
            <span className="font-en-display font-bold text-xl md:text-2xl text-white tracking-widest group-hover:text-hero-gold transition-colors">LINEHERO</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-1 items-center">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => link.type === 'section' ? handleSectionNav(link.target) : handlePageNav(link.target)}
                className="relative px-4 py-2 text-gray-300 hover:text-white transition-colors text-sm font-bold tracking-wider group overflow-hidden rounded-lg"
              >
                <span className="relative z-10">{link.label}</span>
                <div className="absolute inset-0 bg-white/5 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-hero-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </button>
            ))}
            <a
              href="https://explore.linehero.tw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-purple-400 transition-colors text-sm font-bold tracking-wider flex items-center gap-1"
            >
<<<<<<< HEAD
              探索模式
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
=======
              <span>探索</span>
>>>>>>> 856f8d9 (官網更新)
            </a>

            <div className="h-6 w-[1px] bg-white/20 mx-2"></div>

            <a
              href="https://tarven.linehero.tw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-hero-gold transition-colors text-sm font-bold tracking-wider flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/5"
            >
              <span className="text-lg">🍺</span>
              <span>酒館</span>
            </a>

            <a
              href="https://wiki.linehero.tw"
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-hero-gold transition-colors text-sm font-bold tracking-wider flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/5"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span>Wiki</span>
            </a>

            <a
              href="https://lin.ee/WQwrOvC"
              target="_blank"
              rel="noreferrer"
              className="ml-4 bg-hero-green hover:bg-[#05b64d] text-white px-6 py-2.5 rounded clip-path-polygon shadow-[0_0_15px_rgba(6,199,85,0.4)] transition-all font-bold text-sm transform hover:scale-105 flex items-center gap-2 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
              <span>立即開玩</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            <a
              href="https://lin.ee/WQwrOvC"
              target="_blank"
              rel="noreferrer"
              className="bg-hero-green text-white px-4 py-1.5 rounded text-xs font-bold shadow-[0_0_10px_rgba(6,199,85,0.3)]"
            >
              PLAY
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-hero-gold focus:outline-none p-2"
            >
              <div className="w-6 flex flex-col items-end gap-1.5">
                <span className={`h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`}></span>
                <span className={`h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'w-4'}`}></span>
                <span className={`h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-5'}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 z-40 bg-hero-dark/95 backdrop-blur-xl transition-transform duration-300 pt-20 px-6 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col gap-4">
          {navLinks.map((link, idx) => (
            <button
              key={link.label}
              onClick={() => link.type === 'section' ? handleSectionNav(link.target) : handlePageNav(link.target)}
              className="text-left text-2xl font-black text-white hover:text-hero-gold py-2 border-b border-white/5 animate-slide-in"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              <span className="text-xs font-mono text-gray-500 mr-4">0{idx + 1}</span>
              {link.label}
            </button>
          ))}
          <div className="flex gap-4 mt-8">
            <a
              href="https://explore.linehero.tw"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 group"
            >
              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">🔮</div>
              <div className="text-sm font-bold text-gray-300 group-hover:text-purple-400 transition-colors">探索模式</div>
            </a>
            <a
              href="https://tarven.linehero.tw"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:bg-white/10"
            >
              <div className="text-2xl mb-2">🍺</div>
              <div className="text-sm font-bold text-gray-300">酒館</div>
            </a>
            <a
              href="https://wiki.linehero.tw"
              target="_blank"
              rel="noreferrer"
              className="flex-1 bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:bg-white/10"
            >
              <div className="text-2xl mb-2">📚</div>
              <div className="text-sm font-bold text-gray-300">Wiki 攻略</div>
            </a>
          </div>
        </div>
      </div>
    </nav >
  );
};

export default Navbar;
