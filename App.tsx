import React, { useEffect, useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Characters from './components/Characters';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import SEOHead from './components/SEOHead';
import { GameIntroWebPage, GameIntroLinePage, ShopPage, OfficeGamesPage, FeatureHubPage, AnnouncementsPage, V2UpdatePage } from './components/StaticPages';
import RaidTeamFeaturePage from './components/feature-pages/RaidTeamFeaturePage';
import RegionBossFeaturePage from './components/feature-pages/RegionBossFeaturePage';
import BlacksmithFeaturePage from './components/feature-pages/BlacksmithFeaturePage';
import InventoryFeaturePage from './components/feature-pages/InventoryFeaturePage';
import SocialFeaturePage from './components/feature-pages/SocialFeaturePage';
import FactionFeaturePage from './components/feature-pages/FactionFeaturePage';
import RankingPowerPage from './components/feature-pages/RankingPowerPage';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [targetSection, setTargetSection] = useState<string | null>(null);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (event.state && event.state.page) {
        setCurrentPage(event.state.page);
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handlePageNav = (pageId: Page) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const path = pageId === 'home' ? '/' : pageId === 'update-v2' ? '/v2.0' : `/${pageId}`;
    window.history.pushState({ page: pageId }, '', path);
  };

  const handleSectionNav = (sectionId: string) => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTargetSection(sectionId);
      window.history.pushState({ page: 'home' }, '', '/');
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Handle scrolling to section after page change
  useEffect(() => {
    if (currentPage === 'home' && targetSection) {
      setTimeout(() => {
        const element = document.getElementById(targetSection);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        setTargetSection(null);
      }, 100); // Small delay to ensure render
    }
  }, [currentPage, targetSection]);

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <SEOHead />
            <Hero />
            <Features />
            <Characters />
            <Gallery />
            {/* Call to Action Section - LINE Specific */}
            <section className="py-24 bg-gradient-to-t from-hero-dark to-gray-900 relative overflow-hidden border-t border-white/10">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605806616949-1e87b487bc2a?q=80&w=1974&auto=format&fit=crop')] opacity-10 bg-cover bg-center"></div>
              <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
                <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                  準備好體驗免下載的 LINE 即玩 RPG 嗎？<br />
                  <span className="text-hero-gold text-shadow-gold">打開聊天視窗直接開戰</span>
                </h2>
                <p className="text-gray-300 mb-10 text-lg max-w-2xl mx-auto font-medium">
                  免下載、免安裝、免註冊，只需 1 秒。
                  <br />
                  加入官方帳號、掃描 QR Code，您的<span className="text-white font-bold">聊天視窗 RPG</span> 冒險即刻開始。
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
                    <a href="https://lin.ee/Isv2392o" target="_blank" rel="noreferrer" className="w-full md:w-auto bg-[#06C755] hover:bg-[#05b64d] text-white px-8 py-4 rounded-xl flex items-center justify-center gap-4 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(6,199,85,0.4)] font-bold text-xl min-w-[280px] group relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:animate-shine-fast"></div>
                      <svg className="w-8 h-8 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21.5 12a9.5 9.5 0 1 1-19 0 9.5 9.5 0 0 1 19 0zM12 17.5c4.5 0 8-3 8-6.5s-3.5-6.5-8-6.5-8 3-8 6.5 3.5 6.5 8 6.5z" />
                        <path d="M10 15.5l6-3.5-6-3.5v7z" fill="white" />
                      </svg>
                      <div className="relative z-10">
                        <div className="text-xs font-medium opacity-80 text-left">立即加入好友</div>
                        <div className="text-lg">開啟 LINE 冒險</div>
                      </div>
                    </a>
                    <a href="https://explore.linehero.tw" target="_blank" rel="noreferrer" className="w-full md:w-auto bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl flex items-center justify-center gap-4 transition-all transform hover:scale-105 shadow-2xl font-bold text-xl min-w-[280px]">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      <div>
                        <div className="text-xs font-medium opacity-80 text-left">Roguelike 探索 · 搶先體驗</div>
                        <div className="text-lg">探索模式</div>
                      </div>
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
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
      case 'game-intro-web':
        return (
          <>
            <SEOHead
              title="Web版遊戲介紹"
              description="了解 LINE Hero 網頁版的強大功能，使用大螢幕更輕鬆管理你的角色與背包。"
            />
            <GameIntroWebPage onBack={() => handlePageNav('home')} />
          </>
        );
      case 'game-intro-line':
        return (
          <>
            <SEOHead
              title="LINE版玩法介紹"
              description="LINE 聊天室就是你的遊戲視窗！指令操作、快速戰鬥，最適合上班族的偷閒神器。"
            />
            <GameIntroLinePage onBack={() => handlePageNav('home')} />
          </>
        );
      case 'shop':
        return (
          <>
            <SEOHead
              title="遊戲商城"
              description="查看 LINE Hero 最新熱賣商品、超值禮包與限定造型。"
            />
            <ShopPage onBack={() => handlePageNav('home')} />
          </>
        );
      case 'office-games':
        return (
          <>
            <SEOHead
              title="辦公室小遊戲"
              description="上班累了嗎？來點輕鬆的小遊戲，放鬆心情再出發。"
            />
            <OfficeGamesPage onBack={() => handlePageNav('home')} />
          </>
        );
      case 'faction-intro':
        return (
          <>
            <SEOHead
              title="陣營介紹"
              description="兩大陣營對立，你選擇加入哪一方？參與陣營戰，為榮耀而戰！"
            />
            <FactionFeaturePage />
          </>
        );
      case 'announcements':
        return (
          <>
            <SEOHead
              title="最新公告"
              description="掌握 LINE Hero 第一手遊戲資訊、更新內容與活動預告。"
            />
            <AnnouncementsPage onNavigate={handlePageNav} />
          </>
        );
      case 'update-v2':
        return (
          <>
            <SEOHead
              title="LineHero v2.0 大型更新公告"
              description="區域 Boss、討伐小隊、副本挑戰、星力強化等 2.0 版本更新完整說明。"
            />
            <V2UpdatePage />
          </>
        );
      case 'features':
        return (
          <>
            <SEOHead
              title="功能介紹"
              description="LineHero 系統功能總覽，組隊副本、區域 Boss、鐵匠鋪與更多玩法教學入口。"
            />
            <FeatureHubPage onNavigate={handlePageNav} />
          </>
        );
      case 'feature-raid-team':
        return (
          <>
            <SEOHead
              title="組隊副本教學"
              description="組隊副本玩法、隊伍規則與副本商店說明，掌握 LineHero 協作挑戰流程。"
            />
            <RaidTeamFeaturePage />
          </>
        );
      case 'feature-region-boss':
        return (
          <>
            <SEOHead
              title="區域 Boss 教學"
              description="區域 Boss 出現條件、討伐收益與區域圖騰升級說明。"
            />
            <RegionBossFeaturePage />
          </>
        );
      case 'feature-blacksmith':
        return (
          <>
            <SEOHead
              title="鐵匠鋪教學"
              description="裝備強化、精煉、進階、洗練、星力與精煉轉移完整說明。"
            />
            <BlacksmithFeaturePage />
          </>
        );
      case 'feature-inventory':
        return (
          <>
            <SEOHead
              title="背包與裝備教學"
              description="裝備管理、材料整理與外觀收藏指南，提升配裝效率。"
            />
            <InventoryFeaturePage />
          </>
        );
      case 'feature-social':
        return (
          <>
            <SEOHead
              title="社交與酒館教學"
              description="社交看板與酒館小遊戲玩法介紹。"
            />
            <SocialFeaturePage />
          </>
        );
      case 'ranking-power':
        return (
          <>
            <SEOHead
              title="戰力排行榜"
              description="LineHero 官方戰力排行榜，掌握最新頂尖冒險者戰力排行。"
            />
            <RankingPowerPage />
          </>
        );
      default:
        return (
          <>
            <SEOHead />
            <Hero />
            <Features />
            <Characters />
            <Gallery />
          </>
        );
    }
  };

  return (
    <HelmetProvider>
      <div className="bg-hero-dark min-h-screen text-white font-sans selection:bg-hero-neon selection:text-black">
        <Navbar onNavigate={handlePageNav} />
        <main>
          {renderContent()}
        </main>
        <Footer onNavigate={handlePageNav} />
        <ScrollToTop />
      </div>
    </HelmetProvider>
  );
};

export default App;
