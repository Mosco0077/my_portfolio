import Navbar from "./components/Navbar/navbar";
import Intro from './components/Intro/intro.js'
 import Skills from './components/Skills/skills.js'
import About from './components/About/about.js'
import Contact from './components/Contact/contact.js'
 import Projects from './components/Project/projects.js'
import Footer from './components/Footer/footer.js'
// import { Routes,Route } from "react-router-dom"
// import Home from "./pages/Home.jsx";
// import AboutUs from "./pages/AboutMe.jsx";


function App() {
  return (
    //  <Routes>
    //     <Route path="/" element={<Home/>}/>
    //     <Route path="/intro" element={<Intro/>}/>
    //     <Route path="/aboutus" element={<AboutUs/>}/>
    //     <Route path="/skills" element={<Skills/>}/>
    //     <Route path="/projects" element={<Projects/>}/>
    //     <Route path="/contact" element={<Projects/>}/>
    //     </Routes>
         <>
         <Navbar />
        <Intro />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer /> 
        </>
    
  );
}

export default App;
