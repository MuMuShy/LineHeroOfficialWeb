import React from 'react';
import { trackCtaClick } from '../services/analytics';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 md:py-32 bg-hero-dark relative overflow-hidden section-divider">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-hero-secondary/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <header className="text-center mb-16 md:mb-28 relative">
          <span className="text-hero-neon font-mono text-sm tracking-[0.35em] uppercase opacity-70 mb-2 block">System Features</span>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-wide drop-shadow-lg">
            遊戲<span className="text-transparent bg-clip-text bg-gradient-to-r from-hero-gold to-yellow-600">特色</span>
          </h2>
          <div className="h-1 w-24 md:w-32 bg-gradient-to-r from-transparent via-hero-neon to-transparent mx-auto relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-hero-neon rotate-45 shadow-[0_0_10px_#00f3ff]"></div>
          </div>
          <p className="mt-8 text-gray-400 max-w-2xl mx-auto font-medium text-base md:text-xl px-2 leading-relaxed">
            免下載安裝，打開 LINE 就能玩的完整 RPG 世界。
            <br className="hidden md:block" />
            結合 <span className="text-white font-bold">LIFF 視覺技術</span>，既有經典文字冒險的深度敘事，更有精美介面觸手可及。
          </p>
        </header>

        <div className="space-y-24 md:space-y-40">
          {/* Feature 1: Combat (Image Right) */}
          <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-20">
            <div className="flex-1 space-y-6 md:space-y-8 order-1 lg:order-1">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-hero-green/10 rounded-2xl border border-hero-green/30 shadow-[0_0_20px_rgba(6,199,85,0.2)]">
                  <span className="text-3xl md:text-4xl">⚔️</span>
                </div>
                <h3 className="text-3xl md:text-5xl font-black text-white">
                  視覺戰鬥
                </h3>
              </div>
              <p className="text-hero-green text-lg md:text-2xl font-bold tracking-wide">聊天視窗 RPG · 告別單調文字介面</p>

              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                利用 LINE Flex Message 技術，在免下載的聊天視窗裡就能體驗精美戰鬥畫面。
                保留經典文字冒險的深度敘事，搭配直覺的按鈕操作。
                <br className="hidden md:block" />
                <span className="text-white font-bold border-b border-hero-green/50 pb-0.5">不需要打字</span>，點擊即可施放華麗技能。
                <a href="/guide" className="text-hero-green hover:underline ml-1">了解更多玩法 →</a>
              </p>
              <ul className="space-y-3 md:space-y-4 text-gray-400 text-sm md:text-base">
                <li className="flex items-center gap-3 group">
                  <div className="w-1.5 h-1.5 bg-hero-green rounded-full group-hover:scale-150 transition-transform"></div>
                  <span className="group-hover:text-white transition-colors">多樣化技能特效與屬性相剋</span>
                </li>
                <li className="flex items-center gap-3 group">
                  <div className="w-1.5 h-1.5 bg-hero-green rounded-full group-hover:scale-150 transition-transform"></div>
                  <span className="group-hover:text-white transition-colors">即時戰鬥結算與掉寶通知</span>
                </li>
              </ul>
            </div>
            <div className="flex-1 relative group w-full max-w-sm mx-auto lg:max-w-none order-2 lg:order-2 perspective-1000">
              <div className="absolute inset-0 bg-hero-green/20 blur-3xl rounded-full group-hover:bg-hero-green/30 transition-all duration-500 animate-pulse-slow"></div>
              <div className="relative transform transition-transform duration-500 group-hover:rotate-y-6 group-hover:scale-105">
                <div className="relative z-10 w-full rounded-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-gradient-to-br from-[#101318] via-[#111a1f] to-[#0b0f12] overflow-hidden">
                  <div className="px-4 py-3 border-b border-white/10 flex items-center justify-between text-xs text-gray-400">
                    <span className="uppercase tracking-[0.3em]">Flex Battle</span>
                    <span className="text-hero-green font-bold">LIVE</span>
                  </div>
                  <div className="p-4 space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-black/60 border border-white/10 flex items-center justify-center">
                        <img
                          src="https://image.linehero.tw/images/npc/boss/rodras/rodras-w96.webp"
                          alt="Boss"
                          className="w-12 h-12 object-contain"
                        />
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="text-white font-bold text-sm">冥幽境守護者</div>
                        <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                          <div className="h-full w-3/5 bg-gradient-to-r from-red-500 to-orange-400"></div>
                        </div>
                        <div className="text-xs text-gray-400">HP 58% · 狂暴倒數 02:15</div>
                      </div>
                      <button className="text-xs font-bold px-3 py-2 rounded-lg bg-hero-green/20 border border-hero-green/40 text-hero-green">
                        集火
                      </button>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        'https://image.linehero.tw/images/skills/swordsman/skill-16-w64.webp',
                        'https://image.linehero.tw/images/skills/berserker/skill-33-w64.webp',
                        'https://image.linehero.tw/images/skills/berserker/skill-49-w64.webp',
                      ].map((icon, idx) => (
                        <div key={icon} className="bg-black/50 border border-white/10 rounded-xl p-3 text-center">
                          <img src={icon} alt={`Skill ${idx + 1}`} className="w-10 h-10 mx-auto" />
                          <div className="text-[10px] text-gray-400 mt-2">技能 {idx + 1}</div>
                        </div>
                      ))}
                    </div>
                    <div className="bg-black/50 border border-white/10 rounded-xl p-3 text-xs text-gray-300 space-y-1">
                      <div>夜行者 使用「裂地斬」造成 82,450 傷害</div>
                      <div>掉落：星塵 x3、圖騰碎片 x1</div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              </div>
            </div>
          </div>

          {/* Feature 2: Equipment & Crafting (Image Left) */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-10 md:gap-20">
            <div className="flex-1 space-y-6 md:space-y-8 order-1 lg:order-2">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-hero-gold/10 rounded-2xl border border-hero-gold/30 shadow-[0_0_20px_rgba(255,215,0,0.2)]">
                  <span className="text-3xl md:text-4xl">⚒️</span>
                </div>
                <h3 className="text-3xl md:text-5xl font-black text-white">
                  裝備養成
                </h3>
              </div>
              <p className="text-hero-gold text-lg md:text-2xl font-bold tracking-wide">打造專屬神話神器</p>

              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                精煉魂魄、屬性結晶 強化衝裝。
                每一把武器都是獨一無二的。強化你的裝備，或是到交易所與其他玩家自由買賣。
              </p>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="glass-panel p-5 rounded-xl hover:bg-white/5 transition-colors group cursor-default">
                  <div className="text-hero-gold font-bold text-lg md:text-xl mb-1 group-hover:translate-x-1 transition-transform">轉蛋系統 ➜</div>
                  <div className="text-xs text-gray-400">試試手氣，獲取傳說夥伴</div>
                </div>
                <div className="glass-panel p-5 rounded-xl hover:bg-white/5 transition-colors group cursor-default">
                  <div className="text-hero-gold font-bold text-lg md:text-xl mb-1 group-hover:translate-x-1 transition-transform">自由交易 ➜</div>
                  <div className="text-xs text-gray-400">寶物可上架拍賣場</div>
                </div>
              </div>
            </div>
            <div className="flex-1 relative group w-full max-w-sm mx-auto lg:max-w-none order-2 lg:order-1">
              <div className="absolute inset-0 bg-hero-gold/10 blur-3xl rounded-full group-hover:bg-hero-gold/20 transition-all duration-500"></div>
              <div className="relative z-10 flex gap-4 justify-center items-center">
                <img
                  src="https://image.linehero.tw/official_web/messageImage_1763667502560-w220.webp"
                  alt="裝備強化"
                  className="w-1/2 rounded-xl border border-white/10 shadow-2xl transform -translate-y-4 group-hover:-translate-y-6 transition-transform duration-500"
                />
                <img
                  src="https://image.linehero.tw/official_web/beg-w220.webp"
                  alt="背包管理"
                  className="w-1/2 rounded-xl border border-white/10 shadow-2xl transform translate-y-4 group-hover:translate-y-6 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Feature 3: Web Support (Image Right) */}
          <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-20">
            <div className="flex-1 space-y-6 md:space-y-8 order-1 lg:order-1">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-blue-500/10 rounded-2xl border border-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                  <span className="text-3xl md:text-4xl">🖥️</span>
                </div>
                <h3 className="text-3xl md:text-5xl font-black text-white">
                  Web 網頁版
                </h3>
              </div>
              <p className="text-blue-400 text-lg md:text-2xl font-bold tracking-wide">大螢幕管理更輕鬆</p>

              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                手機玩累了？回到家開啟電腦瀏覽器，無縫接軌你的冒險進度。
                網頁版提供更詳細的數據分析、更方便的管理介面。
              </p>
            </div>
            <div className="flex-1 relative group w-full max-w-sm mx-auto lg:max-w-none order-2 lg:order-2">
              <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full group-hover:bg-blue-500/30 transition-all duration-500"></div>
              <div className="relative z-10 bg-[#1e1e1e] rounded-xl p-2 shadow-2xl border border-gray-700 w-full transform group-hover:scale-[1.02] transition-transform">
                {/* Browser Mockup Header */}
                <div className="flex items-center gap-2 mb-2 px-3 border-b border-gray-700 pb-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                  </div>
                  <div className="flex-1 bg-black/50 rounded text-[10px] text-gray-500 px-3 py-1 text-center font-mono">linehero.tw/dashboard</div>
                </div>
                <img
                  src="https://image.linehero.tw/official_web/web_view-w420.webp"
                  alt="Web 儀表板示意"
                  className="w-full rounded border border-gray-700 opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </div>

          {/* Feature 4: Exploration Mode (Image Right) */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-6 md:gap-12">
            <div className="flex-1 space-y-3 md:space-y-6 order-1 lg:order-2">
              <div className="flex items-center gap-3">
                <div className="p-2 md:p-3 bg-purple-500/10 rounded-xl border border-purple-500/30">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-4xl font-bold text-white">
                  探索模式
                </h3>
              </div>
              <p className="text-purple-400 text-base md:text-2xl font-bold">Roguelike 探索 · 搶先體驗</p>

              <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
                體驗 LineHero 未來的探索功能！每次挑戰都是全新的 Roguelike 冒險，隨機生成的地圖與事件讓每次探索都充滿未知。
                <br className="hidden md:block" />
                搶先體驗 Web 版探索模式，未來將完整引入 LINE 平台，資料互通，隨時隨地都能繼續你的探索旅程。
              </p>
              <a
                href="https://explore.linehero.tw"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 hover:from-purple-600/30 hover:to-indigo-600/30 border border-purple-500/40 hover:border-purple-500/60 text-purple-300 hover:text-purple-200 font-bold rounded-xl transition-all transform hover:scale-105 mt-4"
                onClick={() => trackCtaClick('立即開始探索', 'features-explore', 'https://explore.linehero.tw')}
              >
                <span>立即開始探索</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
            <div className="flex-1 relative group w-full max-w-sm mx-auto lg:max-w-none order-2 lg:order-1">
              <div className="absolute inset-0 bg-purple-500/10 blur-2xl md:blur-3xl rounded-full group-hover:bg-purple-500/20 transition-all duration-500"></div>
              <div className="relative z-10 rounded-xl md:rounded-2xl overflow-hidden border-2 border-purple-500/30 shadow-2xl">
                <img
                  src="https://image.linehero.tw/images/tower/endless_tower_bg_landscape-w320.webp"
                  alt="無盡之塔背景"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-900/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-center space-y-2">
                  <h4 className="text-xl md:text-2xl font-bold text-purple-200">探索模式</h4>
                  <p className="text-gray-300 text-sm md:text-base">Roguelike 探索 · 搶先體驗 · 未來引入</p>
                  <div className="pt-2 border-t border-purple-500/30">
                    <p className="text-xs md:text-sm text-gray-400">explore.linehero.tw</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 5: Adventurer's Tavern (Image Left) */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-10 md:gap-20">
            <div className="flex-1 space-y-6 md:space-y-8 order-1 lg:order-2">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-amber-500/10 rounded-2xl border border-amber-500/30 shadow-[0_0_20px_rgba(245,158,11,0.2)]">
                  <span className="text-3xl md:text-4xl">🍺</span>
                </div>
                <h3 className="text-3xl md:text-5xl font-black text-white">
                  冒險者酒館
                </h3>
              </div>
              <p className="text-amber-400 text-lg md:text-2xl font-bold tracking-wide">官方社群平台</p>

              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                專為冒險者打造的公開社群平台，無需登入即可瀏覽。
                分享冒險心得、查看最新資訊、與其他玩家交流互動。
              </p>
              <a
                href="https://tarven.linehero.tw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-amber-600/10 hover:bg-amber-600/20 border border-amber-500/50 hover:border-amber-500/80 text-amber-400 hover:text-amber-300 font-bold text-lg rounded-xl transition-all transform hover:scale-105 group mt-4"
                onClick={() => trackCtaClick('前往酒館', 'features-tavern', 'https://tarven.linehero.tw')}
              >
                <span>前往酒館</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
            <div className="flex-1 relative group w-full max-w-sm mx-auto lg:max-w-none order-2 lg:order-1">
              <div className="absolute inset-0 bg-amber-600/20 blur-3xl rounded-full group-hover:bg-amber-600/30 transition-all duration-500"></div>
              <div className="relative z-10 bg-gradient-to-br from-[#2a1b0a] to-black rounded-2xl p-10 border border-amber-900/50 shadow-2xl flex flex-col items-center justify-center min-h-[300px] text-center group-hover:border-amber-500/50 transition-colors">
                <div className="text-7xl mb-6 transform group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]">🍺</div>
                <h4 className="text-3xl font-black text-amber-400 mb-2">The Tavern</h4>
                <p className="text-amber-200/60 font-mono text-sm tracking-wider">EST. 2024</p>
                <div className="mt-8 pt-6 border-t border-amber-900/50 w-full">
                  <p className="text-sm text-gray-500 font-mono">tarven.linehero.tw</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Security Promise Section */}
        <div className="mt-24 md:mt-40 relative">
          <div className="absolute inset-0 bg-hero-green/5 blur-[100px] pointer-events-none"></div>
          <div className="glass-panel rounded-3xl p-8 md:p-16 relative overflow-hidden text-center max-w-4xl mx-auto border border-white/10 hover:border-hero-green/30 transition-colors">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-hero-green to-transparent opacity-50"></div>

            <div className="w-16 h-16 md:w-20 md:h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8 text-3xl md:text-4xl border border-hero-green/50 shadow-[0_0_20px_rgba(6,199,85,0.2)]">
              🔒
            </div>

            <h3 className="text-2xl md:text-4xl font-black text-white mb-4">
              安全承諾
            </h3>

            <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              LineHero 僅使用 LINE Login 機制來驗證身分。
              <br />
              我們<span className="text-hero-green font-bold">絕不</span>蒐集您的對話紀錄或好友名單，請安心遊玩。
            </p>

            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {['免註冊帳號', '免下載程式', '官方認證開發者'].map((item, i) => (
                <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/5 text-sm md:text-base text-gray-300">
                  <svg className="w-4 h-4 text-hero-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
