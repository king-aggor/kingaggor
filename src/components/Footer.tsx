function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="flex items-center px-5 flex-col py-20 text-gray-500 gap-10 md:flex-row md:justify-between md:px-35">
      <div className="flex flex-col">
        <h1 className="text-md font-bold">King Aggor</h1>
        <p className="text-sm">Web Developer</p>
      </div>
      <div className="flex flex-col gap-3 items-center">
        <div className="flex flex-row gap-5 text-xl">
          <a href="https://github.com/king-aggor" target="_blank">
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/emmanuel-aggor-a4637a232/"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin "></i>
          </a>
          <a href="https://x.com/king_aggor" target="_blank">
            <i className="fa-brands fa-twitter "></i>
          </a>
        </div>
        <p className="text-sm">
          &copy; {currentYear} King Aggor. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
