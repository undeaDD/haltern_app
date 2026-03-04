import { readFileSync } from 'node:fs';
import { Marp } from '@marp-team/marp-core';

const marp = new Marp({ html: true, inlineSVG: true, breaks: true });

export function buildPage({ liveReload = false } = {}) {
  const markdown = readFileSync('slides.md', 'utf8');
  const { html, css } = marp.render(markdown);

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Presentation</title>
  <style>${css}</style>
  <style>
    :root { --marpit-root-background: #d8dde6; }
    body { scroll-snap-type: y mandatory; }
    svg[data-marpit-svg] { scroll-snap-align: start; }
  </style>
</head>
<body>
  ${html}
  <script>
    const slides = () => [...document.querySelectorAll('svg[data-marpit-svg]')];

    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { e.target.style.visibility = e.isIntersecting ? '' : 'hidden'; }),
      { threshold: 0.5 }
    );
    slides().forEach(s => observer.observe(s));

    document.addEventListener('keydown', e => {
      const all = slides();
      const idx = all.findIndex(s => s.getBoundingClientRect().top > -1);
      if (['ArrowDown', 'ArrowRight', ' '].includes(e.key))
        all[Math.min(idx + 1, all.length - 1)]?.scrollIntoView();
      else if (['ArrowUp', 'ArrowLeft'].includes(e.key))
        all[Math.max(idx - 1, 0)]?.scrollIntoView();
      else return;
      e.preventDefault();
    });
  </script>
  ${liveReload ? `<script>new EventSource('/__reload').onmessage = () => location.reload();</script>` : ''}
</body>
</html>`;
}
