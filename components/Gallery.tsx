import React from 'react';

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
      title: "技能技統"
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
    <section id="gallery" className="py-16 md:py-24 relative bg-gradient-to-b from-hero-dark to-black -mt-1">
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

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {screenshots.map((shot) => (
            <div 
              key={shot.id} 
              className="group relative aspect-[3/5] md:aspect-[9/16] overflow-hidden rounded-xl bg-gray-900 border border-white/10 shadow-lg transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,215,0,0.2)] hover:border-hero-gold/50"
            >
              {/* Image */}
              <img 
                src={shot.url} 
                alt={shot.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
              
              {/* Title (visible on hover) */}
              <div className="absolute bottom-0 left-0 w-full p-4 translate-y-2 opacity-80 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="inline-block px-3 py-1 bg-hero-gold text-black text-xs font-bold rounded mb-1 transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all delay-100">
                  Screenshot
                </span>
                <h3 className="text-white font-bold text-sm md:text-lg drop-shadow-lg">{shot.title}</h3>
              </div>
              
              {/* Border Glow Effect */}
              <div className="absolute inset-0 border-2 border-hero-gold/0 rounded-xl group-hover:border-hero-gold/50 transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
        
        {/* Bottom Decoration */}
        <div className="mt-12 flex justify-center">
           <a href="https://lin.ee/Isv2392o" target="_blank" rel="noreferrer" className="text-sm text-gray-500 hover:text-hero-gold flex items-center gap-2 transition-colors">
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