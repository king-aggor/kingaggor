function ContactInfo() {
  const email = import.meta.env.VITE_Email;
  const whatsappNumber = import.meta.env.VITE_WhatsappNumber;
  const phoneNumber = import.meta.env.VITE_PhoneNumber;
  return (
    <div className="text-grey-700 flex flex-col gap-8 w-full md:w-1/2">
      <div className="flex flex-col gap-4">
        <h1 className="text-lg font-bold text-left">Contact Information</h1>
        <p className="text-md font-light text-left">
          I'm always looking for new opportunities and collaborations. Whether
          you have a project in mind, looking to hire freelance or full-time, or
          just want to say hello. I'd love to hear from you.
        </p>
      </div>
      <div className="flex flex-row items-center gap-4 md:text-xl md:font-medium">
        <i className="fa-solid fa-envelope"></i>
        <p className="text-sm font-medium text-left">{email}</p>
      </div>
      <div className="flex flex-row items-center gap-4 md:text-xl md:font-medium">
        <i className="fa-brands fa-whatsapp"></i>
        <p className="text-sm font-medium text-left">{whatsappNumber}</p>
      </div>
      <div className="flex flex-row items-center gap-4 md:text-xl md:font-medium">
        <i className="fa-solid fa-phone"></i>
        <p className="text-sm font-medium text-left">{phoneNumber}</p>
      </div>
      <div className="flex flex-col items-start gap-4 pt-5">
        <h1 className="text-lg font-medium text-left">Let us connect</h1>
        <div className="flex flex-row items-center gap-10">
          <a href="http://" target="_blank">
            <i className="fa-brands fa-github text-xl"></i>
          </a>
          <a href="http://" target="_blank">
            <i className="fa-brands fa-linkedin text-xl"></i>
          </a>
          <a href="http://" target="_blank">
            <i className="fa-brands fa-twitter text-xl"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
