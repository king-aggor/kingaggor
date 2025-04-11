import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="min-h-[45vh] bg-gray-100 bg-[radial-gradient(#e5e7eb_2px,transparent_2px)] [background-size:25px_25px] flex flex-col justify-center items-start gap-1 pt-10 text-gray-700 px-5 md:items-center md:px-35 md:gap-3 md:min-h-[85vh]">
      <h1 className="text-4xl font-bold md:font-extrabold md:text-5xl">
        King Aggor
      </h1>
      <h2 className="text-3xl font-medium md:text-5xl">Web Developer</h2>
      <p className="text-1xl font-light text-left w-full md:text-center md:text-[1.2rem] md:w-[70%]">
        👋 Hi there! I'm a web developer passionate about building modern,
        user-friendly websites and applications. I love turning ideas into
        clean, functional, and responsive digital experiences.
      </p>
      <Link
        className="text-[0.6rem] font-medium text-right mt-4 w-full md:text-center md:text-[1.2rem] md:w-[70%]"
        to="/services#why-choose-me"
      >
        <p>
          Why choose me? <i className="fa-solid fa-arrow-right-long"></i>
        </p>
      </Link>
    </div>
  );
}

export default Welcome;
