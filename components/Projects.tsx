import EachProject, { IProject } from "./EachProject"

const myProjects: IProject[] = [
    { title: "Portfolio", description: "Moje osobiste portfolio stworzone z użyciem Next.js, Typescript i Tailwind CSS, prezentujące moje projekty i umiejętności." },
    { title: "Table Warden", description: "Kompleksowy program do światotwórstwa dla graczy i twórców gier fabularnych. Obecnie na wczesnym etapie rozwoju. Użyte technologie: React, Typescript, CSS, Node.js, Express i SQLite.", niedostepny: true, screenshots: ["/screenshots/table_warden_1.png", "/screenshots/table_warden_2.png", "/screenshots/table_warden_3.png"] },
]

export default function Projects() {
  return (
    <section id="projects" className="container py-12">
      <h2 className="text-2xl font-semibold mb-6">Wybrane projekty</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {myProjects.map((project) => (
          <EachProject key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}


