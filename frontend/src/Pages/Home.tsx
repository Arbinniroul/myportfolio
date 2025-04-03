
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

 const Home = ({darkMode,setDarkMode}) => {

  return (

   
    <div className=" bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Header darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>

  )
}
export default Home;

