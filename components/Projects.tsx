type Project = {
  title: string
  description: string
  url?: string
}

const sample: Project[] = [
  { title: 'Projekt A', description: 'Krótki opis projektu A', url: '#' },
  { title: 'Projekt B', description: 'Krótki opis projektu B', url: '#' },
  { title: 'Projekt C', description: 'Krótki opis projektu C', url: '#' },
]

export default function Projects() {
  return (
    <section id="projects" className="container py-12">
      <h2 className="text-2xl font-semibold mb-6">Wybrane projekty</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {sample.map((p) => (
          <article key={p.title} className="rounded-lg border p-6 hover:shadow-lg transition-shadow dark:border-zinc-800">
            <h3 className="text-lg font-medium mb-2">{p.title}</h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">{p.description}</p>
            <a href={p.url} className="text-sm font-medium text-sky-600 hover:underline">Zobacz projekt</a>
          </article>
        ))}
      </div>
    </section>
  )
}
