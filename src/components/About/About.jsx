import React from "react";
import AboutImg from "../../assets/7358653-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-40 rounded-lg p-12 md:p-20"
    >
      <div className="md:w-2/4 text-center md:text-left">
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#3b82f6]">
          About Me
        </h2>
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          I'm a passionate developer with experience in frontend, backend, and database development. I aim to create innovative and efficient solutions using modern technologies.
        </p>
      </div>

      <div className="md:w-2/4 md:flex md:flex-row justify-center items-center mt-8 md:mt-0">
        <img
          className="md:h-96 w-80 rounded-lg shadow-2xl hover:scale-105 transition-all duration-300"
          src={AboutImg}
          alt="About me"
        />
      </div>

      <div className="md:w-2/4 mt-8 md:mt-0">
        <ul className="text-gray-300">
          {/* Frontend Developer */}
          <div className="flex gap-4 py-6 hover:bg-[#1e293b] px-6 rounded-lg transition-all duration-300">
            <IoArrowForward size={30} className="text-[#3b82f6]" />
            <div>
              <h1 className="text-2xl font-semibold text-[#3b82f6]">Frontend Developer</h1>
              <p className="text-md leading-relaxed mt-2">
                I specialize in building responsive, user-friendly websites using HTML, CSS, JavaScript, React, and more. My goal is to ensure smooth and engaging user experiences.
              </p>
            </div>
          </div>

          {/* Database Developer */}
          <div className="flex gap-4 py-6 hover:bg-[#1e293b] px-6 rounded-lg transition-all duration-300">
            <IoArrowForward size={30} className="text-[#3b82f6]" />
            <div>
              <h1 className="text-2xl font-semibold text-[#3b82f6]">Database Developer</h1>
              <p className="text-md leading-relaxed mt-2">
                I have experience working with relational and NoSQL databases such as MySQL, MongoDB, and PostgreSQL. I focus on optimizing queries and ensuring database integrity.
              </p>
            </div>
          </div>

          {/* Backend Developer */}
          <div className="flex gap-4 py-6 hover:bg-[#1e293b] px-6 rounded-lg transition-all duration-300">
            <IoArrowForward size={30} className="text-[#3b82f6]" />
            <div>
              <h1 className="text-2xl font-semibold text-[#3b82f6]">Backend Developer</h1>
              <p className="text-md leading-relaxed mt-2">
                I build secure, scalable, and efficient backend systems using Node.js, Express, and other technologies. I focus on creating RESTful APIs and ensuring server-side performance.
              </p>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default About;
