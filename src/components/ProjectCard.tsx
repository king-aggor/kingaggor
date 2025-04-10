interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
  technologies: string[];
}

function ProjectCard({
  image,
  title,
  description,
  link,
  technologies,
}: ProjectCardProps) {
  return (
    <div className="w-[250px] flex flex-row flex-wrap gap-2 bg-white shadow-md rounded-md md:w-[300px] hover:scale-105 transition-all duration-300">
      <div className="flex justify-center items-center">
        <img src={image} alt={title} />
      </div>
      <div className="flex flex-col gap-2 p-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-sm text-gray-500">{description}</p>
        <div className="flex flex-row flex-wrap gap-2">
          {technologies.map((technology) => (
            <p
              key={technology}
              className="text-sm text-gray-500 bg-gray-200 rounded-md px-2 py-1"
            >
              {technology}
            </p>
          ))}
        </div>
        <div className="flex flex-row justify-end gap-2">
          <a href={link} target="_blank" className="text-blue-500">
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
