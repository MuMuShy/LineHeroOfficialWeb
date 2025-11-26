import React from 'react';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-12 md:py-24 bg-hero-panel relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 md:mb-20">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">遊戲特色</h2>
          <div className="h-1 w-16 md:w-24 bg-gradient-to-r from-transparent via-hero-gold to-transparent mx-auto"></div>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto font-medium text-sm md:text-lg px-2">
            不只是文字遊戲，而是一個完整的世界。
            <br className="hidden md:block"/>
            <span className="md:hidden block h-1"></span>
            LINE Flex 視覺化互動，讓冒險觸手可及。
          </p>
        </div>

        <div className="space-y-12 md:space-y-24">
          {/* Feature 1: Combat (Image Right) */}
          <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-12">
            <div className="flex-1 space-y-3 md:space-y-6 order-1 lg:order-1">
              <div className="flex items-center gap-3">
                <div className="p-2 md:p-3 bg-hero-green/10 rounded-xl border border-hero-green/30">
                  <span className="text-xl md:text-3xl">⚔️</span>
                </div>
                <h3 className="text-xl md:text-4xl font-bold text-white">
                  LINE Flex 視覺戰鬥
                </h3>
              </div>
              <p className="text-hero-green text-base md:text-2xl font-bold">告別枯燥純文字</p>
              
              <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
                利用 LINE Flex Message 技術，將傳統 MUD 昇華為視覺饗宴。
                精美的技能圖示、直覺的按鈕操作。
                <br className="hidden md:block"/>
                <span className="text-white font-bold">不需要打字</span>，點擊即可施放華麗技能。
              </p>
              <ul className="space-y-1 md:space-y-3 text-gray-400 text-xs md:text-base">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-hero-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>多樣化技能特效與屬性相剋</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-hero-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>即時戰鬥結算與掉寶通知</span>
                </li>
              </ul>
            </div>
            <div className="flex-1 relative group w-full max-w-sm mx-auto lg:max-w-none order-2 lg:order-2">
              <div className="absolute inset-0 bg-hero-green/20 blur-2xl md:blur-3xl rounded-full group-hover:bg-hero-green/30 transition-all duration-500"></div>
              <img 
                src="https://mumu.tw/linehero/official_web/battle_flex.jpg" 
                alt="LINE Flex 戰鬥介面" 
                className="relative z-10 w-full rounded-xl md:rounded-2xl border-2 border-gray-700 shadow-2xl transform group-hover:scale-105 transition-transform duration-500 lg:rotate-1"
              />
            </div>
          </div>

          {/* Feature 2: Equipment & Crafting (Image Left) */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-6 md:gap-12">
             <div className="flex-1 space-y-3 md:space-y-6 order-1 lg:order-2">
              <div className="flex items-center gap-3">
                <div className="p-2 md:p-3 bg-hero-gold/10 rounded-xl border border-hero-gold/30">
                  <span className="text-xl md:text-3xl">⚒️</span>
                </div>
                <h3 className="text-xl md:text-4xl font-bold text-white">
                  裝備養成
                </h3>
              </div>
              <p className="text-hero-gold text-base md:text-2xl font-bold">打造專屬神話神器</p>

              <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
                精煉魂魄、屬性結晶 強化衝裝。
                每一把武器都是獨一無二的。強化你的裝備，或是到交易所與其他玩家自由買賣。
              </p>
              <div className="grid grid-cols-2 gap-2 md:gap-4 mt-2">
                 <div className="bg-black/30 p-3 md:p-4 rounded-lg border border-white/5">
                    <div className="text-hero-gold font-bold text-sm md:text-xl mb-1">轉蛋系統</div>
                    <div className="text-[10px] md:text-xs text-gray-400">試試手氣，獲取傳說夥伴</div>
                 </div>
                 <div className="bg-black/30 p-3 md:p-4 rounded-lg border border-white/5">
                    <div className="text-hero-gold font-bold text-sm md:text-xl mb-1">自由交易</div>
                    <div className="text-[10px] md:text-xs text-gray-400">寶物可上架拍賣場</div>
                 </div>
              </div>
            </div>
            <div className="flex-1 relative group w-full max-w-sm mx-auto lg:max-w-none order-2 lg:order-1">
               <div className="absolute inset-0 bg-hero-gold/10 blur-2xl md:blur-3xl rounded-full group-hover:bg-hero-gold/20 transition-all duration-500"></div>
               <div className="relative z-10 flex gap-2 md:gap-4 justify-center items-center">
                  <img 
                    src="https://mumu.tw/linehero/official_web/messageImage_1763667502560.jpg" 
                    alt="裝備強化" 
                    className="w-1/2 rounded-lg md:rounded-xl border-2 border-gray-700 shadow-xl transform -rotate-2 lg:-rotate-3 group-hover:rotate-0 transition-transform duration-500"
                  />
                  <img 
                    src="https://mumu.tw/linehero/official_web/beg.jpg" 
                    alt="背包管理" 
                    className="w-1/2 rounded-lg md:rounded-xl border-2 border-gray-700 shadow-xl transform rotate-2 lg:rotate-3 group-hover:rotate-0 transition-transform duration-500 mt-6 md:mt-12"
                  />
               </div>
            </div>
          </div>

          {/* Feature 3: Web Support (Image Right) */}
          <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-12">
            <div className="flex-1 space-y-3 md:space-y-6 order-1 lg:order-1">
              <div className="flex items-center gap-3">
                <div className="p-2 md:p-3 bg-blue-500/10 rounded-xl border border-blue-500/30">
                  <span className="text-xl md:text-3xl">🖥️</span>
                </div>
                <h3 className="text-xl md:text-4xl font-bold text-white">
                  Web 網頁版支援
                </h3>
              </div>
              <p className="text-blue-400 text-base md:text-2xl font-bold">大螢幕管理更輕鬆</p>

              <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
                手機玩累了？回到家開啟電腦瀏覽器，無縫接軌你的冒險進度。
                網頁版提供更詳細的數據分析、更方便的管理介面。
              </p>
            </div>
             <div className="flex-1 relative group w-full max-w-sm mx-auto lg:max-w-none order-2 lg:order-2">
              <div className="absolute inset-0 bg-blue-500/20 blur-2xl md:blur-3xl rounded-full group-hover:bg-blue-500/30 transition-all duration-500"></div>
              <div className="relative z-10 bg-gray-800 rounded-lg p-1 md:p-2 shadow-2xl border border-gray-600 w-full">
                 {/* Browser Mockup Header */}
                 <div className="flex items-center gap-1.5 md:gap-2 mb-1.5 md:mb-2 px-1 md:px-2 border-b border-gray-700 pb-1 md:pb-2">
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500"></div>
                    <div className="flex-1 bg-gray-900 rounded text-[9px] md:text-xs text-gray-500 px-2 py-0.5 md:py-1 text-center font-mono truncate">linehero.tw/dashboard</div>
                 </div>
                 <img 
                    src="https://mumu.tw/linehero/official_web/web_view.jpg" 
                    alt="Web 儀表板示意" 
                    className="w-full rounded border border-gray-700 opacity-90 hover:opacity-100 transition-opacity"
                  />
              </div>
            </div>
          </div>

          {/* Feature 4: Adventurer's Tavern (Image Left) */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-6 md:gap-12">
            <div className="flex-1 space-y-3 md:space-y-6 order-1 lg:order-2">
              <div className="flex items-center gap-3">
                <div className="p-2 md:p-3 bg-amber-500/10 rounded-xl border border-amber-500/30">
                  <span className="text-xl md:text-3xl">🍺</span>
                </div>
                <h3 className="text-xl md:text-4xl font-bold text-white">
                  冒險者酒館
                </h3>
              </div>
              <p className="text-amber-400 text-base md:text-2xl font-bold">公開社群平台</p>

              <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
                專為冒險者打造的公開社群平台，無需登入即可瀏覽。
                分享冒險心得、查看最新資訊、與其他玩家交流互動。
              </p>
              <a 
                href="https://tarven.linehero.tw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-amber-600/20 hover:bg-amber-600/30 border border-amber-500/40 hover:border-amber-500/60 text-amber-300 hover:text-amber-200 font-bold rounded-xl transition-all transform hover:scale-105 mt-4"
              >
                <span>前往冒險者酒館</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
            <div className="flex-1 relative group w-full max-w-sm mx-auto lg:max-w-none order-2 lg:order-1">
              <div className="absolute inset-0 bg-amber-500/10 blur-2xl md:blur-3xl rounded-full group-hover:bg-amber-500/20 transition-all duration-500"></div>
              <div className="relative z-10 bg-gradient-to-br from-amber-900/20 to-black/40 rounded-xl md:rounded-2xl p-6 md:p-8 border-2 border-amber-500/30 shadow-2xl">
                <div className="text-center space-y-4">
                  <div className="text-5xl md:text-7xl mb-4">🍺</div>
                  <h4 className="text-xl md:text-2xl font-bold text-amber-300">冒險者酒館</h4>
                  <p className="text-gray-300 text-sm md:text-base">公開社群 · 無需登入 · 隨時瀏覽</p>
                  <div className="pt-4 border-t border-amber-500/20">
                    <p className="text-xs md:text-sm text-gray-400">tarven.linehero.tw</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Security Promise Section */}
        <div className="mt-16 md:mt-32 bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-12 relative overflow-hidden text-center shadow-2xl">
           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-hero-green via-hero-gold to-hero-green"></div>
           <div className="relative z-10 max-w-3xl mx-auto">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 text-2xl md:text-3xl border border-green-500/30">
                 🔒
              </div>
              <h3 className="text-xl md:text-3xl font-bold text-white mb-2 md:mb-4">安全承諾：我們重視您的隱私</h3>
              <p className="text-xs md:text-base text-gray-400 mb-6 md:mb-8 leading-relaxed px-2">
                 LineHero 僅使用 LINE Login 機制來驗證身分。
                 <span className="text-white font-bold">絕不</span> 蒐集您的對話紀錄或好友名單。
              </p>
              <div className="flex flex-wrap justify-center gap-3 md:gap-6 text-xs md:text-sm text-gray-500 font-mono">
                 <span className="flex items-center gap-1.5"><svg className="w-3 h-3 md:w-4 md:h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> 免註冊</span>
                 <span className="flex items-center gap-1.5"><svg className="w-3 h-3 md:w-4 md:h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> 免下載</span>
                 <span className="flex items-center gap-1.5"><svg className="w-3 h-3 md:w-4 md:h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> 官方認證開發者</span>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Features;