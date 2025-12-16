"use client"

export default function Header() {
  return (
    <header className="w-full border-b border-zinc-200 dark:border-zinc-800">
      <div className="container flex items-center justify-between py-4">
        <div className="text-lg font-semibold">Anna Grabska</div>
        <nav className="flex gap-4">
          <a href="#projects" className="text-sm font-medium hover:underline">Projekty</a>
          <a href="#about" className="text-sm font-medium hover:underline">O mnie</a>
          <a href="#contact" className="text-sm font-medium hover:underline">Kontakt</a>
        </nav>
      </div>
    </header>
  )
}
