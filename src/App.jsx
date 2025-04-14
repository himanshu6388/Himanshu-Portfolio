import { Route, Router, Routes } from "react-router"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Skill from "./components/Skill"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import About from "./pages/About"
import Contact from "./pages/Contact"


function App() {
  

  return (
   <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    
   </>
  )
}

export default App


