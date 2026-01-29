import React from 'react';
import { trackCtaClick } from '../services/analytics';

interface GuideStep {
  title: string;
  description: string;
  tips?: string[];
  image?: string;
}

const guideSteps: GuideStep[] = [
  {
    title: '加入官方帳號',
    description: '掃描 QR Code 或點擊連結加入 LineHero 官方帳號，完全免下載、免安裝。',
    tips: ['可使用手機或電腦版 LINE', '建議開啟 LINE 通知以接收遊戲訊息'],
  },
  {
    title: '創建角色',
    description: '選擇你的職業並為角色取名。四大職業各有獨特的戰鬥風格與技能。',
    tips: ['戰士：近戰高防禦', '法師：遠程魔法攻擊', '盜賊：敏捷高迴避', '牧師：治療輔助型'],
  },
  {
    title: '完成新手教學',
    description: '跟著引導完成基礎教學，了解探索、戰鬥、裝備等核心系統。',
    tips: ['教學完成可獲得新手禮包', '建議仔細閱讀說明'],
  },
  {
    title: '開始探索',
    description: '派遣角色進行探索，獲得經驗值、金幣和裝備。探索是冒險的核心玩法。',
    tips: ['探索可獲得各種資源', '注意角色血量狀態', '適時返回休息補給'],
  },
  {
    title: '強化裝備',
    description: '使用獲得的材料強化裝備，提升角色戰力。',
    tips: ['收集強化所需材料', '注意強化成功率', '循序漸進提升等級'],
  },
  {
    title: '加入陣營',
    description: '選擇加入陣營，參與陣營活動與團隊內容，獲得更多獎勵。',
    tips: ['陣營活動有豐富獎勵', '可與陣營夥伴組隊', '參與陣營專屬玩法'],
  },
];

const quickTips = [
  { icon: '⚔️', title: '每日必做', content: '簽到、探索、領取獎勵' },
  { icon: '🎁', title: '進階玩法', content: '禮包會員、傳奇冒險者、自動戰鬥特權' },
  { icon: '📈', title: '穩定成長', content: '每日完成任務，累積資源提升戰力' },
  { icon: '🤝', title: '社交建議', content: '加入官方 Discord 與 LINE 玩家社群' },
];

const BeginnerGuidePage: React.FC = () => {
  return (
    <div className="bg-hero-dark min-h-screen pt-28 pb-16 px-4 md:px-8 text-gray-100">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <header className="mb-12 text-center">
          <div className="inline-block px-3 py-1 mb-4 border border-hero-gold/30 rounded-full bg-hero-gold/5 backdrop-blur-sm">
            <p className="text-xs uppercase tracking-[0.2em] text-hero-gold font-bold">Beginner Guide</p>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">新手攻略指南</h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            歡迎來到 LineHero 無盡冒險！跟著這份攻略，快速上手成為強大的冒險者。
          </p>
        </header>

        {/* Quick Start CTA */}
        <div className="bg-gradient-to-r from-hero-green/20 to-hero-gold/20 rounded-2xl p-6 mb-12 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-white mb-2">還沒開始？現在加入！</h2>
            <p className="text-gray-300 text-sm">完全免費、免下載，打開 LINE 就能玩</p>
          </div>
          <a
            href="https://lin.ee/3JlUhak"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#06C755] hover:bg-[#05b64d] text-white px-8 py-3 rounded-xl font-bold transition-all hover:scale-105 flex items-center gap-2 whitespace-nowrap"
            onClick={() => trackCtaClick('立即開始', 'beginner-guide', 'https://lin.ee/3JlUhak')}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
            </svg>
            立即開始遊戲
          </a>
        </div>

        {/* Step by Step Guide */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="w-8 h-8 bg-hero-gold rounded-full flex items-center justify-center text-black text-sm font-bold">📖</span>
            新手入門步驟
          </h2>
          <div className="space-y-6">
            {guideSteps.map((step, index) => (
              <div
                key={index}
                className="bg-hero-panel/50 border border-white/10 rounded-2xl p-6 hover:border-hero-gold/30 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-hero-gold rounded-full flex items-center justify-center text-black font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-300 mb-4">{step.description}</p>
                    {step.tips && (
                      <div className="bg-black/20 rounded-xl p-4">
                        <p className="text-hero-gold text-sm font-bold mb-2">💡 小提示</p>
                        <ul className="space-y-1">
                          {step.tips.map((tip, tipIndex) => (
                            <li key={tipIndex} className="text-gray-400 text-sm flex items-start gap-2">
                              <span className="text-hero-gold">•</span>
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Tips */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="w-8 h-8 bg-hero-gold rounded-full flex items-center justify-center text-black text-sm font-bold">⚡</span>
            快速小技巧
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {quickTips.map((tip, index) => (
              <div
                key={index}
                className="bg-hero-panel/50 border border-white/10 rounded-xl p-5 flex items-start gap-4"
              >
                <span className="text-3xl">{tip.icon}</span>
                <div>
                  <h3 className="font-bold text-white mb-1">{tip.title}</h3>
                  <p className="text-gray-400 text-sm">{tip.content}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Related Links */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="w-8 h-8 bg-hero-gold rounded-full flex items-center justify-center text-black text-sm font-bold">🔗</span>
            更多資源
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a href="/features" className="bg-hero-panel/50 border border-white/10 rounded-xl p-5 hover:border-hero-gold/30 transition-all group">
              <h3 className="font-bold text-white mb-2 group-hover:text-hero-gold transition-colors">功能介紹</h3>
              <p className="text-gray-400 text-sm">了解所有遊戲系統</p>
            </a>
            <a href="/faq" className="bg-hero-panel/50 border border-white/10 rounded-xl p-5 hover:border-hero-gold/30 transition-all group">
              <h3 className="font-bold text-white mb-2 group-hover:text-hero-gold transition-colors">常見問題</h3>
              <p className="text-gray-400 text-sm">解答你的疑惑</p>
            </a>
            <a href="https://wiki.linehero.tw" target="_blank" rel="noopener noreferrer" className="bg-hero-panel/50 border border-white/10 rounded-xl p-5 hover:border-hero-gold/30 transition-all group">
              <h3 className="font-bold text-white mb-2 group-hover:text-hero-gold transition-colors flex items-center gap-2">
                Wiki 攻略
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </h3>
              <p className="text-gray-400 text-sm">詳細數據與攻略</p>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

// HowTo Schema for SEO
export const getHowToSchema = () => ({
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "如何開始遊玩 LineHero 無盡冒險",
  "description": "完整的 LineHero 新手入門指南，從加入帳號到成為強大冒險者的完整步驟。",
  "totalTime": "PT10M",
  "step": guideSteps.map((step, index) => ({
    "@type": "HowToStep",
    "position": index + 1,
    "name": step.title,
    "text": step.description
  }))
});

export default BeginnerGuidePage;
