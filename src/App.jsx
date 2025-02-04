import './App.css'
import Skills from './components/Skills'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { useState } from 'react'
import Footer from './components/Footer'


function App() {

  const [lightMode, setLightMode] = useState(false);
  return (
    <>
      <header>
        <Navbar lightMode={lightMode} setLightMode={setLightMode} />
      </header>
      <main>
        <section id="home">
          <Home lightMode={lightMode} setLightMode={setLightMode} />
        </section>
        <section id="skills">
          <Skills lightMode={lightMode} setLightMode={setLightMode} />
        </section>
        <section id="projects">
          <Projects lightMode={lightMode} setLightMode={setLightMode} />
        </section>
        <section id="contact">
          <Contact lightMode={lightMode} setLightMode={setLightMode} />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
export default App