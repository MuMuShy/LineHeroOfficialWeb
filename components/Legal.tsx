import React, { useEffect } from 'react';

interface LegalProps {
  onBack: () => void;
  type: 'privacy' | 'terms' | 'refund';
}

export const LegalPage: React.FC<LegalProps> = ({ onBack, type }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [type]);

  return (
    <div className="min-h-screen bg-hero-dark pt-28 pb-12 px-4 md:px-8 font-sans">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={onBack} 
          className="mb-8 text-hero-gold hover:text-white flex items-center gap-2 font-bold transition-colors group"
        >
          <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          返回首頁
        </button>

        <div className="bg-hero-panel/50 rounded-2xl border border-white/10 p-6 md:p-12 shadow-2xl text-gray-300 leading-relaxed">
          {type === 'privacy' && <PrivacyContent />}
          {type === 'terms' && <TermsContent />}
          {type === 'refund' && <RefundContent />}
        </div>
      </div>
    </div>
  );
};

const PrivacyContent = () => (
  <>
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
      <h2 className="text-xl md:text-2xl font-bold text-hero-gold mb-4">2. 資料收集範圍</h2>
      <h3 className="text-lg font-bold text-white mt-4 mb-2">2.1 帳號資訊</h3>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>LINE 帳號資訊（ID、暱稱、頭像）</li>
        <li>電子郵件地址（如有提供）</li>
        <li>遊戲內暱稱及角色資訊</li>
      </ul>

      <h3 className="text-lg font-bold text-white mt-4 mb-2">2.2 遊戲數據</h3>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>遊戲進度及成就</li>
        <li>遊戲內行為及互動記錄</li>
        <li>角色等級及裝備資訊</li>
      </ul>

      <h3 className="text-lg font-bold text-white mt-4 mb-2">2.3 交易資訊</h3>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>購買紀錄及交易明細</li>
        <li>支付方式資訊</li>
        <li>發票相關資訊</li>
      </ul>

      <h3 className="text-lg font-bold text-white mt-4 mb-2">2.4 系統資訊</h3>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>裝置識別碼</li>
        <li>IP 位址</li>
        <li>作業系統版本</li>
        <li>瀏覽器類型</li>
      </ul>
    </section>

    <section className="mb-8">
      <h2 className="text-xl md:text-2xl font-bold text-hero-gold mb-4">3. 資料使用目的</h2>
      <p className="mb-4">我們收集和使用您的個人資料之目的如下：</p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>提供及維護遊戲服務</li>
        <li>處理您的交易請求</li>
        <li>提供客戶服務與支援</li>
        <li>改善遊戲體驗及開發新功能</li>
        <li>防止詐欺及確保遊戲安全</li>
        <li>發送系統通知及更新資訊</li>
        <li>依法律要求提供必要資訊</li>
      </ul>
    </section>

    <section className="mb-8">
      <h2 className="text-xl md:text-2xl font-bold text-hero-gold mb-4">4. 資料保護措施</h2>
      <p className="mb-4">我們採取以下安全措施保護您的個人資料：</p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>使用 SSL 加密技術保護資料傳輸</li>
        <li>定期進行系統安全檢測</li>
        <li>實施嚴格的資料存取控制</li>
        <li>定期備份重要資料</li>
        <li>員工簽署保密協議</li>
      </ul>
    </section>

    <section className="mb-8">
      <h2 className="text-xl md:text-2xl font-bold text-hero-gold mb-4">5. 資料分享與披露</h2>
      <p className="mb-4">除非有下列情況，我們不會向第三方分享您的個人資料：</p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>經過您的明確同意</li>
        <li>為提供服務所必需（如支付處理）</li>
        <li>法律要求或政府機關依法要求</li>
        <li>保護我們或其他用戶的權益</li>
      </ul>
    </section>

    <section className="mb-8">
      <h2 className="text-xl md:text-2xl font-bold text-hero-gold mb-4">6. 您的權利</h2>
      <p className="mb-4">依據個人資料保護法，您擁有以下權利：</p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>查詢或請求閱覽個人資料</li>
        <li>請求製給複製本</li>
        <li>請求補充或更正個人資料</li>
        <li>請求停止蒐集、處理或利用個人資料</li>
        <li>請求刪除個人資料</li>
      </ul>
    </section>

    <section className="mb-8">
      <h2 className="text-xl md:text-2xl font-bold text-hero-gold mb-4">7. Cookie 的使用</h2>
      <p className="mb-4">我們使用 Cookie 及相關技術來提供更好的服務體驗。您可以透過瀏覽器設定來管理 Cookie，但可能會影響部分服務功能。詳細資訊請參考我們的 Cookie 政策。</p>
    </section>

    <section className="mb-8">
      <h2 className="text-xl md:text-2xl font-bold text-hero-gold mb-4">8. 政策更新</h2>
      <p className="mb-4">我們保留隨時修改本隱私權政策的權利。當本政策有重大變更時，我們會在網站上公告或以其他方式通知您。</p>
    </section>

    <section className="mb-8">
      <h2 className="text-xl md:text-2xl font-bold text-hero-gold mb-4">9. 聯絡我們</h2>
      <p className="mb-4">如您對本隱私權政策有任何疑問或建議，歡迎透過以下方式聯絡我們：</p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>LINE 客服：<a href="https://lin.ee/gG3Xfgr" target="_blank" rel="noopener noreferrer" className="text-hero-green hover:underline font-bold">官方客服</a></li>
        <li>電子郵件：mail@linehero.tw</li>
      </ul>
    </section>

    <p className="text-sm text-gray-500 border-t border-white/10 pt-4">最後更新日期：2024年3月20日</p>
  </>
);

const TermsContent = () => (
  <>
    <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 border-b border-white/10 pb-6">服務條款</h1>
    
    <section className="mb-8">
      <h2 className="text-xl md:text-2xl font-bold text-hero-gold mb-4">1. 服務說明</h2>
      <p className="mb-4">歡迎使用 LINE Hero 無盡冒險（以下簡稱「本服務」）。本服務是一款在 LINE 平台上運行的文字冒險遊戲，由無限創意軟體有限公司（以下簡稱「本公司」）開發及營運。</p>
      
      <div className="bg-white/5 border border-hero-gold/30 p-6 rounded-xl my-6">
        <h4 className="text-hero-gold font-bold mb-2">重要提醒</h4>
        <p>使用本服務即表示您同意本條款的全部內容。如您不同意本條款的任何部分，請勿使用本服務。</p>
      </div>
    </section>

    <section className="mb-8">
      <h2 className="text-xl md:text-2xl font-bold text-hero-gold mb-4">2. 帳號管理</h2>
      <h3 className="text-lg font-bold text-white mt-4 mb-2">2.1 帳號使用</h3>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>本服務使用 LINE 帳號作為遊戲帳號</li>
        <li>您必須妥善保管自己的帳號資訊</li>
        <li>不得將帳號出借、轉讓或買賣</li>
        <li>因帳號遭盜用所致之損失，本公司不負賠償責任</li>
      </ul>

      <h3 className="text-lg font-bold text-white mt-4 mb-2">2.2 帳號安全</h3>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>發現帳號異常應立即通知客服</li>
        <li>定期更改密碼以確保帳號安全</li>
        <li>不得使用任何自動化工具或外掛程式</li>
      </ul>
    </section>

    <section className="mb-8">
      <h2 className="text-xl md:text-2xl font-bold text-hero-gold mb-4">3. 使用規範</h2>
      <p className="mb-4">使用本服務時，您同意遵守以下規範：</p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>不得進行任何違法或不當行為</li>
        <li>不得散布垃圾訊息或廣告</li>
        <li>不得騷擾或攻擊其他玩家</li>
        <li>不得使用任何作弊程式或外掛</li>
        <li>不得從事任何影響遊戲平衡的行為</li>
        <li>不得散布不實資訊或謠言</li>
      </ul>
    </section>

    <section className="mb-8">
      <h2 className="text-xl md:text-2xl font-bold text-hero-gold mb-4">4. 付費服務</h2>
      <h3 className="text-lg font-bold text-white mt-4 mb-2">4.1 支付規定</h3>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>所有價格均以新台幣計價</li>
        <li>付費項目可能隨時調整</li>
        <li>購買前請確認商品內容及價格</li>
        <li>依法開立電子發票</li>
      </ul>

      <h3 className="text-lg font-bold text-white mt-4 mb-2">4.2 虛擬物品</h3>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>虛擬物品僅供遊戲內使用</li>
        <li>不得用於實物交易</li>
        <li>本公司保留調整虛擬物品內容的權利</li>
      </ul>
    </section>

    <section className="mb-8">
      <h2 className="text-xl md:text-2xl font-bold text-hero-gold mb-4">5. 智慧財產權</h2>
      <p className="mb-4">本服務的所有內容，包括但不限於：</p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>遊戲程式及源代碼</li>
        <li>美術設計及圖像</li>
        <li>文字內容及劇情</li>
        <li>音樂及音效</li>
      </ul>
      <p>均為本公司或其授權方所有，受著作權法及其他智慧財產權法保護。</p>
    </section>

    <section className="mb-8">
      <h2 className="text-xl md:text-2xl font-bold text-hero-gold mb-4">6. 服務變更及終止</h2>
      <p className="mb-4">本公司保留以下權利：</p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>隨時變更、暫停或終止本服務</li>
        <li>修改或更新本條款內容</li>
        <li>調整遊戲內容及機制</li>
        <li>暫停或終止特定用戶的使用權限</li>
      </ul>
    </section>

    <section className="mb-8">
      <h2 className="text-xl md:text-2xl font-bold text-hero-gold mb-4">7. 免責聲明</h2>
      <p className="mb-4">本公司不對以下情況承擔責任：</p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>因不可抗力導致的服務中斷</li>
        <li>用戶個人行為造成的損失</li>
        <li>第三方侵權行為</li>
        <li>用戶間的糾紛</li>
      </ul>
    </section>

    <section className="mb-8">
      <h2 className="text-xl md:text-2xl font-bold text-hero-gold mb-4">8. 準據法及管轄</h2>
      <p className="mb-4">本條款適用中華民國法律。因本服務所生之爭議，除法律另有規定外，以台灣台北地方法院為第一審管轄法院。</p>
    </section>

    <section className="mb-8">
      <h2 className="text-xl md:text-2xl font-bold text-hero-gold mb-4">9. 聯絡方式</h2>
      <p className="mb-4">如您對本條款有任何疑問，請透過以下方式聯絡我們：</p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>LINE 客服：<a href="https://lin.ee/gG3Xfgr" target="_blank" rel="noopener noreferrer" className="text-hero-green hover:underline font-bold">官方客服</a></li>
        <li>電子郵件：mail@linehero.tw</li>
      </ul>
    </section>

    <p className="text-sm text-gray-500 border-t border-white/10 pt-4">最後更新日期：2024年3月20日</p>
  </>
);

const RefundContent = () => (
  <>
    <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 border-b border-white/10 pb-6">退款政策</h1>
    
    <section className="mb-8">
      <h2 className="text-xl md:text-2xl font-bold text-hero-gold mb-4">1. 政策說明</h2>
      <p className="mb-4">本退款政策適用於 LINE Hero 無盡冒險（以下簡稱「本服務」）的所有付費項目。本服務由獨立開發者提供，所有交易均通過 LINE Pay 或信用卡等第三方支付平台進行處理。</p>
      
      <div className="bg-white/5 border border-hero-gold/30 p-6 rounded-xl my-6">
        <h4 className="text-hero-gold font-bold mb-2">重要提醒</h4>
        <p>在進行任何購買前，請務必仔細確認商品內容。本服務為數位內容服務，一旦虛擬物品被使用或會員權限被開通，將不予退款。</p>
      </div>
    </section>

    <section className="mb-8">
      <h2 className="text-xl md:text-2xl font-bold text-hero-gold mb-4">2. 不予退款情況</h2>
      <p className="mb-4">基於數位內容的特殊性，以下情況將不予退款：</p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>已使用或已開通之任何虛擬物品</li>
        <li>已啟動之會員服務</li>
        <li>已兌換或使用之遊戲幣</li>
        <li>因違反服務條款而被終止服務</li>
        <li>透過非官方管道購買之物品</li>
        <li>無法提供有效交易證明</li>
      </ul>
    </section>

    <section className="mb-8">
      <h2 className="text-xl md:text-2xl font-bold text-hero-gold mb-4">3. 例外退款考慮</h2>
      <p className="mb-4">僅在以下特殊情況下考慮退款申請：</p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>系統錯誤導致之重複扣款（需提供明確證明）</li>
        <li>未成年人未經監護人同意之購買（需提供相關證明文件）</li>
        <li>商品內容與官方描述有重大不符</li>
      </ul>
    </section>

    <section className="mb-8">
      <h2 className="text-xl md:text-2xl font-bold text-hero-gold mb-4">4. 退款申請流程</h2>
      <ol className="list-decimal pl-6 space-y-2 mb-4">
        <li>於購買後24小時內提出申請</li>
        <li>提供完整交易證明（含訂單編號、付款收據）</li>
        <li>詳細說明退款原因及相關證明</li>
        <li>等待審核（處理時間視支付平台而定）</li>
      </ol>
    </section>

    <section className="mb-8">
      <h2 className="text-xl md:text-2xl font-bold text-hero-gold mb-4">5. 重要聲明</h2>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>本服務保留修改或更新退款政策的權利</li>
        <li>對於退款申請的審核結果，本服務具有最終決定權</li>
        <li>惡意或重複的退款請求可能導致帳號被永久停用</li>
        <li>本服務可能因技術或其他原因暫停或終止，此類情況不構成退款依據</li>
      </ul>
    </section>

    <section className="mb-8">
      <h2 className="text-xl md:text-2xl font-bold text-hero-gold mb-4">6. 聯絡方式</h2>
      <p className="mb-4">如有退款相關問題，請通過以下方式聯絡：</p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>LINE 客服：<a href="https://lin.ee/EGXKPp6" target="_blank" rel="noopener noreferrer" className="text-hero-green hover:underline font-bold">https://lin.ee/EGXKPp6</a></li>
        <li>電子郵件：mail@linehero.tw</li>
      </ul>
      <p className="text-sm text-gray-500">注意：客服回覆時間為週一至週五 10:00-18:00（台灣時間），例假日除外。</p>
    </section>

    <p className="text-sm text-gray-500 border-t border-white/10 pt-4">最後更新日期：2024年3月20日</p>
  </>
);