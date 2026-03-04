---
marp: true
theme: default
paginate: true
style: |
  section {
    background-color: #ffffff;
    color: #1a1a1a;
    font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;
    overflow: hidden;
    padding: 50px 70px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  h1, h2, h3 { color: #0B4195; font-weight: 700; }
  strong { color: #0B4195; }
  em { color: #0B4195; font-style: italic; }
  a { color: #0B4195; text-decoration: underline; }
  code { background: #EEF3FB; color: #0B4195; padding: 2px 6px; border-radius: 4px; }
  li { margin: 0.3em 0; font-size: 0.95em; }

  /* — Title slide — */
  section.lead {
    padding: 0;
    background: linear-gradient(135deg, #0B4195 0%, #0B4195 100%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
  }
  section.lead::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -10%;
    width: 60%;
    height: 60%;
    background: rgba(255,255,255,0.05);
    border-radius: 50%;
  }
  section.lead::after {
    content: '';
    position: absolute;
    bottom: -30%;
    left: -20%;
    width: 50%;
    height: 50%;
    background: rgba(255,255,255,0.03);
    border-radius: 50%;
  }
  section.lead h1 {
    color: white;
    font-size: 3.5em;
    margin: 0;
    z-index: 1;
    text-shadow: 0 2px 20px rgba(0,0,0,0.1);
  }
  section.lead h3 {
    color: rgba(255,255,255,0.9);
    font-weight: 300;
    font-size: 1.4em;
    margin: 20px 0 0 0;
    z-index: 1;
    letter-spacing: 0.5px;
  }

  /* — About slide — */
  section.about {
    padding: 50px 70px;
  }
  .team-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 40px;
    margin-top: 30px;
    align-items: start;
  }
  .team-member {
    text-align: center;
  }
  .avatar {
    width: 100px;
    height: 100px;
    margin: 0 auto 15px;
    border-radius: 50%;
    background: linear-gradient(135deg, #0B4195 0%, #0B6fd4 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 45px;
    color: white;
    box-shadow: 0 8px 30px rgba(11, 65, 149, 0.2);
  }
  .team-member h3 {
    margin: 0 0 4px 0;
    font-size: 1em;
  }
  .team-member .role {
    color: #0B4195;
    font-weight: 600;
    font-size: 0.8em;
    margin-bottom: 8px;
  }
  .team-member .contact {
    color: #666;
    font-size: 0.75em;
    line-height: 1.5;
  }

  /* — Feature grid — */
  .feature-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-top: 20px;
  }
  .feature-card {
    background: linear-gradient(135deg, #f8fafc 0%, #eef3fb 100%);
    padding: 16px;
    border-radius: 12px;
    border-left: 4px solid #0B4195;
  }
  .feature-card h3 {
    margin: 0 0 8px 0;
    font-size: 1em;
  }
  .feature-card p {
    color: #555;
    margin: 0;
    line-height: 1.5;
    font-size: 0.9em;
  }

  /* — Value cards — */
  .value-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 18px;
    margin-top: 20px;
  }
  .value-card {
    background: white;
    padding: 18px;
    border-radius: 12px;
    border: 2px solid #eee;
    text-align: center;
  }
  .value-icon {
    font-size: 2em;
    margin-bottom: 8px;
  }
  .value-card h4 {
    color: #0B4195;
    margin: 0 0 6px 0;
    font-size: 0.9em;
  }
  .value-card p {
    color: #666;
    font-size: 0.8em;
    margin: 0;
    line-height: 1.4;
  }

  /* — App mockup — */
  .app-showcase {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 80px;
    margin-top: 40px;
  }
  .mockup-container {
    position: relative;
  }
  .iphone-mockup {
    width: 220px;
    height: 440px;
    background: #111;
    border-radius: 40px;
    padding: 12px;
    box-shadow: 0 20px 60px rgba(0,0,0,0.3), inset 0 0 0 1px #333;
    position: relative;
  }
  .iphone-mockup::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 150px;
    height: 26px;
    background: #111;
    border-radius: 0 0 20px 20px;
    z-index: 10;
  }
  .ipad-mockup {
    width: 380px;
    height: 280px;
    background: #111;
    border-radius: 24px;
    padding: 12px;
    box-shadow: 0 20px 60px rgba(0,0,0,0.3), inset 0 0 0 1px #333;
  }
  .mockup-screen {
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #eef3fb 0%, #f8fafc 100%);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 2.5em;
    color: #0B4195;
  }

  /* — Section headers — */
  h2 {
    font-size: 1.8em;
    margin: 0 0 10px 0;
    position: relative;
    display: inline-block;
  }
  h2::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 120px;
    height: 3px;
    background: #0B4195;
    border-radius: 2px;
  }

  /* — Pagination — */
  section::after {
    font-size: 0.75em;
    color: #999;
  }
---

<!-- _class: lead -->

<img src="logo.svg" alt="Haltern am See" style="height: 120px; margin-bottom: 30px;">

# Haltern App

### Eine maßgeschneiderte Lösung für unsere Stadt

---

## Unser Team

<div class="team-grid">
<div class="team-member">
<div class="avatar">👨‍💻</div>
<h3>Dominic D.</h3>
<div class="role">App Developer</div>
<div class="contact">
📧 dominic@example.com<br/>
📱 +49 (0) 123 456789
</div>
</div>

<div class="team-member">
<div class="avatar">⚙️</div>
<h3>Julius M.</h3>
<div class="role">Backend Developer</div>
<div class="contact">
📧 julius@example.com<br/>
📱 +49 (0) 123 456789
</div>
</div>

<div class="team-member">
<div class="avatar">🎨</div>
<h3>Jan R.</h3>
<div class="role">Management & Design</div>
<div class="contact">
📧 jan@example.com<br/>
📱 +49 (0) 123 456789
</div>
</div>
</div>

---

## Unsere Stärken

<div class="value-grid">
<div class="value-card">
<div class="value-icon">🏙️</div>
<h4>100% Lokal</h4>
<p>Wir leben hier. Wir kennen Haltern, seine Eigenheiten und seine Menschen.</p>
</div>

<div class="value-card">
<div class="value-icon">🎯</div>
<h4>Massgeschneidert</h4>
<p>Keine Standardlösung. Gebaut speziell für Haltern am See, nicht kopiert.</p>
</div>

<div class="value-card">
<div class="value-icon">✅</div>
<h4>Bewährte Erfahrung</h4>
<p>200+ Apps für Städte und Unternehmen. Jede Challenge schon gelöst.</p>
</div>

<div class="value-card">
<div class="value-icon">⚡</div>
<h4>Klein & Agil</h4>
<p>Direkte Linie zu den Entwicklern. Keine Tickets, keine Wartelisten.</p>
</div>

<div class="value-card">
<div class="value-icon">💰</div>
<h4>Kostentransparenz</h4>
<p>Keine versteckten Modulkosten. Transparente Preisgestaltung von Anfang an.</p>
</div>

<div class="value-card">
<div class="value-icon">🏢</div>
<h4>Full-Stack InHouse</h4>
<p>App, Backend, Hosting, Design, Media. Alles bei uns in einer Hand.</p>
</div>
</div>

---

## Warum wir die richtige Wahl sind

Standardlösungen sind oft zu rigid. **Waltrop** ist dafür das beste Beispiel – sie wechselten weg, weil die App nicht flexibel genug war.

Wir bieten:
- **Vollständige Anpassung** – keine versteckten Grenzen
- **Transparente Kosten** – keine überraschenden Module
- **Schneller Support** – direkter Kontakt zu Entwicklern
- **Agile Entwicklung** – Anforderungen ändern sich? Kein Problem.

---

## Mobile & Responsive

<div style="height: 400px; display: flex; align-items: center; justify-content: center; color: #0B4195; font-size: 1.2em;">
[iPhone & iPad Mockups übergesetzt]
</div>

---

## Die Funktionen

<div class="feature-grid">
<div class="feature-card">
<h3>📅 Veranstaltungen</h3>
<p>Alle Events und Termine aus Haltern auf einen Blick – mit Benachrichtigungen und Kalender-Anbindung.</p>
</div>

<div class="feature-card">
<h3>🗺️ Interaktive Karte</h3>
<p>Ausgefeilte Kartenfunktion für lokale Navigation, Gastronomie, Gewerbe und Tourismus.</p>
</div>

<div class="feature-card">
<h3>🏛️ Stadtverwaltung</h3>
<p>Formulare, Öffnungszeiten, Behördengänge – digital und benutzerfreundlich.</p>
</div>

<div class="feature-card">
<h3>🔧 Mängelmelder</h3>
<p>Bürger melden Probleme direkt: Schäden, Reinigung, Verkehrssicherheit.</p>
</div>

<div class="feature-card">
<h3>📢 Lokale News</h3>
<p>Aktuelle Nachrichten von der Stadt und Push-Alerts für wichtige Meldungen.</p>
</div>

<div class="feature-card">
<h3>♻️ Müllkalender</h3>
<p>Abfuhrtage merken, keine Tonnen mehr vergessen – mit Vorankündigungen.</p>
</div>

<div class="feature-card">
<h3>🤝 Bürgerbeteiligung</h3>
<p>Direkte Partizipation: Abstimmungen, Meldungen, Feedback zur Stadt.</p>
</div>

<div class="feature-card">
<h3>🏪 Lokale Wirtschaft</h3>
<p>Unterstütze Halterns Unternehmen: Verzeichnis mit Standorten und Infos.</p>
</div>
</div>

---

## Zusätzliche Services

- **Lokales Hosting** – Ihre Daten bleiben in Deutschland
- **Echte Sicherheit** – DSGVO-konform, sicher und zertifiziert
- **Wartung & Support** – Regelmäßige Updates, schnelle Reaktion
- **Reporting & Analytics** – Verstehen Sie Ihre Nutzer
- **Kontinuierliche Verbesserung** – Wir lernen gemeinsam mit Haltern

---

## Die nächsten Schritte

1. **Gemeinsames Kickoff-Meeting** – Wir lernen Ihre Anforderungen kennen
2. **Detailliertes Konzept** – Wir erstellen eine umfassende Roadmap
3. **Prototyp-Sprint** – Erste greifbare Ergebnisse innerhalb 2–3 Wochen
4. **Iteratives Feedback** – Gemeinsam verfeinern wir die App
5. **Launch & Support** – Go-Live mit Ihrer Stadt als Partner

**🚀 Lassen Sie uns gemeinsam anfangen.**

---

## Vielen Dank!

**Fragen?**

<div style="margin-top: 40px; text-align: center;">
<p style="color: #0B4195; font-weight: 600; font-size: 1em;">Sie erreichen uns jederzeit – Wir sind Haltern.</p>
</div>
