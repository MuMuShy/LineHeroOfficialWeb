import React from 'react';

const SOCIAL_POSTS = [
  {
    name: '夜行者',
    message: '今晚 9 點挑戰冥幽境 Boss，缺一名牧師。',
    avatar: 'https://image.linehero.tw/images/hero_avatar/character_warrior2.png',
    time: '2 分鐘前',
  },
  {
    name: '露希亞',
    message: '剛刷到傳說武器，來找我組隊一起衝星力！',
    avatar: 'https://image.linehero.tw/images/hero_avatar/character_magic_female.png',
    time: '12 分鐘前',
  },
  {
    name: '黎影',
    message: '徵求副本代幣兌換情報，互相交流～',
    avatar: 'https://image.linehero.tw/images/hero_avatar/character_rog_female2.png',
    time: '35 分鐘前',
  },
];

const TAVERN_GAMES = [
  { name: '骰子對決', reward: '魂幣 x120', icon: '🎲' },
  { name: '酒館翻牌', reward: '補給箱 x1', icon: '🃏' },
  { name: '靈魂抽卡', reward: '魂魄 x15', icon: '✨' },
];

const SocialFeaturePage: React.FC = () => (
  <div className="bg-hero-dark min-h-screen pt-28 pb-16 px-4 md:px-8 text-gray-100 relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('https://mumu.tw/images/noise.png')] opacity-[0.03] pointer-events-none mix-blend-overlay"></div>
    <div className="absolute top-0 left-0 w-full h-[45vh] bg-gradient-to-b from-hero-secondary/10 to-transparent pointer-events-none"></div>

    <div className="max-w-6xl mx-auto relative z-10 space-y-10">
      <header className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-hero-gold/30 rounded-full bg-hero-gold/5">
          <span className="text-xs uppercase tracking-[0.2em] text-hero-gold font-bold">Social Hub</span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/60">預覽</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-white">社交酒館</h1>
        <p className="text-gray-300 max-w-3xl mx-auto text-base md:text-lg">
          留言互動、組隊招募與酒館小遊戲。這裡是玩家交流與補給的集散地。
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-6">
        <section className="bg-hero-panel/60 border border-white/10 rounded-2xl p-5 md:p-6 space-y-4">
          <h2 className="text-xl font-bold text-white">社交看板</h2>
          <div className="space-y-3">
            {SOCIAL_POSTS.map((post) => (
              <div key={post.name} className="flex items-start gap-3 bg-black/50 border border-white/5 rounded-xl px-4 py-3">
                <img src={post.avatar} alt={post.name} className="w-10 h-10 rounded-lg object-cover" />
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-white">{post.name}</span>
                    <span className="text-xs text-gray-500">{post.time}</span>
                  </div>
                  <div className="text-sm text-gray-300">{post.message}</div>
                  <div className="flex gap-2 text-xs text-hero-gold">
                    <button className="px-2 py-1 rounded-full border border-hero-gold/30">回覆</button>
                    <button className="px-2 py-1 rounded-full border border-hero-gold/30">邀請</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-black/40 border border-white/5 rounded-xl px-4 py-3 text-xs text-gray-400">
            提示：可在此張貼招募或交換資訊，建立固定團隊。
          </div>
        </section>

        <section className="bg-hero-panel/60 border border-white/10 rounded-2xl p-5 md:p-6 space-y-4">
          <h2 className="text-xl font-bold text-white">酒館小遊戲</h2>
          <div className="space-y-3">
            {TAVERN_GAMES.map((game) => (
              <div key={game.name} className="flex items-center gap-3 bg-black/50 border border-white/5 rounded-xl px-4 py-3">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-lg">
                  {game.icon}
                </div>
                <div className="flex-1">
                  <div className="text-sm font-bold text-white">{game.name}</div>
                  <div className="text-xs text-gray-400">獎勵：{game.reward}</div>
                </div>
                <button className="text-xs font-bold px-3 py-2 rounded-lg bg-hero-gold/20 border border-hero-gold/40 text-hero-gold">
                  開始
                </button>
              </div>
            ))}
          </div>
          <div className="bg-black/40 border border-white/5 rounded-xl px-4 py-3 text-xs text-gray-400">
            每日登入可獲得一次免費遊戲次數。
          </div>
        </section>
      </div>

      <div className="bg-hero-panel/60 border border-white/10 rounded-2xl p-5 md:p-6">
        <h2 className="text-xl font-bold text-white mb-4">社群狀態</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
          {[
            '線上玩家 1,280',
            '今日留言 320',
            '招募隊伍 18',
            '酒館遊戲中 64',
          ].map((stat) => (
            <div key={stat} className="bg-black/50 border border-white/5 rounded-xl px-4 py-3 text-gray-300">
              {stat}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default SocialFeaturePage;
