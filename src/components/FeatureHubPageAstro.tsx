import React from 'react';

const PageLayout: React.FC<{ title: string; subtitle: string; accent?: string; children: React.ReactNode }> = ({ title, subtitle, accent = 'LINE Hero', children }) => (
  <div className="bg-hero-dark min-h-screen pt-28 pb-16 px-4 md:px-8 text-gray-100 relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('https://mumu.tw/images/noise.png')] opacity-[0.03] pointer-events-none mix-blend-overlay"></div>
    <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-hero-secondary/10 to-transparent pointer-events-none"></div>

    <div className="max-w-6xl mx-auto relative z-10">
      <header className="mb-12 text-center">
        <div className="inline-block px-3 py-1 mb-4 border border-hero-gold/30 rounded-full bg-hero-gold/5 backdrop-blur-sm">
          <p className="text-xs uppercase tracking-[0.2em] text-hero-gold font-bold">{accent}</p>
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight drop-shadow-lg">{title}</h1>
        <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto mb-6"></div>
        <p className="text-gray-300 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">{subtitle}</p>
      </header>

      <div className="space-y-8 animate-fade-in-up">{children}</div>
    </div>
  </div>
);

const features = [
  {
    title: '組隊副本',
    description: '5 人隊伍協作挑戰，取得副本代幣、稀有素材與強化資源。',
    href: '/feature-raid-team'
  },
  {
    title: '區域 Boss',
    description: '區域混亂值達標後 Boss 現身，討伐掉落圖騰碎片與精煉魂魄。',
    href: '/feature-region-boss'
  },
  {
    title: '鐵匠鋪',
    description: '強化、精煉、進階、洗練、星力、潛能與精煉轉移的核心養成中心。',
    href: '/feature-blacksmith'
  },
  {
    title: '背包與裝備',
    description: '管理裝備、強化材料與外觀收藏，打造最適合自己的配裝。',
    href: '/feature-inventory'
  },
  {
    title: '陣營系統',
    description: '選擇陣營、參與陣營戰與世界 Boss，累積陣營代幣換獎勵。',
    href: '/faction-intro'
  },
  {
    title: '社交與酒館',
    description: '社交看板、留言與酒館小遊戲，打造自己的冒險社群。',
    href: '/feature-social'
  },
];

export const FeatureHubPageAstro: React.FC = () => (
  <PageLayout
    title="功能介紹"
    subtitle="完整收錄 LineHero 各系統玩法與教學，依需求挑選最適合的成長路線。"
    accent="Features"
  >
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {features.map((feature) => (
        <div key={feature.href} className="glass-panel p-6 md:p-8 rounded-2xl border border-white/10">
          <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
          <p className="text-gray-400 text-sm md:text-base mb-4">
            {feature.description}
          </p>
          <a
            href={feature.href}
            className="text-hero-gold font-bold text-sm hover:text-white transition-colors"
          >
            查看教學
          </a>
        </div>
      ))}
    </div>

    <section className="mt-12 md:mt-16">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-black text-white mb-3">實機截圖</h2>
        <p className="text-gray-400 text-sm md:text-base">角色養成、戰鬥結算與技能施放畫面一覽。</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {[
          { src: '/images/screenshots/linehero-screenshot-2.jpg', title: '傳奇冒險者養成' },
          { src: '/images/screenshots/linehero-screenshot-1.jpg', title: '仙鶴騎士對戰' },
          { src: '/images/screenshots/linehero-screenshot-3.jpg', title: '天龍戰士對戰' },
          { src: '/images/screenshots/linehero-screenshot-4.jpg', title: '戰鬥結算與技能紀錄' },
        ].map((shot) => (
          <figure key={shot.src} className="glass-panel rounded-2xl border border-white/10 overflow-hidden">
            <div className="relative aspect-[9/19]">
              <img src={shot.src} alt={shot.title} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
            </div>
            <figcaption className="px-4 py-3 text-xs md:text-sm text-gray-300">{shot.title}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  </PageLayout>
);

export default FeatureHubPageAstro;
