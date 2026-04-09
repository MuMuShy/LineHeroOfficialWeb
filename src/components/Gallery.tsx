import React from 'react';
import { trackCtaClick } from '../services/analytics';
import SectionHeader from './SectionHeader';

const screenshots = [
  { id: 1, url: '/images/screenshots/linehero-screenshot-1.webp', title: '仙鶴騎士對戰', tag: 'BATTLE' },
  { id: 2, url: '/images/screenshots/linehero-screenshot-2.webp', title: '傳奇冒險者養成', tag: 'GROW' },
  { id: 3, url: '/images/screenshots/linehero-screenshot-3.webp', title: '天龍戰士對戰', tag: 'PVP' },
  { id: 4, url: '/images/screenshots/linehero-screenshot-4.webp', title: '戰鬥結算與技能紀錄', tag: 'RESULT' },
  { id: 5, url: '/images/screenshots/linehero-screenshot-5.webp', title: '鐵匠鋪詞綴重鑄', tag: 'CRAFT' },
  { id: 6, url: '/images/screenshots/linehero-screenshot-6.webp', title: 'PVP 對戰', tag: 'PVP' },
  { id: 7, url: '/images/screenshots/linehero-screenshot-7.webp', title: '副本 Boss 掉落', tag: 'DROP' },
  { id: 8, url: '/images/screenshots/linehero-screenshot-8.webp', title: '圖鑑與怪物資訊', tag: 'INDEX' },
];

// 僅 hover 時微傾，靜態保持水平以保留截圖辨識度
const hoverTiltPattern = [
  'hover:-rotate-1',
  'hover:rotate-1',
  'hover:rotate-0',
  'hover:-rotate-1',
  'hover:rotate-1',
  'hover:rotate-0',
  'hover:-rotate-1',
  'hover:rotate-1',
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="relative py-24 md:py-32 bg-gradient-to-b from-hero-dark via-[#05060a] to-black section-divider overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-hero-gold/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-hero-secondary/15 rounded-full blur-[120px]" />
        <div className="absolute inset-0 grid-lines opacity-20" />
        <div
          aria-hidden
          className="absolute left-[-2rem] bottom-10 font-kanji-deco text-white/[0.04] leading-none select-none"
          style={{ fontSize: 'clamp(14rem, 24vw, 26rem)' }}
        >
          畫
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="In-Game Screens / 遊戲畫面"
          title={<>遊戲<span className="text-hero-gold">畫面</span></>}
          description="真實遊戲截圖：角色養成、戰鬥結算與技能施放，直接在 LINE 聊天室暢玩。"
        />

        {/* Screenshot grid — 靜態水平，hover 才傾斜 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {screenshots.map((shot, idx) => (
            <figure key={shot.id} className={`group relative ${hoverTiltPattern[idx]} transition-transform duration-500`}>
              <div className="absolute -inset-[2px] clip-slash-soft bg-gradient-to-br from-hero-gold/50 to-hero-neon-green/40 opacity-60 group-hover:opacity-100 transition-opacity" />
              <div className="absolute -inset-[1px] clip-slash-soft bg-hero-dark" />

              <div className="relative clip-slash-soft overflow-hidden aspect-[9/16] bg-black">
                <img
                  src={shot.url}
                  alt={`LINE Hero 遊戲截圖 - ${shot.title}`}
                  loading="lazy"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-[1.05]"
                />
                {/* 柔和底部漸層，保留截圖辨識度 */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />

                <div className="absolute top-3 left-3 clip-slash-tag bg-hero-gold text-black font-en-wide text-[9px] px-2.5 py-1">
                  NO.{String(shot.id).padStart(2, '0')}
                </div>
                <div className="absolute top-3 right-3 clip-slash-tag bg-black/70 border border-white/20 text-hero-neon-green font-en-wide text-[9px] px-2.5 py-1">
                  {shot.tag}
                </div>

                <figcaption className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="font-en-wide text-[9px] text-hero-gold/80">LINE UI</div>
                  <div className="text-white font-bold text-sm mt-1 drop-shadow-lg">{shot.title}</div>
                </figcaption>
              </div>

              <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-hero-gold" aria-hidden="true" />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-hero-neon-green" aria-hidden="true" />
            </figure>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 flex justify-center">
          <a
            href="https://lin.ee/3JlUhak"
            target="_blank"
            rel="noreferrer"
            className="group bg-white/5 border border-white/20 hover:border-hero-gold hover:bg-white/10 text-white px-8 py-4 flex items-center gap-3 transition-all rounded-sm focus-visible:ring-2 focus-visible:ring-hero-gold"
            onClick={() => trackCtaClick('查看更多遊戲截圖', 'gallery', 'https://lin.ee/3JlUhak')}
          >
            <span className="font-en-display tracking-widest text-lg">SEE MORE</span>
            <span className="text-sm text-gray-300">／查看更多遊戲截圖</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
