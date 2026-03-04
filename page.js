import { readFileSync } from "node:fs";
import { Marp } from "@marp-team/marp-core";

const marp = new Marp({ html: true, inlineSVG: true, breaks: true });

export function buildPage({ liveReload = false } = {}) {
	const markdown = readFileSync("slides.md", "utf8");
	const { html, css } = marp.render(markdown);

	return `<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <meta name="color-scheme" content="light">
    <meta name="description" content="Pitch-Präsentation: Maßgeschneiderte Stadt-App für Haltern am See">
    <meta name="author" content="Dominic Drees, Julius Mätzig, Jan Rockahr">
    <meta name="theme-color" content="#0B4195">
    <title>Haltern-App Pitch</title>
    <link rel="icon" type="image/svg+xml" href="images/logo.svg">
    <style>${css}</style>
    <style>
      :root { --marpit-root-background: #0c1b35; }
      html, body { background: #0c1b35; margin: 0; padding: 0; }
      div.marpit { padding: 32px 0; }
      div.marpit > svg[data-marpit-svg] {
        display: block;
        margin: 0 auto 32px;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 12px 48px rgba(0,0,0,0.55);
      }
      div.marpit > svg[data-marpit-svg]:last-child { margin-bottom: 0; }
    </style>
  </head>
  <body>
    ${html}
    ${liveReload ? `<script>const es = new EventSource("/__reload"); es.addEventListener("message", (e) => { if (e.data === "reload") location.reload(); });</script>` : ""}
  </body>
</html>`;
}
