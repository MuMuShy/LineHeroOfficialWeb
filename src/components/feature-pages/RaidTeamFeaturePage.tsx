import React from 'react';

const STATUS_STATS = [
  { label: '隊伍戰力', value: '128,540' },
  { label: '可進入副本', value: '4 / 6' },
  { label: '副本代幣', value: '1,250' },
  { label: '助戰點數', value: '320' },
];

const TEAM_MEMBERS = [
  {
    name: '夜行者',
    role: '隊長',
    className: '戰士',
    power: '38,500',
    avatar: 'https://image.linehero.tw/images/hero_avatar/character_warrior2.png',
  },
  {
    name: '露希亞',
    role: '隊員',
    className: '法師',
    power: '31,900',
    avatar: 'https://image.linehero.tw/images/hero_avatar/character_magic_female.png',
  },
  {
    name: '黎影',
    role: '隊員',
    className: '盜賊',
    power: '27,450',
    avatar: 'https://image.linehero.tw/images/hero_avatar/character_rog_female2.png',
  },
  {
    name: '聖輝',
    role: '隊員',
    className: '牧師',
    power: '30,120',
    avatar: 'https://image.linehero.tw/images/hero_avatar/character_holy.png',
  },
  {
    name: '艾琳',
    role: '隊員',
    className: '法師',
    power: '30,570',
    avatar: 'https://image.linehero.tw/images/hero_avatar/character_magic_female.png',
  },
];

const DUNGEON_CARDS = [
  {
    title: '冥幽境 · 區域 Boss',
    status: 'Boss 即將現身',
    image: 'https://image.linehero.tw/images/regions/boss/56c78172-b6bf-4dc3-83f7-8f561f9bc748.png',
    reward: '圖騰碎片 / 精煉魂魄',
  },
  {
    title: '四象域 · 區域 Boss',
    status: '入口開放中',
    image: 'https://image.linehero.tw/images/regions/boss/56c78172-b6bf-4dc3-83f7-8f561f9bc748.png',
    reward: '圖騰碎片 / 副本代幣',
  },
  {
    title: '週期副本 · 星塵礦窟',
    status: '可進入',
    image: 'https://image.linehero.tw/images/items/region_boss/four_symbols_core.png',
    reward: '星塵 / 強化材料',
  },
];

const SHOP_ITEMS = [
  {
    name: '精煉魂魄',
    cost: '60',
    icon: 'https://image.linehero.tw/images/items/materials/soul_icon.png',
  },
  {
    name: '副本轉移券',
    cost: '120',
    icon: 'https://image.linehero.tw/images/items/usage/dungeon_token.png',
  },
  {
    name: '星塵包',
    cost: '90',
    icon: 'https://image.linehero.tw/images/items/region_boss/shadow_abyss_core.png',
  },
];

const RaidTeamFeaturePage: React.FC = () => (
  <div className="bg-hero-dark min-h-screen pt-28 pb-16 px-4 md:px-8 text-gray-100 relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('https://mumu.tw/images/noise.png')] opacity-[0.03] pointer-events-none mix-blend-overlay"></div>
    <div className="absolute top-0 left-0 w-full h-[45vh] bg-gradient-to-b from-hero-secondary/10 to-transparent pointer-events-none"></div>

    <div className="max-w-6xl mx-auto relative z-10 space-y-10">
      <header className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-hero-gold/30 rounded-full bg-hero-gold/5">
          <span className="text-xs uppercase tracking-[0.2em] text-hero-gold font-bold">Raid Teams</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-white">組隊副本</h1>
        <p className="text-gray-300 max-w-3xl mx-auto text-base md:text-lg">
          以 5 人隊伍協作挑戰區域 Boss 與週期副本。以下為玩家操作畫面示意
        </p>
      </header>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {STATUS_STATS.map((stat) => (
          <div key={stat.label} className="bg-hero-panel/60 border border-white/10 rounded-xl px-4 py-3">
            <div className="text-xs text-gray-400">{stat.label}</div>
            <div className="text-lg font-bold text-white">{stat.value}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.4fr] gap-6">
        <section className="bg-hero-panel/60 border border-white/10 rounded-2xl p-5 md:p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white">隊伍配置</h2>
            <span className="text-xs text-gray-400">示意資料</span>
          </div>
          <div className="space-y-3">
            {TEAM_MEMBERS.map((member) => (
              <div key={member.name} className="flex items-center gap-3 bg-black/40 border border-white/5 rounded-xl px-4 py-3">
                <img src={member.avatar} alt={member.className} className="w-12 h-12 rounded-lg object-cover" />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-white font-bold">{member.name}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full border border-hero-gold/30 text-hero-gold">
                      {member.role}
                    </span>
                  </div>
                  <div className="text-xs text-gray-400">{member.className}</div>
                </div>
                <div className="text-sm font-bold text-white">{member.power}</div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="bg-black/40 border border-white/5 rounded-lg px-3 py-2 text-gray-300">
              隊長戰力門檻：32,000
            </div>
            <div className="bg-black/40 border border-white/5 rounded-lg px-3 py-2 text-gray-300">
              隊伍狀態：可進入副本
            </div>
          </div>
        </section>

        <section className="bg-hero-panel/60 border border-white/10 rounded-2xl p-5 md:p-6 space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="text-xl font-bold text-white">副本入口</h2>
            <div className="flex gap-2 text-xs">
              <span className="px-3 py-1 rounded-full bg-hero-gold/20 border border-hero-gold/40 text-hero-gold">區域 Boss</span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400">週期副本</span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400">副本商店</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {DUNGEON_CARDS.map((card) => (
              <div key={card.title} className="bg-black/40 border border-white/5 rounded-xl overflow-hidden">
                <div className="h-28 bg-black/60">
                  <img src={card.image} alt={card.title} className="w-full h-full object-cover opacity-80" />
                </div>
                <div className="p-3 space-y-2">
                  <div className="text-sm font-bold text-white">{card.title}</div>
                  <div className="text-xs text-hero-gold">{card.status}</div>
                  <div className="text-xs text-gray-400">掉落：{card.reward}</div>
                  <button className="w-full text-xs font-bold py-2 rounded-lg bg-hero-gold/20 border border-hero-gold/40 text-hero-gold">
                    進入副本
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-6">
        <section className="bg-hero-panel/60 border border-white/10 rounded-2xl p-5 md:p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white">戰鬥畫面預覽</h2>
            <span className="text-xs text-gray-400">示意 UI</span>
          </div>
          <div className="bg-black/50 border border-white/5 rounded-xl p-4 space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl bg-black/60 border border-white/10 flex items-center justify-center">
                <img
                  src="https://image.linehero.tw/images/npc/boss/rodras/rodras.png"
                  alt="Boss"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div className="flex-1 space-y-2">
                <div className="text-sm font-bold text-white">冥幽境守護者</div>
                <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full w-3/5 bg-gradient-to-r from-red-500 to-orange-400"></div>
                </div>
                <div className="text-xs text-gray-400">HP 58% · 狂暴倒數 02:15</div>
              </div>
              <button className="text-xs font-bold px-3 py-2 rounded-lg bg-red-500/20 border border-red-500/40 text-red-300">
                集火
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {TEAM_MEMBERS.slice(0, 4).map((member) => (
                <div key={member.name} className="bg-black/50 border border-white/5 rounded-lg px-3 py-2">
                  <div className="text-xs text-white">{member.name}</div>
                  <div className="h-1 mt-2 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full w-4/5 bg-gradient-to-r from-emerald-400 to-teal-300"></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-2 text-xs">
              {['破甲斬', '神聖治癒', '暗影突襲'].map((skill) => (
                <button
                  key={skill}
                  className="py-2 rounded-lg bg-white/5 border border-white/10 text-gray-200 hover:text-white"
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-hero-panel/60 border border-white/10 rounded-2xl p-5 md:p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white">副本商店</h2>
            <div className="flex items-center gap-2 text-xs text-hero-gold">
              <img src="https://image.linehero.tw/images/items/usage/dungeon_token.png" alt="代幣" className="w-4 h-4" />
              1,250
            </div>
          </div>
          <div className="space-y-3">
            {SHOP_ITEMS.map((item) => (
              <div key={item.name} className="flex items-center gap-3 bg-black/50 border border-white/5 rounded-xl px-4 py-3">
                <img src={item.icon} alt={item.name} className="w-10 h-10 rounded-lg object-contain" />
                <div className="flex-1">
                  <div className="text-sm font-bold text-white">{item.name}</div>
                  <div className="text-xs text-gray-400">副本代幣</div>
                </div>
                <div className="text-sm font-bold text-hero-gold">{item.cost}</div>
              </div>
            ))}
          </div>
          <button className="w-full text-xs font-bold py-2 rounded-lg bg-hero-gold/20 border border-hero-gold/40 text-hero-gold">
            前往兌換
          </button>
        </section>
      </div>
    </div>
  </div>
);

export default RaidTeamFeaturePage;
