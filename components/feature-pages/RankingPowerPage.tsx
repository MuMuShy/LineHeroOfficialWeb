import React, { useCallback, useEffect, useMemo, useState } from 'react';

type RankEntry = Record<string, unknown>;

type RankingResponse = {
  success?: boolean;
  message?: string;
  top3?: RankEntry[];
  others?: RankEntry[];
  updating?: boolean;
  last_updated?: number;
};

const DEFAULT_AVATAR = 'https://mumu.tw/linehero/images/hero_avatar/default.png';

const getName = (entry: RankEntry, fallback: string) =>
  (entry.name ||
    entry.nickname ||
    entry.username ||
    entry.display_name ||
    entry.player_name ||
    fallback) as string;

const getPower = (entry: RankEntry) =>
  Number(
    entry.power ||
    entry.total_power ||
    entry.score ||
    entry.value ||
    0
  );

const getAvatar = (entry: RankEntry) =>
  (entry.avatar_url ||
    entry.avatar ||
    entry.icon ||
    DEFAULT_AVATAR) as string;

const getEquipment = (entry: RankEntry) =>
  (entry.equipment || {}) as Record<string, Record<string, unknown>>;

const getEquipImage = (equip?: Record<string, unknown>) =>
  (equip?.image_url ||
    equip?.image ||
    equip?.icon ||
    'https://mumu.tw/linehero/images/items/default.png') as string;

const getEnhanceLevel = (equip?: Record<string, unknown>) =>
  Number(equip?.enhancement_level || equip?.enhance_level || 0);

const renderEquipSlots = (entry?: RankEntry) => {
  if (!entry) return null;
  const equip = getEquipment(entry);
  const slots = ['main_hand', 'off_hand', 'helmet', 'chest', 'pants', 'gloves', 'necklace'];
  return (
    <div className="grid grid-cols-7 gap-1.5">
      {slots.map((slot) => {
        const item = equip[slot];
        return (
          <div key={slot} className="relative bg-black/60 border border-white/10 rounded-lg p-1">
            <img
              src={getEquipImage(item)}
              alt={String(item?.name || slot)}
              className="w-full h-8 object-contain"
            />
            {getEnhanceLevel(item) > 0 && (
              <span className="absolute -bottom-1 -right-1 text-[10px] px-1.5 py-0.5 rounded-full bg-hero-gold/30 border border-hero-gold/50 text-hero-gold font-bold">
                +{getEnhanceLevel(item)}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
};

const formatNumber = (value: number) =>
  new Intl.NumberFormat('en-US').format(value);

const formatTimestamp = (timestamp?: number) => {
  if (!timestamp) return '—';
  return new Date(timestamp * 1000).toLocaleString('zh-TW', {
    hour12: false,
  });
};

const RankingPowerPage: React.FC = () => {
  const [data, setData] = useState<RankingResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchRanking = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('https://game.linehero.tw/api/ranking/power');
      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }
      const json = (await res.json()) as RankingResponse;
      setData(json);
    } catch (err) {
      setError(err instanceof Error ? err.message : '載入失敗');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRanking();
  }, [fetchRanking]);

  const topThree = useMemo(() => data?.top3 ?? [], [data]);
  const others = useMemo(() => data?.others ?? [], [data]);

  return (
    <div className="bg-hero-dark min-h-screen pt-28 pb-16 px-4 md:px-8 text-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://mumu.tw/images/noise.png')] opacity-[0.03] pointer-events-none mix-blend-overlay"></div>
      <div className="absolute -top-40 right-0 w-[520px] h-[520px] bg-hero-gold/10 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-48 left-0 w-[520px] h-[520px] bg-blue-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10 space-y-10">
        <header className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-hero-gold/30 rounded-full bg-hero-gold/5">
            <span className="text-xs uppercase tracking-[0.2em] text-hero-gold font-bold">Power Ranking</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/60">Live</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white">戰力排行榜</h1>
          <p className="text-gray-300 max-w-3xl mx-auto text-base md:text-lg">
            每日追蹤最強冒險者排行。資料來源為官方 API，即時更新。
          </p>
        </header>

        <div className="flex flex-wrap items-center justify-between gap-4 bg-hero-panel/60 border border-white/10 rounded-2xl px-5 py-4">
          <div className="text-sm text-gray-300">
            最後更新：<span className="text-white font-bold">{formatTimestamp(data?.last_updated)}</span>
          </div>
          <div className="flex items-center gap-3 text-xs">
            {data?.updating && (
              <span className="px-3 py-1 rounded-full border border-amber-500/40 text-amber-300 bg-amber-500/20">
                排行榜更新中
              </span>
            )}
            <button
              onClick={fetchRanking}
              className="px-4 py-2 rounded-full bg-hero-gold/20 border border-hero-gold/40 text-hero-gold font-bold"
            >
              重新整理
            </button>
          </div>
        </div>

        {loading && (
          <div className="text-center text-gray-400">載入排行榜中...</div>
        )}
        {error && (
          <div className="text-center text-red-300">載入失敗：{error}</div>
        )}

        {!loading && !error && (
          <>
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[0, 1, 2].map((idx) => {
                const entry = topThree[idx];
                const name = entry ? getName(entry, `玩家 ${idx + 1}`) : '尚無資料';
                const power = entry ? formatNumber(getPower(entry)) : '—';
                const avatar = entry ? getAvatar(entry) : DEFAULT_AVATAR;
                const medal =
                  idx === 0
                    ? 'bg-hero-gold/20 border-hero-gold/50 text-hero-gold'
                    : idx === 1
                      ? 'bg-blue-500/20 border-blue-500/40 text-blue-300'
                      : 'bg-amber-500/20 border-amber-500/40 text-amber-300';

                return (
                  <div
                    key={idx}
                    className="bg-hero-panel/70 border border-white/10 rounded-3xl p-6 shadow-2xl relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent"></div>
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-bold ${medal}`}>
                      NO.{idx + 1}
                    </div>
                    <div className="mt-4 flex items-center gap-4">
                      <img src={avatar} alt={name} className="w-16 h-16 rounded-2xl object-cover border border-white/10" />
                      <div>
                        <div className="text-lg font-bold text-white">{name}</div>
                        <div className="text-xs text-gray-400">戰力</div>
                        <div className="text-xl font-black text-hero-gold">{power}</div>
                      </div>
                    </div>
                    <div className="mt-4 text-xs text-gray-400">裝備預覽</div>
                    {renderEquipSlots(entry)}
                  </div>
                );
              })}
            </section>

            <section className="bg-hero-panel/60 border border-white/10 rounded-2xl p-5 md:p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-white">排名列表</h2>
                <span className="text-xs text-gray-400">Top {others.length}</span>
              </div>
              <div className="space-y-3">
                {others.length === 0 && (
                  <div className="text-center text-gray-400 py-8">目前沒有排名資料</div>
                )}
                {others.map((entry, idx) => {
                  const rank = idx + 4;
                  const name = getName(entry, `玩家 ${rank}`);
                  const power = formatNumber(getPower(entry));
                  const avatar = getAvatar(entry);
                  return (
                    <div key={`${name}-${rank}`} className="flex items-center gap-4 bg-black/50 border border-white/5 rounded-xl px-4 py-3">
                      <div className="w-10 text-center text-sm font-bold text-gray-400">{rank}</div>
                      <img src={avatar} alt={name} className="w-10 h-10 rounded-lg object-cover border border-white/10" />
                      <div className="flex-1">
                        <div className="text-sm font-bold text-white">{name}</div>
                        <div className="text-xs text-gray-400">戰力 {power}</div>
                      </div>
                      <div className="hidden md:block w-60">{renderEquipSlots(entry)}</div>
                    </div>
                  );
                })}
              </div>
            </section>
          </>
        )}
      </div>
    </div>
  );
};

export default RankingPowerPage;
