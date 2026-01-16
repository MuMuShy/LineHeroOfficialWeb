import React from 'react';

const STATUS_BADGES = [
  { label: '混亂值', value: '78%', tone: 'bg-amber-500/20 border-amber-500/40 text-amber-300' },
  { label: 'Boss 狀態', value: '即將現身', tone: 'bg-red-500/20 border-red-500/40 text-red-300' },
  { label: '可挑戰次數', value: '2 / 3', tone: 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300' },
];

const BOSS_LIST = [
  {
    name: '冥幽境守護者',
    status: '混亂值 80% 觸發',
    hp: '3,450,000',
    image: 'https://mumu.tw/linehero/images/npc/boss/rodras/rodras.png',
  },
  {
    name: '四象域守衛',
    status: '入口開放中',
    hp: '2,980,000',
    image: 'https://mumu.tw/linehero/images/npc/boss/rodras/rodras.png',
  },
  {
    name: '暗影深淵裂隙',
    status: '冷卻 01:15',
    hp: '4,100,000',
    image: 'https://mumu.tw/linehero/images/npc/boss/rodras/rodras.png',
  },
];

const TOTEM_TILES = [
  {
    name: '冥幽境圖騰',
    bonus: '+12% 全屬性',
    image: 'https://mumu.tw/linehero/images/items/region_boss/nether_realm_core.png',
  },
  {
    name: '四象域圖騰',
    bonus: '+9% 攻擊 / 防禦',
    image: 'https://mumu.tw/linehero/images/items/region_boss/four_symbols_core.png',
  },
  {
    name: '暗影深淵圖騰',
    bonus: '+8% 血量 / 抗性',
    image: 'https://mumu.tw/linehero/images/items/region_boss/shadow_abyss_core.png',
  },
];

const REWARD_ITEMS = [
  {
    name: '圖騰碎片',
    qty: 'x12',
    icon: 'https://mumu.tw/linehero/images/items/region_boss/four_symbols_core.png',
  },
  {
    name: '精煉魂魄',
    qty: 'x90',
    icon: 'https://mumu.tw/linehero/images/items/materials/soul_icon.png',
  },
  {
    name: '副本代幣',
    qty: 'x55',
    icon: 'https://mumu.tw/linehero/images/items/usage/dungeon_token.png',
  },
];

const RegionBossFeaturePage: React.FC = () => (
  <div className="bg-hero-dark min-h-screen pt-28 pb-16 px-4 md:px-8 text-gray-100 relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('https://mumu.tw/images/noise.png')] opacity-[0.03] pointer-events-none mix-blend-overlay"></div>
    <div className="absolute top-0 left-0 w-full h-[45vh] bg-gradient-to-b from-hero-secondary/10 to-transparent pointer-events-none"></div>

    <div className="max-w-6xl mx-auto relative z-10 space-y-10">
      <header className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-hero-gold/30 rounded-full bg-hero-gold/5">
          <span className="text-xs uppercase tracking-[0.2em] text-hero-gold font-bold">Region Boss</span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/60">UI Mock</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-white">區域 Boss</h1>
        <p className="text-gray-300 max-w-3xl mx-auto text-base md:text-lg">
          當區域混亂值達到門檻，Boss 現身。以下為玩家討伐介面示意，展示隊伍入場與圖騰成長流程。
        </p>
      </header>

      <div className="flex flex-wrap items-center justify-center gap-3">
        {STATUS_BADGES.map((badge) => (
          <div key={badge.label} className={`px-4 py-2 rounded-full border text-xs font-bold ${badge.tone}`}>
            {badge.label} · {badge.value}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-6">
        <section className="bg-hero-panel/60 border border-white/10 rounded-2xl p-5 md:p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white">Boss 選擇</h2>
            <span className="text-xs text-gray-400">示意資料</span>
          </div>
          <div className="space-y-3">
            {BOSS_LIST.map((boss) => (
              <div key={boss.name} className="flex items-center gap-4 bg-black/50 border border-white/5 rounded-xl px-4 py-3">
                <div className="w-14 h-14 rounded-xl bg-black/70 border border-white/10 flex items-center justify-center">
                  <img src={boss.image} alt={boss.name} className="w-10 h-10 object-contain" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-bold text-white">{boss.name}</div>
                  <div className="text-xs text-hero-gold">{boss.status}</div>
                  <div className="text-xs text-gray-400">HP：{boss.hp}</div>
                </div>
                <button className="text-xs font-bold px-3 py-2 rounded-lg bg-red-500/20 border border-red-500/40 text-red-300">
                  挑戰
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-hero-panel/60 border border-white/10 rounded-2xl p-5 md:p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white">討伐戰報</h2>
            <span className="text-xs text-gray-400">最新一場</span>
          </div>
          <div className="bg-black/50 border border-white/5 rounded-xl p-4 space-y-3">
            <div className="flex items-center gap-3">
              <img
                src="https://mumu.tw/linehero/images/hero_avatar/character_warrior2.png"
                alt="隊長"
                className="w-10 h-10 rounded-lg object-cover"
              />
              <div className="flex-1">
                <div className="text-sm font-bold text-white">隊長 · 夜行者</div>
                <div className="text-xs text-gray-400">總輸出 1,280,450</div>
              </div>
              <span className="text-xs px-2 py-1 rounded-full border border-emerald-500/40 text-emerald-300 bg-emerald-500/20">
                勝利
              </span>
            </div>
            <div className="space-y-2 text-xs text-gray-300">
              <div>消耗時間：02:41</div>
              <div>剩餘隊伍 HP：36%</div>
              <div>掉落稀有素材：3</div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 text-xs">
            {REWARD_ITEMS.map((item) => (
              <div key={item.name} className="bg-black/50 border border-white/5 rounded-lg p-3 text-center">
                <img src={item.icon} alt={item.name} className="w-8 h-8 mx-auto mb-2 object-contain" />
                <div className="text-white font-bold">{item.name}</div>
                <div className="text-hero-gold">{item.qty}</div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-6">
        <section className="bg-hero-panel/60 border border-white/10 rounded-2xl p-5 md:p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white">圖騰成長</h2>
            <span className="text-xs text-gray-400">區域專屬</span>
          </div>
          <div className="space-y-3">
            {TOTEM_TILES.map((totem) => (
              <div key={totem.name} className="flex items-center gap-3 bg-black/50 border border-white/5 rounded-xl px-4 py-3">
                <img src={totem.image} alt={totem.name} className="w-12 h-12 rounded-lg object-contain" />
                <div className="flex-1">
                  <div className="text-sm font-bold text-white">{totem.name}</div>
                  <div className="text-xs text-gray-400">{totem.bonus}</div>
                </div>
                <button className="text-xs font-bold px-3 py-2 rounded-lg bg-hero-gold/20 border border-hero-gold/40 text-hero-gold">
                  升級
                </button>
              </div>
            ))}
          </div>
          <div className="bg-black/40 border border-white/5 rounded-lg px-4 py-3 text-xs text-gray-300">
            升級消耗：金幣 + 精煉魂魄 + 對應區域圖騰碎片
          </div>
        </section>

        <section className="bg-hero-panel/60 border border-white/10 rounded-2xl p-5 md:p-6 space-y-4">
          <h2 className="text-xl font-bold text-white">討伐流程示意</h2>
          <div className="bg-black/50 border border-white/5 rounded-xl p-4 space-y-3 text-sm text-gray-300">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-hero-gold/20 border border-hero-gold/40 text-hero-gold flex items-center justify-center font-bold">
                1
              </div>
              <div>混亂值達標後，Boss 入口開放。</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-hero-gold/20 border border-hero-gold/40 text-hero-gold flex items-center justify-center font-bold">
                2
              </div>
              <div>確認隊伍配置與戰力，按下挑戰進入戰鬥。</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-hero-gold/20 border border-hero-gold/40 text-hero-gold flex items-center justify-center font-bold">
                3
              </div>
              <div>討伐成功取得圖騰碎片，回到圖騰頁面升級。</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 text-xs text-gray-300">
            <div className="bg-black/40 border border-white/5 rounded-lg px-4 py-3">建議：先完成週期副本補齊資源</div>
            <div className="bg-black/40 border border-white/5 rounded-lg px-4 py-3">提示：混亂值每週重置</div>
          </div>
        </section>
      </div>
    </div>
  </div>
);

export default RegionBossFeaturePage;
