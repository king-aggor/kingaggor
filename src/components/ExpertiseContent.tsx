interface ExpertiseContentProps {
  title: string;
  titleIcon: string;
  content: { name: string; icon: string }[];
}

function ExpectiseContent(props: ExpertiseContentProps) {
  return (
    <div className="flex flex-col items-start justify-center gap-2">
      <div className="flex flex-row gap-4 items-center justify-center">
        <div
          className="text-2xl md:text-3xl"
          dangerouslySetInnerHTML={{ __html: props.titleIcon }}
        />
        <h1 className="text-2xl font-medium">{props.title}</h1>
      </div>
      <div className="flex flex-row flex-wrap gap-2 md:gap-4">
        {props.content.map((item) => (
          <div
            className="flex flex-row items-center justify-center h-7 hover:scale-105 transition-all duration-300 gap-2 bg-white rounded-[5px] p-[0.2rem] shadow-md md:h-8"
            key={item.name}
          >
            <img src={item.icon} alt={item.name} className="w-5 h-5 bg-white" />
            <p className="text-sm md:text-1xl">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExpectiseContent;
