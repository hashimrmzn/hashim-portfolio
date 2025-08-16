import './App.css'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Header from './components/Header/Header'
import Home from './pages/Home'
import About from './components/About';
import TechSlider from './components/TechStack/TechSlider';
import Myinfor from './components/PersonalInfo/Myinfor';
import MyProjects from './components/MyProjects/MyProjects';
import MyExpirience from './components/MyExperince/MyExpirience';
import TechSkills from './components/TechSkills/TechSkills';
import Contact from './components/Contact/Contact';

function App() {
useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <>
    <Header />
     <Home />
     <TechSlider />
     <MyProjects />
     <About />
    <Myinfor />
    <MyExpirience />
    <TechSkills />
    <Contact />
    </>
  )
}

export default App
