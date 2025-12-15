import EachProject from "./EachProject"

const sample = [
    { title: "Portfolio", description: "Moje osobiste portfolio stworzone z użyciem Next.js i Tailwind CSS, prezentujące moje projekty i umiejętności.", url: "https://kuturin.github.io/portfolio/" },
    { title: "Table Warden", description: "Kompleksowy program do światotwórstwa dla graczy i twórców gier fabularnych.", url: "Projekt nie jest obecnie dostępny" },
    { title: "Strona dla lokalnej kawiarni", description: "Responsywna strona internetowa dla lokalnej kawiarni, z menu, galerią zdjęć i formularzem kontaktowym.", url: "https://example.com/kawiarnia" },
    { title: "Aplikacja do zarządzania zadaniami", description: "Prosta aplikacja webowa do zarządzania zadaniami, z funkcjami dodawania, edytowania i usuwania zadań.", url: "https://example.com/task-manager" },
]

export default function Projects() {
  return (
    <section id="projects" className="container py-12">
      <h2 className="text-2xl font-semibold mb-6">Wybrane projekty</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {sample.map((project) => (
          <EachProject key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}
