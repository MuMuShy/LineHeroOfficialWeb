const xmlEscape = (s: string) =>
  s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

const buildUrlset = (urls: { loc: string; lastmod: string }[]) => {
  const body = urls
    .map(
      ({ loc, lastmod }) =>
        `  <url>\n    <loc>${xmlEscape(loc)}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
};

const getLocalPagePaths = () => {
  // Build-time discovery of Astro pages.
  // Keys look like: "./index.astro", "./features.astro"...
  const modules = import.meta.glob('./*.astro');

  return Object.keys(modules)
    .map((k) => k.replace(/^\.\//, '').replace(/\.astro$/, ''))
    .filter((name) => name && name !== '404')
    .map((name) => (name === 'index' ? '/' : `/${name}`));
};

export const GET = async ({ url }: { url: URL }) => {
  const hostname = url.hostname;
  const isProd = hostname === 'linehero.tw' || hostname === 'www.linehero.tw';

  // Staging / preview: serve an empty sitemap (and robots.txt disallows anyway).
  if (!isProd) {
    const body = buildUrlset([]);
    return new Response(body, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'no-store'
      }
    });
  }

  const origin = 'https://linehero.tw';
  const lastmod = new Date().toISOString().slice(0, 10);

  const localPaths = getLocalPagePaths();
  const urls = localPaths.map((p) => ({ loc: `${origin}${p}`, lastmod }));

  // Related properties
  urls.push(
    { loc: 'https://explore.linehero.tw/', lastmod },
    { loc: 'https://tarven.linehero.tw/', lastmod },
    { loc: 'https://wiki.linehero.tw/', lastmod }
  );

  const body = buildUrlset(urls);

  return new Response(body, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
};
