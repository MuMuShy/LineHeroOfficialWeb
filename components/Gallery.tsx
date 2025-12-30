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
    <section id="gallery" className="py-16 md:py-24 relative bg-black -mt-1 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-grid-white opacity-[0.03] pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-hero-dark to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block px-3 py-1 mb-4 border border-hero-gold/30 rounded-full bg-hero-gold/5 backdrop-blur-sm">
            <span className="text-hero-gold text-xs font-bold tracking-[0.2em] uppercase">Visual Showcase</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            遊戲<span className="text-transparent bg-clip-text bg-gradient-to-r from-hero-gold to-yellow-200">畫面</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-hero-gold/50"></div>
            <div className="w-2 h-2 rotate-45 border border-hero-gold/50 bg-hero-gold/20"></div>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-hero-gold/50"></div>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            精緻的 LINE Flex 介面與 Web 管理後台，<br className="hidden md:block" />帶給您最流暢的冒險體驗。
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {screenshots.map((shot) => (
            <div
              key={shot.id}
              className="group relative aspect-[3/5] md:aspect-[9/16] overflow-hidden rounded-xl bg-gray-900/50 glass-panel transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]"
            >
              {/* Image Container */}
              <div className="absolute inset-0.5 rounded-[10px] overflow-hidden">
                <img
                  src={shot.url}
                  alt={shot.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>

                {/* Tech Overlay Lines */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-hero-gold/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-hero-gold/50 to-transparent"></div>
                </div>
              </div>

              {/* Content (visible on hover) */}
              <div className="absolute bottom-0 left-0 w-full p-4 md:p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-2 py-0.5 bg-hero-gold text-black text-[10px] font-bold rounded mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  SCREENSHOT
                </span>
                <h3 className="text-white font-bold text-sm md:text-lg drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] group-hover:text-hero-gold transition-colors">
                  {shot.title}
                </h3>
              </div>

              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-hero-gold/0 rounded-tl-xl group-hover:border-hero-gold/50 transition-all duration-300"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-hero-gold/0 rounded-br-xl group-hover:border-hero-gold/50 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom Decoration */}
        <div className="mt-16 flex justify-center">
          <a
            href="https://lin.ee/Isv2392o"
            target="_blank"
            rel="noreferrer"
            className="group relative px-8 py-3 bg-transparent overflow-hidden rounded-full"
          >
            <div className="absolute inset-0 border border-white/20 rounded-full group-hover:border-hero-gold/50 transition-colors"></div>
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span className="relative flex items-center gap-2 text-sm text-gray-400 group-hover:text-hero-gold transition-colors">
              <span>查看更多遊戲截圖</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;