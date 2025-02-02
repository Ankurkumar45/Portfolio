import './App.css'
import Skills from './components/Skills'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Contact from './components/Contact'


function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  )
}
export default App