import React, { useEffect, useState } from 'react';
import { trackCtaClick } from '../services/analytics';

interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

const NavbarAstro: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: NavLink[] = [
    { label: '遊戲特色', href: '/#features' },
    { label: '玩法介紹', href: '/game-intro-line' },
    { label: '功能介紹', href: '/features' },
    { label: '排行榜', href: '/ranking-power' },
    { label: '遊戲公告', href: '/announcements' },
    { label: '商城 / 儲值', href: '/shop' },
  ];

  // 目前探索/酒館仍在開發中，避免新訪客點到「未完成」頁面而跳出：先不在主導覽曝光
  const externalLinks: NavLink[] = [
    { label: 'Wiki 攻略', href: 'https://wiki.linehero.tw', external: true },
  ];

  return (
    <nav
      style={{ paddingTop: 'env(safe-area-inset-top)' }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#111216]/95 backdrop-blur-md border-b border-white/10 py-2 md:py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : 'bg-gradient-to-b from-black/80 to-transparent py-4 md:py-6'
        }`}
    >
      <div className={`absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="flex-shrink-0 flex items-center cursor-pointer group gap-3">
            <img
              src="https://image.linehero.tw/official_web/favi/web-app-manifest-512x512.png"
              alt="LineHero Logo"
              className="h-10 md:h-14 w-auto object-contain transition-transform hover:scale-105 drop-shadow-[0_0_5px_rgba(255,215,0,0.3)]"
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-200 hover:text-hero-gold transition-colors text-sm font-bold tracking-wider"
              >
                {link.label}
              </a>
            ))}
            {externalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-200 ${link.label === '探索模式' ? 'hover:text-purple-400' : 'hover:text-hero-gold'} transition-colors text-sm font-bold tracking-wider flex items-center gap-1`}
                onClick={() => trackCtaClick(link.label, 'navbar', link.href)}
              >
                {link.label}
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            ))}
            <a
              href="https://lin.ee/3JlUhak"
              target="_blank"
              rel="noreferrer"
              className="bg-hero-green hover:bg-[#05b64d] text-white px-6 py-2.5 rounded clip-path-polygon shadow-[0_0_15px_rgba(6,199,85,0.4)] transition-all font-bold text-sm transform hover:scale-105 flex items-center gap-2 group relative overflow-hidden"
              onClick={() => trackCtaClick('立即開玩', 'navbar', 'https://lin.ee/3JlUhak')}
            >
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
              <span>立即開玩</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <a
              href="https://lin.ee/3JlUhak"
              target="_blank"
              rel="noreferrer"
              className="bg-hero-green text-white px-4 py-1.5 rounded text-xs font-bold shadow-[0_0_10px_rgba(6,199,85,0.3)]"
              onClick={() => trackCtaClick('PLAY', 'navbar-mobile', 'https://lin.ee/3JlUhak')}
            >
              PLAY
            </a>
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
              <a
                key={link.label}
                href={link.href}
                className="block w-full text-left px-3 py-3 text-base font-bold text-gray-200 hover:text-hero-gold hover:bg-white/5 rounded-lg"
              >
                {link.label}
              </a>
            ))}
            {externalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-left px-3 py-3 text-base font-bold text-gray-200 ${link.label === '探索模式' ? 'hover:text-purple-400' : 'hover:text-hero-gold'} hover:bg-white/5 rounded-lg`}
                onClick={() => trackCtaClick(link.label, 'navbar-mobile', link.href)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavbarAstro;
