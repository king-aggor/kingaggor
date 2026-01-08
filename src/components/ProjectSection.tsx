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
          image={images.chofibox}
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
  );
}

export default ProjectSection;
