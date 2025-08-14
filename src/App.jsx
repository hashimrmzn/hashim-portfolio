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
     <About />
    <Myinfor />
    <MyProjects />
    </>
  )
}

export default App
