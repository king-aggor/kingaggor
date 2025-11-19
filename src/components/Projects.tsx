import dipperLab from "../assets/images/dipperlab.png";
import chofiBox from "../assets/images/chofibox.png";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div className="flex flex-col px-5 md:px-35 pt-10 text-gray-700">
      <div className="flex flex-col items-center justify-between">
        <h1 className="text-4xl w-full text-left md:text-center font-bold pb-5 md:font-extrabold md:text-5xl">
          Projects
        </h1>
        <p className="text-1xl font-light text-left w-full md:text-center md:text-[1.2rem] md:w-[70%]">
          Explore my portfolio of recent projects, each reflecting a unique
          blend of challenge and creativity
        </p>
      </div>
      <div className="flex flex-col pt-15 gap-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-2">
          <h2 className="text-[1.4rem] md:text-[1.5rem] font-extrabold">
            <i className="fa-solid fa-clock"></i> Currently Working On
          </h2>
          <div className="flex items-center gap-2">
            <span className="text-[0.8rem] md:text-[1rem] font-medium">
              Progress:
            </span>
            <div className="w-30 h-3 bg-gray-300 rounded-full">
              <div className="w-[90%] h-full bg-gray-500 rounded-full"></div>
            </div>
            <span className="text-[0.8rem] md:text-[1rem] font-medium">
              90%
            </span>
          </div>
        </div>
        <div className="flex flex-col bg-white shadow-md md:items-center md:flex-row gap-4 rounded-md">
          <div className="flex flex-col md:w-1/2 md:h-full">
            <img className="w-full h-full" src={dipperLab} alt="Project 1" />
          </div>
          <div className="flex flex-col gap-3 px-5 text-left">
            <h1 className="text-2xl md:text-3xl font-bold">Project 1</h1>
            <p className="text-sm md:text-base font-medium text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos.
            </p>
            <div className="flex flex-row flex-wrap gap-2">
              <p className="text-sm text-gray-500 bg-gray-200 rounded-md px-2 py-1">
                Next.js
              </p>
              <p className="text-sm text-gray-500 bg-gray-200 rounded-md px-2 py-1">
                Node.js
              </p>
              <p className="text-sm text-gray-500 bg-gray-200 rounded-md px-2 py-1">
                Express.js
              </p>
              <p className="text-sm text-gray-500 bg-gray-200 rounded-md px-2 py-1">
                Docker
              </p>
              <p className="text-sm text-gray-500 bg-gray-200 rounded-md px-2 py-1">
                MySQL
              </p>
              <p className="text-sm text-gray-500 bg-gray-200 rounded-md px-2 py-1">
                Git Actions
              </p>
            </div>
            <div className="flex flex-col  gap-2">
              <h1 className="text-[0.8rem] md:text-xl font-medium">
                <i className="fa-solid fa-clock"></i> Estimated Completion:
                March, 2025
              </h1>
            </div>
            <div className="flex flex-row justify-end">
              <a href="http://" target="_blank" className="text-blue-500">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col py-15 md:pt-35 gap-4 md:gap-10">
        <h2 className="text-[1.4rem] md:text-4xl md:text-center font-extrabold">
          <i className="fa-solid fa-code"></i> All Projects
        </h2>
        <div className="flex flex-col gap-10 md:gap-10 md:flex-row md:flex-wrap justify-center items-center">
          <ProjectCard
            image={dipperLab}
            title="Project 1"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
            link="http://dipperlab.knust.edu.gh"
            technologies={[
              "Next.js",
              "Node.js",
              "Express.js",
              "Docker",
              "MySQL",
              "Git Actions",
            ]}
          />
          <ProjectCard
            image={chofiBox}
            title="Project 1"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
            link="http://thechofibox.com"
            technologies={[
              "React",
              "ExpressJS",
              "PostgreSQL",
              "NodeMailer",
              "Stripe",
              "Royal Mail",
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
