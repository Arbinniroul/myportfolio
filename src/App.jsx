import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";

function App() {
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