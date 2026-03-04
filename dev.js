import { mkdirSync, watch, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { buildPage } from './page.js';

const PORT = 3000;
const clients = new Set();
const enc = new TextEncoder();

function build() {
  mkdirSync('dist', { recursive: true });
  writeFileSync('dist/index.html', buildPage({ liveReload: true }));
  console.log(`[${new Date().toLocaleTimeString()}] Built → dist/index.html`);
}

build();

watch('slides.md', () => {
  build();
  const msg = enc.encode('data: reload\n\n');
  for (const ctrl of clients) {
    try { ctrl.enqueue(msg); } catch { clients.delete(ctrl); }
  }
});

Bun.serve({
  port: PORT,
  async fetch(req) {
    const url = new URL(req.url);

    if (url.pathname === '/__reload') {
      let controller;
      const stream = new ReadableStream({
        start(c) { controller = c; clients.add(c); c.enqueue(enc.encode(': ok\n\n')); },
        cancel() { clients.delete(controller); },
      });
      return new Response(stream, {
        headers: { 'Content-Type': 'text/event-stream', 'Cache-Control': 'no-cache', 'X-Accel-Buffering': 'no' },
      });
    }

    const pathname = url.pathname === '/' ? '/index.html' : url.pathname;
    // Serve index.html from dist/, everything else (assets) from project root
    const distFile = Bun.file(join('dist', pathname));
    const file = await distFile.exists() ? distFile : Bun.file(join('.', pathname));
    if (!await file.exists()) return new Response('Not found', { status: 404 });
    return new Response(file);
  },
});

console.log(`Serving at http://localhost:${PORT}`);
