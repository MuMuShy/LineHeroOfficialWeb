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

// 公告類型定義
export type AnnouncementType = 'game' | 'maintenance' | 'update' | 'event';

export interface Announcement {
  id: string;
  type: AnnouncementType;
  title: string;
  content: string;
  date: string; // ISO 8601 格式，用於 SEO
  dateDisplay: string; // 顯示用的日期格式
  isImportant?: boolean;
}

// 範例公告資料 - 實際使用時可以從 API 或 CMS 獲取
const announcements: Announcement[] = [
  // {
  //   id: '1',
  //   type: 'game',
  //   title: '新活動「春季冒險祭」即將開始！',
  //   content: '春季冒險祭活動將於本週末開始，參與活動可獲得限定裝備與豐厚獎勵。活動期間完成指定任務即可領取特殊獎勵，敬請期待！',
  //   date: '2025-01-15T10:00:00+08:00',
  //   dateDisplay: '2025-01-15',
  //   isImportant: true,
  // },
  // {
  //   id: '2',
  //   type: 'maintenance',
  //   title: '系統維護通知 - 2025/01/20',
  //   content: '為了提供更好的遊戲體驗，我們將於 2025/01/20 02:00 - 06:00 進行系統維護。維護期間將無法登入遊戲，造成不便敬請見諒。',
  //   date: '2025-01-18T14:00:00+08:00',
  //   dateDisplay: '2025-01-18',
  //   isImportant: true,
  // },
  // {
  //   id: '3',
  //   type: 'update',
  //   title: '版本更新 v2.1.0 - 新功能上線',
  //   content: '本次更新新增了拍賣場功能，玩家可以更方便地交易裝備。同時優化了戰鬥系統的流暢度，修復了部分已知問題。',
  //   date: '2025-01-10T09:00:00+08:00',
  //   dateDisplay: '2025-01-10',
  // },
  // {
  //   id: '4',
  //   type: 'event',
  //   title: '週末雙倍經驗活動',
  //   content: '本週末（1/25-1/26）將舉辦雙倍經驗活動，所有探索與戰鬥獲得的經驗值將提升至兩倍，把握機會快速升級！',
  //   date: '2025-01-22T12:00:00+08:00',
  //   dateDisplay: '2025-01-22',
  // },
];

const getTypeLabel = (type: AnnouncementType): string => {
  const labels: Record<AnnouncementType, string> = {
    game: '遊戲公告',
    maintenance: '維護公告',
    update: '版本更新',
    event: '活動公告',
  };
  return labels[type];
};

const getTypeColor = (type: AnnouncementType): string => {
  const colors: Record<AnnouncementType, string> = {
    game: 'bg-blue-500/20 border-blue-500/40 text-blue-300',
    maintenance: 'bg-red-500/20 border-red-500/40 text-red-300',
    update: 'bg-green-500/20 border-green-500/40 text-green-300',
    event: 'bg-amber-500/20 border-amber-500/40 text-amber-300',
  };
  return colors[type];
};

export const FactionIntroPage: React.FC = () => {
  // 陣營資料
  const factions = [
    {
      id: 'faction-1',
      name: '聖光教堂',
      icon: '',
      description: '代表光明與秩序的陣營，致力於守護世界的和平與正義。',
      imageUrl: 'https://mumu.tw/linehero/images/factions/faction_holy_church.png', // 陣營圖片 URL，可在此處填入圖片連結
      color: 'from-blue-500/20 to-blue-600/10',
      borderColor: 'border-blue-500/40',
      textColor: 'text-blue-300',
    },
    {
      id: 'faction-2',
      name: '暗影議會',
      icon: '',
      description: '追求力量與自由的陣營，相信在黑暗中也能找到屬於自己的道路。',
      imageUrl: 'https://mumu.tw/linehero/images/factions/faction_shadow_council.png', // 陣營圖片 URL，可在此處填入圖片連結
      color: 'from-red-500/20 to-red-600/10',
      borderColor: 'border-red-500/40',
      textColor: 'text-red-300',
    },
  ];

  // 遊戲功能介紹
  const gameFeatures = [
    {
      id: 'donation-shop',
      title: '常駐捐獻與商店',
      icon: '',
      imageUrl: 'https://mumu.tw/linehero/official_web/game_view/faction_shop.png', // 功能圖片 URL，可在此處填入圖片連結
      description: '透過捐獻素材換取貢獻點數與陣營經驗值，並在陣營商店使用陣營代幣兌換各種獎勵。',
      rewards: [
        '貢獻點數',
        '陣營經驗值',
        '陣營代幣',
        '商店限定獎勵',
      ],
    },
    {
      id: 'daily-tasks',
      title: '每日任務',
      icon: '',
      imageUrl: 'https://mumu.tw/linehero/official_web/game_view/faction_task.png', // 功能圖片 URL，可在此處填入圖片連結
      description: '完成每日捐獻任務與討伐任務，獲得陣營代幣、貢獻點數與陣營經驗值。',
      rewards: [
        '陣營代幣',
        '貢獻點數',
        '陣營經驗值',
      ],
      subFeatures: [
        {
          name: '每日捐獻任務',
          desc: '捐獻指定素材完成任務，可刷新任務內容',
        },
        {
          name: '每日討伐任務',
          desc: '在探索區完成指定場次，回報後獲得獎勵',
        },
      ],
    },
    {
      id: 'border-defense',
      title: '邊境防守',
      icon: '',
      imageUrl: 'https://mumu.tw/linehero/official_web/game_view/faction_board.png', // 功能圖片 URL，可在此處填入圖片連結
      description: '參與邊境據點的防守行動，透過不同職業的行動協助陣營控制據點，獲得陣營代幣與貢獻點數。',
      rewards: [
        '陣營代幣',
        '貢獻點數',
        '每日累積獎池分配',
      ],
      subFeatures: [
        {
          name: '防守行動',
          desc: '戰士防守、盜賊突襲、法師強化、牧師聖療、偵查等行動',
        },
        {
          name: '據點控制',
          desc: '控制據點後每 5 分鐘產出代幣，每日結算分配給參與者',
        },
      ],
    },
    {
      id: 'world-boss',
      title: '世界共鬥',
      icon: '',
      imageUrl: 'https://mumu.tw/linehero/official_web/game_view/faction_boss.png', // 功能圖片 URL，可在此處填入圖片連結
      description: '與全伺服器玩家共同挑戰世界 Boss，根據傷害排行與擊殺次數獲得豐厚獎勵。',
      rewards: [
        '固定獎勵',
        '機率獎勵',
        '死亡獎勵',
        '週排行獎勵',
      ],
      subFeatures: [
        {
          name: '每日攻擊',
          desc: '每日可攻擊多次，傳奇冒險者享有額外次數',
        },
        {
          name: '階段系統',
          desc: 'Boss 死亡後進入下一階段，難度與獎勵提升',
        },
      ],
    },
    {
      id: 'sanctum',
      title: '神聖殿堂',
      icon: '',
      imageUrl: 'https://mumu.tw/linehero/official_web/game_view/faction_lobby.png', // 功能圖片 URL，可在此處填入圖片連結
      description: '跨陣營社交大廳，可與其他玩家即時互動、聊天，展示角色頭像與稱號。',
      rewards: [
        '社交互動',
        '跨陣營交流',
      ],
      subFeatures: [
        {
          name: '即時聊天',
          desc: '與在線玩家即時對話，顯示頭像與稱號',
        },
        {
          name: '角色展示',
          desc: '展示角色外觀與戰力，建立社交連結',
        },
      ],
    },
  ];

  return (
    <PageLayout
      title="陣營介紹"
      subtitle="選擇你的陣營，開始你的冒險之旅。"
      accent="Factions"
    >
      {/* 陣營總覽 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {factions.map((faction) => (
          <div
            key={faction.id}
            className={`bg-gradient-to-br ${faction.color} border-2 ${faction.borderColor} rounded-2xl p-6 shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden`}
          >
            {/* 陣營圖片 */}
            {faction.imageUrl && (
              <div className="relative w-full h-64 mb-4 rounded-xl overflow-hidden group">
                <img 
                  src={faction.imageUrl} 
                  alt={faction.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  
                  <div className="text-5xl mb-2">{faction.icon}</div>
                  <h3 className={`text-3xl font-bold ${faction.textColor}`}>
                    {faction.name}
                  </h3>
                </div>
              </div>
            )}
            
            {/* 如果沒有圖片，顯示圖標和標題 */}
            {!faction.imageUrl && (
              <div className="text-center mb-4">
                <div className="text-6xl mb-4">{faction.icon}</div>
                <h3 className={`text-3xl font-bold ${faction.textColor} mb-3`}>
                  {faction.name}
                </h3>
              </div>
            )}
            
            <p className="text-gray-300 text-base md:text-lg leading-relaxed text-center">
              {faction.description}
            </p>
          </div>
        ))}
      </div>

      {/* 陣營代幣核心介紹 */}
      <div className="mb-12">
        <div className="bg-gradient-to-br from-hero-gold/20 via-hero-gold/10 to-hero-gold/5 border-2 border-hero-gold/40 rounded-2xl p-6 md:p-10 shadow-2xl relative overflow-hidden">
          {/* 背景裝飾 */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.1),transparent_70%)]"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-8">
            {/* 代幣圖片 */}
            <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center">
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden bg-gradient-to-br from-hero-gold/20 to-hero-gold/5 border-2 border-hero-gold/30 shadow-xl group">
                <img 
                  src="https://mumu.tw/linehero/images/factions/faction_token_rpg.png" 
                  alt="陣營代幣"
                  className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </div>

            {/* 說明內容 */}
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 bg-hero-gold/20 border border-hero-gold/40 text-hero-gold rounded-full text-sm font-bold">
                  核心道具
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  陣營代幣
                </h2>
              </div>
              
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                陣營代幣是陣營系統的核心道具，透過參與各種陣營活動可以獲得。使用陣營代幣可在陣營商店兌換各種珍貴獎勵，包括裝備、素材與特殊道具。
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
                <div className="bg-black/30 rounded-lg p-4 border border-white/10">
                  <h4 className="text-hero-gold font-bold text-sm mb-2">獲得方式</h4>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-hero-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      每日任務完成
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-hero-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      邊境防守參與
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-hero-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      世界共鬥獎勵
                    </li>
                  </ul>
                </div>
                
                <div className="bg-black/30 rounded-lg p-4 border border-white/10">
                  <h4 className="text-hero-gold font-bold text-sm mb-2">主要用途</h4>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-hero-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      陣營商店兌換
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-hero-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      限定裝備取得
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-hero-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      特殊道具購買
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 遊戲功能總覽 */}
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3">
          陣營功能總覽
        </h2>
        
        <div className="space-y-8">
          {gameFeatures.map((feature, index) => (
            <div
              key={feature.id}
              className={`bg-hero-panel/60 border border-white/10 rounded-2xl p-6 md:p-8 shadow-xl hover:border-hero-gold/40 transition-all ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex flex-col md:flex items-center gap-6 md:gap-8`}
            >
              {/* 功能圖片 */}
              <div className="flex-shrink-0 w-full md:w-1/2">
                {feature.imageUrl ? (
                  <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden group">
                    <img 
                      src={feature.imageUrl} 
                      alt={feature.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                ) : (
                  <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden bg-gradient-to-br from-gray-800 to-black border-2 border-white/10 flex items-center justify-center">
                    <div className="text-6xl md:text-8xl opacity-50">{feature.icon}</div>
                    <div className="absolute bottom-4 left-4 right-4 text-center">
                      <p className="text-gray-400 text-sm">圖片位置</p>
                    </div>
                  </div>
                )}
              </div>

              {/* 功能說明 */}
              <div className="flex-1 w-full md:w-1/2 space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-4xl">{feature.icon}</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    {feature.title}
                  </h3>
                </div>
                
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  {feature.description}
                </p>

                {/* 子功能說明 */}
                {feature.subFeatures && feature.subFeatures.length > 0 && (
                  <div className="space-y-2 mt-4">
                    {feature.subFeatures.map((subFeature, idx) => (
                      <div key={idx} className="bg-black/30 rounded-lg p-3 border border-white/5">
                        <h4 className="text-hero-gold font-bold text-sm md:text-base mb-1">
                          {subFeature.name}
                        </h4>
                        <p className="text-gray-400 text-xs md:text-sm">
                          {subFeature.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* 可獲得獎勵 */}
                <div className="mt-6">
                  <h4 className="text-hero-gold font-bold text-lg mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    可獲得獎勵
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {feature.rewards.map((reward, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-hero-gold/10 border border-hero-gold/30 text-hero-gold rounded-lg text-sm font-bold"
                      >
                        {reward}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 陣營系統說明 */}
      <div className="bg-gradient-to-r from-hero-panel/70 to-black/40 border border-hero-gold/20 rounded-2xl p-6 md:p-8 shadow-2xl mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center gap-3">
          <span className="text-3xl">🎯</span>
          陣營系統
        </h2>
        <div className="space-y-4 text-gray-300 text-sm md:text-base leading-relaxed">
          <p>
            陣營系統是 LineHero 無盡冒險的核心玩法之一。玩家必須加入陣營才能使用所有陣營相關功能。
          </p>
          <p>
            透過參與各種陣營活動，您可以獲得貢獻點數、陣營代幣等資源，並在陣營商店兌換豐厚獎勵。每週貢獻排行結算時，表現優異的玩家還能獲得額外獎勵。
          </p>
        </div>
      </div>

      {/* 陣營選擇提示 */}
      <Card 
        title="如何選擇陣營" 
        body={
          <div className="space-y-3">
            <p className="text-gray-300">
              陣營系統開放後透過冒險者選單即可進行選擇加入任一陣營。
            </p>
            <p className="text-gray-400 text-sm">
              提示：陣營選擇後無法更改，請謹慎選擇。
            </p>
          </div>
        }
        badge="重要"
      />
    </PageLayout>
  );
};

export const AnnouncementsPage: React.FC = () => {
  // 按日期排序，最新的在前
  const sortedAnnouncements = [...announcements].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <PageLayout
      title="遊戲公告"
      subtitle="最新遊戲公告、維護通知與版本更新資訊，隨時掌握 LineHero 最新動態。"
      accent="Announcements"
    >
      {/* SEO 友善的結構化資料 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'LineHero 遊戲公告',
            description: 'LineHero 無盡冒險最新遊戲公告、維護通知與版本更新資訊',
            url: 'https://linehero.tw/announcements',
          }),
        }}
      />

      <div className="space-y-6">
        {sortedAnnouncements.map((announcement) => (
          <article
            key={announcement.id}
            className={`bg-hero-panel/60 border rounded-2xl p-6 shadow-xl transition-all hover:border-hero-gold/40 ${
              announcement.isImportant
                ? 'border-hero-gold/50 bg-hero-gold/5'
                : 'border-white/10'
            }`}
            itemScope
            itemType="https://schema.org/Article"
          >
            <header className="mb-4">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold border ${getTypeColor(
                    announcement.type
                  )}`}
                >
                  {getTypeLabel(announcement.type)}
                </span>
                {announcement.isImportant && (
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-500/20 border border-red-500/40 text-red-300">
                    重要
                  </span>
                )}
                <time
                  dateTime={announcement.date}
                  className="text-gray-400 text-sm"
                  itemProp="datePublished"
                >
                  {announcement.dateDisplay}
                </time>
              </div>
              <h2
                className="text-xl md:text-2xl font-bold text-white mb-2"
                itemProp="headline"
              >
                {announcement.title}
              </h2>
            </header>
            <div
              className="text-gray-300 leading-relaxed text-sm md:text-base whitespace-pre-line"
              itemProp="articleBody"
            >
              {announcement.content}
            </div>
            <meta itemProp="author" content="LineHero Team" />
            <meta itemProp="publisher" content="LineHero Games" />
          </article>
        ))}
      </div>

      {/* 空狀態提示 - 當沒有公告時顯示 */}
      {sortedAnnouncements.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400 text-lg">目前沒有公告</p>
        </div>
      )}
    </PageLayout>
  );
};
