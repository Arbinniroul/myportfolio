import React from 'react';
import { BriefcaseIcon, CalendarIcon } from 'lucide-react';

const experiences = [

  {
    title: 'Full Stack Developer',

    period: '2023 - 2024',
    description: [
      'Developed and maintained multiple MERN stack applications',
      'Implemented real-time features using Socket.io',
      'Created RESTful APIs and integrated third-party services',
    ],
  },
  {
    
    title:'Participated In several hackathons',
    period:'2024-2025',
    description: [
      'Built responsive web applications using React.js',
      'Collaborated with UI/UX designers to implement pixel-perfect designs',
      'Participated in code reviews and team meetings',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800 ">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          Work Experience
        </h2>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {index !== experiences.length - 1 && (
                <div className="absolute left-[11px] top-0 h-full w-px bg-gray-300 dark:bg-gray-700" />
              )}
              <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-indigo-600 dark:bg-indigo-400 flex items-center justify-center">
                <BriefcaseIcon size={14} className="text-white" />
              </div>
              
              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg ml-6">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                    <CalendarIcon size={16} />
                    <span>{exp.period}</span>
                  </div>
                </div>
                

                
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-gray-600 dark:text-gray-300 flex items-start">
                      <span className="mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;