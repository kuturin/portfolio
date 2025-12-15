export default function Hero() {
  return (
    <section className="container py-20">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold leading-tight mb-4">Cześć — jestem Anna Grabska</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">Tworzę aplikacje webowe. Tutaj znajdziesz wybrane projekty, nad którymi pracowałam.</p>
        <div className="mt-6">
          <a href="#projects" className="inline-block rounded-full bg-sky-600 px-5 py-3 text-white font-medium hover:bg-sky-700">Zobacz projekty</a>
        </div>
      </div>
    </section>
  )
}
