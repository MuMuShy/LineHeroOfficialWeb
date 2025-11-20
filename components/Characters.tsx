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
    description: '掌管生與死的災厄之女。',
    imageUrl: 'https://mumu.tw/linehero/images/regions/heal/monster_plus_0023.png',
    affinity: 'Tech'
  },
  {
    id: '4',
    name: '災厄女皇-黛菲',
    role: '世界 Boss',
    description: '掌管生與死的災厄之女。',
    imageUrl: 'https://mumu.tw/linehero/images/regions/boss/boss_girl2_small.png',
    affinity: 'Tech'
  },
  
];

const Characters: React.FC = () => {
  const [activeChar, setActiveChar] = useState<Character>(characters[0]);

  return (
    <section id="heroes" className="py-16 md:py-24 bg-hero-dark relative overflow-hidden border-t border-white/5 pb-32 md:pb-40">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-hero-gold/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          {/* Left: Text Info */}
          <div className="flex-1 space-y-6 md:space-y-8 w-full">
            <h2 className="font-display text-4xl md:text-6xl font-bold text-white tracking-wide">
              傳說 <br />
              <span className="text-hero-gold">英雄與魔物</span>
            </h2>
            
            <div className="bg-hero-panel/50 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-4">
                 <span className="px-3 py-1 bg-hero-gold/20 text-hero-gold text-xs font-bold uppercase tracking-widest border border-hero-gold/30 rounded">
                    {activeChar.role}
                 </span>
              </div>
              
              <h3 className="font-display text-2xl md:text-4xl font-bold text-white mb-4">
                {activeChar.name}
              </h3>
              
              <p className="text-gray-300 text-base md:text-lg leading-relaxed border-l-4 border-hero-green pl-4 md:pl-6">
                {activeChar.description}
              </p>

              <div className="mt-6 flex gap-4 text-sm font-mono text-gray-400">
                <div>STR <span className="text-white">1,717</span></div>
                <div>INT <span className="text-white">1,283</span></div>
                <div>LUK <span className="text-white">3,987</span></div>
              </div>
            </div>

            {/* Selector - Optimized for mobile scrolling without clipping */}
            <div className="flex gap-4 pt-2 overflow-x-auto pb-4 no-scrollbar mx-[-24px] px-6 md:mx-0 md:px-0">
              {characters.map((char) => (
                <button
                  key={char.id}
                  onClick={() => setActiveChar(char)}
                  className={`
                    flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-all transform 
                    ${activeChar.id === char.id 
                      ? 'border-hero-gold shadow-[0_0_15px_rgba(255,215,0,0.5)] scale-110 ring-2 ring-hero-gold/50' 
                      : 'border-gray-700 opacity-60 hover:opacity-100'}
                  `}
                >
                  <img src={char.imageUrl} alt={char.name} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Image Card */}
          <div className="flex-1 relative h-[500px] md:h-[600px] w-full flex items-center justify-center perspective-1000 mt-8 md:mt-0">
            {/* Card Container */}
            <div className="relative w-full max-w-[300px] md:max-w-[320px] h-[450px] md:h-[500px] bg-gray-900 rounded-2xl overflow-hidden border-[3px] border-gray-700 shadow-2xl transform transition-all hover:rotate-y-12 mx-auto">
                {/* Card Top - Image */}
                <div className="h-[60%] relative overflow-hidden">
                   <img 
                    src={activeChar.imageUrl} 
                    alt={activeChar.name} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-gray-900 to-transparent"></div>
                </div>
                
                {/* Card Bottom - Stats */}
                <div className="h-[40%] bg-gray-900 p-4 flex flex-col justify-between">
                   <div>
                     <h4 className="text-hero-gold font-display text-xl font-bold mb-1">{activeChar.name}</h4>
                     <div className="text-xs text-gray-400 mb-2">UID:1 • {activeChar.role}</div>
                     <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden mb-2">
                       <div className="bg-red-500 h-full w-[80%]"></div>
                     </div>
                     <div className="flex justify-between text-xs text-gray-500 font-mono">
                        <span>HP: 2400/2400</span>
                        <span>EXP: 159702378</span>
                     </div>
                   </div>
                   
                   <div className="flex gap-2 mt-2">
                      <button className="flex-1 bg-hero-green text-white py-2 rounded font-bold text-sm hover:bg-green-400 transition-colors">前往冒險</button>
                      <button className="flex-1 bg-red-600 text-white py-2 rounded font-bold text-sm hover:bg-red-500 transition-colors">探險隊</button>
                   </div>
                </div>
            </div>
            
            {/* Back glow */}
            <div className="absolute inset-0 bg-hero-gold/10 blur-[100px] -z-10"></div>
          </div>
        </div>
      </div>
      
      {/* Bottom Gradient Overlay for seamless transition to Gallery */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-hero-dark z-20 pointer-events-none"></div>
    </section>
  );
};

export default Characters;