import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Characters from './components/Characters';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
// import OracleChat from './components/OracleChat';
import { LegalPage } from './components/Legal';
import { GameIntroLinePage, GameIntroWebPage, ShopPage, OfficeGamesPage, AnnouncementsPage, FactionIntroPage } from './components/StaticPages';
import { Page } from './types';

const pageToPath: Record<Page, string> = {
  home: '/',
  privacy: '/privacy',
  terms: '/terms',
  refund: '/refund',
  'game-intro-line': '/game-intro/line',
  'game-intro-web': '/game-intro/web',
  shop: '/shop',
  'office-games': '/office-games',
  announcements: '/announcements',
  'faction-intro': '/faction-intro',
};

const normalizePath = (value: string) => {
  const trimmed = value.replace(/\/+$/, '');
  return trimmed === '' ? '/' : trimmed;
};

const pathToPage: Record<string, Page> = Object.entries(pageToPath).reduce<Record<string, Page>>((acc, [page, path]) => {
  acc[normalizePath(path)] = page as Page;
  return acc;
}, {});

const pageTitles: Record<Page, string> = {
  home: 'LineHero 無盡冒險 | 首款 LINE 聊天室文字冒險 MMORPG',
  privacy: '隱私權政策 | LineHero 無盡冒險',
  terms: '服務條款 | LineHero 無盡冒險',
  refund: '退款政策 | LineHero 無盡冒險',
  'game-intro-line': 'LINE 玩法介紹 | LineHero 無盡冒險',
  'game-intro-web': 'Web 玩法介紹 | LineHero 無盡冒險',
  shop: '商城與儲值 | LineHero 無盡冒險',
  'office-games': '辦公室玩家友善 | LineHero 無盡冒險',
  announcements: '遊戲公告 | LineHero 無盡冒險',
  'faction-intro': '陣營介紹 | LineHero 無盡冒險',
};

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    const initialPath = normalizePath(window.location.pathname);
    const initialPage = pathToPage[initialPath] || 'home';
    setCurrentPage(initialPage);
    if (initialPage !== 'home') {
      window.scrollTo(0, 0);
    }
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      const path = normalizePath(window.location.pathname);
      const page = pathToPage[path] || 'home';
      setCurrentPage(page);
      if (page !== 'home') {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    document.title = pageTitles[currentPage] || pageTitles.home;
  }, [currentPage]);

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    const nextPath = pageToPath[page] || '/';
    const currentPath = normalizePath(window.location.pathname);
    if (normalizePath(nextPath) !== currentPath) {
      window.history.pushState({ page }, '', nextPath);
    }
    if (page !== 'home') {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  };

  const renderPage = (() => {
    switch (currentPage) {
      case 'privacy':
        return <LegalPage type="privacy" onBack={() => handleNavigate('home')} />;
      case 'terms':
        return <LegalPage type="terms" onBack={() => handleNavigate('home')} />;
      case 'refund':
        return <LegalPage type="refund" onBack={() => handleNavigate('home')} />;
      case 'game-intro-line':
        return <GameIntroLinePage />;
      case 'game-intro-web':
        return <GameIntroWebPage />;
      case 'shop':
        return <ShopPage />;
      case 'office-games':
        return <OfficeGamesPage />;
      case 'announcements':
        return <AnnouncementsPage />;
      case 'faction-intro':
        return <FactionIntroPage />;
      default:
        return (
          <>
            <Hero />
            <Features />
            <Characters />
            <Gallery />

            {/* Call to Action Section - LINE Specific */}
            <section className="py-24 bg-gradient-to-t from-hero-dark to-gray-900 relative overflow-hidden border-t border-white/10">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605806616949-1e87b487bc2a?q=80&w=1974&auto=format&fit=crop')] opacity-10 bg-cover bg-center"></div>
              <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
                <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                  準備好開始冒險了嗎？<br />
                  <span className="text-hero-gold">先在 LINE 上集合</span>
                </h2>
                <p className="text-gray-300 mb-10 text-lg max-w-2xl mx-auto font-medium">
                  不用下載龐大安裝包，也不需註冊繁瑣帳號。
                  <br />
                  加入官方帳號、掃描 QR Code，隨時隨地直接出戰。
                </p>

                <div className="flex flex-col md:flex-row gap-8 justify-center items-center bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
                  {/* QR Code Block */}
                  <div className="bg-white p-4 rounded-xl shadow-xl">
                     <img 
                       src="https://qr-official.line.me/gs/M_765llgvq_GW.png?oat_content=qr" 
                       alt="Line Hero QR Code" 
                       className="w-40 h-40"
                     />
                     <p className="text-black text-xs font-bold mt-2 uppercase tracking-wider">Scan to Play</p>
                  </div>

                  {/* Buttons Block */}
                  <div className="flex flex-col gap-4 w-full md:w-auto">
                    <a href="https://lin.ee/Isv2392o" target="_blank" rel="noreferrer" className="w-full md:w-auto bg-[#06C755] hover:bg-[#05b64d] text-white px-8 py-4 rounded-xl flex items-center justify-center gap-4 transition-all transform hover:scale-105 shadow-2xl font-bold text-xl min-w-[280px]">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21.5 12a9.5 9.5 0 1 1-19 0 9.5 9.5 0 0 1 19 0zM12 17.5c4.5 0 8-3 8-6.5s-3.5-6.5-8-6.5-8 3-8 6.5 3.5 6.5 8 6.5z" />
                        <path d="M10 15.5l6-3.5-6-3.5v7z" fill="white"/>
                      </svg>
                      <div>
                        <div className="text-xs font-medium opacity-80 text-left">立即加入好友</div>
                        <div className="text-lg">開啟 LINE 冒險</div>
                      </div>
                    </a>
                    <a href="https://wiki.linehero.tw" target="_blank" rel="noreferrer" className="w-full md:w-auto bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-xl flex items-center justify-center gap-3 transition-all border border-gray-600 hover:border-hero-gold font-bold text-xl min-w-[280px] group">
                      <svg className="w-6 h-6 group-hover:text-hero-gold transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      先看攻略 Wiki
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </>
        );
    }
  })();

  return (
    <div className="bg-hero-dark min-h-screen text-white font-sans selection:bg-hero-gold selection:text-black">
      <Navbar onNavigate={handleNavigate} />
      <main>{renderPage}</main>
      <Footer onNavigate={handleNavigate} />
      {/* <OracleChat /> */}
    </div>
  );
};

export default App;
