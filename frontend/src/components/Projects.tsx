import { ArrowDown, ArrowUp, ExternalLinkIcon, GithubIcon } from "lucide-react";
import { useState } from "react";
import blogImg from "../assets/Blog.png";
import climateGrow from "../assets/ClimateGrow.png";
import multitenant from "../assets/mutitenant.png";
import ecommerce from "../assets/Screenshot 2025-01-14 at 23.19.49.png";
import shutterEstate from "../assets/shutterState.png";
import youtube from "../assets/youtubeclone.png";

const projects = [
    {
        title: "Multitenant Ecommerce",
        description:
            "Multi Vendor E Commerce With Nextjs, React & Stripe Connect",
        image: multitenant,
        tags: ["NextJS", "Payload", "React"],
        category: "Full Stack",
        github: "https://github.com/Arbinniroul/multitenant_ecommerce",
        demo: "https://multitenant-ecommerce-git-main-orbnirrs-projects.vercel.app/",
    },
    {
        title: "E-Commerce Platform",
        description:
            "A full-stack e-commerce platform built with MERN stack, featuring real-time inventory management and payment integration.",
        image: ecommerce,
        tags: ["React", "Node.js", "MongoDB", "Express"],
        category: "Full Stack",
        github: "https://github.com/Arbinniroul/eCommerce-website",
        demo: "https://e-commerce-website-wv1o.vercel.app",
    },
    {
        title: "Social Media Dashboard",
        description:
            "A responsive dashboard for social media analytics with interactive charts and data visualization.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
        tags: ["React", "vite", "Tailwind CSS"],
        category: "Frontend",
        github: "https://github.com/Arbinniroul/mediaDashboard",
        demo: "https://media-dashboard-sage.vercel.app",
    },
    {
        title: "ShutterEstate- A Real Estate application",
        description: "A Real estate application",
        image: shutterEstate,
        tags: ["Vite + React + TS", "Tailwind CSS"],
        category: "Frontend",
        github: "https://github.com/Arbinniroul/shutterState",
        demo: "https://shutter-state.vercel.app",
    },
    {
        title: "Blog Application",
        description: "DrizzleORM practice",
        image: blogImg,
        tags: ["NextJS", "DrizzleORM", "Supabase"],
        category: "Backend",
        github: "https://github.com/Arbinniroul/drizzlePractice",
        demo: "https://practice-drizzle-git-main-orbnirrs-projects.vercel.app",
    },
    {
        title: "YoutubeClone",
        description: "Simple Youtube clone with interactive youtube features",
        image: youtube,
        tags: ["NextJS", "Postgresql", "Tailwind CSS"],
        category: "Full Stack",
        github: "https://github.com/Arbinniroul/youtubeclone",
        demo: "https://youtubeclone-git-main-orbnirrs-projects.vercel.app/",
    },
    {
        title: "Climate grow",
        description:
            "Environmental dashboard with real-time visualizations with trained model for farmers. Combines climate data with agricultural insights.",
        image: climateGrow,
        tags: ["Python", "MERN", "leaflet js"],
        category: "Full Stack",
        github: "https://github.com/Arbinniroul/hackathonProject",
        demo: "https://climategrow.vercel.app",
    },
];

const categories = ["All", "Full Stack", "Frontend", "Backend"];

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [visibleProjects, setVisibleProjects] = useState(4);
    const [showAll, setShowAll] = useState(false);

    const filteredProjects = projects.filter(
        (project) =>
            activeCategory === "All" || project.category === activeCategory
    );

    const projectsToShow = showAll
        ? filteredProjects
        : filteredProjects.slice(0, visibleProjects);

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    return (
        <section
            id="projects"
            className="min-h-screen bg-white dark:bg-gray-900 flex items-center"
        >
            <div className="container mx-auto px-6 py-12">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
                    Featured Projects
                </h2>

                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-1/4">
                        <div className="sticky top-24 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                                Categories
                            </h3>
                            <div className="space-y-2">
                                {categories.map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => {
                                            setActiveCategory(category);
                                            setShowAll(false);
                                        }}
                                        className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                                            activeCategory === category
                                                ? "bg-indigo-600 text-white shadow-md"
                                                : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                                        }`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-3/4">
                        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
                            {projectsToShow.map((project, index) => (
                                <div
                                    key={index}
                                    className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                                >
                                    <div className="relative group">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-40 object-cover"
                                        />
                                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors transform hover:scale-110"
                                            >
                                                <GithubIcon className="w-5 h-5 text-gray-900" />
                                            </a>
                                            <a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors transform hover:scale-110"
                                            >
                                                <ExternalLinkIcon className="w-5 h-5 text-gray-900" />
                                            </a>
                                        </div>
                                    </div>

                                    <div className="p-5">
                                        <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white line-clamp-1">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 mb-3 line-clamp-2 text-sm">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-1">
                                            {project.tags.map((tag, i) => (
                                                <span
                                                    key={i}
                                                    className="px-2 py-1 text-xs bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 rounded-full"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {filteredProjects.length > visibleProjects &&
                            !showAll && (
                                <div className="flex justify-center mt-8">
                                    <button
                                        onClick={toggleShowAll}
                                        className="px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors flex items-center gap-2 text-sm"
                                    >
                                        See More Projects
                                        <ArrowDown size={16} />
                                    </button>
                                </div>
                            )}

                        {showAll && (
                            <div className="flex justify-center mt-8">
                                <button
                                    onClick={toggleShowAll}
                                    className="px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors flex items-center gap-2 text-sm"
                                >
                                    Show Less
                                    <ArrowUp size={16} />
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
