import React from 'react';
import { trackCtaClick } from '../services/analytics';

const Gallery: React.FC = () => {
  // Replace these URLs with your actual screenshots
  // 這裡可以替換成您想要上傳的遊戲截圖連結
  const screenshots = [
    {
      id: 1,
      url: "/images/screenshots/linehero-screenshot-1.jpg",
      title: "仙鶴騎士對戰"
    },
    {
      id: 2,
      url: "/images/screenshots/linehero-screenshot-2.jpg",
      title: "傳奇冒險者養成"
    },
    {
      id: 3,
      url: "/images/screenshots/linehero-screenshot-3.jpg",
      title: "天龍戰士對戰"
    },
    {
      id: 4,
      url: "/images/screenshots/linehero-screenshot-4.jpg",
      title: "戰鬥結算與技能紀錄"
    },
    {
      id: 5,
      url: "/images/screenshots/linehero-screenshot-5.jpg",
      title: "鐵匠鋪詞綴重鑄"
    },
    {
      id: 6,
      url: "/images/screenshots/linehero-screenshot-6.jpg",
      title: "PVP 對戰"
    },
    {
      id: 7,
      url: "/images/screenshots/linehero-screenshot-7.jpg",
      title: "副本 Boss 掉落"
    },
    {
      id: 8,
      url: "/images/screenshots/linehero-screenshot-8.jpg",
      title: "圖鑑與怪物資訊"
    }
  ];

  return (
    <section id="gallery" className="py-16 md:py-24 relative bg-gradient-to-b from-hero-dark to-black -mt-1 section-divider overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-hero-gold/10 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-hero-secondary/15 rounded-full blur-[120px]"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">
            遊戲<span className="text-hero-gold">畫面</span>
          </h2>
          <div className="h-1 w-16 md:w-24 bg-gradient-to-r from-transparent via-hero-gold to-transparent mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            真實遊戲截圖：角色養成、戰鬥結算與技能施放，直接在 LINE 聊天室暢玩。
          </p>
        </div>

        {/* Featured row (more symmetric + eye-catching) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-10">
          {screenshots.slice(0, 2).map((shot) => (
            <div key={shot.id} className="group perspective-1000">
              <div className="relative mx-auto w-full max-w-[420px] aspect-[10/18] bg-black rounded-[40px] border-[6px] border-gray-800 shadow-2xl transform transition-all duration-500 group-hover:rotate-y-3 group-hover:scale-[1.02] group-hover:shadow-[0_0_60px_rgba(255,215,0,0.22)]">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-28 h-5 bg-gray-800 rounded-b-xl z-20"></div>
                <div className="absolute inset-0 rounded-[34px] overflow-hidden bg-gray-900">
                  <img src={shot.url} alt={shot.title} className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-6 left-0 w-full text-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-10 px-4">
                    <span className="inline-block px-3 py-1 bg-hero-gold text-black text-xs font-bold rounded mb-2">LINE UI</span>
                    <h3 className="text-white font-bold text-lg drop-shadow-md">{shot.title}</h3>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-[40px] pointer-events-none bg-gradient-to-tr from-white/10 to-transparent opacity-40 z-30"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Grid with 3D Phone Mockups */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {screenshots.slice(2).map((shot) => (
            <div key={shot.id} className="group perspective-1000">
              <div className="relative mx-auto w-full max-w-[240px] aspect-[9/19] bg-black rounded-[32px] border-[6px] border-gray-800 shadow-xl transform transition-all duration-500 group-hover:rotate-y-6 group-hover:scale-105 group-hover:shadow-[0_0_40px_rgba(255,215,0,0.18)]">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-4 bg-gray-800 rounded-b-xl z-20"></div>
                <div className="absolute inset-0 rounded-[26px] overflow-hidden bg-gray-900">
                  <img src={shot.url} alt={shot.title} className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-0 w-full text-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-10 px-3">
                    <span className="inline-block px-2 py-1 bg-hero-gold text-black text-[10px] font-bold rounded mb-2">LINE UI</span>
                    <h3 className="text-white font-bold text-sm drop-shadow-md">{shot.title}</h3>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-[32px] pointer-events-none bg-gradient-to-tr from-white/10 to-transparent opacity-40 z-30"></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom Decoration */}
        <div className="mt-16 flex justify-center">
          <a
            href="https://lin.ee/3JlUhak"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-gray-300 hover:text-hero-gold flex items-center gap-2 transition-colors px-6 py-3 rounded-full border border-white/10 bg-white/5 hover:border-hero-gold/60"
            onClick={() => trackCtaClick('查看更多遊戲截圖', 'gallery', 'https://lin.ee/3JlUhak')}
          >
            <span>查看更多遊戲截圖</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
