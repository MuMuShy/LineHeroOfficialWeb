export const GET = async ({ url }: { url: URL }) => {
  const hostname = url.hostname;
  const isProd = hostname === 'linehero.tw' || hostname === 'www.linehero.tw';

  // Staging / preview domains: block indexing hard.
  if (!isProd) {
    return new Response(['User-agent: *', 'Disallow: /', ''].join('\n'), {
      status: 200,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-store'
      }
    });
  }

  // Production: allow crawling + point to production sitemap.
  return new Response(
    [
      'User-agent: *',
      'Allow: /',
      '',
      'Sitemap: https://linehero.tw/sitemap.xml',
      '',
      '# 禁止爬取的路徑',
      'Disallow: /api/',
      '',
      '# NOTE: 不要阻擋 /_astro/（Astro 的 JS/CSS 靜態資源），避免搜尋引擎無法渲染頁面',
      ''
    ].join('\n'),
    {
      status: 200,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8'
      }
    }
  );
};
