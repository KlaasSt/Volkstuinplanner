# Tuinplanner

Deze map is bedoeld voor GitHub Pages.

De app is statisch: bezoekers kunnen de bestanden op GitHub niet wijzigen. Ontwerpen worden alleen lokaal in de browser opgeslagen met `localStorage`. Export maakt een `.json`-bestand op het apparaat van de gebruiker; import leest een lokaal gekozen `.json`-bestand.

Zet geen persoonlijke ontwerpbestanden in deze GitHub-map. De `.gitignore` sluit gewone `.json`-bestanden uit, behalve `manifest.webmanifest`, zodat tuinontwerpen niet per ongeluk worden gepubliceerd.

## Take Crossfader (audio-editor)

In `audio-editor/` staat een losse, statische audio-editor om één edit samen te stellen uit meerdere takes, met crossfades. Open `audio-editor/index.html` (of `/audio-editor/` op GitHub Pages). Audio wordt alleen lokaal in de browser verwerkt; er wordt niets geüpload of opgeslagen.

- Importeer takes (wav, aiff, flac, mp3, m4a…) of probeer de knop **Demo**.
- Sleep in een take-baan om een stuk te selecteren en druk **E**: dat stuk vervangt de edit op dezelfde plek, met crossfades aan beide kanten.
- Klik op een crossfade voor vorm (equal power, lineair, S-curve), lengte, knippunt verschuiven, fase uitlijnen en beluisteren.
- Exporteer de edit als WAV (16/24-bit of 32-bit float).

De editor is een eigen installeerbare app (manifest, iconen en service worker in `audio-editor/`, los van de Tuinplanner) en werkt na het eerste bezoek ook offline. Installeren: in Chrome/Edge via de knop **Installeer app** of het installatie-icoon in de adresbalk; op iPhone/iPad via Safari → Deel → **Zet op beginscherm**. Pas `VERSION` in `audio-editor/sw.js` aan als je de app-bestanden wijzigt.
