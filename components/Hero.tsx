import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-hero-dark pb-12 md:pb-20">
      {/* Dynamic Background with Grid and Noise */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,243,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,243,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 perspective-grid"></div>
        <img
          src="https://mumu.tw/linehero/official_web/ogimage.png"
          alt="LineHero Fantasy World"
          className="w-full h-full object-cover opacity-20 scale-110 animate-pulse-slow mix-blend-screen"
          fetchPriority="high"
          decoding="async"
        />
        {/* Vignette & Atmospheric Fog */}
        <div className="absolute inset-0 bg-gradient-to-b from-hero-dark via-transparent to-hero-dark"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#111216_90%)]"></div>

        {/* Animated Particles/Glows (CSS only) */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-hero-magic/20 rounded-full blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-hero-neon/10 rounded-full blur-[80px] animate-float"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto mt-20 md:mt-32 flex flex-col items-center w-full">

        {/* Floating Holo-Badge */}
        <div className="inline-flex items-center gap-3 mb-8 px-6 py-2 border border-hero-neon/30 rounded-full bg-black/40 backdrop-blur-md shadow-[0_0_15px_rgba(0,243,255,0.1)] animate-float">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-hero-green opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-hero-green"></span>
          </span>
          <span className="text-hero-neon text-xs md:text-sm font-bold tracking-[0.2em] uppercase font-mono">
            System Online • LINE 聊天室直接遊玩
          </span>
        </div>

        {/* Main Title with Metallic/Runic Effect */}
        <h1 className="mb-6 relative flex flex-col items-center w-full z-20">
          <span className="font-en-display text-6xl sm:text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500 filter drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)] tracking-tighter mb-2">
            LineHero
          </span>
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 w-full h-full bg-hero-gold/20 blur-[60px] -z-10 opacity-60"></span>
          <span className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-[0.1em] mt-2 relative">
            <span className="absolute inset-0 text-hero-gold blur-sm opacity-50" aria-hidden="true">無盡冒險</span>
            <span className="relative bg-gradient-to-r from-hero-gold via-yellow-200 to-hero-gold bg-clip-text text-transparent">無盡冒險</span>
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-300 my-8 max-w-2xl mx-auto font-medium leading-relaxed px-4 py-4 rounded-xl border border-white/5 bg-black/20 backdrop-blur-sm">
          <span className="block mb-2 text-hero-neon font-mono text-sm tracking-widest opacity-80">// MISSION BRIEFING</span>
          首款 <span className="text-white font-bold">LINE</span> 聊天室文字冒險 MMORPG。<br />
          免安裝、免註冊，隨時隨地，開啟對話視窗即可戰鬥。
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center w-full max-w-4xl mx-auto mt-4 sm:mt-8">

          {/* Primary CTA */}
          <a
            href="https://lin.ee/Isv2392o"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full sm:w-auto min-w-[240px]"
          >
            <div className="absolute inset-0 bg-hero-green rounded-xl blur opacity-40 group-hover:opacity-75 transition-opacity duration-300 animate-pulse"></div>
            <div className="relative bg-[#06C755] hover:bg-[#05b64d] text-white px-8 py-5 rounded-xl clip-path-polygon flex items-center justify-center gap-3 transition-all transform group-hover:translate-y-[-2px] group-hover:shadow-[0_0_30px_rgba(6,199,85,0.4)] border-t border-white/20">
              <span className="text-2xl animate-bounce">⚔️</span>
              <div className="text-left">
                <div className="text-[10px] font-bold uppercase tracking-wider opacity-80 text-green-900">Start Game</div>
                <div className="text-xl font-black tracking-wide text-shadow-sm">立即加入冒險</div>
              </div>
            </div>
          </a>

          {/* Secondary CTA */}
          <a
            href="https://wiki.linehero.tw"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full sm:w-auto min-w-[200px]"
          >
            <div className="absolute inset-0 bg-blue-500 rounded-xl blur opacity-20 group-hover:opacity-50 transition-opacity duration-300"></div>
            <div className="relative bg-hero-panel hover:bg-hero-panel/80 text-gray-200 px-8 py-5 rounded-xl border border-white/10 hover:border-hero-neon/50 flex items-center justify-center gap-3 transition-all">
              <svg className="w-6 h-6 text-hero-neon group-hover:rotate-12 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <div className="text-left">
                <div className="text-[10px] font-bold uppercase tracking-wider opacity-60">Database</div>
                <div className="text-lg font-bold tracking-wide">攻略 Wiki</div>
              </div>
            </div>
          </a>
        </div>

        {/* HUD Stats Panel */}
        <div className="mt-16 md:mt-24 w-full px-2">
          <div className="relative max-w-4xl mx-auto">
            {/* Tech Decoration Lines */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-hero-gold/50 rounded-tl-lg"></div>
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-hero-gold/50 rounded-tr-lg"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-hero-gold/50 rounded-bl-lg"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-hero-gold/50 rounded-br-lg"></div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-black/50 backdrop-blur-md border border-white/5 p-6 md:p-8 rounded-lg relative overflow-hidden">
              {/* Scanline Effect */}
              <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] opacity-20 pointer-events-none"></div>

              {[
                { label: "Active Players", sub: "累積冒險者", value: "3K+", color: "text-hero-neon" },
                { label: "Total Items", sub: "裝備總數", value: "50K+", color: "text-hero-gold" },
                { label: "Battles", sub: "戰鬥場次", value: "10M+", color: "text-hero-crimson" },
                { label: "Platform", sub: "支援平台", value: "LINE / Web", color: "text-white" },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center justify-center p-3 relative group hover:bg-white/5 transition-colors rounded">
                  <div className={`font-en-display text-2xl md:text-4xl font-black ${stat.color} mb-1 drop-shadow-md group-hover:scale-110 transition-transform`}>
                    {stat.value}
                  </div>
                  <div className="text-[10px] uppercase text-gray-500 font-bold tracking-widest">{stat.label}</div>
                  <div className="text-xs text-gray-400 font-medium mt-0.5">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
