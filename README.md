# 💃 Zumba Workout App

App web per allenarsi a casa con video Zumba curati da YouTube. Divertiti ballando!

🌐 **[Apri l'App](https://giancarlospadini.github.io/zumba-app/)**

## ✨ Funzionalità

- 🏠 **Home** — Workout del giorno, inizio rapido per durata, streak giornaliero
- 🔍 **Esplora** — Filtra per livello, durata e tipo (Classic, Toning, Strong, Gold)
- ❤️ **Preferiti** — Salva i tuoi workout preferiti
- 📊 **Profilo** — Calendario attività, statistiche, obiettivo settimanale
- 📱 **PWA** — Installabile su telefono, funziona offline
- 🤖 **TWA** — Pronto per il wrapping Android (vedi `twa/`)

## 🎯 Tipi di Workout

| Tipo | Descrizione |
|------|-------------|
| 💃 Classic | Zumba tradizionale con ritmi latini |
| 🏋️ Toning | Tonificazione con movimenti mirati |
| ⚡ Strong | Alta intensità sincronizzata alla musica |
| 🌟 Gold | Versione dolce per anziani e principianti |

## 🛠️ Tech Stack

- HTML / CSS / JavaScript vanilla
- Nessun framework, nessun build step
- localStorage per persistenza dati
- Service Worker per offline caching
- YouTube Embed API per i video

## 📂 Struttura

```
├── index.html       # App principale
├── style.css        # Stili
├── app.js           # Logica app
├── videos.js        # Database video
├── manifest.json    # PWA manifest
├── sw.js            # Service Worker
├── offline.html     # Pagina offline
├── twa/             # File per Android TWA
│   ├── README.md
│   └── assetlinks.json
└── README.md
```

## 🚀 Deploy

Il sito è hostato su GitHub Pages. Ogni push su `main` aggiorna automaticamente il sito.

## 📄 Licenza

MIT
