import images from "../assets/images";
import ProjectCard from "./ProjectCard";

function ProjectSection() {
  return (
    <div className="flex flex-col text-gray-700 px-5 flex-col gap-10 pt-10 pb-10 md:px-35">
      <div className="flex flex-row items-center justify-center">
        <h1 className="text-2xl font-medium border-b-2 border-gray-700 w-fit text-center md:text-left md:text-3xl">
          Featured Projects
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center flex-wrap gap-5">
        <ProjectCard
          image={images.dipperlab}
          title="DIPPER Lab Website"
          description="A custom website showsacasing DipperLab's research pulications, members, events, projects, news and activities of the lab."
          link="https://dipperlab.knust.edu.gh/"
          technologies={[
            "React",
            "Node.js",
            "ExpressJS",
            "JWT",
            "Typescript",
            "PostgreSQL",
            "Cloudinary",
            "NodeMailer",
            "Docker",
            "Git",
          ]}
        />
        <ProjectCard
          image={images.dipperlab}
          title="DIPPER Lab Website"
          description="A custom website showsacasing DipperLab's research pulications, members, events, projects, news and activities of the lab."
          link="https://dipperlab.knust.edu.gh/"
          technologies={[
            "React",
            "Node.js",
            "ExpressJS",
            "JWT",
            "Typescript",
            "Docker",
            "Git",
            "PostgreSQL",
            "Cloudinary",
          ]}
        />
      </div>
    </div>
  );
}

export default ProjectSection;
