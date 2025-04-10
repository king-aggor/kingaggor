interface ServiceCardProps {
  title: string;
  icon: string;
  description: string;
}

function ServiceCard(props: ServiceCardProps) {
  return (
    <div className="w-[250px] flex flex-row flex-wrap gap-2 bg-white shadow-md rounded-md md:w-[300px] hover:scale-105 transition-all duration-300">
      <div className="flex flex-col gap-2 p-2">
        <div className="flex flex-row h-25 items-center gap-4 border-b-2 border-gray-300 pb-2 md:h-20">
          <i className={`${props.icon} text-3xl md:text-4xl`}></i>
          <h1 className=" text-left font-bold text-md md:text-lg">
            {props.title}
          </h1>
        </div>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default ServiceCard;
