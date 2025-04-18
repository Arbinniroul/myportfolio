import React, { useEffect, useRef } from 'react';
import { GithubIcon, LinkedinIcon, MailIcon, DownloadIcon } from 'lucide-react';
import Typed from 'typed.js';
import avatarImg from '../assets/dp.jpg';

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['MERN Stack Developer', 'Full Stack Developer', 'Problem Solver'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between p-6 md:p-20 bg-gradient-to-b from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-indigo-950">
      {/* Left Content */}
      <div className="md:w-2/4 text-center md:text-left mt-6 md:mt-0">
        <h2 className="text-xl text-indigo-600 dark:text-indigo-400 font-medium mb-4">Hello, I'm</h2>
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-4">Arbin Niroula</h1>
        <div className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6">
          A passionate <span ref={typedRef} className="text-indigo-600 dark:text-indigo-400"></span>
        </div>
        <p className="text-sm md:text-lg text-gray-700 dark:text-gray-400 mb-6">
          I create dynamic, responsive, and visually appealing websites focusing on clean code, great user experiences, and cutting-edge technologies to bring ideas to life.
        </p>
        <ul className="text-gray-600 dark:text-gray-400 text-sm md:text-lg list-disc pl-4 mb-6">
          <li>Build responsive and user-friendly websites</li>
          <li>Turn designs into functional applications</li>
          <li>Optimize performance and scalability</li>
          <li>Integrate APIs and backend services</li>
        </ul>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="/myresume.pdf"
         download={`Arbin_Niroula_Resume_${new Date().getFullYear()}.pdf`}
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full flex items-center gap-2 transition-colors"
          >
            <DownloadIcon size={20} /> Download Resume
          </a>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Arbinniroul"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors"
            >
              <GithubIcon size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/arbin-niroula-3796bb2a0/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors"
            >
              <LinkedinIcon size={24} />
            </a>
            <a
              href="mailto:arbinniroula21@gmail.com"
              className="p-3 text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors"
            >
              <MailIcon size={24} />
            </a>
          </div>
        </div>
      </div>

   {/* Right Content */}
<div className="relative mt-20  w-48 h-48 md:w-80 md:h-80">
  <img
    src={avatarImg}
    alt="Avatar"
    className="w-full h-full object-cover rounded-full border-4 border-indigo-600 dark:border-indigo-400 shadow-lg hover:scale-105 transition-transform duration-300"
  />
  <div className="absolute -top-6 -right-6 w-20 h-20 md:w-32 md:h-32 bg-indigo-600 opacity-25 rounded-full blur-2xl animate-pulse"></div>
</div>

    </section>
  );
};

export default Hero;
