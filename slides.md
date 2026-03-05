---
marp: true
theme: default
paginate: true
style: |
  /* ─── Base ─── */
  section {
    background: #ffffff;
    color: #1a1a1a;
    font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;
    overflow: hidden;
    padding: 48px 70px 56px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
  }
  p, li { line-height: 1.6; margin: 0; }
  ul { padding-left: 1.4em; margin: 0; }
  li { margin: 0.3em 0; }
  a, img, strong { color: #0B4195; }

  h2 {
    color: #0B4195;
    font-size: 1.65em;
    font-weight: 700;
    margin: 0 0 18px;
    padding-bottom: 14px;
    flex-shrink: 0;
  }
  h3 { color: #0B4195; font-weight: 700; margin: 0; }
  h4 { color: #0B4195; font-weight: 700; margin: 0 0 3px; }

  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  section::after {
    font-size: 0.7em;
    color: rgba(11, 65, 149, 0.3);
  }

  /* ─── TITLE SLIDE ─── */
  section.lead {
    background: #0B4195;
    padding: 0;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;
  }
  section.lead::before {
    content: '';
    position: absolute;
    top: -25%; right: -12%;
    width: 55%; height: 72%;
    background: rgba(255,255,255,0.045);
    border-radius: 50%;
  }
  section.lead::after {
    content: '';
    position: absolute;
    bottom: -28%; left: -12%;
    width: 48%; height: 65%;
    background: rgba(255,255,255,0.03);
    border-radius: 50%;
  }
  .lead-logo { z-index: 1; height: 150px; margin-bottom: 28px; display: block; }
  .lead-slogan {
    z-index: 1;
    color: rgba(255,255,255,0.5);
    font-size: 1em;
    font-weight: 500;
    letter-spacing: 0.3px;
    margin: 0;
  }

  /* ─── TEAM SLIDE ─── */
  .team-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;
  }
  .team-card {
    background: #eef3fb;
    border-radius: 14px;
    padding: 26px 16px 20px;
    text-align: center;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  }
  .team-photo {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    display: block;
    margin: 0 auto 12px;
    border: 3px solid #d0ddf0;
    background: #eef3fb;
  }
  .team-name { font-size: 1em; font-weight: 700; color: #1a1a1a; margin: 0 0 3px; }
  .team-role {
    font-size: 0.6em;
    font-weight: 700;
    color: #0B4195;
    text-transform: uppercase;
    letter-spacing: 0.6px;
    margin-bottom: 2px;
  }
  .team-company { font-size: 0.5em; color: #aaa; font-style: italic; margin-bottom: 12px; }
  .team-contact {
    font-size: 0.6em;
    color: #666;
    line-height: 1.75;
    padding-top: 12px;
    border-top: 1px solid #d0ddf0;
  }

  /* ─── EXPERIENCE SLIDE ─── */
  .stats-row {
    display: flex;
    gap: 0;
    margin-bottom: 28px;
  }
  .stat {
    flex: 1;
    text-align: center;
    padding: 0 20px;
    border-right: 1px solid #e4eaf5;
  }
  .stat:last-child { border-right: none; }
  .stat-number { font-size: 1em; font-weight: 700; color: #0B4195; line-height: 1; }
  .stat-label { font-size: 0.6em; color: #888; margin-top: 6px; }
  .app-grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 20px 20px;
    margin-top: 10px;
  }
  .app-item { display: flex; flex-direction: column; align-items: center; }
  .app-icon {
    width: 80%;
    aspect-ratio: 1;
    display: block;
  }
  .app-more { padding: 0px 2em; }
  .app-label { font-size: 0.42em; color: #888; text-align: center; margin-top: 5px; line-height: 1.2; }

  /* ─── SVG ICON COLORIZATION ─── */
  .card img, .tech-icon, .app-more {
    filter: invert(21%) sepia(100%) saturate(1161%) hue-rotate(204deg) brightness(96%) contrast(101%);
  }

  /* ─── CARDS — shared: Stärken + Funktionen ─── */
  .card-grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
  .card-grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; }
  .card {
    background: #eef3fb;
    border-radius: 14px;
    padding: 20px 16px 16px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.07);
  }
  .card img { width: 40px; height: 40px; margin-bottom: 10px; display: block; }
  .card h3 { font-size: 0.8em; margin: 0 0 5px; color: #0B4195; }
  .card p { font-size: 0.6em; color: #666; margin: 0; line-height: 1.45; }

  /* ─── TECH STACK SLIDE ─── */
  .tech-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }
  .tech-col {
    background: #eef3fb;
    border-radius: 14px;
    padding: 22px 20px;
    box-shadow: 0 4px 16px rgba(0,0,0,0.07);
  }
  .tech-head {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 12px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(11,65,149,0.15);
  }
  .tech-icon { width: 26px; height: 26px; flex-shrink: 0; margin: 0 !important; display: block; }
  .tech-col h3 {
    font-size: 0.9em;
    color: #0B4195;
    margin: 0;
    padding: 0;
    border: none;
  }
  .tech-col ul { list-style: none; padding: 0; margin: 0; }
  .tech-col li {
    font-size: 0.72em;
    color: #555;
    padding: 3px 0 3px 16px;
    position: relative;
    margin: 0;
    line-height: 1.5;
  }
  .tech-col li::before {
    content: '›';
    position: absolute;
    left: 0;
    color: #0B4195;
    font-weight: 700;
  }

  /* ─── VERGLEICH SLIDE ─── */
  .compare-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }
  .compare-box {
    border-radius: 14px;
    padding: 22px 24px;
    position: relative;
    overflow: hidden;
  }
  .compare-bg-icon {
    position: absolute;
    right: 0px;
    bottom: 0px;
    width: 200px;
    height: 200px;
    opacity: 0.13;
    transform: rotate(10deg);
    pointer-events: none;
    filter: brightness(0) invert(1);
    margin: 0 !important;
  }
  .compare-box.bad {
    background: #eef3fb;
    box-shadow: 0 4px 16px rgba(0,0,0,0.07);
  }
  .compare-box.good {
    background: #0B4195;
    box-shadow: 0 4px 16px rgba(11,65,149,0.25);
  }
  .compare-box h3 { font-size: 1em; margin-bottom: 14px; }
  .compare-box.bad h3 { color: #666; }
  .compare-box.good h3 { color: #fff; }
  .compare-box ul { padding-left: 1.2em; }
  .compare-box.bad li { color: #888; font-size: 0.7em; margin: 0.4em 0; }
  .compare-box.good li { color: rgba(255,255,255,0.88); font-size: 0.7em; margin: 0.4em 0; }
  .compare-note {
    margin-top: 18px;
    padding: 12px 18px;
    background: #eef3fb;
    border-radius: 10px;
    font-size: 0.82em;
    color: #444;
    box-shadow: 0 2px 8px rgba(11, 65, 149, 0.08);
  }

  /* ─── TIMELINE SLIDE ─── */
  .timeline {
    display: flex;
    align-items: flex-start;
    position: relative;
  }
  .timeline::before {
    content: '';
    position: absolute;
    top: 11px;
    left: 10%;
    right: 10%;
    height: 2px;
    background: #d0ddf0;
    z-index: 0;
  }
  .tl-step {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 1;
    padding: 0 10px;
  }
  .tl-dot {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: #0B4195;
    border: 4px solid #fff;
    box-shadow: 0 0 0 2px #0B4195;
    margin-bottom: 16px;
    flex-shrink: 0;
    box-sizing: border-box;
  }
  .tl-title { font-size: 0.78em; font-weight: 700; color: #0B4195; text-align: center; margin-bottom: 8px; }
  .tl-desc { font-size: 0.6em; color: #666; text-align: center; line-height: 1.45; }

  /* ─── CLOSING SLIDE ─── */
  section.closing {
    background: #0B4195;
    padding: 0;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;
    overflow: hidden;
  }
  section.closing::before {
    content: '';
    position: absolute;
    top: -25%; right: -10%;
    width: 50%; height: 70%;
    background: rgba(255,255,255,0.045);
    border-radius: 50%;
  }
  section.closing::after {
    content: '';
    position: absolute;
    bottom: -25%; left: -10%;
    width: 42%; height: 60%;
    background: rgba(255,255,255,0.03);
    border-radius: 50%;
  }
  .closing-inner { z-index: 1; }
  .closing-danke {
    color: #fff;
    font-size: 2.4em;
    font-weight: 700;
    margin-bottom: 6px;
  }
  .closing-sub {
    color: rgba(255,255,255,0.7);
    font-size: 0.95em;
    margin-bottom: 40px;
  }
  .contact-row { display: flex; gap: 52px; justify-content: center; }
  .contact-item { text-align: center; }
  .contact-name { color: #fff; font-weight: 700; font-size: 0.88em; margin-bottom: 5px; }
  .contact-details { color: rgba(255,255,255,0.72); font-size: 0.78em; line-height: 1.75; }
---

<!-- _class: lead -->

<img src="images/logo.svg" class="lead-logo">
<p class="lead-slogan">Eine maßgeschneiderte Stadt-App</br>für Haltern am See</p>

---

## Über Uns

<div class="content">
<div class="team-grid">

<div class="team-card">
<img src="images/dominic.png" class="team-photo">
<div class="team-name">Dominic Drees</div>
<div class="team-role">App Developer</div>
<div class="team-company">Heise Medien GmbH & Co KG</div>
<div class="team-contact">dominic.drees@foraum.de<br>+49 151 651 43990</div>
</div>

<div class="team-card">
<img src="images/julius.png" class="team-photo">
<div class="team-name">Julius Maetzig</div>
<div class="team-role">Backend Developer</div>
<div class="team-company">OptiSense GmbH & Co KG</div>
<div class="team-contact">juliusmaetzig@gmx.de<br>+49 152 573 38483</div>
</div>

<div class="team-card">
<img src="images/jan.png" class="team-photo">
<div class="team-name">Jan Rockahr</div>
<div class="team-role">Management & Design</div>
<div class="team-company">RedUhu</div>
<div class="team-contact">jan.rockahr@red-uhu.de<br>+49 157 804 45408</div>
</div>

</div>
</div>

---

## Erfahrung, die zählt

<div class="content">
<div class="stats-row">
  <div class="stat">
    <div class="stat-number">200+</div>
    <div class="stat-label">Veröffentlichte Apps</div>
  </div>
  <div class="stat">
    <div class="stat-number">10+</div>
    <div class="stat-label">Jahre Erfahrung</div>
  </div>
  <div class="stat">
    <div class="stat-number">iOS & Android</div>
    <div class="stat-label">Native & React Native</div>
  </div>
  <div class="stat">
    <div class="stat-number">Städte</div>
    <div class="stat-label">& Unternehmen</div>
  </div>
</div>
<div class="app-grid">
  <div class="app-item"><img src="images/app01.png" class="app-icon"><div class="app-label">Bochum App</div></div>
  <div class="app-item"><img src="images/app02.png" class="app-icon"><div class="app-label">Copago Apps*</div></div>
  <div class="app-item"><img src="images/app03.png" class="app-icon"><div class="app-label">Aareon Apps*</div></div>
  <div class="app-item"><img src="images/app04.png" class="app-icon"><div class="app-label">PNS 24 Jolifin</div></div>
  <div class="app-item"><img src="images/app05.png" class="app-icon"><div class="app-label">SKS</div></div>
  <div class="app-item"><img src="images/app06.png" class="app-icon"><div class="app-label">Staffice</div></div>
  <div class="app-item"><img src="images/app07.png" class="app-icon"><div class="app-label">Foraum</div></div>
  <div class="app-item"><img src="images/app08.png" class="app-icon"><div class="app-label">Melitta</div></div>
  <div class="app-item"><img src="images/app09.png" class="app-icon"><div class="app-label">Afk Bank Apps*</div></div>
  <div class="app-item"><img src="images/app10.png" class="app-icon"><div class="app-label">KorekushonX</div></div>
  <div class="app-item"><img src="images/app11.png" class="app-icon"><div class="app-label">Borchers Borken</div></div>
  <div class="app-item"><img src="icons/tabler-dots.svg" class="app-icon app-more"><div class="app-label">Und viele mehr</div></div>
</div>
</div>

---

## Was macht uns besonders

<div class="content">
<div class="card-grid-3">

<div class="card">
<img src="icons/tabler-map-pin.svg" class="">
<h3>100 % Lokal</h3>
<p>Wir leben hier. Wir kennen Haltern, seine Eigenheiten und seine Menschen - keine fremde Agentur.</p>
</div>

<div class="card">
<img src="icons/tabler-target-arrow.svg">
<h3>Maßgeschneidert</h3>
<p>Keine Stempellösung. Gebaut speziell für Haltern - nicht für die 50. Stadt kopiert.</p>
</div>

<div class="card">
<img src="icons/tabler-apps.svg">
<h3>Bewährte Erfahrung</h3>
<p>200+ veröffentlichte Apps im Bereich B2B und B2C. Jede Herausforderung schon gelöst.</p>
</div>

<div class="card">
<img src="icons/tabler-bolt.svg">
<h3>Klein & Agil</h3>
<p>Direkte Linie zu den Entwicklern. Keine Tickets, kein Account Manager - Wünsche werden schneller umgesetzt.</p>
</div>

<div class="card">
<img src="icons/tabler-pig-money.svg">
<h3>Kostentransparenz</h3>
<p>Keine versteckten Modulkosten, keine ewigen Monatsgebühren. Die Stadt behält die Kontrolle.</p>
</div>

<div class="card">
<img src="icons/tabler-heart-handshake.svg">
<h3>Alles aus einer Hand</h3>
<p>App, Backend, Hosting, Design und Medien - komplett bei uns, ohne Drittanbieter.</p>
</div>

</div>
</div>

---

## Was die App können soll

<div class="content">
<div class="card-grid-4">

<div class="card">
<img src="icons/tabler-news.svg">
<h3>Lokale News</h3>
<p>Stadtmeldungen und Push-Alerts für wichtige Informationen.</p>
</div>

<div class="card">
<img src="icons/tabler-map-search.svg">
<h3>Interaktive Karte</h3>
<p>Navigation, Gastronomie, Sehenswürdigkeiten und lokale Betriebe.</p>
</div>

<div class="card">
<img src="icons/tabler-calendar-search.svg">
<h3>Veranstaltungen</h3>
<p>Events & Termine, mit Push-Erinnerungen und Kalender-Export.</p>
</div>

<div class="card">
<img src="icons/tabler-forms.svg">
<h3>Stadtverwaltung</h3>
<p>Formulare, Öffnungszeiten und Behördengänge - digital und einfach.</p>
</div>

<div class="card">
<img src="icons/tabler-building-community.svg">
<h3>Mängelmelder</h3>
<p>Bürger melden Schäden direkt: Straßen, Reinigung, Verkehrssicherheit.</p>
</div>

<div class="card">
<img src="icons/tabler-trash.svg">
<h3>Müllkalender</h3>
<p>Abfuhrtage im Blick, mit rechtzeitiger Erinnerung.</p>
</div>

<div class="card">
<img src="icons/tabler-message-user.svg">
<h3>Bürgerbeteiligung</h3>
<p>Direkte Partizipation: Abstimmungen, Rückmeldungen und Vorschläge.</p>
</div>

<div class="card">
<img src="icons/tabler-dots.svg">
<h3>Und vieles mehr</h3>
<p>Wir sind offen für weitere Anforderungen.</p>
</div>

</div>
</div>

---

## Technik & Infrastruktur

<div class="content">
<div class="tech-grid">

<div class="tech-col">
<div class="tech-head"><img src="icons/tabler-devices.svg" class="tech-icon"><h3>App</h3></div>
<ul>
<li>React Native (iOS & Android)</li>
<li>Native Performance & Look</li>
<li>Offline-fähig</li>
<li>Push-Benachrichtigungen</li>
<li>CI Deployment</li>
<li>...</li>
</ul>
</div>

<div class="tech-col">
<div class="tech-head"><img src="icons/tabler-database.svg" class="tech-icon"><h3>Backend</h3></div>
<ul>
<li>API, skalierbar & sicher</li>
<li>Datenbank & Redis Cache</li>
<li>DSGVO-konform</li>
<li>Automatische Datensicherung</li>
<li>...</li>
</ul>
</div>

<div class="tech-col">
<div class="tech-head"><img src="icons/tabler-server-2.svg" class="tech-icon"><h3>Hosting*</h3></div>
<ul>
<li>Lokale Server in Haltern</li>
<li>Volle Datenkontrolle der Stadt</li>
<li>Kein Cloud-Drittanbieter</li>
<li>Lokale Betreuung</li>
<li>...</li>
</ul>
</div>

</div>
</div>

---

## Maßlösung statt Stempel

<div class="content">
<div class="compare-grid">

<div class="compare-box bad">
<h3>Standard-App von der Stange</h3>
<ul>
<li>Einmalige Einrichtung: 15.000 € pro Stadt</li>
<li>Laufende Kosten: 800 €+ / Monat</li>
<li>Jedes Extra-Modul: 2.000-3.000 € mehr</li>
<li>Anpassungen nur soweit der Anbieter es erlaubt</li>
<li>Kein lokaler Kontakt, kein Verständnis vor Ort</li>
</ul>
</div>

<div class="compare-box good">
<img src="icons/tabler-confetti.svg" class="compare-bg-icon">
<h3>Unsere Lösung</h3>
<ul>
<li>Faire, transparente Entwicklungskosten</li>
<li>Geringe laufende Kosten nur für Hosting und Hardware</li>
<li>Alle Features inklusive, keine Modulpreise</li>
<li>Vollständig auf Haltern zugeschnitten</li>
<li>Direkt erreichbar als lokale Partner</li>
</ul>
</div>

</div>
<div class="compare-note">
<strong>Beispiel Waltrop:</strong></br>Die Stadt stieg von ihrer Standard-App ab, als sie die Website neu startete.</br>Das Produkt ließ sich nicht anpassen. Eine Maßlösung wächst mit der Stadt.
</div>
</div>

---

## So könnte es laufen

<div class="content">
<div class="timeline">

<div class="tl-step">
<div class="tl-dot"></div>
<div class="tl-title">Kickoff</div>
<div class="tl-desc">Anforderungen aufnehmen, Ziele der App gemeinsam festlegen.</div>
</div>

<div class="tl-step">
<div class="tl-dot"></div>
<div class="tl-title">Konzept & Roadmap</div>
<div class="tl-desc">Funktionen, Zeitplan und transparente Kostenaufstellung.</div>
</div>

<div class="tl-step">
<div class="tl-dot"></div>
<div class="tl-title">Prototyp-Sprint</div>
<div class="tl-desc">Erste Demo in 2-3 Wochen, testbar auf dem Gerät.</div>
</div>

<div class="tl-step">
<div class="tl-dot"></div>
<div class="tl-title">Feedback-Runden</div>
<div class="tl-desc">Iterativ verfeinern, jederzeit anpassbar.</div>
</div>

<div class="tl-step">
<div class="tl-dot"></div>
<div class="tl-title">Launch & Support</div>
<div class="tl-desc">Livegang, wir bleiben als lokaler Partner dabei.</div>
</div>

</div>
</div>

---

<!-- _class: closing -->

<div class="closing-inner">
  <div class="closing-danke">Vielen Dank.</div>
  <div class="closing-sub">Wir freuen uns auf das Gespräch.</div>
  <div class="contact-row">
    <div class="contact-item">
      <div class="contact-name">Dominic D.</div>
      <div class="contact-details">dominic.drees@foraum.de<br>+49 151 651 43990</div>
    </div>
  </div>
</div>
