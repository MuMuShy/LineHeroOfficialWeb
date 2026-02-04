import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (context, next) => {
  const hostname = context.url.hostname;
  const isProd = hostname === 'linehero.tw' || hostname === 'www.linehero.tw';

  const response = await next();

  // Extra safety: enforce noindex at the HTTP header level for any non-prod domain.
  // This helps even if HTML meta tags are missed or a bot ignores robots.txt.
  if (!isProd) {
    response.headers.set('X-Robots-Tag', 'noindex, nofollow, noarchive');
    // Avoid caching across hostnames/environments.
    response.headers.set('Cache-Control', 'no-store');
  }

  return response;
});
