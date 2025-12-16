

import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import About from '../components/About'

const Home: React.FC = () => {
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
export default Home
