import { Link } from "react-router-dom";
import { useState } from "react";

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex justify-between items-center h-25 bg-white text-gray-700 relative shadow-sm w-full px-5 md:px-35">
      <div>
        <h1 className="text-3xl font-bold">
          <Link to="/">KA</Link>
        </h1>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-8">
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

      {/* Mobile Hamburger Menu */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-gray-700 focus:outline-none transition-transform duration-300 hover:scale-110"
        >
          <i
            className={`fa-solid ${
              isMenuOpen ? "fa-xmark" : "fa-bars"
            } text-2xl`}
          ></i>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`fixed top-0 right-0 w-full h-fit bg-white shadow-lg md:hidden transform transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h1 className="text-3xl font-bold">
            <Link
              to="/"
              onClick={toggleMenu}
              className="hover:text-gray-500 transition-colors duration-300"
            >
              KA
            </Link>
          </h1>
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-gray-500 focus:outline-none transition-colors duration-300"
          >
            <i className="fa-solid fa-xmark text-2xl"></i>
          </button>
        </div>
        <div className="flex flex-col p-4 space-y-4">
          <Link
            to="/"
            className="hover:text-gray-500 transition-colors duration-300 transform hover:translate-x-2"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/services"
            className="hover:text-gray-500 transition-colors duration-300 transform hover:translate-x-2"
            onClick={toggleMenu}
          >
            Services
          </Link>
          <Link
            to="/projects"
            className="hover:text-gray-500 transition-colors duration-300 transform hover:translate-x-2"
            onClick={toggleMenu}
          >
            Project
          </Link>
          <Link
            to="/contact"
            className="hover:text-gray-500 transition-colors duration-300 transform hover:translate-x-2"
            onClick={toggleMenu}
          >
            Contact
          </Link>
          <div className="flex gap-4 mt-4">
            <a
              href="https://github.com/king-aggor"
              target="_blank"
              className="hover:text-gray-500 transition-colors duration-300 transform hover:scale-110"
            >
              <i className="fa-brands fa-github text-2xl"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/king-aggor/"
              target="_blank"
              className="hover:text-gray-500 transition-colors duration-300 transform hover:scale-110"
            >
              <i className="fa-brands fa-linkedin text-2xl"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/king-aggor/"
              target="_blank"
              className="hover:text-gray-500 transition-colors duration-300 transform hover:scale-110"
            >
              <i className="fa-brands fa-twitter text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
