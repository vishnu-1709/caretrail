# CareTrail — Open questions

Things the master prompt does not spell out. Each one lists the simplest option chosen so work could continue.

| # | Question | Simplest option used for now |
|---|---|---|
| 1 | Sign-in arrives in Phase 3, but the landing page (Phase 1) already needs the three demo buttons and "Sign in with Google". What should they do until then? | The buttons are shown and, when pressed, say that sign-in is not switched on yet. They get wired up in Phase 3. |
| 2 | "Inter or system font" — load Inter from a font host, or rely on the device? | No font download. The font list starts with Inter (used if the device has it) and falls back to the system font. |
