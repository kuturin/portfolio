"use client"

export default function About() {
    return (
        <section id="about" className="container py-20">
            <h2 className="text-2xl font-semibold mb-4">O mnie</h2>

            <p className="mb-4 text-zinc-600 dark:text-zinc-400">Tworzę proste i przyjazne w użyciu strony oraz aplikacje webowe - od pomysłu, przez projekt, aż po wdrożenie. Skupiam się na czytelnej strukturze, responsywnym UI i dobrej wydajności, żeby użytkownik miał jak najlepsze doświadczenie.</p>

            <p className="mb-4 text-zinc-600 dark:text-zinc-400">Specjalizuję się w tworzeniu front-endu z użyciem <span className="font-medium">Next.js</span>, <span className="font-medium">React</span> i <span className="font-medium">TypeScript</span>. Do stylowania wykorzystuję <span className="font-medium">Tailwind CSS</span>. Aspiruję do bycia fullstackiem. Lubię prostotę, automatyzację i rozwiązania, które da się łatwo utrzymać.</p>

            <ul className="list-disc pl-5 mb-4 text-zinc-600 dark:text-zinc-400">
                <li>Responsywne interfejsy i dostępność (a11y)</li>
                <li>Czysty, testowalny kod i dobre praktyki (TypeScript, komponenty)</li>
                <li>Optymalizacja wydajności i SEO (SSG / ISR / server-side rendering)</li>
            </ul>

            <p className="mb-4 text-zinc-600 dark:text-zinc-400">Obecnie studiuję informatykę. Poza programowaniem moją pasją jest gra <span className="font-medium">World of Warcraft</span> oraz inne gry RPG - zarówno komputerowe, jak i TTRPG (tabletop role-playing), głównie w klimatach <span className="font-medium">Warhammer</span>. Chętnie łączę kreatywne hobby z projektowaniem interfejsów.</p>

            <p className="mb-4 text-zinc-600 dark:text-zinc-400">W pracy korzystam z narzędzi AI, żeby przyspieszyć proces tworzenia - jeśli klient życzy sobie realizacji projektu bez użycia AI, mogę pracować także bez AI.</p>

            <p className="mb-4 text-zinc-600 dark:text-zinc-400">Masz pomysł na projekt lub chcesz odświeżyć swoją stronę? Napisz - chętnie porozmawiam o współpracy. Możesz użyć formularza kontaktowego na stronie lub wysłać wiadomość na e‑mail.</p>

            <a href="#contact" className="inline-block mt-2 rounded bg-zinc-900 text-white px-4 py-2">Napisz do mnie</a>

            <div className="mt-3">
                <a href="https://github.com/kuturin" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-600 hover:underline">GitHub: Kuturin</a>
            </div>
            <div className="mt-3">
                <a href="https://www.linkedin.com/in/anna-grabska-94a569339/" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-600 hover:underline">LinkedIn: Anna Grabska</a>
            </div>
        </section>
    )
}
