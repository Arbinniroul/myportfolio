import React, { useState } from 'react';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
import ecommerce from '../assets/Screenshot 2025-01-14 at 23.19.49.png'
import shutterEstate from '../assets/shutterState.png';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform built with MERN stack, featuring real-time inventory management and payment integration.',
    image:ecommerce,
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    category: 'Full Stack',
    github: 'https://github.com/Arbinniroul/eCommerce-website',
    demo: 'https://e-commerce-website-wv1o.vercel.app',
  },
  {
    title: 'Social Media Dashboard',
    description: 'A responsive dashboard for social media analytics with interactive charts and data visualization.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
    tags: ['React', 'vite', 'Tailwind CSS'],
    category: 'Frontend',
    github: 'https://github.com/Arbinniroul/mediaDashboard',
    demo: 'https://media-dashboard-sage.vercel.app',
  },
  {
    title: 'ShutterEstate- A Real Estate application',
    description: 'A Real estate application',
    image: shutterEstate,
    tags: ['Vite + React + TS', 'Tailwind CSS'],
    category: 'Frontend',
    github: 'https://github.com/Arbinniroul/shutterState',
    demo: 'https://shutter-state.vercel.app',
  },
];

const categories = ['All', 'Full Stack', 'Frontend', 'Backend'];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = projects.filter(
    project => activeCategory === 'All' || project.category === activeCategory
  );

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          Featured Projects
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeCategory === category
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-transform hover:-translate-y-2"
            >
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <GithubIcon className="w-5 h-5 text-gray-900" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <ExternalLinkIcon className="w-5 h-5 text-gray-900" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;