/**
 * 品牌配置檔
 * 如果未來需要更改品牌名稱，只需修改此檔案
 */

export const BRAND = {
  // 主要品牌名稱
  name: 'LineHero',
  fullName: 'LineHero 無盡冒險',

  // 帶平台名稱的版本（如需移除 LINE 字樣，改這裡）
  platformName: 'LINE Hero',
  platformFullName: 'LINE Hero 無盡冒險',

  // 簡短版本
  shortName: 'LineHero',

  // SEO 相關
  seo: {
    titleSuffix: ' | LINE Hero 無盡冒險',
    defaultTitle: 'LINE Hero 無盡冒險 | 免下載安裝 LINE 即玩 RPG | 聊天視窗直接開戰',
    defaultDescription: '【2026最新】打開 LINE 就能玩的 RPG！免下載、免安裝，在聊天視窗體驗完整 MMORPG。',
  },

  // 關鍵字（SEO）
  keywords: {
    primary: ['LineHero', '無盡冒險', '免下載RPG', '聊天視窗RPG'],
    // 如需移除 LINE 相關關鍵字，從這裡調整
    platform: ['LINE即玩RPG', 'LINE遊戲', 'LINE RPG', 'LIFF遊戲'],
    generic: ['文字冒險', '線上文字RPG', 'MMORPG', '台灣手遊', '免下載遊戲', '角色扮演'],
  },

  // 社群連結
  social: {
    line: 'https://lin.ee/3JlUhak',
    lineGroup: 'https://line.me/ti/g2/DJg84HtyGvoYNMEZdQEgrosPZS8bgRonuW8aWQ',
    facebook: 'https://www.facebook.com/profile.php?id=61564219032805',
    instagram: 'https://www.instagram.com/linehero_rpg/',
    discord: 'https://discord.gg/76gSTeqtBw',
  },

  // 網站
  website: {
    main: 'https://linehero.tw',
    wiki: 'https://wiki.linehero.tw',
    explore: 'https://explore.linehero.tw',
    tavern: 'https://tarven.linehero.tw',
  },
} as const;

// 輔助函數：生成頁面標題
export function getPageTitle(pageTitle?: string): string {
  if (!pageTitle) return BRAND.seo.defaultTitle;
  return `${pageTitle}${BRAND.seo.titleSuffix}`;
}

// 輔助函數：取得所有關鍵字
export function getAllKeywords(): string {
  return [
    ...BRAND.keywords.primary,
    ...BRAND.keywords.platform,
    ...BRAND.keywords.generic,
  ].join(', ');
}
