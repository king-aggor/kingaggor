import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="flex justify-between items-center h-25 bg-white text-gray-700 relative shadow-sm w-full px-35">
      <div className=" ">
        <h1 className="text-3xl font-bold">
          <Link to="/">KA</Link>
        </h1>
      </div>
      <ul className="flex gap-8">
        <li className="hover:text-gray-500 cursor-pointer">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-gray-500 cursor-pointer">
          <Link to="/services">Services</Link>
        </li>
        <li className="hover:text-gray-500 cursor-pointer">
          <Link to="/projects">Project</Link>
        </li>
        <ul className="flex gap-4">
          <li className="hover:text-gray-500 cursor-pointer">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="ml-10">
            <a href="https://github.com/king-aggor" target="_blank">
              <i className="fa-brands fa-github text-2xl"></i>
            </a>
          </li>
          <li className="cursor-pointer">
            <a href="https://www.linkedin.com/in/king-aggor/" target="_blank">
              <i className="fa-brands fa-linkedin text-2xl"></i>
            </a>
          </li>
          <li className="cursor-pointer">
            <a href="https://www.linkedin.com/in/king-aggor/" target="_blank">
              <i className="fa-brands fa-twitter text-2xl"></i>
            </a>
          </li>
        </ul>
      </ul>
    </div>
  );
}

export default Navigation;
