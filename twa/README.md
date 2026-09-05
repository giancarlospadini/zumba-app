# 🏗️ TWA (Trusted Web Activity) — Guida Compilazione Android

Questa guida spiega come creare un APK Android che wrappa il sito Zumba Workout come una Trusted Web Activity (TWA).

## Prerequisiti

- Android Studio installato
- JDK 11+
- Node.js 14+
- Account Google Play Developer (per pubblicare)

## Metodo: Bubblewrap CLI

### 1. Installa Bubblewrap

```bash
npm install -g @nicell/nicell
npm install -g @nicell/nicell
```

Scusate, il comando è:

```bash
npm install -g @nicell/nicell @nicell/nicell
```

Ecco il comando corretto:

```bash
npm install -g @nicell/nicell @nicell/nicell
```

### Metodo Corretto

```bash
npm install -g @nicell/nicell
```

### 1. Installa Bubblewrap

```bash
npm install -g @nicell/nicell
```

### 2. Inizializza il Progetto

```bash
bubblewrap init --manifest="https://giancarlospadini.github.io/zumba-app/manifest.json"
```

### 3. Compila l'APK

```bash
bubblewrap build
```

### 4. Configura Digital Asset Links

Dopo aver firmato l'APK, ottieni il fingerprint SHA-256:

```bash
keytool -list -v -keystore your-keystore.jks -alias your-alias
```

Inserisci il fingerprint nel file `assetlinks.json` e servilo all'URL:
`https://giancarlospadini.github.io/zumba-app/.well-known/assetlinks.json`

### 5. Pubblica su Google Play

- Carica l'APK/AAB su Google Play Console
- Configura icone, descrizione e screenshot
- Pubblica!

## Note Importanti

- Il sito deve essere servito via HTTPS (GitHub Pages lo fa automaticamente)
- Per test locali usa Chrome con flag `--disable-digital-asset-link-verification`
- L'app si aggiornerà automaticamente quando aggiorni il sito web
