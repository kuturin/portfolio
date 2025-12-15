# Portfolio — Next.js + Tailwind

Krótki opis
- Prosty projekt portfolio zbudowany w Next.js (app router) i ostylowany przy pomocy Tailwind CSS.
- Cel: prezentacja projektów, szybkie uruchomienie i łatwy deploy (np. na Vercel).

**Gotowe komponenty**
- `components/Header.tsx` — nagłówek / nawigacja
- `components/Hero.tsx` — sekcja powitalna
- `components/Projects.tsx` — lista projektów (karty)
- `components/Contact.tsx` — kontakt / CTA

Szybkie uruchomienie (lokalnie)

1. Zainstaluj zależności (tylko jeśli jeszcze nie):
```bash
npm install
```

2. Tryb deweloperski (hot-reload):
```bash
npm run dev
```
Otwórz: http://localhost:3000

3. Build produkcyjny i uruchomienie preview:
```bash
npm run build
npm start
```

Konfiguracja Tailwind
- Projekt używa Tailwind v4 poprzez plugin `@tailwindcss/postcss` i `postcss`.
- Globalne style i dyrektywy znajdują się w `app/globals.css`.

Struktura plików (ważniejsze)
- `app/` — router aplikacji (Next 13+ app dir)
- `app/layout.tsx` — główny layout (import `globals.css`)
- `app/page.tsx` — strona główna
- `components/` — komponenty UI używane w `app/`
- `postcss.config.mjs`, `tailwind.config.cjs` — konfiguracja Tailwind/PostCSS

Deploy
- Najprościej: połącz repo z Vercel — Vercel rozpozna Next.js i przeprowadzi automatyczny build.
- Inne opcje: Netlify, Cloudflare Pages (z odpowiednim buildem), Docker.

Debug / typowe problemy
- Błędy związane z Tailwind v4: upewnij się, że `postcss.config.mjs` zawiera `@tailwindcss/postcss` i `autoprefixer`, a globalny CSS importuje Tailwind (`@import "tailwindcss";` lub właściwe wejście).  
- Next wykrywa czasem lockfile wyżej w strukturze — jeśli otrzymujesz ostrzeżenie o workspace root, możesz ustawić `outputFileTracingRoot` w `next.config.ts` lub usunąć zbędny lockfile.

Chcesz, żebym dodał jeszcze:
- instrukcję deploymentu krok-po-kroku na Vercel, czy
- przykład dodania projektu do `Projects.tsx` (template danych)?

---
Plik wygenerowany i dopasowany do tego repozytorium — jeśli chcesz zmiany (np. Twoje imię, email, linki), napisz co wstawić.
