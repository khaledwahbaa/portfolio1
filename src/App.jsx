import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  
  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    document.documentElement.classList.toggle("dark");
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
    });

    document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [darkMode]);

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        darkMode
          ? "bg-[linear-gradient(to_bottom_right,#2b1b12,#3a2418,#1f130c)]"
          : "bg-[linear-gradient(to_bottom_right,#f5eee6,#e8dccc,#dcc9b0)]"
      }`}
    >
      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <About darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Skills darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Project darkMode={darkMode}/>
      <Contact darkMode={darkMode}/>
      <Footer darkMode={darkMode}/>

    </div>
  );
}

export default App;
