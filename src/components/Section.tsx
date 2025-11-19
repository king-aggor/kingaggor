import images from "../assets/images";
import ExpertiseContent from "./ExpertiseContent";
interface SectionProps {
  title: string;
}

function Section(props: SectionProps) {
  return (
    <div className="flex flex-col text-gray-700 px-5 flex-col gap-10 pt-10 pb-10 md:px-35">
      <div className="flex flex-row items-center justify-center md:justify-start">
        <h1 className="text-2xl font-medium border-b-2 border-gray-700 w-fit text-center md:text-left md:text-3xl">
          {props.title}
        </h1>
      </div>
      <ExpertiseContent
        title="Frontend Development"
        titleIcon={`<i class="fa-solid fa-code"></i>`}
        content={[
          { name: "React", icon: images.react },
          { name: "HTML/CSS", icon: images.html },
          { name: "Javascript", icon: images.javascript },
          { name: "Typescript", icon: images.typescript },
          { name: "Tailwind", icon: images.tailwind },
        ]}
      />
      <ExpertiseContent
        title="Backend Development"
        titleIcon={`<i class="fa-solid fa-server"></i>`}
        content={[
          { name: "Node.js", icon: images.node },
          { name: "Expresss", icon: images.expressJS },
          { name: "Javascript", icon: images.javascript },
        ]}
      />
      <ExpertiseContent
        title="Database Technologies"
        titleIcon={`<i class="fa-solid fa-database"></i>`}
        content={[
          { name: "MongoDB", icon: images.mongodb },
          { name: "MySQL", icon: images.mysql },
          { name: "PostgreSQL", icon: images.postgresql },
        ]}
      />
      <ExpertiseContent
        title="DevOps"
        // titleIcon={`<i class="fa-solid fa-gear"></i>`}
        titleIcon={`<i class="fa-solid fa-screwdriver-wrench"></i>`}
        content={[
          { name: "Git", icon: images.git },
          { name: "Docker", icon: images.docker },
          { name: "Bash", icon: images.bash },
          { name: "Linux", icon: images.linux },
          { name: "Nginx", icon: images.nginx },
          { name: "Apache", icon: images.apache },
          { name: "Promethus", icon: images.promethus },
        ]}
      />
    </div>
  );
}

export default Section;
