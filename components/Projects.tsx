import EachProject from "./EachProject"

const sample = [
    { title: "Portfolio", description: "Moje osobiste portfolio stworzone z użyciem Next.js i Tailwind CSS, prezentujące moje projekty i umiejętności.", url: "https://kuturin.github.io/portfolio/" },
    { title: "Table Warden", description: "Kompleksowy program do światotwórstwa dla graczy i twórców gier fabularnych.", niedostepny: true, screenshots: [
      "/screenshots/table_warden_1.png", "/screenshots/table_warden_2.png", "/screenshots/table_warden_3.png"
    ] },
    
    
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
