import {
    Code2Icon,
    CpuIcon,
    DatabaseIcon,
    GitBranchIcon,
    LayoutIcon,
    ServerIcon,
    ZapIcon,
} from "lucide-react";

const skills = [
    {
        name: "Frontend Development",
        icon: LayoutIcon,
        proficiency: 90,
        color: "from-blue-600 to-blue-700",
    },
    {
        name: "Backend Development",
        icon: ServerIcon,
        proficiency: 85,
        color: "from-gray-700 to-gray-800",
    },
    {
        name: "Database Management",
        icon: DatabaseIcon,
        proficiency: 80,
        color: "from-emerald-600 to-emerald-700",
    },
    {
        name: "API Development",
        icon: Code2Icon,
        proficiency: 85,
        color: "from-indigo-600 to-indigo-700",
    },
    {
        name: "Version Control",
        icon: GitBranchIcon,
        proficiency: 90,
        color: "from-orange-600 to-orange-700",
    },
    {
        name: "System Architecture",
        icon: CpuIcon,
        proficiency: 75,
        color: "from-purple-600 to-purple-700",
    },
];

const About = () => {
    return (
        <section
            id="about"
            className="relative min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
                <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:16px_16px]"></div>
            </div>

            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 dark:bg-blue-900 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-20 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-100 dark:bg-indigo-900 rounded-full translate-x-1/3 translate-y-1/3 opacity-20 blur-3xl"></div>

            <div className="relative w-full max-w-6xl mx-auto px-6 py-12">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        About Me
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                    <p className="text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto text-lg">
                        Passionate full-stack developer crafting digital
                        solutions with modern technologies
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div className="space-y-6">
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-blue-600 rounded-xl">
                                    <ZapIcon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                                    Full Stack Developer
                                </h3>
                            </div>

                            <div className="space-y-4">
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    I'm a passionate{" "}
                                    <span className="font-medium text-blue-600 dark:text-blue-400">
                                        MERN Stack Developer
                                    </span>{" "}
                                    with 1+ years of experience building
                                    scalable web applications. I focus on
                                    creating efficient, maintainable solutions
                                    that provide exceptional user experiences.
                                </p>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    My journey in web development combines
                                    technical expertise with a keen eye for
                                    design, ensuring every project meets both
                                    functional requirements and user
                                    expectations.
                                </p>
                            </div>

                            <div className="grid grid-cols-3 gap-6 mt-8 pt-6 border-t border-gray-200 dark:border-gray-600">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                                        5+
                                    </div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                        Projects
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                                        1+
                                    </div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                        Years
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                                        3+
                                    </div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                        Technologies
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {skills.map((skill) => (
                            <div
                                key={skill.name}
                                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow duration-300"
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center gap-3">
                                        <div
                                            className={`p-2 bg-gradient-to-r ${skill.color} rounded-lg`}
                                        >
                                            <skill.icon className="w-4 h-4 text-white" />
                                        </div>
                                        <span className="font-medium text-gray-900 dark:text-white">
                                            {skill.name}
                                        </span>
                                    </div>
                                    <span className="font-semibold text-gray-700 dark:text-gray-300">
                                        {skill.proficiency}%
                                    </span>
                                </div>
                                <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                                    <div
                                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                                        style={{
                                            width: `${skill.proficiency}%`,
                                        }}
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
