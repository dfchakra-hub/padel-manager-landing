# Padel Manager — Landing statica

Landing marketing autonoma per **Padel Manager OS** (`https://padelmanageros.com`).  
HTML/CSS/JS statico — nessun framework, nessuna build.

## Contenuto

- `index.html` — pagina, stili inline, visual OS cockpit
- `i18n.js` — copy IT/EN (default **italiano**)
- `vercel.json` — redirect `www` / `.it` → apex

## Sviluppo locale

```bash
cd /Users/daniele/padel-manager-landing
python3 -m http.server 8080
```

Apri http://localhost:8080 — verifica switch **IT/EN**, layout mobile e link contatti.

## Deploy (Vercel)

Progetto: `padel-manager-landing` → **https://padelmanageros.com**

La cartella è collegata al progetto Vercel (`.vercel/project.json`). Il deploy ufficiale va fatto **da qui**, non dal monorepo del gestionale:

```bash
cd /Users/daniele/padel-manager-landing
vercel link --project padel-manager-landing --yes   # solo la prima volta
vercel --prod --yes
```

Impostazioni progetto: **Framework** Other, **Root Directory** vuoto (`.`). Il repository Git del gestionale è **scollegato** da questo progetto per evitare deploy accidentali dal monorepo.

## Contatti (non modificare senza richiesta esplicita)

| Canale | Valore |
|--------|--------|
| Email | bpm@padelmanageros.com |
| Telefono | +39 329 673 7387 |
| LinkedIn | https://www.linkedin.com/in/danielepadelBPM |

## Vincoli editoriali

- Nessun riferimento a Summit, demo interne o codice del gestionale principale
- Nessuna metrica inventata (revenue, utenti paganti, ARR, ecc.)
- Posizionamento: sistema operativo per circoli padel moderni; MVP avanzato, fase pilot
