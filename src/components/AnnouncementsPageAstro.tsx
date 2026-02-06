import React from 'react';
import { trackCtaClick } from '../services/analytics';

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

export const AnnouncementsPageAstro: React.FC = () => (
  <PageLayout
    title="遊戲公告"
    subtitle="最新遊戲公告、維護通知與版本更新資訊，隨時掌握 LineHero 最新動態。"
    accent="Announcements"
  >
    <section className="space-y-6">
      <article className="bg-hero-panel/60 border border-hero-gold/40 rounded-2xl p-6 shadow-xl">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 rounded-full text-xs font-bold border bg-hero-gold/10 border-hero-gold/30 text-hero-gold">
            活動公告
          </span>
          <time className="text-gray-400 text-sm">2026-02-09</time>
        </div>
        <h2 className="text-xl font-bold text-white mb-3">春節慶典｜活動公告</h2>
        <p className="text-gray-300 text-sm leading-relaxed mb-4">
          刷活動副本拿紅包/龍年晶石，兌換活動商店獎勵、開寶箱、升階限定裝備；每日參與祈福樹互動拿獎勵，里程碑還可領稀有造型。
        </p>
        <a
          href="/spring-festival"
          className="inline-flex items-center gap-2 text-hero-gold font-bold text-sm hover:text-white transition-colors"
        >
          查看活動詳情
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </article>

      <article className="bg-hero-panel/60 border border-hero-gold/40 rounded-2xl p-6 shadow-xl">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 rounded-full text-xs font-bold border bg-green-500/20 border-green-500/40 text-green-300">
            版本更新
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-hero-gold/10 border border-hero-gold/30 text-hero-gold">
            更新彙整
          </span>
          <time className="text-gray-400 text-sm">2026-02-05</time>
        </div>
        <h2 className="text-xl font-bold text-white mb-3">近期版本更新彙整（掃蕩、世界 Boss、效能與體驗優化）</h2>
        <p className="text-gray-300 text-sm leading-relaxed mb-4">
          近 30 天更新整理：掃蕩功能與隊伍預設、世界 Boss 結算強化、區域 Boss/戰鬥效能與 UI 體驗優化、商城與裝備資訊改善等。
        </p>
        <a
          href="/announcements-2026-02-roundup"
          className="inline-flex items-center gap-2 text-hero-gold font-bold text-sm hover:text-white transition-colors"
        >
          查看全文
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </article>

      <article className="bg-hero-panel/60 border border-hero-gold/40 rounded-2xl p-6 shadow-xl">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 rounded-full text-xs font-bold border bg-green-500/20 border-green-500/40 text-green-300">
            版本更新
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-500/20 border border-red-500/40 text-red-300">
            重要
          </span>
          <time className="text-gray-400 text-sm">2025-03-01</time>
        </div>
        <h2 className="text-xl font-bold text-white mb-3">LineHero v2.0 大型更新公告</h2>
        <p className="text-gray-300 text-sm leading-relaxed mb-4">
          區域 Boss、討伐小隊、副本挑戰、星力強化等八大系統全面升級，完整內容請點入查看。
        </p>
        <a
          href="/v2.0"
          className="inline-flex items-center gap-2 text-hero-gold font-bold text-sm hover:text-white transition-colors"
        >
          查看全文
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </article>

      <div className="bg-hero-panel/40 border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center space-y-4">
        <h3 className="text-lg font-bold text-white">玩家交流與即時公告</h3>
        <p className="text-gray-300 text-sm max-w-2xl leading-relaxed">
          即時性問題或公告可加入玩家討論區，管理員可以隨時回覆。
          <br />
          您已被邀請加入「LineHero-無盡冒險 玩家交流群」！請點選以下連結或是掃描 QR Code 加入社群！
        </p>

        <div className="p-2 bg-white rounded-lg shadow-lg">
          <img
            src="/line_group_qr.jpg"
            alt="Line Exchange Group QR Code"
            className="w-32 h-32 md:w-40 md:h-40 object-contain"
          />
        </div>

        <a
          href="https://line.me/ti/g2/DJg84HtyGvoYNMEZdQEgrosPZS8bgRonuW8aWQ?utm_source=invitation&utm_medium=link_copy&utm_campaign=default"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 bg-[#06C755] hover:bg-[#05b34c] text-white font-bold rounded-full transition-all hover:scale-105 shadow-lg shadow-green-900/20"
          onClick={() => trackCtaClick('加入 Line 社群', 'announcements', 'https://line.me/ti/g2/DJg84HtyGvoYNMEZdQEgrosPZS8bgRonuW8aWQ?utm_source=invitation&utm_medium=link_copy&utm_campaign=default')}
        >
          <span>加入 Line 社群</span>
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
          </svg>
        </a>
      </div>
    </section>
  </PageLayout>
);

export default AnnouncementsPageAstro;
