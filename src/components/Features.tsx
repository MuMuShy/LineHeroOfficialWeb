import React from 'react';
import { trackCtaClick } from '../services/analytics';
import SectionHeader from './SectionHeader';

type Accent = 'gold' | 'green';

type Feature = {
  id: string;
  index: string;
  title: string;
  sub: string;
  catchCopy: string;
  body: React.ReactNode;
  accent: Accent;
  media: React.ReactNode;
  cta?: { href: string; label: string; track: string };
};

type MoreFeature = {
  id: string;
  title: string;
  sub: string;
  description: string;
  cta: { href: string; label: string; track: string };
};

const accentMap: Record<Accent, { text: string; bg: string; ring: string; glow: string; glowFrom: string }> = {
  gold: {
    text: 'text-hero-gold',
    bg: 'bg-hero-gold/10',
    ring: 'border-hero-gold/50',
    glow: 'shadow-[0_0_60px_rgba(255,215,0,0.22)]',
    glowFrom: 'from-hero-gold/20',
  },
  green: {
    text: 'text-hero-neon-green',
    bg: 'bg-hero-green/10',
    ring: 'border-hero-green/50',
    glow: 'shadow-[0_0_60px_rgba(0,255,157,0.22)]',
    glowFrom: 'from-hero-green/20',
  },
};

const features: Feature[] = [
  {
    id: 'combat',
    index: '01',
    title: '視覺戰鬥',
    sub: 'VISUAL BATTLE',
    catchCopy: 'LINE 聊天即時戰鬥 ／ 點擊放技能',
    accent: 'green',
    body: (
      <>
        <p>
          利用 LINE Flex Message 技術，在免下載的聊天視窗裡就能體驗精美戰鬥畫面。保留經典文字冒險的深度敘事，搭配直覺的按鈕操作。
          <span className="text-white font-bold catch-underline">不需要打字</span>，點擊即可施放華麗技能。
        </p>
        <ul className="mt-4 space-y-2 text-sm text-gray-400">
          <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-hero-neon-green rounded-full" aria-hidden="true" /> 多樣化技能特效與屬性相剋</li>
          <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-hero-neon-green rounded-full" aria-hidden="true" /> 即時戰鬥結算與掉寶通知</li>
        </ul>
      </>
    ),
    media: (
      <div className="relative w-full rounded-2xl border border-white/10 bg-gradient-to-br from-[#101318] via-[#111a1f] to-[#0b0f12] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
        <div className="px-4 py-3 border-b border-white/10 flex items-center justify-between text-xs text-gray-400">
          <span className="font-en-wide">FLEX BATTLE</span>
          <span className="text-hero-neon-green font-bold tracking-widest">● LIVE</span>
        </div>
        <div className="p-5 space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-black/60 border border-white/10 flex items-center justify-center">
              <img src="https://image.linehero.tw/images/npc/boss/rodras/rodras-w96.webp" alt="冥幽境守護者頭像" className="w-12 h-12 object-contain" />
            </div>
            <div className="flex-1 space-y-2">
              <div className="text-white font-bold text-sm">冥幽境守護者</div>
              <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full w-3/5 bg-gradient-to-r from-red-500 to-orange-400" />
              </div>
              <div className="text-xs text-gray-400">HP 58% · 狂暴倒數 02:15</div>
            </div>
            <button type="button" className="text-xs font-bold px-3 py-2 rounded-lg bg-hero-green/20 border border-hero-green/40 text-hero-neon-green focus-visible:ring-2 focus-visible:ring-hero-gold">集火</button>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[
              { i: 'https://image.linehero.tw/images/skills/swordsman/skill-16-w64.webp', n: '強力斬擊' },
              { i: 'https://image.linehero.tw/images/skills/berserker/skill-33-w64.webp', n: '致命一擊' },
              { i: 'https://image.linehero.tw/images/skills/berserker/skill-49-w64.webp', n: '鋼鐵意志' },
            ].map((s, idx) => (
              <div key={s.n} className="bg-black/50 border border-white/10 rounded-xl p-3 text-center">
                <img src={s.i} alt={`LINE Hero 劍士技能 - ${s.n}`} className="w-10 h-10 mx-auto" />
                <div className="text-[10px] text-gray-400 mt-2 font-en-wide">SKILL 0{idx + 1}</div>
              </div>
            ))}
          </div>
          <div className="bg-black/50 border border-white/10 rounded-xl p-3 text-xs text-gray-300 space-y-1 font-mono">
            <div>夜行者 使用「裂地斬」造成 82,450 傷害</div>
            <div>掉落：星塵 x3、圖騰碎片 x1</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'equip',
    index: '02',
    title: '裝備養成',
    sub: 'GEAR & CRAFT',
    catchCopy: '強化傳說神器 ／ 自由交易買賣',
    accent: 'gold',
    body: (
      <>
        <p>
          精煉魂魄、屬性結晶、強化衝裝。每一把武器都是獨一無二的。
          強化你的裝備，或到交易所與其他玩家<span className="catch-underline">自由買賣</span>。
        </p>
        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="clip-slash-soft bg-white/5 border border-white/10 p-5">
            <div className="text-hero-gold font-black text-lg">轉蛋系統 ➜</div>
            <div className="text-xs text-gray-400 mt-1">試試手氣，獲取傳說夥伴</div>
          </div>
          <div className="clip-slash-soft bg-white/5 border border-white/10 p-5">
            <div className="text-hero-gold font-black text-lg">自由交易 ➜</div>
            <div className="text-xs text-gray-400 mt-1">寶物可上架拍賣場</div>
          </div>
        </div>
      </>
    ),
    media: (
      <div className="relative grid grid-cols-2 gap-4">
        <img src="https://image.linehero.tw/official_web/messageImage_1763667502560-w220.webp" alt="LINE Hero 裝備強化介面" className="rounded-2xl border border-white/10 shadow-2xl transform -translate-y-3 rotate-[-2deg]" />
        <img src="https://image.linehero.tw/official_web/beg-w220.webp" alt="LINE Hero 背包管理介面" className="rounded-2xl border border-white/10 shadow-2xl transform translate-y-3 rotate-[2deg]" />
      </div>
    ),
  },
  {
    id: 'web',
    index: '03',
    title: 'Web 網頁版',
    sub: 'WEB DASHBOARD',
    catchCopy: '上班手機秒開戰 ／ 回家電腦全家當',
    accent: 'green',
    body: (
      <p>
        上班用手機秒開戰、回家電腦管理全家當、存檔雲端零延遲同步。
        Web 版提供更詳細的數據分析、更方便的管理介面，讓你在任何螢幕繼續冒險。
      </p>
    ),
    cta: { href: '/web-rpg', label: '了解網頁 RPG', track: 'features-web' },
    media: (
      <div className="relative bg-[#141519] rounded-xl p-2 shadow-2xl border border-white/10">
        <div className="flex items-center gap-2 mb-2 px-3 border-b border-white/10 pb-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
          </div>
          <div className="flex-1 bg-black/50 rounded text-[10px] text-gray-500 px-3 py-1 text-center font-mono">linehero.tw/dashboard</div>
        </div>
        <img src="https://image.linehero.tw/official_web/web_view-w420.webp" alt="LINE Hero Web 儀表板示意" className="w-full rounded border border-white/10" />
      </div>
    ),
  },
];

const moreFeatures: MoreFeature[] = [
  {
    id: 'explore',
    title: '探索模式',
    sub: 'ROGUELIKE EXPLORE',
    description: 'Roguelike 隨機地圖與事件，每次挑戰都是全新冒險。搶先體驗 Web 版未來將引入 LINE 平台。',
    cta: { href: 'https://explore.linehero.tw', label: '立即探索', track: 'features-explore' },
  },
  {
    id: 'tavern',
    title: '冒險者酒館',
    sub: 'ADVENTURERS TAVERN',
    description: '公開社群平台，無需登入即可瀏覽。分享冒險心得、查看最新資訊、與其他玩家交流互動。',
    cta: { href: 'https://tarven.linehero.tw', label: '前往酒館', track: 'features-tavern' },
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="relative py-24 md:py-36 bg-hero-dark overflow-hidden section-divider">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-24 diagonal-stripes-green opacity-25" />
        <div className="absolute bottom-0 right-0 w-full h-24 diagonal-stripes opacity-25" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-hero-gold/5 rounded-full blur-[140px]" />
        <div
          aria-hidden="true"
          className="absolute right-0 top-20 font-kanji-deco text-white/[0.03] leading-none select-none"
          style={{ fontSize: 'clamp(14rem, 26vw, 30rem)' }}
        >
          特
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="System Features / 特色"
          title={<>遊戲<span className="text-hero-gold">特色</span></>}
          description={<>免下載安裝，打開 LINE 就能玩的完整 RPG 世界。結合 <span className="text-white font-bold">LIFF 視覺技術</span>，既有經典文字冒險的深度敘事，更有精美介面觸手可及。</>}
        />

        {/* 3 主要特色 */}
        <div className="space-y-24 md:space-y-36">
          {features.map((f, idx) => {
            const accent = accentMap[f.accent];
            const reverse = idx % 2 === 1;
            return (
              <article key={f.id} className="relative">
                {/* 巨大 index — 純裝飾 */}
                <div
                  aria-hidden="true"
                  className={`absolute ${reverse ? 'right-0 md:-right-4' : 'left-0 md:-left-4'} -top-6 md:-top-14 font-en-display italic leading-none select-none pointer-events-none text-hero-gold/15`}
                  style={{ fontSize: 'clamp(5rem, 16vw, 16rem)' }}
                >
                  {f.index}
                </div>

                <div className={`grid lg:grid-cols-2 gap-10 md:gap-16 items-center relative ${reverse ? 'lg:[&>div:first-child]:order-2' : ''}`}>
                  {/* Text */}
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-5">
                      <span className={`clip-slash-tag ${accent.bg} border ${accent.ring} px-4 py-1.5 font-en-wide text-[10px] ${accent.text}`}>
                        NO.{f.index} ／ {f.sub}
                      </span>
                    </div>
                    <h3 className="font-serif-cn text-4xl md:text-6xl text-white leading-tight">
                      {f.title}
                    </h3>
                    <p className={`mt-4 text-lg md:text-2xl font-bold ${accent.text}`}>{f.catchCopy}</p>
                    <div className="mt-6 text-gray-300 text-base md:text-lg leading-relaxed">
                      {f.body}
                    </div>
                    {f.cta && (
                      <a
                        href={f.cta.href}
                        onClick={() => trackCtaClick(f.cta!.label, f.cta!.track, f.cta!.href)}
                        className={`mt-6 inline-flex items-center gap-3 px-7 py-3 ${accent.bg} border ${accent.ring} ${accent.text} font-bold hover:scale-[1.03] transition-transform focus-visible:ring-2 focus-visible:ring-hero-gold rounded-sm`}
                      >
                        <span className="tracking-widest">{f.cta.label}</span>
                        <span aria-hidden="true">→</span>
                      </a>
                    )}
                  </div>

                  {/* Media */}
                  <div className="relative group">
                    <div className={`absolute -inset-4 bg-gradient-to-br ${accent.glowFrom} to-transparent blur-2xl opacity-70 group-hover:opacity-100 transition-opacity`} />
                    <div className={`relative transform transition-transform duration-500 group-hover:-translate-y-1 ${accent.glow}`}>
                      {f.media}
                      <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-hero-gold" aria-hidden="true" />
                      <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-hero-gold" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* More Features — 緊湊卡片 */}
        <div className="mt-24 md:mt-32">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-12 bg-hero-gold" aria-hidden="true" />
            <span className="font-en-wide text-[10px] text-hero-gold">More Features</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {moreFeatures.map((m) => (
              <a
                key={m.id}
                href={m.cta.href}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackCtaClick(m.cta.label, m.cta.track, m.cta.href)}
                className="group relative p-6 md:p-7 bg-white/[0.03] border border-white/10 hover:border-hero-gold/50 hover:bg-white/[0.06] transition-colors focus-visible:ring-2 focus-visible:ring-hero-gold rounded-sm"
              >
                <div className="font-en-wide text-[9px] text-hero-gold mb-2">{m.sub}</div>
                <h3 className="font-serif-cn text-2xl md:text-3xl text-white mb-2">{m.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{m.description}</p>
                <div className="mt-4 flex items-center gap-2 text-hero-gold text-sm font-bold group-hover:gap-3 transition-all">
                  <span>{m.cta.label}</span>
                  <span aria-hidden="true">→</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Security Promise */}
        <div className="mt-24 md:mt-32 relative">
          <div className="absolute inset-0 bg-hero-green/5 blur-[100px] pointer-events-none" />
          <div className="relative clip-slash-soft glass-panel p-8 md:p-14 text-center max-w-4xl mx-auto border border-white/10">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-hero-neon-green to-transparent" />
            <div className="font-en-wide text-[10px] text-hero-neon-green mb-2">Security Promise</div>
            <h3 className="text-3xl md:text-5xl text-white mb-4 font-serif-cn">安全承諾</h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              LineHero 僅使用 LINE Login 機制來驗證身分。
              <br />
              我們<span className="text-hero-neon-green font-bold">絕不</span>蒐集您的對話紀錄或好友名單，請安心遊玩。
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['免註冊帳號', '免下載程式', '官方認證開發者'].map((item) => (
                <div key={item} className="clip-slash-tag flex items-center gap-2 px-5 py-2 bg-white/5 border border-white/10 text-sm text-gray-300">
                  <svg className="w-4 h-4 text-hero-neon-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
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
