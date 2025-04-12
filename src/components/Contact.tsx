import ContactInfo from "./ContactInfo";
import MessageMe from "./MessageMe";

function Contact() {
  const whatsappNumber = import.meta.env.VITE_WhatsappNumber;
  return (
    <div className="flex flex-col gap-20 md:gap-30 px-5 md:px-35 pt-10 text-gray-700">
      <div className="flex flex-col md:items-center">
        <h1 className="text-4xl w-full text-left md:text-center font-bold pb-5 md:font-extrabold md:text-5xl">
          Contact Me
        </h1>
        <p className="text-1xl pb-5 font-light text-left w-full md:text-center md:text-[1.2rem] md:w-[70%]">
          Have a project in mind or want to discuss a potential collaboration?
          I'd love to hear from you.
        </p>
        <a
          href={`https://wa.me/${whatsappNumber.replace(
            /\s/g,
            ""
          )}/?text=Hello, from your portfolio website. I'm interested in your services.`}
          target="_blank"
          className=" "
        >
          <button className="bg-gray-700 w-full cursor-pointer md:w-[300px] text-center px-4 py-2 rounded-md">
            <i className="fa-brands fa-whatsapp text-green-500"></i>{" "}
            <span className="text-[#f0f0f0]">Let's Talk</span>
          </button>
        </a>
      </div>
      <div className="flex flex-col md:flex-row gap-20">
        <ContactInfo />
        <MessageMe />
      </div>
    </div>
  );
}

export default Contact;
