import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-dark pt-20 pb-12 lg:pt-0">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://mumu.tw/linehero/official_web/ogimage.png"
          alt="Line Hero Fantasy World"
          className="absolute inset-0 w-full h-full object-cover opacity-20 scale-105 animate-pulse-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-hero-dark via-hero-dark/90 to-hero-dark"></div>

        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(6,199,85,0.08),transparent_50%)] animate-pulse-slow"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-hero-secondary/10 rounded-full blur-[100px] animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-hero-gold/5 rounded-full blur-[80px] animate-float-fast"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

        {/* Left Column: Text & CTA */}
        <div className="flex-1 text-center lg:text-left pt-10 lg:pt-0">
          {/* SEO: Primary H1 - 視覺隱藏但對 SEO 友善 */}
          <h1 className="sr-only">
            LINE Hero 無盡冒險｜免下載安裝 LINE 即玩 RPG｜聊天視窗直接開戰的線上文字 RPG
          </h1>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/5 border border-hero-green/30 backdrop-blur-md animate-fade-in-up">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-hero-neon-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-hero-green"></span>
            </span>
            <span className="text-hero-neon-green text-xs md:text-sm font-bold tracking-wider uppercase">
              免下載安裝 · LINE 即玩 RPG
            </span>
          </div>

          {/* Main Title - 視覺用 div 保持樣式，語意已在 sr-only h1 */}
          <div className="text-5xl sm:text-6xl lg:text-8xl font-black text-white leading-tight mb-6 tracking-tight" role="presentation" aria-hidden="true">
            <span className="block font-en-display text-transparent bg-clip-text bg-gradient-to-r from-white via-hero-gold-glow to-hero-gold animate-shine bg-[length:200%_auto]">
              LineHero
            </span>
            <span className="block text-4xl sm:text-5xl lg:text-7xl mt-2 relative">
              <span className="absolute inset-0 text-hero-neon-green blur-[2px] opacity-70 animate-glitch">無盡冒險</span>
              <span className="relative text-white">無盡冒險</span>
            </span>
          </div>

          <p className="text-gray-300 text-lg sm:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
            <strong className="text-white">免下載、免安裝</strong>，打開 LINE 就能玩的 RPG！
            <br className="hidden sm:block" />
            結合 <span className="text-hero-neon-green font-bold">LIFF 視覺技術</span>，在聊天視窗體驗精美介面與即時戰鬥。
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="https://lin.ee/Isv2392o"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-[#06C755] text-white font-bold text-lg rounded-xl overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(6,199,85,0.4)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:animate-shine-fast"></div>
              <div className="relative flex items-center justify-center gap-3">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M20.4 10.5c0-4.6-4.2-8.4-9.4-8.4-5.2 0-9.4 3.8-9.4 8.4 0 4.1 3.3 7.6 7.9 8.3.3.1.7.3.8.7.1.2.1.5-.1.7l-.5.4-.1.1-.1.1-1.7.9c-.3.1-.5.4-.4.7.1.3.4.5.7.5h.1c4.1 0 8-2.8 9.6-6.5.4-1 .6-2.1.6-3.2z" />
                  <path d="M16.3 11.8h-6c-.4 0-.7-.3-.7-.7V7.4c0-.4.3-.7.7-.7s.7.3.7.7v3h5.3c.4 0 .7.3.7.7s-.3.7-.7.7z" fill="white" />
                </svg>
                <span>立即開始 (Free)</span>
              </div>
            </a>

            <a
              href="https://wiki.linehero.tw"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold text-lg rounded-xl hover:bg-white/10 hover:border-hero-gold/50 transition-all flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              <span>遊戲攻略</span>
            </a>
          </div>

          {/* Stats */}
          <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 text-sm font-mono text-gray-500">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              線上玩家: 1,204
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
              今日戰鬥: 45,201
            </div>
          </div>
        </div>

        {/* Right Column: 3D Phone Mockup */}
        <div className="flex-1 w-full max-w-md lg:max-w-none relative perspective-1000">
          <div className="relative mx-auto w-[300px] h-[600px] bg-black rounded-[40px] border-[8px] border-gray-800 shadow-2xl transform rotate-y-12 rotate-x-6 hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700 ease-out animate-float">
            {/* Phone Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-xl z-20"></div>

            {/* Screen */}
            <div className="absolute inset-0 rounded-[32px] overflow-hidden bg-gray-900 flex flex-col">
              {/* LIFF Header */}
              <div className="h-12 bg-[#1a1b23] flex items-center px-4 justify-between border-b border-gray-800 z-10">
                <span className="text-white font-bold text-xs">LineHero</span>
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
                </div>
              </div>

              {/* Game UI Content - Simulated Battle */}
              <div className="flex-1 p-4 relative overflow-hidden flex flex-col">
                {/* Background Image */}
                <div className="absolute inset-0 opacity-50">
                  <img src="https://mumu.tw/linehero/images/tower/endless_tower_bg_landscape.png" className="w-full h-full object-cover" alt="bg" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
                </div>

                {/* Boss Monster */}
                <div className="relative mt-8 mx-auto w-32 h-32 animate-pulse-slow">
                  <div className="absolute inset-0 bg-red-500/20 blur-xl rounded-full"></div>
                  <img src="https://mumu.tw/linehero/images/regions/boss/boss_girl2_small.png" alt="Boss" className="relative z-10 w-full h-full object-contain drop-shadow-lg filter brightness-110" />
                  {/* Health Bar */}
                  <div className="absolute -top-4 left-0 w-full h-2 bg-gray-700 rounded-full overflow-hidden border border-gray-600">
                    <div className="w-[70%] h-full bg-gradient-to-r from-red-600 to-red-400"></div>
                  </div>
                  <div className="absolute -top-9 left-1/2 -translate-x-1/2 text-red-400 font-black text-sm whitespace-nowrap text-shadow-sm">LV.99 災厄女皇</div>
                </div>

                {/* Damage Numbers Effect */}
                <div className="absolute top-1/3 left-1/2 text-2xl font-black text-yellow-400 animate-bounce font-mono drop-shadow-md">
                  -9999!
                </div>

                {/* Player Status */}
                <div className="mt-auto relative z-10">
                  <div className="bg-gray-800/80 backdrop-blur border border-gray-700 rounded-lg p-3 mb-3 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full border-2 border-white/20 overflow-hidden">
                      <img src="https://mumu.tw/linehero/images/hero_avatar/character_warrior2.png" alt="Avatar" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between text-xs text-gray-300 mb-1">
                        <span>狂戰士亞倫</span>
                        <span className="text-yellow-400">HP 3200/5000</span>
                      </div>
                      <div className="w-full h-1.5 bg-gray-700 rounded-full overflow-hidden">
                        <div className="w-[64%] h-full bg-gradient-to-r from-green-500 to-emerald-400"></div>
                      </div>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-3 gap-2">
                    <button className="bg-gray-800 border border-gray-600 rounded-lg p-2 flex flex-col items-center gap-1 active:scale-95 transition-transform">
                      <div className="w-8 h-8 rounded overflow-hidden">
                        <img src="https://mumu.tw/linehero/images/skills/RPG%20Swordsman%20skill%20icons/PNG/16.png" alt="Skill 1" className="w-full h-full object-cover" />
                      </div>
                      <span className="text-[10px] text-gray-300">強力斬擊</span>
                    </button>
                    <button className="bg-gray-800 border border-hero-gold/50 rounded-lg p-2 flex flex-col items-center gap-1 active:scale-95 transition-transform shadow-[0_0_10px_rgba(255,215,0,0.2)]">
                      <div className="w-8 h-8 rounded overflow-hidden">
                        <img src="https://mumu.tw/linehero/images/skills/RPG%20Berserker%20skill%20icons/PNG/33.png" alt="Skill 2" className="w-full h-full object-cover" />
                      </div>
                      <span className="text-[10px] text-hero-gold font-bold">致命一擊</span>
                    </button>
                    <button className="bg-gray-800 border border-gray-600 rounded-lg p-2 flex flex-col items-center gap-1 active:scale-95 transition-transform">
                      <div className="w-8 h-8 rounded overflow-hidden">
                        <img src="https://mumu.tw/linehero/images/skills/RPG%20Berserker%20skill%20icons/PNG/49.png" alt="Skill 3" className="w-full h-full object-cover" />
                      </div>
                      <span className="text-[10px] text-gray-300">鋼鐵意志</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Chat Input Area Mockup */}
              <div className="h-12 bg-[#1a1b23] border-t border-gray-800 flex items-center px-3 gap-2">
                <div className="w-6 h-6 text-gray-500">+</div>
                <div className="flex-1 h-8 bg-gray-800 rounded px-2 flex items-center text-xs text-gray-500">輸入指令...</div>
                <div className="w-6 h-6 text-blue-500">➤</div>
              </div>
            </div>

            {/* Reflection/Shine on Glass */}
            <div className="absolute inset-0 rounded-[40px] pointer-events-none bg-gradient-to-tr from-white/10 to-transparent opacity-50 z-30"></div>
          </div>

          {/* Floating Elements behind phone */}
          <div className="absolute top-1/4 -right-12 w-20 h-20 bg-hero-neon-green/20 rounded-xl rotate-12 blur-md animate-float-fast z-0 hidden lg:block"></div>
          <div className="absolute bottom-1/4 -left-12 w-16 h-16 bg-hero-gold/20 rounded-full blur-md animate-float z-0 hidden lg:block"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;