import React from 'react';

const TAB_ITEMS = ['強化', '精煉', '進階', '洗練', '星力', '潛能', '轉移'];

const EQUIPMENT_LIST = [
  {
    name: '盜賊下身',
    level: '+8',
    type: '下身',
    image: 'https://image.linehero.tw/images/items/equipments/pants/20.png',
  },
  {
    name: '牧師褲',
    level: '+6',
    type: '下身',
    image: 'https://image.linehero.tw/images/items/equipments/pants/22.png',
  },
  {
    name: '寶珠項鍊',
    level: '+5',
    type: '飾品',
    image: 'https://image.linehero.tw/images/items/equipments/jewerly/29.png',
  },
];

const MATERIALS = [
  {
    name: '高階信仰結晶石',
    qty: '320',
    image: 'https://image.linehero.tw/images/items/materials/faith_max.png',
  },
  {
    name: '高階智慧結晶石',
    qty: '48',
    image: 'https://image.linehero.tw/images/items/materials/int_max.png',
  },
  {
    name: '基礎力量結晶石',
    qty: '12',
    image: 'https://image.linehero.tw/images/items/materials/runes/s1.jpg',
  },
];

const BlacksmithFeaturePage: React.FC = () => (
  <div className="bg-hero-dark min-h-screen pt-28 pb-16 px-4 md:px-8 text-gray-100 relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('https://mumu.tw/images/noise.png')] opacity-[0.03] pointer-events-none mix-blend-overlay"></div>
    <div className="absolute top-0 left-0 w-full h-[45vh] bg-gradient-to-b from-hero-secondary/10 to-transparent pointer-events-none"></div>

    <div className="max-w-6xl mx-auto relative z-10 space-y-10">
      <header className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-hero-gold/30 rounded-full bg-hero-gold/5">
          <span className="text-xs uppercase tracking-[0.2em] text-hero-gold font-bold">Blacksmith</span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/60">預覽</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-white">鐵匠鋪</h1>
        <p className="text-gray-300 max-w-3xl mx-auto text-base md:text-lg">
          裝備養成核心中心。強化、精煉、進階、洗練、星力與潛能皆可在此完成。
        </p>
      </header>

      <div className="bg-hero-panel/60 border border-white/10 rounded-2xl p-5 md:p-6 space-y-5">
        <div className="flex flex-wrap gap-2">
          {TAB_ITEMS.map((tab, idx) => (
            <button
              key={tab}
              className={`text-xs font-bold px-4 py-2 rounded-full border ${idx === 0
                  ? 'bg-hero-gold/20 border-hero-gold/50 text-hero-gold'
                  : 'bg-white/5 border-white/10 text-gray-400'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-6">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">裝備清單</h2>
            {EQUIPMENT_LIST.map((item) => (
              <div key={item.name} className="flex items-center gap-4 bg-black/50 border border-white/5 rounded-xl px-4 py-3">
                <img src={item.image} alt={item.name} className="w-12 h-12 rounded-lg object-contain" />
                <div className="flex-1">
                  <div className="text-sm font-bold text-white">{item.name}</div>
                  <div className="text-xs text-gray-400">{item.type} · {item.level}</div>
                </div>
                <button className="text-xs font-bold px-3 py-2 rounded-lg bg-hero-gold/20 border border-hero-gold/40 text-hero-gold">
                  選擇
                </button>
              </div>
            ))}
          </section>

          <section className="bg-black/50 border border-white/5 rounded-xl p-4 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-white">強化面板</h2>
              <span className="text-xs text-gray-400">示意</span>
            </div>
            <div className="space-y-2 text-sm text-gray-300">
              <div>目前強化：+8</div>
              <div>成功率：72%</div>
              <div>消耗金幣：18,000</div>
            </div>
            <button className="w-full text-xs font-bold py-2 rounded-lg bg-hero-gold/20 border border-hero-gold/40 text-hero-gold">
              開始強化
            </button>
            <div className="text-xs text-gray-400">
              提示：強化與精煉同步提升可獲得額外 10% 加成。
            </div>
          </section>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-6">
        <section className="bg-hero-panel/60 border border-white/10 rounded-2xl p-5 md:p-6 space-y-4">
          <h2 className="text-xl font-bold text-white">素材庫</h2>
          <div className="space-y-3">
            {MATERIALS.map((material) => (
              <div key={material.name} className="flex items-center gap-3 bg-black/50 border border-white/5 rounded-xl px-4 py-3">
                <img src={material.image} alt={material.name} className="w-10 h-10 rounded-lg object-contain" />
                <div className="flex-1">
                  <div className="text-sm font-bold text-white">{material.name}</div>
                  <div className="text-xs text-gray-400">持有數量</div>
                </div>
                <div className="text-sm font-bold text-hero-gold">{material.qty}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-hero-panel/60 border border-white/10 rounded-2xl p-5 md:p-6 space-y-4">
          <h2 className="text-xl font-bold text-white">進階操作</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
            {[
              '進階強化',
              '裝備洗練',
              '星力提升',
              '潛能賦予',
              '精煉轉移',
              '屬性鎖定',
            ].map((action) => (
              <div key={action} className="bg-black/50 border border-white/5 rounded-xl px-4 py-3 text-gray-300">
                {action}
              </div>
            ))}
          </div>
          <div className="bg-black/40 border border-white/5 rounded-xl px-4 py-3 text-xs text-gray-400">
            高星級裝備有損毀風險，建議搭配保護素材再進行升級。
          </div>
        </section>
      </div>
    </div>
  </div>
);

export default BlacksmithFeaturePage;
