# CareTrail

One shared health record per patient. Doctors and labs add to it, and the patient decides who can see it.

This project is being built phase by phase. See [docs/PROGRESS.md](docs/PROGRESS.md) for what is done and [docs/MASTER_PROMPT.md](docs/MASTER_PROMPT.md) for the full plan. The complete README is written in the final phase.

All data is simulated. Organizations and people are fictional.

## Run it on your computer

You need Node.js 22.13 or newer.

```bash
npm install
```

```bash
npm run dev
```

Then open <http://localhost:5173>.

## Checks

```bash
npm run typecheck
npm run lint
npm test
npm run build
```
