import bannerImg from "../../assets/photo-C8q0KQHG.webp";

const ProjectCard = ({ title, main }) => {
  return (
    <div className="p-6 flex flex-col w-80 bg-[#1a1d2e] shadow-xl rounded-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      <img className="w-full h-48 object-cover rounded-lg mb-4" src={bannerImg} alt={title} />
      <h3 className="text-2xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-400 mb-4">{main}</p>
      <div className="flex gap-4">
        <button className="w-full py-2 px-4 text-lg font-semibold text-[#ffffff] bg-gradient-to-r from-[#4b6cb7] to-[#182848] hover:bg-gradient-to-l transition-all duration-300 rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#4b6cb7]">
          Demo
        </button>
        <button className="w-full py-2 px-4 text-lg font-semibold text-[#ffffff] bg-gradient-to-r from-[#4b6cb7] to-[#182848] hover:bg-gradient-to-l transition-all duration-300 rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#4b6cb7]">
          Source Code
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
