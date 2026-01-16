import React from 'react';

const INVENTORY_TABS = ['裝備', '材料', '消耗品', '外觀'];

const EQUIPMENT_ITEMS = [
  {
    name: '蒼焰長劍',
    tag: '傳說',
    power: '+1,240',
    image: 'https://mumu.tw/linehero/images/items/default.png',
  },
  {
    name: '夜幕護甲',
    tag: '史詩',
    power: '+980',
    image: 'https://mumu.tw/linehero/images/items/default.png',
  },
  {
    name: '星紋護符',
    tag: '稀有',
    power: '+420',
    image: 'https://mumu.tw/linehero/images/items/default.png',
  },
];

const MATERIAL_ITEMS = [
  {
    name: '精煉魂魄',
    qty: 'x320',
    image: 'https://mumu.tw/linehero/images/items/materials/soul_icon.png',
  },
  {
    name: '魂幣',
    qty: 'x8,400',
    image: 'https://mumu.tw/linehero/images/items/soul_small.png',
  },
  {
    name: '夥伴碎片',
    qty: 'x45',
    image: 'https://mumu.tw/linehero/images/items/pet_soul.png',
  },
];

const InventoryFeaturePage: React.FC = () => (
  <div className="bg-hero-dark min-h-screen pt-28 pb-16 px-4 md:px-8 text-gray-100 relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('https://mumu.tw/images/noise.png')] opacity-[0.03] pointer-events-none mix-blend-overlay"></div>
    <div className="absolute top-0 left-0 w-full h-[45vh] bg-gradient-to-b from-hero-secondary/10 to-transparent pointer-events-none"></div>

    <div className="max-w-6xl mx-auto relative z-10 space-y-10">
      <header className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-hero-gold/30 rounded-full bg-hero-gold/5">
          <span className="text-xs uppercase tracking-[0.2em] text-hero-gold font-bold">Inventory</span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/60">UI Mock</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-white">背包與裝備</h1>
        <p className="text-gray-300 max-w-3xl mx-auto text-base md:text-lg">
          管理裝備、材料與外觀收藏，快速整理資源，打造高效配裝流程。
        </p>
      </header>

      <div className="bg-hero-panel/60 border border-white/10 rounded-2xl p-5 md:p-6 space-y-6">
        <div className="flex flex-wrap gap-2">
          {INVENTORY_TABS.map((tab, idx) => (
            <button
              key={tab}
              className={`text-xs font-bold px-4 py-2 rounded-full border ${
                idx === 0
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
            <h2 className="text-lg font-bold text-white">裝備列表</h2>
            {EQUIPMENT_ITEMS.map((item) => (
              <div key={item.name} className="flex items-center gap-4 bg-black/50 border border-white/5 rounded-xl px-4 py-3">
                <img src={item.image} alt={item.name} className="w-12 h-12 rounded-lg object-contain" />
                <div className="flex-1">
                  <div className="text-sm font-bold text-white">{item.name}</div>
                  <div className="text-xs text-gray-400">{item.tag} · 戰力 {item.power}</div>
                </div>
                <button className="text-xs font-bold px-3 py-2 rounded-lg bg-hero-gold/20 border border-hero-gold/40 text-hero-gold">
                  裝備
                </button>
              </div>
            ))}
          </section>

          <section className="bg-black/50 border border-white/5 rounded-xl p-4 space-y-4">
            <h2 className="text-lg font-bold text-white">當前配裝</h2>
            <div className="grid grid-cols-2 gap-3 text-xs text-gray-300">
              {['主手', '副手', '頭盔', '盔甲', '手套', '鞋子'].map((slot) => (
                <div key={slot} className="bg-black/40 border border-white/5 rounded-lg px-3 py-2">
                  {slot}：已裝備
                </div>
              ))}
            </div>
            <button className="w-full text-xs font-bold py-2 rounded-lg bg-hero-gold/20 border border-hero-gold/40 text-hero-gold">
              前往鐵匠鋪
            </button>
          </section>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-6">
        <section className="bg-hero-panel/60 border border-white/10 rounded-2xl p-5 md:p-6 space-y-4">
          <h2 className="text-xl font-bold text-white">材料與貨幣</h2>
          <div className="space-y-3">
            {MATERIAL_ITEMS.map((material) => (
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
          <h2 className="text-xl font-bold text-white">快速整理</h2>
          <div className="grid grid-cols-2 gap-3 text-sm text-gray-300">
            {[
              '鎖定珍稀裝備',
              '拆解未裝備',
              '拆解重複裝備',
              '材料分類整理',
              '外觀收藏清單',
              '裝備對比',
            ].map((action) => (
              <div key={action} className="bg-black/50 border border-white/5 rounded-xl px-4 py-3">
                {action}
              </div>
            ))}
          </div>
          <div className="bg-black/40 border border-white/5 rounded-xl px-4 py-3 text-xs text-gray-400">
            建議：清理背包後再進行強化與精煉，避免素材不足。
          </div>
        </section>
      </div>
    </div>
  </div>
);

export default InventoryFeaturePage;
