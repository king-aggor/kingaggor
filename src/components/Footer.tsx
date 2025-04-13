function Footer() {
  return (
    <div className="flex items-center px-5 flex-col py-20 text-gray-500 gap-10 md:flex-row md:justify-between md:px-35">
      <div className="flex flex-col">
        <h1 className="text-md font-bold">King Aggor</h1>
        <p className="text-sm">Web Developer</p>
      </div>
      <div className="flex flex-col gap-3 items-center">
        <div className="flex flex-row gap-5 text-xl">
          <i className="fa-brands fa-github "></i>
          <i className="fa-brands fa-linkedin "></i>
          <i className="fa-brands fa-twitter "></i>
        </div>
        <p className="text-sm">&copy; 2025 King Aggor. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
