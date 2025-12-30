import React, { useState } from 'react';
import { Character } from '../types';

const characters: Character[] = [
  {
    id: '1',
    name: 'Lin (傳奇冒險者)',
    role: '盜賊 Lv.350',
    description: '敏捷極高的暗夜行者，擅長使用「致命毒刃」與「生命汲取」。在陰影中給予敵人爆擊傷害。',
    imageUrl: 'https://mumu.tw/linehero/images/hero_avatar/character_rog_female2.png',
    affinity: 'Speed'
  },
  {
    id: '2',
    name: '焚獄君王',
    role: '稀有怪物',
    description: '親密度 0/1000。來自地獄深淵的強大存在，全身燃燒著永不熄滅的烈火。只有最強的公會才能討伐祂。',
    imageUrl: 'https://mumu.tw/linehero/images/regions/power_require/2_2/0006.png',
    affinity: 'Magic'
  },
  {
    id: '3',
    name: '路亞娜',
    role: '探索怪物',
    description: '迷失在森林深處的精靈少女，似乎在守護著某種不為人知的古代秘密。',
    imageUrl: 'https://mumu.tw/linehero/images/regions/heal/monster_plus_0023.png',
    affinity: 'Tech'
  },
  {
    id: '4',
    name: '災厄女皇-黛菲',
    role: '世界 Boss',
    description: '掌管生與死的災厄之女。她的出現預示著世界的毀滅與重生，是所有勇者夢魘般的對手。',
    imageUrl: 'https://mumu.tw/linehero/images/regions/boss/boss_girl2_small.png',
    affinity: 'Tech'
  },

];

const Characters: React.FC = () => {
  const [activeChar, setActiveChar] = useState<Character>(characters[0]);

  return (
    <section id="heroes" className="py-20 md:py-32 bg-hero-dark relative overflow-hidden border-t border-white/5 pb-32 md:pb-40">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-hero-gold/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row gap-16 items-center">

          {/* Left: Text Info */}
          <div className="flex-1 space-y-8 w-full">
            <div className="relative">
              <span className="text-hero-gold/50 font-mono text-xs tracking-widest uppercase mb-2 block">Database // Entries</span>
              <h2 className="font-display text-4xl md:text-6xl font-black text-white tracking-wide">
                傳說 <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-hero-gold to-yellow-700">英雄與魔物</span>
              </h2>
            </div>

            <div className="glass-panel p-8 rounded-3xl border border-white/10 relative transition-all duration-300">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 p-4 opacity-20">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" /></svg>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <span className="px-3 py-1 bg-hero-gold/10 text-hero-gold text-xs font-bold uppercase tracking-widest border border-hero-gold/20 rounded-full">
                  {activeChar.role}
                </span>
                <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                <span className="text-gray-500 text-xs font-mono">ID: {activeChar.id.padStart(4, '0')}</span>
              </div>

              <h3 className="font-display text-3xl md:text-5xl font-bold text-white mb-6 drop-shadow-md">
                {activeChar.name}
              </h3>

              <div className="relative pl-6 border-l-2 border-hero-green">
                <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light">
                  {activeChar.description}
                </p>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/5 pt-6">
                <div className="text-center md:text-left">
                  <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Strength</div>
                  <div className="text-lg font-mono text-white">A+</div>
                </div>
                <div className="text-center md:text-left">
                  <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Intelligence</div>
                  <div className="text-lg font-mono text-white">S</div>
                </div>
                <div className="text-center md:text-left">
                  <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Rarity</div>
                  <div className="text-lg font-mono text-hero-gold">SSR</div>
                </div>
              </div>
            </div>

            {/* Selector - Optimized for mobile scrolling without clipping */}
            <div>
              <div className="text-xs text-gray-500 mb-3 font-mono">SELECT CHARACTER:</div>
              <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar -mx-4 px-4 md:mx-0 md:px-0 mask-image-fade">
                {characters.map((char) => (
                  <button
                    key={char.id}
                    onClick={() => setActiveChar(char)}
                    className={`
                      relative flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden transition-all duration-300
                      ${activeChar.id === char.id
                        ? 'ring-2 ring-hero-gold ring-offset-4 ring-offset-hero-dark scale-100 opacity-100 grayscale-0'
                        : 'opacity-50 hover:opacity-100 grayscale hover:grayscale-0 scale-95'}
                    `}
                  >
                    <img src={char.imageUrl} alt={char.name} className="w-full h-full object-cover" />
                    {activeChar.id === char.id && (
                      <div className="absolute inset-0 bg-hero-gold/10"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Image Card */}
          <div className="flex-1 relative h-[500px] md:h-[600px] w-full flex items-center justify-center perspective-1000 mt-8 md:mt-0">
            {/* Card Container */}
            <div className="relative w-full max-w-[320px] md:max-w-[360px] h-[500px] md:h-[580px] bg-gray-900 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] transform transition-transform duration-500 hover:rotate-y-3 group border border-gray-800">

              {/* Image Background */}
              <div className="absolute inset-0 z-0">
                <img
                  src={activeChar.imageUrl}
                  alt={activeChar.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-90"></div>
                <div className="absolute top-0 w-full h-32 bg-gradient-to-b from-black/60 to-transparent"></div>
              </div>

              {/* Card Content Overlay */}
              <div className="absolute inset-0 z-10 flex flex-col justify-between p-6 md:p-8">
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 rounded-full bg-black/50 backdrop-blur border border-white/20 flex items-center justify-center">
                    <span className="text-xl">🔥</span>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-hero-gold text-black font-black text-xs uppercase tracking-tighter">
                    LEGENDARY
                  </div>
                </div>

                <div>
                  <h4 className="text-white font-display text-3xl font-bold mb-2 drop-shadow-lg">{activeChar.name}</h4>

                  {/* Stats Bars */}
                  <div className="space-y-3 mb-6 bg-black/40 backdrop-blur-md p-4 rounded-xl border border-white/5">
                    <div className="space-y-1">
                      <div className="flex justify-between text-[10px] text-gray-400 font-bold uppercase">
                        <span>HP</span>
                        <span>2400 / 2400</span>
                      </div>
                      <div className="w-full bg-gray-700 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-gradient-to-r from-red-500 to-red-600 h-full w-[100%]"></div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-[10px] text-gray-400 font-bold uppercase">
                        <span>MP</span>
                        <span>1250 / 1250</span>
                      </div>
                      <div className="w-full bg-gray-700 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-full w-[80%]"></div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 bg-hero-green hover:bg-green-400 text-white py-3 rounded-xl font-bold text-sm transition-all shadow-lg shadow-green-900/20 transform active:scale-95">
                      立即戰鬥
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Back glow */}
            <div className="absolute inset-0 bg-hero-gold/10 blur-[100px] -z-10 animate-pulse-slow"></div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Overlay for seamless transition to Gallery */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-hero-dark z-20 pointer-events-none"></div>
    </section>
  );
};

export default Characters;