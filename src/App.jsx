import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";

import favicon from './assets/dp.jpg';
function App() {
document.querySelector('link[rel="icon"]').href = favicon;
  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
      {/* Navbar with Smooth Transition */}
      <Navbar />

      {/* Home Section */}
      <div className="animate__animated animate__fadeIn">
        <Home />
      </div>

      {/* About Section */}
      <div className="transition-all duration-500 ease-in-out">
        <About className='m-10' />
      </div>

      {/* Experience Section */}
      <div className="transition-all duration-500 ease-in-out">
        <Experience />
      </div>

      {/* Projects Section */}
      <div className="transition-all duration-500 ease-in-out">
        <Projects />
      </div>

      {/* Footer Section */}
      <div className="mt-12 md:mt-20 transition-all duration-500 ease-in-out">
        <Footer />
      </div>
    </div>
  );
}

export default App;
