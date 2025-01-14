import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex flex-col md:flex-row justify-between bg-[#2c3e50] text-white p-12 items-center rounded-t-3xl shadow-lg mt-10"
    >
      {/* Contact Section */}
      <div className="text-center md:text-left mb-8 md:mb-0">
        <h1 className="text-3xl md:text-5xl font-bold mb-2">Contact</h1>
        <p className="text-sm md:text-lg font-light opacity-80">Feel free to reach out!</p>
      </div>

      {/* Contact Information List */}
      <ul className="flex flex-col gap-4 text-sm md:text-lg items-center md:items-start">
        <li className="flex gap-2 items-center hover:text-[#3498db] duration-300">
          <MdOutlineEmail size={22} />
          <a href="mailto:arbinniroula21@gmail.com" className="hover:underline">arbinniroula21@gmail.com</a>
        </li>
        <li className="flex gap-2 items-center hover:text-[#3498db] duration-300">
          <CiLinkedin size={22} />
          <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer" className="hover:underline">
            linkedin.com/in/username
          </a>
        </li>
        <li className="flex gap-2 items-center hover:text-[#3498db] duration-300">
          <FaGithub size={22} />
          <a href="https://github.com/Arbinniroul" target="_blank" rel="noopener noreferrer" className="hover:underline">
          https://github.com/Arbinniroul
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
