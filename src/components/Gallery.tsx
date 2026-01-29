import React from 'react';
import { trackCtaClick } from '../services/analytics';

const Gallery: React.FC = () => {
  // Replace these URLs with your actual screenshots
  // 這裡可以替換成您想要上傳的遊戲截圖連結
  const screenshots = [
    {
      id: 1,
      url: "https://mumu.tw/linehero/official_web/game_view/game_view_battle.jpg",
      title: "Flex 戰鬥介面"
    },
    {
      id: 2,
      url: "https://mumu.tw/linehero/official_web/game_view/game_view_trade.jpg",
      title: "自由交易"
    },
    {
      id: 3,
      url: "https://mumu.tw/linehero/official_web/game_view/game_view_bag.jpg",
      title: "背包與道具"
    },
    {
      id: 4,
      url: "https://mumu.tw/linehero/official_web/game_view/game_view_skill.jpg", // 佔位圖
      title: "技能系統"
    },
    {
      id: 5,
      url: "https://mumu.tw/linehero/official_web/game_view/game_view_enhance.jpg", // 佔位圖
      title: "裝備進階"
    },
    {
      id: 6,
      url: "https://mumu.tw/linehero/official_web/game_view/game_view_pet.jpg", // 佔位圖
      title: "夥伴系統"
    }
  ];

  return (
    <section id="gallery" className="py-16 md:py-24 relative bg-gradient-to-b from-hero-dark to-black -mt-1 section-divider">
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
            精緻的 LINE Flex 介面與 Web 管理後台，帶給您最流暢的冒險體驗。
          </p>
        </div>

        {/* Grid with 3D Phone Mockups */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {screenshots.map((shot) => (
            <div key={shot.id} className="group perspective-1000">
              <div className="relative mx-auto w-full max-w-[280px] aspect-[9/19] bg-black rounded-[36px] border-[6px] border-gray-800 shadow-xl transform transition-all duration-500 group-hover:rotate-y-6 group-hover:scale-105 group-hover:shadow-[0_0_40px_rgba(255,215,0,0.18)]">
                {/* Phone Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-5 bg-gray-800 rounded-b-xl z-20"></div>
                
                {/* Screen Content */}
                <div className="absolute inset-0 rounded-[30px] overflow-hidden bg-gray-900">
                    <img 
                      src={shot.url} 
                      alt={shot.title} 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Title on Hover */}
                    <div className="absolute bottom-6 left-0 w-full text-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-10 px-4">
                        <span className="inline-block px-3 py-1 bg-hero-gold text-black text-xs font-bold rounded mb-2">LINE UI</span>
                        <h3 className="text-white font-bold text-lg drop-shadow-md">{shot.title}</h3>
                    </div>
                </div>

                {/* Glass Reflection */}
                <div className="absolute inset-0 rounded-[36px] pointer-events-none bg-gradient-to-tr from-white/10 to-transparent opacity-40 z-30"></div>
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
