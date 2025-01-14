import ProjectCard1 from "../../assets/Screenshot 2025-01-14 at 23.19.49.png";


const ProjectCard = ({ title, main }) => {
  const handleRedirect = () => {
    window.location.href = "https://e-commerce-website-phi-two.vercel.app";
  };

  return (
    <div className="p-6 flex w-[450px] h-[500px] flex-col  bg-[#1a1d2e] shadow-xl rounded-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl" onClick={handleRedirect}>
      <img className="w-full h-48 object-cover rounded-lg mb-4" src={ProjectCard1} alt={title} />
      <h3 className="text-4xl font-semibold text-white  mb-2">{title}</h3>
      <p className="text-sm text-gray-400 mb-20">{main}</p>
      <div className="flex gap-4">
        <button
          onClick={handleRedirect}
          className="w-full py-2 px-4 text-lg font-semibold text-[#ffffff] bg-gradient-to-r from-[#4b6cb7] to-[#182848] hover:bg-gradient-to-l transition-all duration-300 rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#4b6cb7]"
        >
          Demo
        </button>
        <button
          
          className="w-full py-2 px-4 text-lg font-semibold text-[#ffffff] bg-gradient-to-r from-[#4b6cb7] to-[#182848] hover:bg-gradient-to-l transition-all duration-300 rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#4b6cb7]"
        >
          Source Code
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
