

import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import About from '../components/About'

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  )
}
