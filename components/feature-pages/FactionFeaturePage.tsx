import React from 'react';

const FACTIONS = [
  {
    name: '聖光教堂',
    tag: '秩序',
    image: 'https://mumu.tw/linehero/images/factions/faction_holy_church.png',
    tone: 'border-blue-500/40 bg-blue-500/10 text-blue-300',
  },
  {
    name: '暗影議會',
    tag: '自由',
    image: 'https://mumu.tw/linehero/images/factions/faction_shadow_council.png',
    tone: 'border-red-500/40 bg-red-500/10 text-red-300',
  },
];

const FACTION_TASKS = [
  {
    name: '每日捐獻',
    reward: '陣營代幣 x60',
    progress: '3 / 5',
  },
  {
    name: '討伐任務',
    reward: '貢獻點數 x120',
    progress: '1 / 3',
  },
  {
    name: '邊境支援',
    reward: '陣營經驗 x220',
    progress: '完成',
  },
];

const FACTION_SHOP = [
  {
    name: '陣營代幣箱',
    price: '90',
    image: 'https://mumu.tw/linehero/images/factions/faction_token_rpg.png',
  },
  {
    name: '支援補給包',
    price: '120',
    image: 'https://mumu.tw/linehero/images/items/usage/dungeon_token.png',
  },
  {
    name: '傳說裝備箱',
    price: '240',
    image: 'https://mumu.tw/linehero/images/items/default.png',
  },
];

const FactionFeaturePage: React.FC = () => (
  <div className="bg-hero-dark min-h-screen pt-28 pb-16 px-4 md:px-8 text-gray-100 relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('https://mumu.tw/images/noise.png')] opacity-[0.03] pointer-events-none mix-blend-overlay"></div>
    <div className="absolute top-0 left-0 w-full h-[45vh] bg-gradient-to-b from-hero-secondary/10 to-transparent pointer-events-none"></div>

    <div className="max-w-6xl mx-auto relative z-10 space-y-10">
      <header className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-hero-gold/30 rounded-full bg-hero-gold/5">
          <span className="text-xs uppercase tracking-[0.2em] text-hero-gold font-bold">Factions</span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/60">預覽</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-white">陣營系統</h1>
        <p className="text-gray-300 max-w-3xl mx-auto text-base md:text-lg">
          選擇陣營、參與邊境防守與世界共鬥，累積陣營代幣兌換專屬獎勵。
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {FACTIONS.map((faction) => (
          <div key={faction.name} className={`rounded-2xl border p-5 md:p-6 shadow-xl ${faction.tone}`}>
            <div className="flex items-center gap-4">
              <img src={faction.image} alt={faction.name} className="w-20 h-20 rounded-xl object-cover" />
              <div>
                <div className="text-sm uppercase tracking-[0.2em] text-white/60">{faction.tag}</div>
                <div className="text-2xl font-bold text-white">{faction.name}</div>
              </div>
            </div>
            <div className="mt-4 text-sm text-white/70">
              加入後即可參與陣營任務、邊境防守與世界共鬥。
            </div>
            <button className="mt-4 text-xs font-bold px-4 py-2 rounded-lg border border-white/30 text-white/80">
              選擇陣營
            </button>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-6">
        <section className="bg-hero-panel/60 border border-white/10 rounded-2xl p-5 md:p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white">陣營任務</h2>
            <span className="text-xs text-gray-400">今日進度</span>
          </div>
          <div className="space-y-3">
            {FACTION_TASKS.map((task) => (
              <div key={task.name} className="flex items-center gap-3 bg-black/50 border border-white/5 rounded-xl px-4 py-3">
                <div className="flex-1">
                  <div className="text-sm font-bold text-white">{task.name}</div>
                  <div className="text-xs text-gray-400">{task.reward}</div>
                </div>
                <div className="text-xs text-hero-gold">{task.progress}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-hero-panel/60 border border-white/10 rounded-2xl p-5 md:p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white">陣營代幣</h2>
            <div className="flex items-center gap-2 text-xs text-hero-gold">
              <img src="https://mumu.tw/linehero/images/factions/faction_token_rpg.png" alt="代幣" className="w-5 h-5" />
              2,480
            </div>
          </div>
          <div className="text-sm text-gray-300">
            代幣可用於陣營商店兌換限定獎勵與資源補給。
          </div>
          <button className="w-full text-xs font-bold py-2 rounded-lg bg-hero-gold/20 border border-hero-gold/40 text-hero-gold">
            前往陣營商店
          </button>
        </section>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-6">
        <section className="bg-hero-panel/60 border border-white/10 rounded-2xl p-5 md:p-6 space-y-4">
          <h2 className="text-xl font-bold text-white">邊境防守</h2>
          <div className="bg-black/50 border border-white/5 rounded-xl p-4 space-y-3 text-sm text-gray-300">
            <div>目前據點：3 / 6</div>
            <div>每 5 分鐘產出代幣，參與者每日結算獎勵。</div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {['戰士防守', '盜賊突襲', '法師強化', '牧師聖療'].map((action) => (
                <div key={action} className="bg-black/60 border border-white/5 rounded-lg px-3 py-2">
                  {action}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-hero-panel/60 border border-white/10 rounded-2xl p-5 md:p-6 space-y-4">
          <h2 className="text-xl font-bold text-white">陣營商店</h2>
          <div className="space-y-3">
            {FACTION_SHOP.map((item) => (
              <div key={item.name} className="flex items-center gap-3 bg-black/50 border border-white/5 rounded-xl px-4 py-3">
                <img src={item.image} alt={item.name} className="w-10 h-10 rounded-lg object-contain" />
                <div className="flex-1">
                  <div className="text-sm font-bold text-white">{item.name}</div>
                  <div className="text-xs text-gray-400">陣營代幣</div>
                </div>
                <div className="text-sm font-bold text-hero-gold">{item.price}</div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="bg-hero-panel/60 border border-white/10 rounded-2xl p-5 md:p-6 space-y-4">
        <h2 className="text-xl font-bold text-white">世界共鬥</h2>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 bg-black/50 border border-white/5 rounded-xl p-4">
            <div className="text-sm font-bold text-white mb-2">世界 Boss · 羅德拉斯</div>
            <div className="text-xs text-gray-400 mb-3">階段 2 / 5 · 24:18</div>
            <div className="h-2 rounded-full bg-white/10 overflow-hidden mb-2">
              <div className="h-full w-2/3 bg-gradient-to-r from-red-500 to-orange-400"></div>
            </div>
            <div className="text-xs text-gray-400">累積傷害：2,850,000</div>
          </div>
          <div className="flex-1 bg-black/50 border border-white/5 rounded-xl p-4">
            <div className="text-sm font-bold text-white mb-2">獎勵預覽</div>
            <div className="text-xs text-gray-400 mb-3">依傷害排行與擊殺次數結算</div>
            <div className="flex gap-2 text-xs text-hero-gold">
              <span className="px-2 py-1 rounded-full border border-hero-gold/30">固定獎勵</span>
              <span className="px-2 py-1 rounded-full border border-hero-gold/30">週排行獎勵</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default FactionFeaturePage;
