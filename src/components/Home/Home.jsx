import React from "react";
import avatarImg from "../../assets/dp.jpg";
import TextChange from "../TextChange.jsx";

const Home = () => {
  return (
    <div className="text-white flex flex-col-reverse md:flex-row w-full items-center justify-between p-6 md:p-20 bg-gradient-to-b from-[#0f172a] to-[#1e293b] min-h-screen">
      {/* Left Content */}
      <div className="md:w-2/4 text-center md:text-left mt-6 md:mt-0 animate-fade-in">
        <h1 className="text-3xl md:text-6xl font-extrabold leading-tight tracking-tight">
          <TextChange /> {/* Dynamic Text Effect */}
        </h1>
        <p className="text-sm md:text-xl mt-4 text-gray-300">
          A passionate <span className="text-[#3b82f6] font-semibold">Web Developer</span> who creates dynamic, responsive, and visually appealing websites. I focus on clean code, great user experiences, and cutting-edge technologies to bring ideas to life.
        </p>
        <ul className="text-gray-400 mt-5 text-sm md:text-lg list-disc pl-4">
          <li>Build responsive and user-friendly websites</li>
          <li>Turn designs into functional applications</li>
          <li>Optimize performance and scalability</li>
          <li>Integrate APIs and backend services</li>
        </ul>
        <button className="mt-6 bg-[#3b82f6] text-[#0f172a] py-2 px-6 md:py-3 md:px-8 text-lg md:text-xl font-semibold rounded-full shadow-lg hover:shadow-2xl hover:bg-[#2563eb] transition-all duration-300 ease-in-out transform hover:scale-105">
          Contact Me
        </button>
      </div>

      {/* Right Content */}
      <div className="relative w-48 h-48 md:w-80 md:h-80 flex-shrink-0">
        <img
          className="w-full h-full object-cover rounded-full border-4 border-[#3b82f6] shadow-xl hover:scale-105 duration-300"
          src={avatarImg}
          alt="Avatar"
        />
        {/* Decoration Circle */}
        <div className="absolute -top-6 -right-6 w-20 h-20 md:w-32 md:h-32 bg-[#3b82f6] opacity-25 rounded-full blur-2xl animate-pulse"></div>
      </div>
    </div>
  );
};

export default Home;
