# Padel Manager — Landing statica

Landing marketing autonoma per **Padel Manager OS** (`https://padelmanageros.com`).  
HTML/CSS/JS statico — nessun framework, nessuna build.

## Contenuto

- `index.html` — landing visuale SaaS (hero + sezioni con capture)
- `i18n.js` — copy IT/EN (default **italiano**)
- `assets/captures/` — screenshot prodotto (problem, solution, intelligence, …)
- `app-icons/` — icone moduli (PNG ottimizzati)
- `vercel.json` — redirect `www` / `.it` → apex

## Sviluppo locale

```bash
cd /Users/daniele/padel-manager-landing
python3 -m http.server 8080
```

Apri http://localhost:8080 — verifica switch **IT/EN**, layout mobile e link contatti.

## Repository Git

**https://github.com/dfchakra-hub/padel-manager-landing**

Push su `main` → deploy automatico su Vercel (progetto `padel-manager-landing`).

## Deploy (Vercel)

Produzione: **https://padelmanageros.com**

| Metodo | Comando |
|--------|---------|
| **Automatico** | `git push origin main` |
| **Manuale** | `cd /Users/daniele/padel-manager-landing && vercel --prod --yes` |

Impostazioni Vercel: **Framework** Other, **Root Directory** `.` (root del repo).  
Il monorepo `padel-manager-api` **non** è collegato a questo progetto.

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
