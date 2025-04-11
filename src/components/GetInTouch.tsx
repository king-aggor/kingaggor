import ContactInfo from "./ContactInfo";
import MessageMe from "./MessageMe";

function GetInTouch() {
  return (
    <div className="flex flex-col text-gray-700 px-5 flex-col gap-10 pt-10 pb-10 md:px-35">
      <div className="flex flex-row items-center justify-center md:justify-start">
        <h1 className="text-2xl font-medium border-b-2 border-gray-700 w-fit text-center md:text-left md:text-3xl">
          Contact Me
        </h1>
      </div>
      <div className="flex flex-col md:flex-row gap-20">
        <ContactInfo />
        <MessageMe />
      </div>
    </div>
  );
}

export default GetInTouch;
