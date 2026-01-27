import React from 'react';
import { Page } from '../types';
import { trackCtaClick } from '../services/analytics';

const PageLayout: React.FC<{ title: string; subtitle: string; accent?: string; children: React.ReactNode }> = ({ title, subtitle, accent = 'LINE Hero', children }) => (
  <div className="bg-hero-dark min-h-screen pt-28 pb-16 px-4 md:px-8 text-gray-100 relative overflow-hidden">
    {/* Background Texture */}
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

const Card: React.FC<{ title: string; body: React.ReactNode; badge?: string }> = ({ title, body, badge }) => (
  <div className="glass-panel p-6 md:p-8 rounded-2xl hover:border-hero-gold/30 transition-all duration-300 group hover:-translate-y-1 relative">
    {badge && (
      <span className="absolute top-4 right-4 text-[10px] font-bold text-hero-gold bg-hero-gold/10 border border-hero-gold/20 px-2 py-1 rounded-sm uppercase tracking-wider">
        {badge}
      </span>
    )}
    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-hero-gold transition-colors">{title}</h3>
    <div className="text-gray-400 leading-relaxed text-sm md:text-base border-t border-white/5 pt-3">
      {body}
    </div>
  </div>
);

const WEB_LIFF_SCREENS = [
  {
    title: '戰鬥總覽',
    description: 'Boss 與隊伍狀態一覽。',
    image: 'https://mumu.tw/linehero/images/regions/boss/shadow_abyss_boss.png',
  },
  {
    title: '副本入口',
    description: '副本清單與掉落資訊。',
    image: 'https://mumu.tw/linehero/images/regions/boss/four_symbols_domain_boss.png',
  },
  {
    title: '無盡之塔',
    description: '長期進度與高層挑戰。',
    image: 'https://mumu.tw/linehero/images/tower/endless_tower_bg_landscape.png',
  },
  {
    title: '裝備管理',
    description: '配裝與外觀整合介面。',
    image: 'https://mumu.tw/linehero/images/regions/power_require/2_2/0006.png',
  },
  {
    title: '掉落展示',
    description: '稀有裝備圖鑑預覽。',
    image: 'https://mumu.tw/linehero/images/items/equipments/boss_weapon_shadow_abyss.png',
  },
  {
    title: '世界 Boss',
    description: '大型 Boss 討伐畫面。',
    image: 'https://mumu.tw/linehero/images/regions/boss/boss_girl2_small.png',
  },
];

export const GameIntroLinePage: React.FC = () => (
  <PageLayout
    title="LINE 版玩法介紹"
    subtitle="不必下載 App，直接在 LINE 聊天室刷探索、打怪、衝裝備。所有指令都能在聊天輸入，上班時也能低調玩。"
    accent="LINE Chat RPG"
  >
    <section className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-6">
      <div className="bg-hero-panel/60 border border-white/10 rounded-2xl p-6 md:p-8 space-y-5">
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-hero-gold/30 rounded-full bg-hero-gold/5">
          <span className="text-xs uppercase tracking-[0.2em] text-hero-gold font-bold">Chat Driven</span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/60">LINE Only</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-black text-white">在聊天室就能刷探索</h2>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
          以指令操控角色，刷探索、打怪、強化裝備都在 LINE 內完成。
          不需下載、不佔空間，訊息雲端同步，隨時回來續戰。
        </p>
        <div className="flex flex-wrap gap-2 text-xs text-gray-300">
          <span className="px-3 py-1 rounded-full bg-black/40 border border-white/10">免下載</span>
          <span className="px-3 py-1 rounded-full bg-black/40 border border-white/10">低調上班可玩</span>
          <span className="px-3 py-1 rounded-full bg-black/40 border border-white/10">全平台同步</span>
        </div>
      </div>
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/40">
        <img
          src="https://mumu.tw/linehero/images/hero_avatar/character_magic_female.png"
          alt="LINE Hero"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4 bg-black/60 border border-white/10 rounded-xl p-4">
          <div className="text-xs text-hero-gold font-bold">指令操作</div>
          <div className="text-white text-sm font-bold">/探索 /打怪 /強化 /背包</div>
          <div className="text-xs text-gray-400">像回訊息一樣推進冒險</div>
        </div>
      </div>
    </section>

    <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card title="聊天即遊戲" body="以指令方式操控角色，聊天同時推進劇情、刷探索、打怪、強化裝備。" badge="核心" />
      <Card title="上班可玩" body="LINE 聊天室刷一刷就好，不會開大聲光影，輕鬆度過辦公室空檔。" />
      <Card title="零安裝、超輕量" body="任何手機皆可玩，訊息雲端同步，不怕換裝置或清除快取。" />
    </section>

    <section className="bg-gradient-to-r from-hero-panel/70 to-black/40 border border-hero-gold/20 rounded-2xl p-6 md:p-8 shadow-2xl space-y-5">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h2 className="text-2xl font-bold text-white">快速上手步驟</h2>
        <a
          className="text-hero-gold font-bold text-sm"
          href="https://lin.ee/Isv2392o"
          target="_blank"
          rel="noreferrer"
          onClick={() => trackCtaClick('快速上手連結', 'game-intro-line', 'https://lin.ee/Isv2392o')}
        >
          https://lin.ee/Isv2392o
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm text-gray-300">
        <div className="bg-black/40 border border-white/10 rounded-xl p-4 space-y-2">
          <div className="text-hero-gold font-bold">Step 1</div>
          <div>掃描 QR Code 或加好友。</div>
        </div>
        <div className="bg-black/40 border border-white/10 rounded-xl p-4 space-y-2">
          <div className="text-hero-gold font-bold">Step 2</div>
          <div>建立角色並完成新手教學。</div>
        </div>
        <div className="bg-black/40 border border-white/10 rounded-xl p-4 space-y-2">
          <div className="text-hero-gold font-bold">Step 3</div>
          <div>推進探索與活動副本。</div>
        </div>
        <div className="bg-black/40 border border-white/10 rounded-xl p-4 space-y-2">
          <div className="text-hero-gold font-bold">Step 4</div>
          <div>每日登入領獎並強化裝備。</div>
        </div>
      </div>
    </section>

    <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card title="適合誰" body="想在辦公室或通勤時用碎片時間刷探索、打怪、練裝備的玩家。" />
      <Card title="推薦玩法" body="每日登入刷探索、衝裝備，活動副本打好打滿；聊天視窗隨時回來續戰。" />
    </section>
  </PageLayout>
);

export const GameIntroWebPage: React.FC = () => (
  <PageLayout
    title="Web 版玩法介紹"
    subtitle="一樣的宇宙，專注裝備強化、精煉、配裝與拍賣場交易。"
    accent="Web Client"
  >
    <section className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-6">
      <div className="bg-hero-panel/60 border border-white/10 rounded-2xl p-6 md:p-8 space-y-5">
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-hero-gold/30 rounded-full bg-hero-gold/5">
          <span className="text-xs uppercase tracking-[0.2em] text-hero-gold font-bold">LIFF Web</span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/60">UI Focus</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-black text-white">大螢幕養成，效率全開</h2>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
          Web 版提供完整 UI 與清晰資訊排列，強化、精煉、配裝、拍賣場交易與排行榜
          一次到位，適合深度養成與配裝策略玩家。
        </p>
        <div className="flex flex-wrap gap-2 text-xs text-gray-300">
          <span className="px-3 py-1 rounded-full bg-black/40 border border-white/10">視覺化管理</span>
          <span className="px-3 py-1 rounded-full bg-black/40 border border-white/10">跨平台同步</span>
          <span className="px-3 py-1 rounded-full bg-black/40 border border-white/10">大畫面效率</span>
        </div>
      </div>
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/40">
        <img
          src="https://mumu.tw/linehero/images/regions/boss/four_symbols_domain_boss.png"
          alt="Web UI"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4 bg-black/60 border border-white/10 rounded-xl p-4">
          <div className="text-xs text-hero-gold font-bold">LIFF 介面</div>
          <div className="text-white text-sm font-bold">裝備、拍賣場、排行榜全都在一頁掌握</div>
          <div className="text-xs text-gray-400">操作更直覺，適合長時間配裝</div>
        </div>
      </div>
    </section>

    <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card title="UI 重新設計" body="包含角色面板、夥伴、拍賣場、排行榜等完整界面，視覺化管理裝備。" badge="視覺" />
      <Card title="跨平台同步" body="資料與 LINE 版共通，換裝置不丟進度，可無縫切換。" />
      <Card title="長時間養成" body="大螢幕操作更有效率，適合研究詞綴、星力與裝備搭配。" />
    </section>

    <section className="bg-hero-panel/70 border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl space-y-5">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h2 className="text-2xl font-bold text-white">LIFF 介面畫面</h2>
        <span className="text-xs text-gray-400">畫面示意</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {WEB_LIFF_SCREENS.map((screen) => (
          <div key={screen.title} className="bg-black/40 border border-white/10 rounded-2xl overflow-hidden">
            <div className="h-44 bg-black/60">
              <img src={screen.image} alt={screen.title} className="w-full h-full object-cover opacity-85" />
            </div>
            <div className="p-4 space-y-1">
              <div className="text-sm font-bold text-white">{screen.title}</div>
              <div className="text-xs text-gray-400">{screen.description}</div>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="bg-hero-panel/70 border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl">
      <h2 className="text-2xl font-bold text-white mb-4">常用模組</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card title="裝備強化與精煉" body="強化、精煉、分解一次完成。" />
        <Card title="拍賣場" body="刊登與搜尋裝備或素材，透明成交紀錄，沒有競標只有快速成交。" />
        <Card title="排行榜與賽季" body="追蹤個人與伺服器排行榜。" />
      </div>
    </section>

    <Card title="進入方式" body={<span>從 LINE 聊天視窗中使用冒險者之路即可自動跳轉，使用 LINE 版同帳號登入即可同步角色。</span>} />
  </PageLayout>
);

export const ShopPage: React.FC = () => (
  <PageLayout
    title="商城／儲值"
    subtitle="支持伺服器運營並領取專屬禮包，讓冒險更順暢。"
    accent="Shop"
  >
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card title="傳奇冒險者" body="主要禮包解鎖傳說特權，提升養成效率與資源取得。" />
      <Card title="安全支付" body="透過第三方交易平台完成，所有訂單可於客服查詢並有發票。" />
      <Card title="專屬客服" body="遇到問題可直接聯絡客服，提供完整交易與帳號協助。" />
    </div>

    <div className="bg-hero-panel/60 border border-hero-gold/30 rounded-2xl p-6 md:p-8 shadow-2xl">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">贊助支持</h2>
          <p className="text-gray-300 text-sm md:text-base">
            單人獨立開發、長期維護伺服器。您的支持將直接用於伺服器運行與新內容開發。
          </p>
        </div>
        <a
          href="https://sponsor.linehero.tw/tab/support"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-hero-gold/20 border border-hero-gold/50 text-hero-gold hover:text-white hover:bg-hero-gold/30 transition-colors px-5 py-3 rounded-xl font-bold text-sm"
          onClick={() => trackCtaClick('前往贊助頁', 'shop', 'https://sponsor.linehero.tw/tab/support')}
        >
          前往贊助頁
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>

    <div className="bg-hero-panel/60 border border-hero-gold/30 rounded-2xl p-6 md:p-8 shadow-2xl space-y-4">
      <h2 className="text-2xl font-bold text-white">禮包：傳奇冒險者</h2>
      <p className="text-gray-300 text-sm md:text-base">示意畫面 可於遊戲中的商城進行購買。</p>
      <div className="rounded-xl overflow-hidden border border-white/10 bg-black/40">
        <iframe
          src="https://portaly.cc/embed/linehero/product/BJ6fKVchaOTYzjbV1F2S"
          style={{ width: '100%', height: '620px', border: 0 }}
          loading="lazy"
          title="傳奇冒險者禮包"
        ></iframe>
      </div>
    </div>

    <div className="bg-hero-panel/60 border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">純贊助榜單</h2>
          <p className="text-gray-300 text-sm md:text-base">
            純粹贊助包月或一次性支持的玩家將列入榜單。此贊助不包括任何遊戲內商品或獎勵 詳情可聯繫客服。
          </p>
        </div>
        <a
          href="https://lin.ee/XSHIaG2"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 bg-hero-gold/20 border border-hero-gold/40 text-hero-gold hover:text-white hover:bg-hero-gold/30 transition-colors px-5 py-3 rounded-xl font-bold text-sm"
          onClick={() => trackCtaClick('聯絡客服', 'shop', 'https://lin.ee/XSHIaG2')}
        >
          聯絡客服
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-300">
        {[
          { title: '星河守護者', name: 'Lin', plan: '包月贊助', amount: 'NT$ 499' },
          { title: '霜火旅人', name: 'Lin', plan: '一次性贊助', amount: 'NT$ 1,200' },
          { title: '永夜行者', name: 'Lin', plan: '包月贊助', amount: 'NT$ 999' },
          { title: '晨曦弓手', name: 'Lin', plan: '一次性贊助', amount: 'NT$ 800' },
          { title: '深淵祭司', name: 'Lin', plan: '包月贊助', amount: 'NT$ 299' },
          { title: '隕星守望', name: 'Lin', plan: '一次性贊助', amount: 'NT$ 2,000' },
        ].map((entry) => (
          <div key={`${entry.title}-${entry.plan}-${entry.amount}`} className="bg-black/40 border border-white/10 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div className="text-white font-bold">{entry.title}</div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-hero-gold">VIP</span>
            </div>
            <div className="text-xs text-gray-400 mt-1">玩家：{entry.name}</div>
            <div className="text-xs text-gray-400 mt-1">{entry.plan}</div>
            <div className="text-hero-gold font-bold mt-2">{entry.amount}</div>
          </div>
        ))}
      </div>
      <div className="bg-black/40 border border-white/10 rounded-xl p-4">
        <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
          <span className="uppercase tracking-[0.3em]">Sponsor Board</span>
          <span className="text-hero-gold font-bold">示意</span>
        </div>
        <div className="space-y-3 text-sm text-gray-300">
          {[
            { rank: '1', title: '永夜行者', name: 'Lin', plan: '包月贊助', amount: 'NT$ 999' },
            { rank: '2', title: '霜火旅人', name: 'Lin', plan: '一次性贊助', amount: 'NT$ 1,200' },
            { rank: '3', title: '星河守護者', name: 'Lin', plan: '包月贊助', amount: 'NT$ 499' },
          ].map((row) => (
            <div key={`${row.rank}-${row.plan}-${row.title}`} className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-hero-gold/20 border border-hero-gold/40 text-hero-gold font-bold flex items-center justify-center">
                  {row.rank}
                </span>
                <div>
                  <div className="text-white font-bold">{row.title}</div>
                  <div className="text-xs text-gray-400">玩家：{row.name} · {row.plan}</div>
                </div>
              </div>
              <div className="text-hero-gold font-bold">{row.amount}</div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card title="退款與申訴" body="依據退款政策處理，若商品未使用或重複扣款，可提交證明申請。" />
      <Card title="常見問題" body="大量採購等需求，歡迎透過客服提出。享有折扣優惠" />
    </div>
  </PageLayout>
);

export const OfficeGamesPage: React.FC = () => (
  <PageLayout
    title="辦公室玩家友善"
    subtitle="適合上班玩、不怕被發現的 LINE 聊天室 RPG。刷探索、打怪、衝裝備，回訊息就能續戰，低調又解壓。"
    accent="For Office Players"
  >
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card title="低調不被發現" body="純聊天操作，像回覆訊息一樣刷探索、打怪，不用開大畫面。" badge="低調" />
      <Card title="快速解壓" body="短暫空檔刷一輪、拿素材、衝裝備，碎片時間就能進步。" />
      <Card title="輕鬆衝裝" body="探索掉落與活動副本為主，累積素材強化與精煉裝備。" />
    </div>

    <div className="bg-gradient-to-r from-black/50 via-hero-panel/60 to-black/40 border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl">
      <h2 className="text-2xl font-bold text-white mb-4">怎麼玩</h2>
      <ol className="list-decimal list-inside space-y-3 text-gray-300">
        <li>加好友 &gt; 建立角色 &gt; 開始探索；需要回訊息時照常聊天即可。</li>
        <li>用指令刷探索與活動副本，累積素材後強化、精煉與配裝。</li>
      </ol>
    </div>

    <Card title="適合族群" body="辦公室玩家、學生、通勤族，想要低調又能穩定養角色的人。" />
  </PageLayout>
);

const V2_HIGHLIGHTS = [
  {
    title: '區域 Boss',
    description: '區域探索累積觸發，討伐三大區域Boss獲取圖騰碎片與稀有武器。',
    icon: 'https://mumu.tw/linehero/images/regions/boss/four_symbols_domain_boss.png',
  },
  {
    title: '討伐小隊',
    description: '5 人小隊協作出戰，四大職業技能完整支援。',
    icon: 'https://mumu.tw/linehero/images/hero_avatar/character_warrior2.png',
  },
  {
    title: '區域圖騰',
    description: '永久屬性加成系統，透過區域圖騰碎片進行解鎖升級。',
    icon: 'https://mumu.tw/linehero/images/items/region_boss/four_symbols_core.png',
  },
  {
    title: '副本系統',
    description: '星力副本/潛能副本/精煉魂魄副本 更多副本即將來襲。',
    icon: 'https://mumu.tw/linehero/images/items/usage/dungeon_token.png',
  },
  {
    title: '星力強化',
    description: '單件最高 +10 星，全身最高 70 星，戰力大躍進。',
    icon: 'https://mumu.tw/linehero/images/items/materials/star_stellar_core.png',
  },
  {
    title: '詞綴系統',
    description: '多類型詞綴與鎖定重鑄，打造專屬神裝。',
    icon: 'https://mumu.tw/linehero/images/items/materials/affix_potential_crystal.png',
  },
  {
    title: '裝備製作',
    description: '優化裝備掉落系統 整理背包更方便。',
    icon: 'https://mumu.tw/linehero/images/arts/equip_advance.png',
  },
  {
    title: '轉移系統',
    description: '新增 星力轉移憑證/潛能轉移憑證 可搭配強化精煉轉移卷使用。',
    icon: 'https://mumu.tw/linehero/images/scrolls/11.png',
  },
];

const V2_BOSSES = [
  { region: '冥幽境', name: '幽冥蛇靈', power: '100,000', hp: '5,000 萬', leader: '10 萬' },
  { region: '四象域', name: '四象之王', power: '500,000', hp: '5 億', leader: '50 萬' },
  { region: '暗影深淵', name: '深淵魔神', power: '1,000,000', hp: '15 億', leader: '100 萬' },
];

const V2_BOSS_REWARDS = [
  '副本代幣：1-5 個（副本商店兌換）',
  '圖騰碎片：升級區域圖騰',
  '強化素材：星塵、星耀核心、潛能結晶、詞綴重鑄石',
  '稀有道具：保護卷軸、星運卷軸',
  'Boss 專屬武器：亡魂收割者 / 四靈元素之劍 / 深淵噬魂刃',
];

const V2_RAID_ROLES = [
  { role: '戰士', skill: '嘲諷', effect: '吸引 Boss 攻擊，保護隊友' },
  { role: '盜賊', skill: '暗影之刃', effect: '額外爆擊傷害' },
  { role: '牧師', skill: '神聖治癒', effect: '治療全體隊友' },
  { role: '法師', skill: '魔力增幅', effect: '提升全隊傷害' },
];

const V2_TOTEM_BONUS = [
  { level: '1-49', bonus: '固定數值加成' },
  { level: '50-100', bonus: '百分比加成（最高 +5%）' },
];

const V2_TOTEM_MULTIPLIERS = [
  { region: '冥幽境', multiplier: '基礎倍率' },
  { region: '四象域', multiplier: '成本 1.2 倍 / 加成 1.2 倍' },
  { region: '暗影深淵', multiplier: '成本 1.4 倍 / 加成 1.4 倍' },
];

const V2_DUNGEON_TYPES = [
  { type: '日常副本', reset: '每日重置', note: '固定關卡，每日可重複挑戰' },
  { type: '無盡之塔(即將開放)', reset: '永不重置', note: '無限層數，永久進度' },
  { type: '活動副本(即將開放)', reset: '活動期間', note: '限時挑戰' },
];

const V2_DUNGEON_DIFFICULTY = [
  { level: '普通', reward: '1.0x', enemies: '2 隻', detail: '入門難度' },
  { level: '困難', reward: '1.5x', enemies: '3 隻', detail: '中等挑戰' },
  { level: '地獄', reward: '2.2x', enemies: '3 隻', detail: '高難度，敵人攻擊加成' },
];

const V2_DUNGEON_LIST = [
  { name: '潛能之境', drop: '潛能結晶、詞綴重鑄石、詞綴鎖定石' },
  { name: '星力熔爐', drop: '星塵、星耀核心、保護卷軸' },
  { name: '強化鍛域', drop: '強化材料' },
  { name: '精煉魂界', drop: '精煉魂魄' },
  { name: '金幣秘窟', drop: '大量金幣' },
];

const V2_AFFIX_SLOTS = [
  { quality: '普通', slots: '0', rarity: '無' },
  { quality: '稀有', slots: '1', rarity: '普通 / 稀有' },
  { quality: '史詩', slots: '2', rarity: '稀有 / 史詩' },
  { quality: '傳說', slots: '3', rarity: '史詩 / 傳說' },
];

const V2_AFFIX_RANGES = [
  { rarity: '普通', range: '1-3%' },
  { rarity: '稀有', range: '2-5%' },
  { rarity: '史詩', range: '4-8%' },
  { rarity: '傳說', range: '7-12%' },
];

const V2_AFFIX_OPERATIONS = [
  { action: '賦予詞綴', cost: '潛能結晶 x1', coins: '5 萬', note: '首次開啟詞綴欄位' },
  { action: '重鑄詞綴', cost: '詞綴重鑄石 x2', coins: '3 萬', note: '重新隨機所有詞綴' },
  { action: '鎖定詞綴', cost: '詞綴鎖定石 x1', coins: '5 萬', note: '重鑄時保留 1 條詞綴（僅限傳說）' },
];

const V2_CRAFT_RATES = [
  { quality: '普通', rate: '70%' },
  { quality: '稀有', rate: '20%' },
  { quality: '史詩', rate: '8%' },
  { quality: '傳說', rate: '2%' },
];

const V2_TRANSFER_BENEFITS = [
  '更換裝備不損失強化進度',
  '保護長期投入的資源',
  '靈活調整裝備搭配',
];

export const FeatureHubPage: React.FC<{ onNavigate?: (page: Page) => void }> = ({ onNavigate }) => (
  <PageLayout
    title="功能介紹"
    subtitle="完整收錄 LineHero 各系統玩法與教學，依需求挑選最適合的成長路線。"
    accent="Features"
  >
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="glass-panel p-6 md:p-8 rounded-2xl border border-white/10">
        <h3 className="text-xl font-bold text-white mb-3">組隊副本</h3>
        <p className="text-gray-400 text-sm md:text-base mb-4">
          5 人隊伍協作挑戰，取得副本代幣、稀有素材與強化資源。
        </p>
        <button
          onClick={() => onNavigate?.('feature-raid-team')}
          className="text-hero-gold font-bold text-sm hover:text-white transition-colors"
        >
          查看教學
        </button>
      </div>
      <div className="glass-panel p-6 md:p-8 rounded-2xl border border-white/10">
        <h3 className="text-xl font-bold text-white mb-3">區域 Boss</h3>
        <p className="text-gray-400 text-sm md:text-base mb-4">
          區域混亂值達標後 Boss 現身，討伐掉落圖騰碎片與精煉魂魄。
        </p>
        <button
          onClick={() => onNavigate?.('feature-region-boss')}
          className="text-hero-gold font-bold text-sm hover:text-white transition-colors"
        >
          查看教學
        </button>
      </div>
      <div className="glass-panel p-6 md:p-8 rounded-2xl border border-white/10">
        <h3 className="text-xl font-bold text-white mb-3">鐵匠鋪</h3>
        <p className="text-gray-400 text-sm md:text-base mb-4">
          強化、精煉、進階、洗練、星力、潛能與精煉轉移的核心養成中心。
        </p>
        <button
          onClick={() => onNavigate?.('feature-blacksmith')}
          className="text-hero-gold font-bold text-sm hover:text-white transition-colors"
        >
          查看教學
        </button>
      </div>
      <div className="glass-panel p-6 md:p-8 rounded-2xl border border-white/10">
        <h3 className="text-xl font-bold text-white mb-3">背包與裝備</h3>
        <p className="text-gray-400 text-sm md:text-base mb-4">
          管理裝備、強化材料與外觀收藏，打造最適合自己的配裝。
        </p>
        <button
          onClick={() => onNavigate?.('feature-inventory')}
          className="text-hero-gold font-bold text-sm hover:text-white transition-colors"
        >
          查看教學
        </button>
      </div>
      <div className="glass-panel p-6 md:p-8 rounded-2xl border border-white/10">
        <h3 className="text-xl font-bold text-white mb-3">陣營系統</h3>
        <p className="text-gray-400 text-sm md:text-base mb-4">
          選擇陣營、參與陣營戰與世界 Boss，累積陣營代幣換獎勵。
        </p>
        <button
          onClick={() => onNavigate?.('faction-intro')}
          className="text-hero-gold font-bold text-sm hover:text-white transition-colors"
        >
          查看教學
        </button>
      </div>
      <div className="glass-panel p-6 md:p-8 rounded-2xl border border-white/10">
        <h3 className="text-xl font-bold text-white mb-3">社交與酒館</h3>
        <p className="text-gray-400 text-sm md:text-base mb-4">
          社交看板、留言與酒館小遊戲，打造自己的冒險社群。
        </p>
        <button
          onClick={() => onNavigate?.('feature-social')}
          className="text-hero-gold font-bold text-sm hover:text-white transition-colors"
        >
          查看教學
        </button>
      </div>
    </div>
  </PageLayout>
);



export const V2UpdatePage: React.FC = () => (
  <PageLayout
    title="LineHero v2.0 大型更新公告"
    subtitle="區域 Boss、討伐小隊、副本挑戰、星力強化全面上線。以下內容為 2.0 版本完整更新說明。"
    accent="v2.0 Update"
  >
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'LineHero v2.0 大型更新公告',
          description: '區域 Boss、討伐小隊、副本挑戰、星力強化等 2.0 版本更新完整說明。',
          publisher: 'LineHero Games',
        }),
      }}
    />

    <section className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-6 items-stretch">
      <div className="bg-hero-panel/60 border border-white/10 rounded-2xl p-6 md:p-8 space-y-5">
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-hero-gold/30 rounded-full bg-hero-gold/5">
          <span className="text-xs uppercase tracking-[0.2em] text-hero-gold font-bold">New Season</span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/60">v2.0</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-black text-white">系統全面升級</h2>
        <p className="text-gray-300 leading-relaxed text-sm md:text-base">
          從戰鬥到養成全面革新：全新區域 Boss 觸發機制、5 人討伐小隊、區域圖騰成長，
          還有副本、星力、詞綴、裝備製作與轉移系統同步登場。
        </p>
        <div className="grid grid-cols-2 gap-3 text-xs text-gray-300">
          <div className="bg-black/40 border border-white/5 rounded-lg px-4 py-3">區域 Boss</div>
          <div className="bg-black/40 border border-white/5 rounded-lg px-4 py-3">副本系統&副本商店</div>
          <div className="bg-black/40 border border-white/5 rounded-lg px-4 py-3">星力系統</div>
          <div className="bg-black/40 border border-white/5 rounded-lg px-4 py-3">詞綴重鑄系統</div>
          <div className="bg-black/40 border border-white/5 rounded-lg px-4 py-3">好友系統</div>

        </div>
      </div>
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/40">
        <img
          src="https://mumu.tw/linehero/images/regions/boss/shadow_abyss_boss.png"
          alt="LineHero v2.0"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4 bg-black/60 border border-white/10 rounded-xl p-4">
          <div className="text-xs text-hero-gold font-bold">更新重點</div>
          <div className="text-white text-sm font-bold">區域 Boss 專屬武器登場</div>
          <div className="text-xs text-gray-400">亡魂收割者 / 四靈元素之劍 / 深淵噬魂刃</div>
        </div>
      </div>
    </section>

    <section className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h2 className="text-2xl md:text-3xl font-bold text-white">更新內容總覽</h2>
        <span className="text-xs text-gray-400">8 大系統一次看</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {V2_HIGHLIGHTS.map((item) => (
          <div key={item.title} className="bg-hero-panel/60 border border-white/10 rounded-2xl p-4 flex gap-3">
            <div className="w-12 h-12 rounded-xl bg-black/50 border border-white/10 flex items-center justify-center">
              <img src={item.icon} alt={item.title} className="w-8 h-8 object-contain" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">{item.title}</div>
              <div className="text-xs text-gray-400">{item.description}</div>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="bg-hero-panel/60 border border-white/10 rounded-2xl p-6 md:p-8 space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-hero-gold font-bold">01</p>
          <h2 className="text-2xl font-bold text-white">區域 Boss 系統</h2>
          <p className="text-sm text-gray-400 mt-2">戰鬥累積混沌值，區域混亂值MAX後觸發區域 Boss。</p>
        </div>
        <img
          src="https://mumu.tw/linehero/images/items/equipments/boss_weapon_shadow_abyss.png"
          alt="區域 Boss"
          className="w-14 h-14 object-contain"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-6">
        <div className="bg-black/40 border border-white/10 rounded-xl p-4 space-y-4">
          <h3 className="text-lg font-bold text-white">三大區域 Boss</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs md:text-sm">
              <thead className="text-gray-400">
                <tr>
                  <th className="py-2">區域</th>
                  <th>Boss 名稱</th>
                  <th>推薦戰力</th>
                  <th>Boss 血量</th>
                  <th>隊長戰力</th>
                </tr>
              </thead>
              <tbody className="text-gray-200">
                {V2_BOSSES.map((boss) => (
                  <tr key={boss.region} className="border-t border-white/5">
                    <td className="py-2">{boss.region}</td>
                    <td>{boss.name}</td>
                    <td>{boss.power}</td>
                    <td>{boss.hp}</td>
                    <td>{boss.leader}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-black/40 border border-white/10 rounded-xl p-4 space-y-4">
          <h3 className="text-lg font-bold text-white">Boss 掉落</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            {V2_BOSS_REWARDS.map((reward) => (
              <li key={reward} className="flex items-start gap-2">
                <span className="mt-1 w-2 h-2 rounded-full bg-hero-gold"></span>
                <span>{reward}</span>
              </li>
            ))}
          </ul>
          <div className="text-xs text-gray-400 bg-black/40 border border-white/5 rounded-lg px-3 py-2">
            討伐成功後混沌值歸零，等待下次觸發。
          </div>
        </div>
      </div>
    </section>

    <section className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-6">
      <div className="bg-hero-panel/60 border border-white/10 rounded-2xl p-6 md:p-8 space-y-4">
        <p className="text-xs uppercase tracking-[0.3em] text-hero-gold font-bold">02</p>
        <h2 className="text-2xl font-bold text-white">討伐小隊系統</h2>
        <p className="text-sm text-gray-400">
          隊長招募 4 名 AI 隊員，組成 5 人小隊並提供基礎屬性加成。小隊總戰力為所有成員總和。
        </p>
        <div className="bg-black/40 border border-white/10 rounded-xl p-4 text-sm text-gray-300 space-y-2">
          <div>1. 前往討伐小隊頁面</div>
          <div>2. 選擇 4 種職業隊員</div>
          <div>3. 確認成員後即可挑戰區域 Boss</div>
          <div>4. 與好友組隊雙方可以獲得助戰點數</div>
        </div>
      </div>
      <div className="bg-hero-panel/60 border border-white/10 rounded-2xl p-6 md:p-8 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-white">副本職業技能</h3>
          <span className="text-xs text-gray-400">四種職業必備</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs md:text-sm">
            <thead className="text-gray-400">
              <tr>
                <th className="py-2">職業</th>
                <th>技能</th>
                <th>效果</th>
              </tr>
            </thead>
            <tbody className="text-gray-200">
              {V2_RAID_ROLES.map((role) => (
                <tr key={role.role} className="border-t border-white/5">
                  <td className="py-2">{role.role}</td>
                  <td>{role.skill}</td>
                  <td>{role.effect}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section className="bg-hero-panel/60 border border-white/10 rounded-2xl p-6 md:p-8 space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-hero-gold font-bold">03</p>
          <h2 className="text-2xl font-bold text-white">區域圖騰系統</h2>
          <p className="text-sm text-gray-400 mt-2">每個區域都有專屬圖騰，升級後獲得永久屬性加成。</p>
        </div>
        <img
          src="https://mumu.tw/linehero/images/items/region_boss/nether_realm_core.png"
          alt="圖騰"
          className="w-12 h-12 object-contain"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="bg-black/40 border border-white/10 rounded-xl p-4 text-sm text-gray-300 space-y-2">
          <div className="text-white font-bold">升級規則</div>
          <div>解鎖費用：100 圖騰碎片</div>
          <div>最高等級：100 級</div>
          <div>加成類型：攻擊、血量、防禦、四維屬性</div>
        </div>
        <div className="bg-black/40 border border-white/10 rounded-xl p-4">
          <div className="text-white font-bold text-sm mb-2">加成效果</div>
          <div className="space-y-2 text-xs text-gray-300">
            {V2_TOTEM_BONUS.map((bonus) => (
              <div key={bonus.level} className="flex items-center justify-between border-b border-white/5 pb-2 last:border-none last:pb-0">
                <span>{bonus.level}</span>
                <span>{bonus.bonus}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-black/40 border border-white/10 rounded-xl p-4">
          <div className="text-white font-bold text-sm mb-2">區域倍率</div>
          <div className="space-y-2 text-xs text-gray-300">
            {V2_TOTEM_MULTIPLIERS.map((item) => (
              <div key={item.region} className="flex items-center justify-between border-b border-white/5 pb-2 last:border-none last:pb-0">
                <span>{item.region}</span>
                <span>{item.multiplier}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="bg-hero-panel/60 border border-white/10 rounded-2xl p-6 md:p-8 space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-hero-gold font-bold">04</p>
          <h2 className="text-2xl font-bold text-white">副本系統</h2>
          <p className="text-sm text-gray-400 mt-2">每週副本、無盡之塔、活動副本一次收錄。</p>
        </div>
        <img
          src="https://mumu.tw/linehero/images/items/usage/dungeon_token.png"
          alt="副本代幣"
          className="w-12 h-12 object-contain"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-black/40 border border-white/10 rounded-xl p-4 space-y-3">
          <div className="text-white font-bold text-sm">副本類型</div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="text-gray-400">
                <tr>
                  <th className="py-2">類型</th>
                  <th>重置時間</th>
                  <th>說明</th>
                </tr>
              </thead>
              <tbody className="text-gray-200">
                {V2_DUNGEON_TYPES.map((type) => (
                  <tr key={type.type} className="border-t border-white/5">
                    <td className="py-2">{type.type}</td>
                    <td>{type.reset}</td>
                    <td>{type.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-black/40 border border-white/10 rounded-xl p-4 space-y-3">
          <div className="text-white font-bold text-sm">難度等級</div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="text-gray-400">
                <tr>
                  <th className="py-2">難度</th>
                  <th>獎勵倍率</th>
                  <th>敵人數量</th>
                  <th>特點</th>
                </tr>
              </thead>
              <tbody className="text-gray-200">
                {V2_DUNGEON_DIFFICULTY.map((difficulty) => (
                  <tr key={difficulty.level} className="border-t border-white/5">
                    <td className="py-2">{difficulty.level}</td>
                    <td>{difficulty.reward}</td>
                    <td>{difficulty.enemies}</td>
                    <td>{difficulty.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {V2_DUNGEON_LIST.map((dungeon) => (
          <div key={dungeon.name} className="bg-black/40 border border-white/10 rounded-xl p-4">
            <div className="text-sm font-bold text-white">{dungeon.name}</div>
            <div className="text-xs text-gray-400 mt-2">主要掉落：{dungeon.drop}</div>
          </div>
        ))}
      </div>
      <div className="bg-black/40 border border-white/10 rounded-xl p-4 text-sm text-gray-300">
        通關皆可獲得副本代幣（1-5 個），傳奇冒險者可獲得 2 倍代幣與 2 倍掉落。
      </div>
    </section>

    <section className="bg-hero-panel/60 border border-white/10 rounded-2xl p-6 md:p-8 space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-hero-gold font-bold">05</p>
          <h2 className="text-2xl font-bold text-white">星力系統</h2>
          <p className="text-sm text-gray-400 mt-2">裝備星力強化可提升攻擊與血量加成，屬於長期養成核心。</p>
        </div>
        <img
          src="https://mumu.tw/linehero/images/items/region_boss/shadow_abyss_core.png"
          alt="星力"
          className="w-12 h-12 object-contain"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-sm text-gray-300">
        <div className="bg-black/40 border border-white/10 rounded-xl p-4 space-y-3">
          <div className="text-white font-bold">強化消耗</div>
          <div className="flex items-center gap-3">
            <img
              src="https://mumu.tw/linehero/images/items/materials/star_stardust.png"
              alt="星塵"
              className="w-10 h-10 object-contain"
            />
            <div>
              <div>星塵 / 星耀核心 / 傳說之源</div>
              <div className="text-xs text-gray-400">依星級消耗不同素材與金幣。</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <img
              src="https://mumu.tw/linehero/images/gifts/treasures/coin_small.png"
              alt="金幣"
              className="w-10 h-10 object-contain"
            />
            <div>
              <div>金幣</div>
              <div className="text-xs text-gray-400">高星等消耗更高。</div>
            </div>
          </div>
        </div>
        <div className="bg-black/40 border border-white/10 rounded-xl p-4 space-y-3">
          <div className="text-white font-bold">強化效果</div>
          <div>星級越高，單件裝備提供更強的屬性提升。</div>
          <div>全身星力會帶來額外總星力加成。</div>
          <div className="text-xs text-gray-400">實際數值依版本調整。</div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">
        <div className="bg-black/40 border border-white/10 rounded-xl p-4 space-y-2">
          <div className="text-white font-bold">強化限制</div>
          <div>高星等需傳說品質裝備。</div>
          <div>低星失敗只損失材料，高星有機率裝備損毀。</div>
        </div>
        <div className="bg-black/40 border border-white/10 rounded-xl p-4 space-y-2">
          <div className="text-white font-bold">保護與增幅</div>
          <div>保護卷軸：失敗時防止裝備損毀。</div>
          <div>星運卷軸：提升強化成功率。</div>
        </div>
      </div>
    </section>

    <section className="bg-hero-panel/60 border border-white/10 rounded-2xl p-6 md:p-8 space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-hero-gold font-bold">06</p>
          <h2 className="text-2xl font-bold text-white">詞綴系統</h2>
          <p className="text-sm text-gray-400 mt-2">裝備品質越高，詞綴欄位越多。</p>
        </div>
        <img
          src="https://mumu.tw/linehero/images/items/materials/soul_icon.png"
          alt="詞綴"
          className="w-12 h-12 object-contain"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-black/40 border border-white/10 rounded-xl p-4 space-y-3">
          <div className="text-white font-bold text-sm">詞綴欄位</div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="text-gray-400">
                <tr>
                  <th className="py-2">品質</th>
                  <th>詞綴數量</th>
                  <th>稀有度</th>
                </tr>
              </thead>
              <tbody className="text-gray-200">
                {V2_AFFIX_SLOTS.map((slot) => (
                  <tr key={slot.quality} className="border-t border-white/5">
                    <td className="py-2">{slot.quality}</td>
                    <td>{slot.slots}</td>
                    <td>{slot.rarity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-black/40 border border-white/10 rounded-xl p-4 space-y-3">
          <div className="text-white font-bold text-sm">詞綴數值範圍</div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="text-gray-400">
                <tr>
                  <th className="py-2">稀有度</th>
                  <th>加成範圍</th>
                </tr>
              </thead>
              <tbody className="text-gray-200">
                {V2_AFFIX_RANGES.map((range) => (
                  <tr key={range.rarity} className="border-t border-white/5">
                    <td className="py-2">{range.rarity}</td>
                    <td>{range.range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="bg-black/40 border border-white/10 rounded-xl p-4 space-y-3">
        <div className="text-white font-bold text-sm">詞綴操作</div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="text-gray-400">
              <tr>
                <th className="py-2">操作</th>
                <th>材料消耗</th>
                <th>金幣</th>
                <th>說明</th>
              </tr>
            </thead>
            <tbody className="text-gray-200">
              {V2_AFFIX_OPERATIONS.map((op) => (
                <tr key={op.action} className="border-t border-white/5">
                  <td className="py-2">{op.action}</td>
                  <td>{op.cost}</td>
                  <td>{op.coins}</td>
                  <td>{op.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="text-xs text-gray-400">
          詞綴類型涵蓋四維屬性、戰鬥屬性、特殊屬性與實用屬性。
        </div>
      </div>
    </section>

    <section className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-6">
      <div className="bg-hero-panel/60 border border-white/10 rounded-2xl p-6 md:p-8 space-y-4">
        <p className="text-xs uppercase tracking-[0.3em] text-hero-gold font-bold">07</p>
        <h2 className="text-2xl font-bold text-white">裝備製作系統</h2>
        <p className="text-sm text-gray-400">使用裝備模具打造裝備，主動決定部位。</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-300">
          <div className="bg-black/40 border border-white/10 rounded-xl p-4">
            <div className="text-white font-bold">製作優勢</div>
            <div className="mt-2 space-y-1">
              <div>目標明確：選擇想要的裝備部位</div>
              <div>優化背包裝備整理複雜的問題</div>
              <div>資源轉換：模具直接變裝備</div>
            </div>
          </div>
          <div className="bg-black/40 border border-white/10 rounded-xl p-4">
            <div className="text-white font-bold">模具來源</div>
            <div className="mt-2 space-y-1">
              <div>區域怪物掉落</div>
              <div>Boss 獎勵</div>
              <div>副本獎勵</div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-hero-panel/60 border border-white/10 rounded-2xl p-6 md:p-8 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-white">製作機率</h3>
          <img
            src="https://mumu.tw/linehero/images/items/molds/mold_5.png"
            alt="模具"
            className="w-10 h-10 object-contain"
          />
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="text-gray-400">
              <tr>
                <th className="py-2">品質</th>
                <th>機率</th>
              </tr>
            </thead>
            <tbody className="text-gray-200">
              {V2_CRAFT_RATES.map((rate) => (
                <tr key={rate.quality} className="border-t border-white/5">
                  <td className="py-2">{rate.quality}</td>
                  <td>{rate.rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section className="bg-hero-panel/60 border border-white/10 rounded-2xl p-6 md:p-8 space-y-4">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-hero-gold font-bold">08</p>
          <h2 className="text-2xl font-bold text-white">轉移系統</h2>
          <p className="text-sm text-gray-400 mt-2">星力與潛能可透過轉移券完整移轉。</p>
        </div>
        <img
          src="https://mumu.tw/linehero/images/scrolls/11.png"
          alt="轉移券"
          className="w-12 h-12 object-contain"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">
        <div className="bg-black/40 border border-white/10 rounded-xl p-4 space-y-2">
          <div className="text-white font-bold">星力轉移</div>
          <div>使用星力轉移憑證可將舊裝備星力轉移至新裝備。</div>
        </div>
        <div className="bg-black/40 border border-white/10 rounded-xl p-4 space-y-2">
          <div className="text-white font-bold">潛能轉移</div>
          <div>使用潛能轉移憑證可將舊裝備詞綴轉移至新裝備。</div>
        </div>
      </div>
      <div className="bg-black/40 border border-white/10 rounded-xl p-4">
        <div className="text-white font-bold text-sm mb-2">轉移優勢</div>
        <ul className="space-y-2 text-sm text-gray-300">
          {V2_TRANSFER_BENEFITS.map((benefit) => (
            <li key={benefit} className="flex items-start gap-2">
              <span className="mt-1 w-2 h-2 rounded-full bg-hero-gold"></span>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>

    <section className="bg-gradient-to-r from-hero-panel/70 to-black/40 border border-hero-gold/30 rounded-2xl p-6 md:p-8 space-y-4">
      <h2 className="text-2xl font-bold text-white">版本總結</h2>
      <p className="text-gray-300 text-sm md:text-base">
        v2.0 版本帶來完整戰鬥與養成系統升級，包含區域 Boss、討伐小隊、區域圖騰、
        副本系統、星力強化、詞綴打造、裝備製作與轉移系統。感謝各位冒險者的支持，
        祝大家遊戲愉快！
      </p>
      <div className="text-xs text-gray-400">LineHero 營運團隊</div>
    </section>
  </PageLayout>
);

export const AnnouncementsPage: React.FC<{ onNavigate?: (page: Page) => void }> = ({ onNavigate }) => (
  <PageLayout
    title="遊戲公告"
    subtitle="最新遊戲公告、維護通知與版本更新資訊，隨時掌握 LineHero 最新動態。"
    accent="Announcements"
  >
    <section className="space-y-6">
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
        <button
          onClick={() => onNavigate?.('update-v2')}
          className="inline-flex items-center gap-2 text-hero-gold font-bold text-sm hover:text-white transition-colors"
        >
          查看全文
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
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
