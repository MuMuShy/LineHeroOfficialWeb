import React, { useState } from 'react';
import type { Character } from '../types';

const characters: (Character & { kanji: string; stats: { str: number; int: number; luk: number } })[] = [
  {
    id: '1',
    name: '至尊龍王',
    role: '傳說 Boss',
    description: '凌駕於天地之上的遠古龍族霸主，鱗甲閃耀萬古金芒。祂的一次振翅足以撕裂山河，是每一位勇者夢寐以求的挑戰。',
    imageUrl: 'https://image.linehero.tw/images/event/spring/supreme_dragon_lord.webp',
    affinity: 'Magic',
    kanji: '龍',
    stats: { str: 6200, int: 4800, luk: 1500 },
  },
  {
    id: '2',
    name: '虛空君王 · 阿薩隆',
    role: '世界 Boss',
    description: '來自虛空裂隙的黑暗君主，掌握吞噬光芒的禁忌之力。凡是與他對視的勇者，皆會墜入無盡的絕望深淵。',
    imageUrl: 'https://image.linehero.tw/images/boss_mov/dark/BOSS_idle.png',
    affinity: 'Tech',
    kanji: '虛',
    stats: { str: 5800, int: 6100, luk: 900 },
  },
  {
    id: '3',
    name: '風暴巨人',
    role: '區域 Boss',
    description: '雷霆與狂風的化身，身軀高聳如山，每一次踏步都伴隨電光與轟鳴。只有最堅韌的戰士才能在風暴中屹立不搖。',
    imageUrl: 'https://image.linehero.tw/images/regions/power_require/3_3/thunder_storm_giant.png',
    affinity: 'Speed',
    kanji: '雷',
    stats: { str: 5400, int: 2200, luk: 1100 },
  },
];

const Characters: React.FC = () => {
  const [activeChar, setActiveChar] = useState(characters[0]);

  return (
    <section id="heroes" className="relative py-24 md:py-36 bg-hero-dark overflow-hidden section-divider">
      {/* BG */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[60%] h-full halftone-green opacity-25" />
        <div className="absolute top-20 left-0 w-full h-24 diagonal-stripes opacity-25" />
        <div className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-hero-gold/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-hero-sakura/10 blur-[140px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-14 md:mb-20">
          <div className="flex items-center gap-4 mb-5">
            <div className="h-px w-12 bg-hero-gold" />
            <span className="font-en-wide text-[10px] text-hero-gold">Legendary Bosses</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-serif-cn text-5xl md:text-7xl text-white leading-none">
              傳說<span className="text-hero-gold">魔物</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-md">
              踏入深淵、直面威脅大陸的世界級 Boss。點擊下方縮圖切換查看。
            </p>
          </div>
        </header>

        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center">
          {/* Left: Character stage */}
          <div className="relative">
            {/* Giant kanji backdrop */}
            <div
              aria-hidden
              className="absolute inset-0 flex items-center justify-center font-kanji-deco text-white/[0.07] select-none pointer-events-none"
              style={{ fontSize: 'clamp(18rem, 36vw, 36rem)', lineHeight: 0.8 }}
            >
              {activeChar.kanji}
            </div>

            {/* Glow */}
            <div className="absolute inset-10 bg-hero-gold/10 blur-[120px] rounded-full" />

            {/* Character frame */}
            <div className="relative mx-auto max-w-md">
              {/* Corner tags */}
              <div className="absolute -top-3 -left-3 z-30 clip-slash-tag bg-hero-gold text-black font-en-display text-[10px] px-3 py-1 tracking-widest">
                NO.{activeChar.id.padStart(3, '0')}
              </div>
              <div className="absolute -top-3 right-2 z-30 clip-slash-tag bg-hero-sakura text-white font-en-display text-[10px] px-3 py-1 tracking-widest">
                {activeChar.affinity.toUpperCase()}
              </div>

              {/* Neon outer frame */}
              <div className="absolute -inset-3 clip-hex bg-gradient-to-br from-hero-gold/70 via-hero-sakura/40 to-hero-neon-green/60" />
              <div className="absolute -inset-[6px] clip-hex bg-hero-dark" />

              {/* Image */}
              <div className="relative clip-hex bg-gradient-to-b from-gray-900 to-black aspect-[3/4] overflow-hidden">
                <img
                  src={activeChar.imageUrl}
                  alt={activeChar.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute inset-0 scanlines opacity-50" />
                {/* Bottom name banner */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="font-en-display text-xs tracking-[0.3em] text-hero-gold">{activeChar.role.toUpperCase()}</div>
                  <div className="font-jp-display text-2xl md:text-3xl font-black text-white mt-1">{activeChar.name}</div>
                </div>
              </div>

              {/* Floating stat chip */}
              <div className="hidden md:block absolute -right-10 top-1/3 clip-slash-tag bg-black/80 border border-hero-gold/60 px-4 py-3 text-xs">
                <div className="font-en-display tracking-widest text-hero-gold">POWER</div>
                <div className="font-en-display text-2xl text-white">{(activeChar.stats.str + activeChar.stats.int + activeChar.stats.luk).toLocaleString()}</div>
              </div>
            </div>
          </div>

          {/* Right: Info panel */}
          <div className="relative">
            <div className="clip-slash-soft glass-panel border border-white/10 p-6 md:p-8 shadow-[0_30px_60px_rgba(0,0,0,0.4)]">
              <div className="flex items-center gap-3 mb-4">
                <span className="clip-slash-tag bg-hero-gold/20 text-hero-gold text-[11px] font-black px-3 py-1 tracking-widest border border-hero-gold/40">
                  {activeChar.role}
                </span>
                <span className="font-en-display text-xs tracking-[0.3em] text-white/40">PROFILE /0{activeChar.id}</span>
              </div>

              <h3 className="font-jp-display text-3xl md:text-5xl font-black text-white leading-tight">
                {activeChar.name}
              </h3>

              <div className="my-5 h-[2px] w-16 bg-gradient-to-r from-hero-gold to-transparent" />

              <p className="text-gray-300 text-base md:text-lg leading-relaxed border-l-[3px] border-hero-gold/60 pl-5">
                {activeChar.description}
              </p>

              {/* Stats */}
              <div className="mt-6 grid grid-cols-3 gap-3 font-en-display">
                {[
                  { k: 'STR', v: activeChar.stats.str, color: 'text-hero-sakura' },
                  { k: 'INT', v: activeChar.stats.int, color: 'text-hero-neon-green' },
                  { k: 'LUK', v: activeChar.stats.luk, color: 'text-hero-gold' },
                ].map((s) => (
                  <div key={s.k} className="clip-slash-tag bg-black/40 border border-white/10 px-4 py-3">
                    <div className={`text-[10px] tracking-[0.3em] ${s.color}`}>{s.k}</div>
                    <div className="text-xl text-white">{s.v.toLocaleString()}</div>
                  </div>
                ))}
              </div>

              {/* HP Bar */}
              <div className="mt-5">
                <div className="flex justify-between text-[11px] font-en-display tracking-widest text-gray-400 mb-1">
                  <span>HP</span>
                  <span>2400 / 2400</span>
                </div>
                <div className="h-2 bg-black/60 rounded-full overflow-hidden border border-white/10">
                  <div className="h-full w-[82%] bg-gradient-to-r from-hero-sakura via-red-500 to-hero-crimson" />
                </div>
              </div>
            </div>

            {/* Selector strip */}
            <div className="relative z-20 mt-6">
              <div className="font-en-wide text-[10px] text-white/40 mb-3">Select Boss</div>
              <div className="flex gap-3">
                {characters.map((char) => {
                  const active = activeChar.id === char.id;
                  return (
                    <button
                      key={char.id}
                      type="button"
                      onClick={() => setActiveChar(char)}
                      className={`relative flex-shrink-0 w-20 h-24 rounded-md overflow-hidden border transition-all duration-300 cursor-pointer ${
                        active
                          ? 'border-hero-gold ring-2 ring-hero-gold/60 scale-[1.05]'
                          : 'border-white/15 opacity-60 hover:opacity-100 hover:border-white/40'
                      }`}
                    >
                      <img src={char.imageUrl} alt={char.name} className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                      <div className={`absolute bottom-1 left-0 right-0 text-center font-en-wide text-[9px] pointer-events-none ${active ? 'text-hero-gold' : 'text-white/70'}`}>
                        NO.{char.id.padStart(2, '0')}
                      </div>
                      {active && (
                        <div className="absolute top-1 right-1 w-2 h-2 rounded-full bg-hero-gold animate-pulse pointer-events-none" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-hero-dark z-20 pointer-events-none" />
    </section>
  );
};

export default Characters;
