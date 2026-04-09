import React, { useState } from 'react';
import type { Character } from '../types';
import SectionHeader from './SectionHeader';

type BossData = Character & {
  kanji: string;
  tags: { label: string; tone: 'gold' | 'green' | 'sakura' }[];
};

const characters: BossData[] = [
  {
    id: '1',
    name: '至尊龍王',
    role: '傳說 Boss',
    description: '遠古龍族霸主，鱗甲閃耀萬古金芒。祂的一次振翅足以撕裂山河，是每一位勇者夢寐以求的最終挑戰。',
    imageUrl: 'https://image.linehero.tw/images/event/spring/supreme_dragon_lord.webp',
    affinity: 'Magic',
    kanji: '龍',
    tags: [
      { label: '推薦等級 180+', tone: 'gold' },
      { label: '弱點：光屬性', tone: 'green' },
      { label: '掉落：金龍鎧', tone: 'sakura' },
    ],
  },
  {
    id: '2',
    name: '虛空君王 · 阿薩隆',
    role: '世界 Boss',
    description: '來自虛空裂隙的黑暗君主，掌握吞噬光芒的禁忌之力。凡是與他對視的勇者，皆會墜入無盡的絕望深淵。',
    imageUrl: 'https://image.linehero.tw/images/boss_mov/dark/BOSS_idle.png',
    affinity: 'Tech',
    kanji: '虛',
    tags: [
      { label: '推薦等級 220+', tone: 'gold' },
      { label: '弱點：聖屬性', tone: 'green' },
      { label: '建議 5 人組隊', tone: 'sakura' },
    ],
  },
  {
    id: '3',
    name: '風暴巨人',
    role: '區域 Boss',
    description: '雷霆與狂風的化身，身軀高聳如山，每一次踏步都伴隨電光與轟鳴。只有最堅韌的戰士才能在風暴中屹立不搖。',
    imageUrl: 'https://image.linehero.tw/images/regions/power_require/3_3/thunder_storm_giant.png',
    affinity: 'Speed',
    kanji: '雷',
    tags: [
      { label: '推薦等級 90+', tone: 'gold' },
      { label: '弱點：土屬性', tone: 'green' },
      { label: '掉落：雷霆之石', tone: 'sakura' },
    ],
  },
];

const toneCls: Record<'gold' | 'green' | 'sakura', string> = {
  gold: 'border-hero-gold/40 text-hero-gold bg-hero-gold/10',
  green: 'border-hero-neon-green/40 text-hero-neon-green bg-hero-green/10',
  sakura: 'border-hero-sakura/40 text-hero-sakura bg-hero-sakura/10',
};

const Characters: React.FC = () => {
  const [activeChar, setActiveChar] = useState<BossData>(characters[0]);

  return (
    <section id="heroes" className="relative py-24 md:py-36 bg-hero-dark overflow-hidden section-divider">
      {/* BG */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[60%] h-full halftone-green opacity-20" />
        <div className="absolute top-20 left-0 w-full h-24 diagonal-stripes opacity-20" />
        <div className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-hero-gold/10 blur-[140px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Legendary Bosses / 傳說魔物"
          title={<>傳說<span className="text-hero-gold">魔物</span></>}
          description="踏入深淵、直面威脅大陸的世界級 Boss。點擊下方縮圖切換查看。"
        />

        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center">
          {/* Left: Character stage */}
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute inset-0 flex items-center justify-center font-kanji-deco text-white/[0.07] select-none pointer-events-none"
              style={{ fontSize: 'clamp(18rem, 36vw, 36rem)', lineHeight: 0.8 }}
            >
              {activeChar.kanji}
            </div>

            <div className="absolute inset-10 bg-hero-gold/10 blur-[120px] rounded-full" />

            <div className="relative mx-auto max-w-md">
              <div className="absolute -top-3 -left-3 z-30 clip-slash-tag bg-hero-gold text-black font-en-wide text-[10px] px-3 py-1">
                NO.{activeChar.id.padStart(3, '0')}
              </div>
              <div className="absolute -top-3 right-2 z-30 clip-slash-tag bg-hero-sakura text-white font-en-wide text-[10px] px-3 py-1">
                {activeChar.affinity.toUpperCase()}
              </div>

              <div className="absolute -inset-3 clip-hex bg-gradient-to-br from-hero-gold/70 via-hero-sakura/40 to-hero-neon-green/60" />
              <div className="absolute -inset-[6px] clip-hex bg-hero-dark" />

              <div className="relative clip-hex bg-gradient-to-b from-gray-900 to-black aspect-[3/4] overflow-hidden">
                <img
                  src={activeChar.imageUrl}
                  alt={`LINE Hero ${activeChar.role} - ${activeChar.name}`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute inset-0 scanlines opacity-30" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="font-en-wide text-[10px] text-hero-gold">{activeChar.role}</div>
                  <div className="font-serif-cn text-2xl md:text-3xl text-white mt-1">{activeChar.name}</div>
                </div>
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
                <span className="font-en-wide text-[10px] text-white/50">Profile / 0{activeChar.id}</span>
              </div>

              <h3 className="font-serif-cn text-3xl md:text-5xl text-white leading-tight">
                {activeChar.name}
              </h3>

              <div className="my-5 h-[2px] w-16 bg-gradient-to-r from-hero-gold to-transparent" />

              <p className="text-gray-300 text-base md:text-lg leading-relaxed border-l-[3px] border-hero-gold/60 pl-5">
                {activeChar.description}
              </p>

              {/* 敘事性戰鬥 tag（取代假的 STR/INT/LUK 數值） */}
              <div className="mt-6 flex flex-wrap gap-2">
                {activeChar.tags.map((tag) => (
                  <span
                    key={tag.label}
                    className={`clip-slash-tag border px-4 py-1.5 text-xs font-bold tracking-wider ${toneCls[tag.tone]}`}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Selector — 放大＋a11y */}
            <div className="relative z-20 mt-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-10 bg-hero-gold/60" aria-hidden="true" />
                <div className="font-en-wide text-[10px] text-hero-gold/80">Select Boss</div>
                <div className="text-[10px] text-white/40 tracking-wider">← 點擊切換 →</div>
              </div>
              <div className="flex gap-4" role="tablist" aria-label="Boss 切換">
                {characters.map((char) => {
                  const active = activeChar.id === char.id;
                  return (
                    <button
                      key={char.id}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      aria-label={`切換至 ${char.name}`}
                      onClick={() => setActiveChar(char)}
                      className={`relative flex-shrink-0 w-24 h-28 md:w-28 md:h-32 rounded-md overflow-hidden border-2 transition-all duration-300 cursor-pointer focus-visible:ring-2 focus-visible:ring-hero-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
                        active
                          ? 'border-hero-gold scale-[1.05] shadow-[0_0_30px_rgba(255,215,0,0.35)]'
                          : 'border-white/15 opacity-65 hover:opacity-100 hover:border-white/50'
                      }`}
                    >
                      <img src={char.imageUrl} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
                      <div className={`absolute bottom-1.5 left-0 right-0 text-center font-serif-cn text-[11px] px-1 pointer-events-none ${active ? 'text-hero-gold' : 'text-white/80'}`}>
                        {char.name.split(' · ')[0].slice(0, 4)}
                      </div>
                      {active && (
                        <div className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-hero-gold animate-pulse pointer-events-none" />
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
