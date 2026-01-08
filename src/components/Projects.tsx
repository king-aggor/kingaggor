import { useEffect } from "react";
import dipperLab from "../assets/images/dipperlab.png";
import keylot from "../assets/images/keylot.png";
import chofiBox from "../assets/images/chofibox.png";
import ProjectCard from "./ProjectCard";

function Projects() {
  useEffect(() => {
    document.title = "Projects - King Aggor | Portfolio & Recent Work";

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      "content",
      "Explore my portfolio of recent projects including web applications, e-commerce platforms, and custom software solutions. See my work and technical expertise."
    );
  }, []);

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
          <div className="flex flex-col md:w-1/2 md:h-full px-2">
            <img className="w-full h-full" src={keylot} alt="Project 1" />
          </div>
          <div className="flex flex-col gap-3 px-5 text-left">
            <h1 className="text-2xl md:text-3xl font-bold">Key Lot</h1>
            <p className="text-sm md:text-base font-medium text-gray-500">
              A comprehensive real estate management platform where
              adminstrators list and mange properties, and users can browse,
              book, and review rentals with ease.
            </p>
            <div className="flex flex-row flex-wrap gap-2">
              <p className="text-sm text-gray-500 bg-gray-200 rounded-md px-2 py-1">
                React
              </p>
              <p className="text-sm text-gray-500 bg-gray-200 rounded-md px-2 py-1">
                Node.js
              </p>
              <p className="text-sm text-gray-500 bg-gray-200 rounded-md px-2 py-1">
                Express.js
              </p>
              <p className="text-sm text-gray-500 bg-gray-200 rounded-md px-2 py-1">
                AWS
              </p>
              <p className="text-sm text-gray-500 bg-gray-200 rounded-md px-2 py-1">
                PostgreSQL
              </p>
              <p className="text-sm text-gray-500 bg-gray-200 rounded-md px-2 py-1">
                Github Actions
              </p>
            </div>
            <div className="flex flex-col  gap-2">
              <h1 className="text-[0.8rem] md:text-xl font-medium">
                <i className="fa-solid fa-clock"></i> Estimated Completion:
                January, 2026
              </h1>
            </div>
            <div className="flex flex-row justify-end">
              {/* <a href="http://" target="_blank" className="text-blue-500">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a> */}
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
            title="DIPPER Lab. Website"
            description="A custom website showsacasing DipperLab's research pulications, members, events, projects, news and activities of the lab."
            link="http://dipperlab.knust.edu.gh"
            technologies={[
              "ExpressJS",
              "Node.js",
              "Cloudinary",
              "Typescript",
              "PostgreSQL",
              "React",
              "Docker",
              "JWT",
              "Nginx",
            ]}
          />
          <ProjectCard
            image={chofiBox}
            title="Chofi Box"
            description="An online platform that allows customers to order and pay for meat products online and have them delivered to their doorstep. Also let's administrators manage inventory and orders."
            link="/#"
            technologies={[
              "ExpressJS",
              "PostgreSQL",
              "Royal Mail",
              "NodeMailer",
              "React",
              "Stripe",
              "JWT",
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
