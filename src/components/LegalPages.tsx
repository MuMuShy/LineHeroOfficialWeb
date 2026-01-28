import React, { useEffect } from 'react';

const BackButton: React.FC = () => (
  <a
    href="/"
    className="mb-8 text-hero-gold hover:text-white flex items-center gap-2 font-bold transition-colors group inline-flex"
  >
    <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
    </svg>
    返回首頁
  </a>
);

const LegalWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-hero-dark pt-28 pb-12 px-4 md:px-8 font-sans">
      <div className="max-w-4xl mx-auto">
        <BackButton />
        <div className="bg-hero-panel/50 rounded-2xl border border-white/10 p-6 md:p-12 shadow-2xl text-gray-300 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};

export const PrivacyPolicyPage: React.FC = () => (
  <LegalWrapper>
    <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 border-b border-white/10 pb-6">隱私權政策</h1>

    <section className="mb-8">
      <h2 className="text-xl md:text-2xl font-bold text-hero-gold mb-4">1. 前言</h2>
      <p className="mb-4">歡迎您使用 LINE Hero 無盡冒險（以下簡稱「本服務」）。我們非常重視您的個人隱私權，為了讓您了解我們如何蒐集、處理及利用您的個人資料，特制定本隱私權政策。</p>

      <div className="bg-white/5 border border-hero-gold/30 p-6 rounded-xl my-6">
        <h4 className="text-hero-gold font-bold mb-2">重要提醒</h4>
        <p>當您使用本服務時，即表示您同意本隱私權政策的內容。如您不同意本政策的任何部分，請停止使用本服務。</p>
      </div>
    </section>

    <section className="mb-8">
      <h2 className="text-xl md:text-2xl font-bold text-hero-gold mb-4">2. 資料蒐集</h2>
      <p className="mb-4">我們可能蒐集以下類型的資料：</p>
      <ul className="list-disc list-inside space-y-2 ml-4">
        <li>LINE 帳號資訊（顯示名稱、大頭貼等公開資訊）</li>
        <li>遊戲進度、成就、物品資料</li>
        <li>交易紀錄</li>
        <li>客服聯繫紀錄</li>
        <li>裝置資訊（用於最佳化體驗）</li>
      </ul>
    </section>

    <section className="mb-8">
      <h2 className="text-xl md:text-2xl font-bold text-hero-gold mb-4">3. 資料使用</h2>
      <p className="mb-4">蒐集的資料將用於：</p>
      <ul className="list-disc list-inside space-y-2 ml-4">
        <li>提供遊戲服務</li>
        <li>改善遊戲體驗</li>
        <li>客戶服務</li>
        <li>法律遵循</li>
      </ul>
    </section>

    <section className="mb-8">
      <h2 className="text-xl md:text-2xl font-bold text-hero-gold mb-4">4. 聯絡我們</h2>
      <p>如對本隱私權政策有任何疑問，請透過遊戲內客服或官方社群聯繫我們。</p>
    </section>

    <p className="text-sm text-gray-500 mt-12">最後更新日期：2025 年 1 月</p>
  </LegalWrapper>
);

export const TermsOfServicePage: React.FC = () => (
  <LegalWrapper>
    <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 border-b border-white/10 pb-6">服務條款</h1>

    <section className="mb-8">
      <h2 className="text-xl md:text-2xl font-bold text-hero-gold mb-4">1. 服務說明</h2>
      <p className="mb-4">LINE Hero 無盡冒險是一款透過 LINE 平台提供的線上角色扮演遊戲。使用本服務即表示您同意遵守本條款。</p>
    </section>

    <section className="mb-8">
      <h2 className="text-xl md:text-2xl font-bold text-hero-gold mb-4">2. 帳號管理</h2>
      <ul className="list-disc list-inside space-y-2 ml-4">
        <li>您的遊戲帳號與 LINE 帳號綁定</li>
        <li>禁止帳號買賣、交易或轉讓</li>
        <li>您需對帳號內的所有活動負責</li>
      </ul>
    </section>

    <section className="mb-8">
      <h2 className="text-xl md:text-2xl font-bold text-hero-gold mb-4">3. 使用規範</h2>
      <p className="mb-4">禁止以下行為：</p>
      <ul className="list-disc list-inside space-y-2 ml-4">
        <li>使用外掛、作弊程式</li>
        <li>利用漏洞獲取不當利益</li>
        <li>騷擾、詐騙其他玩家</li>
        <li>散布不當言論</li>
        <li>任何違法行為</li>
      </ul>
    </section>

    <section className="mb-8">
      <h2 className="text-xl md:text-2xl font-bold text-hero-gold mb-4">4. 虛擬物品</h2>
      <p className="mb-4">遊戲內虛擬物品屬於本服務之一部分，您對其不具所有權。我們保留調整虛擬物品內容的權利。</p>
    </section>

    <section className="mb-8">
      <h2 className="text-xl md:text-2xl font-bold text-hero-gold mb-4">5. 條款修改</h2>
      <p>我們保留隨時修改本條款的權利，修改後的條款將公告於官方網站。</p>
    </section>

    <p className="text-sm text-gray-500 mt-12">最後更新日期：2025 年 1 月</p>
  </LegalWrapper>
);

export const RefundPolicyPage: React.FC = () => (
  <LegalWrapper>
    <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 border-b border-white/10 pb-6">退款政策</h1>

    <section className="mb-8">
      <h2 className="text-xl md:text-2xl font-bold text-hero-gold mb-4">1. 退款原則</h2>
      <p className="mb-4">基於虛擬商品的特性，原則上已購買的虛擬商品不予退款。但以下情況例外：</p>
      <ul className="list-disc list-inside space-y-2 ml-4">
        <li>系統錯誤導致的重複扣款</li>
        <li>購買後未入帳的商品</li>
        <li>其他可歸責於本服務的情況</li>
      </ul>
    </section>

    <section className="mb-8">
      <h2 className="text-xl md:text-2xl font-bold text-hero-gold mb-4">2. 退款流程</h2>
      <ol className="list-decimal list-inside space-y-2 ml-4">
        <li>透過遊戲內客服提出退款申請</li>
        <li>提供交易憑證（訂單編號、交易截圖等）</li>
        <li>等待客服審核（約 3-5 個工作天）</li>
        <li>審核通過後，款項將退回原付款方式</li>
      </ol>
    </section>

    <section className="mb-8">
      <h2 className="text-xl md:text-2xl font-bold text-hero-gold mb-4">3. 注意事項</h2>
      <ul className="list-disc list-inside space-y-2 ml-4">
        <li>已使用的虛擬商品不予退款</li>
        <li>因違規行為被處分的帳號不予退款</li>
        <li>退款處理時間可能因金流商而異</li>
      </ul>
    </section>

    <section className="mb-8">
      <h2 className="text-xl md:text-2xl font-bold text-hero-gold mb-4">4. 聯絡客服</h2>
      <p>如有退款相關問題，請透過遊戲內客服系統或官方 LINE 帳號聯繫我們。</p>
    </section>

    <p className="text-sm text-gray-500 mt-12">最後更新日期：2025 年 1 月</p>
  </LegalWrapper>
);
