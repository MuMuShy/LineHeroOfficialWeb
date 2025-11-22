import React from 'react';

const PageLayout: React.FC<{ title: string; subtitle: string; accent?: string }> = ({ title, subtitle, accent = 'LINE Hero', children }) => (
  <div className="bg-hero-dark min-h-screen pt-28 pb-16 px-4 md:px-8 text-gray-100">
    <div className="max-w-6xl mx-auto">
      <header className="mb-10 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-hero-gold/80 font-bold mb-2">{accent}</p>
        <h1 className="text-3xl md:text-4xl font-black text-white mb-3">{title}</h1>
        <p className="text-gray-300 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">{subtitle}</p>
      </header>

      <div className="space-y-8">{children}</div>
    </div>
  </div>
);

const Card: React.FC<{ title: string; body: React.ReactNode; badge?: string }> = ({ title, body, badge }) => (
  <div className="bg-hero-panel/60 border border-white/10 rounded-2xl p-6 shadow-xl hover:border-hero-gold/40 transition-colors">
    {badge && <span className="text-xs font-bold text-hero-gold bg-hero-gold/10 px-3 py-1 rounded-full inline-block mb-3">{badge}</span>}
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-gray-300 leading-relaxed text-sm md:text-base">{body}</p>
  </div>
);

export const GameIntroLinePage: React.FC = () => (
  <PageLayout
    title="LINE 版玩法介紹"
    subtitle="不必下載 App，直接在 LINE 聊天室刷探索、打怪、衝裝備。所有指令都能在聊天輸入，上班時也能低調玩。"
    accent="LINE Chat RPG"
  >
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card title="聊天即遊戲" body="以指令方式操控角色，聊天同時推進劇情、刷探索、打怪、強化裝備。" badge="核心" />
      <Card title="上班可玩" body="LINE 聊天室刷一刷就好，不會開大聲光影，輕鬆度過辦公室空檔。" />
      <Card title="零安裝、超輕量" body="任何手機皆可玩，訊息雲端同步，不怕換裝置或清除快取。" />
    </div>

    <div className="bg-gradient-to-r from-hero-panel/70 to-black/40 border border-hero-gold/20 rounded-2xl p-6 md:p-8 shadow-2xl">
      <h2 className="text-2xl font-bold text-white mb-4">快速上手步驟</h2>
      <ol className="list-decimal list-inside space-y-3 text-gray-300">
        <li>掃描首頁 QR Code 或加好友：<a className="text-hero-gold font-bold" href="https://lin.ee/Isv2392o" target="_blank" rel="noreferrer">https://lin.ee/Isv2392o</a></li>
        <li>跟隨導引建立角色，選擇職業並完成新手教學。</li>
        <li>推進探索與活動副本，刷怪拿素材並強化裝備。</li>
        <li>每日登入領取獎勵，使用指令查看探索、裝備與活動進度。</li>
      </ol>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card title="適合誰" body="想在辦公室或通勤時用碎片時間刷探索、打怪、練裝備的玩家。" />
      <Card title="推薦玩法" body="每日登入刷探索、衝裝備，活動副本打好打滿；聊天視窗隨時回來續戰。" />
    </div>
  </PageLayout>
);

export const GameIntroWebPage: React.FC = () => (
  <PageLayout
    title="Web 版玩法介紹"
    subtitle="一樣的宇宙，專注裝備強化、精煉、配裝與拍賣場交易。"
    accent="Web Client"
  >
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card title="UI 重新設計" body="包含角色面板、夥伴、拍賣場、排行榜等完整界面，視覺化管理裝備。" badge="視覺" />
      <Card title="跨平台同步" body="資料與 LINE 版共通，換裝置不丟進度，可無縫切換。" />
    </div>

    <div className="bg-hero-panel/70 border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl">
      <h2 className="text-2xl font-bold text-white mb-4">常用模組</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card title="裝備強化與精煉" body="強化、精煉、分解。" />
        <Card title="拍賣場" body="刊登與搜尋裝備或素材，透明成交紀錄，沒有競標只有快速成交。" />
        <Card title="排行榜與賽季" body="追蹤個人與伺服器排行榜。" />
      </div>
    </div>

    <Card title="進入方式" body={<span>從LINE聊天視窗中使用冒險者之路即可自動跳轉，使用 LINE 版同帳號登入即可同步角色。</span>} />
  </PageLayout>
);

export const ShopPage: React.FC = () => (
  <PageLayout
    title="商城／儲值"
    subtitle="支持伺服器運營並領取禮包。"
    accent="Shop"
  >
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card title="傳奇冒險者" body="最主要的禮包解鎖傳說特權。" />
      <Card title="造型與家園(未開放)" body="角色外觀、坐騎特效、家園裝飾皆為純外觀，不影響戰力。" />
      <Card title="安全支付" body="透過第三方交易平台完成，所有訂單可於客服查詢 並有發票。" />
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
