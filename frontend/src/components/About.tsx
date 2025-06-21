import React from 'react';
import {
  Code2Icon,
  DatabaseIcon,
  ServerIcon,
  LayoutIcon,
  GitBranchIcon,
  TerminalIcon,
} from 'lucide-react';

const skills = [
  { name: 'Frontend Development', icon: LayoutIcon, proficiency: 90 },
  { name: 'Backend Development', icon: ServerIcon, proficiency: 85 },
  { name: 'Database Management', icon: DatabaseIcon, proficiency: 80 },
  { name: 'API Development', icon: Code2Icon, proficiency: 85 },
  { name: 'Version Control', icon: GitBranchIcon, proficiency: 90 },
  { name: 'Command Line', icon: TerminalIcon, proficiency: 85 },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className=" mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a passionate MERN Stack Developer with 1+ years of experience in building
              scalable web applications. My journey in web development started with a
              curiosity about how things work on the internet, which led me to dive deep
              into modern web technologies.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I specialize in building full-stack applications using MongoDB, Express.js,
              React.js, and Node.js. My approach to development focuses on writing clean,
              maintainable code while ensuring optimal performance and user experience.
            </p>
          </div>

          <div className="space-y-6">
            {skills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <skill.icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                    <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                  </div>
                  <span className="text-gray-500 dark:text-gray-400">{skill.proficiency}%</span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-indigo-600 dark:bg-indigo-400 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.proficiency}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;