import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-hero-dark pb-12 md:pb-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://mumu.tw/linehero/official_web/ogimage.png" 
          alt="Line Hero Fantasy World" 
          className="w-full h-full object-cover opacity-30 scale-110 animate-pulse-slow"
        />
        {/* Darker gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-hero-dark/90 via-hero-dark/60 to-hero-dark/90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.03),transparent_70%)]"></div>
      </div>

      {/* Bottom Gradient Transition to Next Section (Solves the split feeling) */}
      <div className="absolute bottom-0 left-0 w-full h-32 md:h-48 bg-gradient-to-b from-transparent via-hero-panel/50 to-hero-panel z-20 pointer-events-none"></div>

      {/* Content - Increased top margin for better spacing */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-32 md:mt-40 flex flex-col items-center w-full">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 mb-6 md:mb-8 px-4 md:px-6 py-1.5 md:py-2 border border-hero-gold/40 rounded-full bg-black/60 backdrop-blur-md shadow-[0_0_20px_rgba(255,215,0,0.05)] animate-float relative z-30">
          <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-hero-green animate-pulse"></span>
          <span className="text-hero-gold text-xs md:text-sm font-bold tracking-widest uppercase">
            LINE 聊天室窗直接遊玩 · 免安裝
          </span>
        </div>
        
        <h1 className="mb-4 text-white tracking-wide leading-tight drop-shadow-2xl flex flex-col items-center w-full">
          {/* English Part */}
          <span className="font-en-display text-5xl sm:text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-hero-gold to-[#b8860b] filter drop-shadow-lg mb-1 md:mb-2">
            LineHero
          </span>
          {/* Chinese Part */}
          <span className="text-3xl sm:text-4xl md:text-7xl font-black text-white tracking-wider mt-1 md:mt-2 font-sans">
            無盡冒險
          </span>
        </h1>

        <p className="text-sm sm:text-base md:text-xl text-gray-300 my-4 md:my-8 max-w-xl mx-auto font-light leading-relaxed px-2">
          <span className="block mb-1 md:inline md:mb-0">首款 <span className="text-hero-green font-bold">LINE</span> 文字冒險 MMORPG。</span>
          <span className="hidden md:inline"> </span>
          <span className="block">隨時隨地，開啟聊天室窗即可冒險。</span>
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center items-center w-full max-w-lg mx-auto mt-4 sm:mt-6 px-4 sm:px-0" id="play">
          <a 
            href="https://lin.ee/Isv2392o" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-1 group relative px-6 py-3.5 md:px-8 md:py-4 bg-[#06C755] text-white font-bold text-base md:text-lg rounded-xl hover:bg-[#05b64d] transition-all transform hover:-translate-y-1 shadow-[0_4px_20px_rgba(6,199,85,0.3)] overflow-hidden flex items-center justify-center gap-3"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:animate-shine"></div>
            {/* Clean LINE Icon */}
            <svg className="w-6 h-6 md:w-7 md:h-7 flex-shrink-0 fill-current" viewBox="0 0 24 24">
                <path d="M20.4 10.5c0-4.6-4.2-8.4-9.4-8.4-5.2 0-9.4 3.8-9.4 8.4 0 4.1 3.3 7.6 7.9 8.3.3.1.7.3.8.7.1.2.1.5-.1.7l-.5.4-.1.1-.1.1-1.7.9c-.3.1-.5.4-.4.7.1.3.4.5.7.5h.1c4.1 0 8-2.8 9.6-6.5.4-1 .6-2.1.6-3.2z"/>
                <path d="M16.3 11.8h-6c-.4 0-.7-.3-.7-.7V7.4c0-.4.3-.7.7-.7s.7.3.7.7v3h5.3c.4 0 .7.3.7.7s-.3.7-.7.7z" fill="white"/> 
            </svg>
            <span>立即加入冒險</span>
          </a>
          
          <a 
            href="https://wiki.linehero.tw" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-1 px-6 py-3.5 md:px-8 md:py-4 border border-white/10 bg-white/5 backdrop-blur-md text-gray-200 font-bold text-base md:text-lg rounded-xl hover:bg-white/10 hover:text-white hover:border-hero-gold/50 transition-all flex items-center justify-center gap-2 group"
          >
            <svg className="w-5 h-5 flex-shrink-0 group-hover:text-hero-gold transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <span>攻略 Wiki</span>
          </a>
        </div>

        {/* Floating stats */}
        <div className="mt-8 md:mt-20 w-full px-2 md:px-0 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 border-t border-white/5 pt-6 md:pt-8 bg-black/30 md:bg-black/20 rounded-2xl p-4 md:p-6 backdrop-blur-sm">
            {[
              { label: "累積冒險者", value: "2M+" },
              { label: "裝備總數", value: "50K+" },
              { label: "公會數量", value: "1.2K+" },
              { label: "支援平台", value: "LINE / Web" },
            ].map((stat) => (
              <div key={stat.label} className="text-center flex flex-col items-center justify-center p-2 rounded-lg bg-white/5 md:bg-transparent">
                <div className="font-en-display text-xl md:text-3xl font-bold text-hero-gold mb-1 drop-shadow-md">{stat.value}</div>
                <div className="text-[10px] md:text-xs text-gray-400 font-bold tracking-wider opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;