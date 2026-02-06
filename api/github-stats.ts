import fs from 'fs/promises';
import path from 'path';
import { error as logError } from '../utils/logger';

// Simple proxy that tries a self-hosted endpoint first, then the public service,
// and finally falls back to a static SVG in /public if both fail.
type Req = { query?: Record<string, string | undefined> };
type Res = { setHeader(name: string, value: string): void; status(code: number): { send(body: string): void } };

export default async function handler(req: Req, res: Res) {
  try {
    const username = String(req.query?.username || 'theAdityaNVS');
    const kind = String(req.query?.kind || 'stats'); // 'stats' or 'langs'

    const selfHostedBase = 'https://github--stats.vercel.app';
    const publicBase = 'https://github-readme-stats.vercel.app';

    const endpoints: Record<string, string[]> = {
      stats: [
        `${selfHostedBase}/api?username=${username}&theme=transparent&show_icons=true&hide_border=true&count_private=true`,
        `${publicBase}/api?username=${username}&theme=transparent&show_icons=true&hide_border=true&count_private=true`,
      ],
      langs: [
        `${selfHostedBase}/api/top-langs/?username=${username}&theme=transparent&show_icons=true&hide_border=true&layout=compact`,
        `${publicBase}/api/top-langs/?username=${username}&theme=transparent&layout=compact&hide_border=true`,
      ],
    };

    const candidates = endpoints[kind] || endpoints['stats'];

    for (const url of candidates) {
      try {
        const r = await fetch(url, { method: 'GET' });
        const contentType = r.headers.get('content-type') || '';
        // Accept only successful responses that look like SVG
        if (r.ok && contentType.includes('svg')) {
          const body = await r.text();
          res.setHeader('content-type', 'image/svg+xml; charset=utf-8');
          // Cache in CDN for 1 hour, allow stale while revalidate for 1 minute
          res.setHeader('cache-control', 's-maxage=3600, stale-while-revalidate=60');
          return res.status(200).send(body);
        }

        // If it redirected to an HTML SSO page, try the next candidate
        if (!r.ok || !contentType.includes('svg')) {
          // continue to next
          continue;
        }
      } catch (err: unknown) {
        // network error - try next candidate (log for debugging)
        logError('github-stats upstream fetch error:', err);
        continue;
      }
    }

    // All upstreams failed — return a local fallback SVG from public/
    const fallbackFile = kind === 'langs' ? 'github-langs-fallback.svg' : 'github-stats-fallback.svg';
    const filePath = path.resolve(process.cwd(), 'public', fallbackFile);
    try {
      const svg = await fs.readFile(filePath, { encoding: 'utf-8' });
      res.setHeader('content-type', 'image/svg+xml; charset=utf-8');
      res.setHeader('cache-control', 's-maxage=86400');
      return res.status(200).send(svg);
    } catch (err: unknown) {
      // If fallback file missing, return a minimal SVG (log and return minimal)
      logError('github-stats fallback read error:', err);
      const minimal = `<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" width="600" height="80"><rect width="100%" height="100%" fill="#0b1220"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#94a3b8" font-family="Inter, Arial, sans-serif" font-size="14">Stats unavailable</text></svg>`;
      res.setHeader('content-type', 'image/svg+xml; charset=utf-8');
      res.setHeader('cache-control', 's-maxage=60');
      return res.status(200).send(minimal);
    }
  } catch (err: unknown) {
    // Log error for debugging (only visible in non-production by default)
    logError('github-stats proxy error:', err);
    return res.status(500).send('Internal Server Error');
  }
}
