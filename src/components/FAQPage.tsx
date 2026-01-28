import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  // 基礎問題
  {
    category: '基礎問題',
    question: 'LineHero 無盡冒險是什麼遊戲？',
    answer: 'LineHero 無盡冒險是一款免下載、免安裝的即玩 RPG，打開聊天視窗就能直接開始冒險。結合 LIFF 視覺技術打造精美介面，同時保留經典文字冒險的深度敘事，讓你體驗完整的 MMORPG 戰鬥、裝備、交易系統。'
  },
  {
    category: '基礎問題',
    question: '如何開始遊玩 LineHero？',
    answer: '只需要加入 LineHero 官方帳號，完全免下載、免安裝！直接在聊天視窗中點擊按鈕或輸入指令即可開始遊戲。完全免費且支援中文。'
  },
  {
    category: '基礎問題',
    question: 'LineHero 支援哪些平台？',
    answer: 'LineHero 可在所有支援 LINE 的平台上遊玩，包括 Android、iOS 手機以及 Windows、Mac 電腦版 LINE。因為是聊天視窗 RPG，不需要額外下載任何 APP。'
  },
  {
    category: '基礎問題',
    question: 'LineHero 跟一般手遊有什麼不同？',
    answer: 'LineHero 是聊天視窗 RPG，不需要下載安裝任何 APP，直接在 LINE 裡面就能玩。結合文字敘事與 LIFF 視覺介面，既有經典文字冒險的深度，又有現代 RPG 的精美畫面。'
  },
  // 遊戲玩法
  {
    category: '遊戲玩法',
    question: '如何提升角色戰力？',
    answer: '提升戰力的主要方式包括：1. 強化裝備等級 2. 精煉提升裝備品質 3. 提升技能等級 4. 完成主線與支線任務 5. 參與各種活動獲得獎勵。建議新手先專注於主線任務取得基礎裝備。'
  },
  {
    category: '遊戲玩法',
    question: '什麼是探索模式？',
    answer: '探索模式是 LineHero 的核心玩法之一，玩家可以派遣角色自動探索地圖，獲得經驗值、金幣和裝備。探索過程中會遇到各種事件和怪物，是掛機養成的主要方式。'
  },
  {
    category: '遊戲玩法',
    question: '如何參加組隊副本？',
    answer: '組隊副本需要多人隊伍協作挑戰。你可以透過陣營招募隊友，或在玩家社群中組隊。副本會掉落珍貴的代幣和稀有裝備，是中後期提升戰力的重要途徑。'
  },
  {
    category: '遊戲玩法',
    question: '區域 Boss 多久刷新一次？',
    answer: '區域 Boss 會在該區域的混亂值達到一定程度後出現。混亂值由所有玩家的探索行為累積，通常每天會有多次 Boss 出現的機會。擊敗 Boss 可獲得圖騰碎片和精煉魂魄。'
  },
  // 儲值與商城
  {
    category: '儲值與商城',
    question: '遊戲免費嗎？需要花錢嗎？',
    answer: 'LineHero 是免費遊戲，所有核心內容都可以免費體驗。商城提供的是加速道具和外觀裝飾，不影響遊戲平衡。純免費玩家也能享受完整的遊戲樂趣。'
  },
  {
    category: '儲值與商城',
    question: '如何儲值？支援哪些付款方式？',
    answer: '目前支援 LINE Pay、信用卡、超商代碼等多種付款方式。在商城頁面選擇想要購買的商品，系統會自動導向付款頁面。'
  },
  {
    category: '儲值與商城',
    question: '可以退款嗎？',
    answer: '基於虛擬商品特性，原則上已購買的虛擬商品不予退款。但系統錯誤導致的重複扣款或商品未入帳等情況可申請退款，請透過遊戲內客服提出申請。'
  },
  // 技術問題
  {
    category: '技術問題',
    question: '遊戲卡頓或無法載入怎麼辦？',
    answer: '請嘗試：1. 檢查網路連線 2. 重新開啟 LINE 3. 清除 LINE 快取 4. 更新 LINE 至最新版本。如問題持續，請透過官方社群回報。'
  },
  {
    category: '技術問題',
    question: '遊戲進度會消失嗎？',
    answer: '不會！您的遊戲進度與帳號綁定，資料儲存在雲端伺服器。即使更換手機，只要使用同一個帳號登入就能繼續遊戲。'
  },
  {
    category: '技術問題',
    question: '可以多開或使用模擬器嗎？',
    answer: '為維護遊戲公平性，我們不建議使用多開或模擬器。使用第三方工具可能導致帳號被停權。'
  },
];

const categories = [...new Set(faqData.map(item => item.category))];

const FAQPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('全部');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filteredFAQ = activeCategory === '全部'
    ? faqData
    : faqData.filter(item => item.category === activeCategory);

  return (
    <div className="bg-hero-dark min-h-screen pt-28 pb-16 px-4 md:px-8 text-gray-100">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-12 text-center">
          <div className="inline-block px-3 py-1 mb-4 border border-hero-gold/30 rounded-full bg-hero-gold/5 backdrop-blur-sm">
            <p className="text-xs uppercase tracking-[0.2em] text-hero-gold font-bold">FAQ</p>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">常見問題</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            找不到答案？加入我們的 <a href="https://discord.gg/76gSTeqtBw" target="_blank" rel="noopener noreferrer" className="text-hero-gold hover:underline">Discord 社群</a> 或 <a href="https://line.me/ti/g2/DJg84HtyGvoYNMEZdQEgrosPZS8bgRonuW8aWQ" target="_blank" rel="noopener noreferrer" className="text-hero-gold hover:underline">LINE 玩家群</a> 詢問
          </p>
        </header>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveCategory('全部')}
            className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
              activeCategory === '全部'
                ? 'bg-hero-gold text-black'
                : 'bg-white/5 text-gray-300 hover:bg-white/10'
            }`}
          >
            全部
          </button>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                activeCategory === category
                  ? 'bg-hero-gold text-black'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {filteredFAQ.map((item, index) => (
            <div
              key={index}
              className="bg-hero-panel/50 border border-white/10 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-bold text-white pr-4">{item.question}</span>
                <svg
                  className={`w-5 h-5 text-hero-gold flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-300 leading-relaxed border-t border-white/5 pt-4">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center bg-gradient-to-r from-hero-gold/10 to-hero-green/10 rounded-2xl p-8 border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-4">還有其他問題？</h2>
          <p className="text-gray-300 mb-6">加入官方社群，與其他冒險者交流！</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://lin.ee/WQwrOvC"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#06C755] hover:bg-[#05b64d] text-white px-6 py-3 rounded-xl font-bold transition-all hover:scale-105"
            >
              立即開始遊戲
            </a>
            <a
              href="https://discord.gg/76gSTeqtBw"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#5865F2] hover:bg-[#4752c4] text-white px-6 py-3 rounded-xl font-bold transition-all hover:scale-105"
            >
              加入 Discord
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// 導出 FAQ 資料供 Schema 使用
export const getFAQSchema = () => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqData.map(item => ({
    "@type": "Question",
    "name": item.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.answer
    }
  }))
});

export default FAQPage;
