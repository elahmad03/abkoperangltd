import { useState, useEffect, useRef } from "react";
import { FiMenu, FiX, FiSearch, FiMoon, FiSun } from "react-icons/fi";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Logo from "../assets/img/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const searchRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearch(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "team", label: "Our Team" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 py-4 relative">
        {/* Logo */}
        <RouterLink to="/">
          <img src={Logo} alt="Logo" className="w-32 sm:w-40" />
        </RouterLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-4 lg:space-x-6">
          {navItems.map((item) =>
            location.pathname === "/" ? (
              <ScrollLink
                key={item.id}
                to={item.id}
                smooth={true}
                duration={500}
                offset={-80}
                className="text-sm lg:text-base text-gray-700 dark:text-gray-200 hover:text-blue-500 cursor-pointer transition-colors"
              >
                {item.label}
              </ScrollLink>
            ) : (
              <RouterLink
                key={item.id}
                to={`/#${item.id}`}
                className="text-sm lg:text-base text-gray-700 dark:text-gray-200 hover:text-blue-500 transition-colors"
              >
                {item.label}
              </RouterLink>
            )
          )}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* Search */}
          <button
            onClick={() => setShowSearch((prev) => !prev)}
            className="p-2 rounded-md bg-white text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 shadow-sm transition"
          >
            <FiSearch size={18} />
          </button>

          {/* Dark Mode */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-md bg-white text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 shadow-sm transition"
          >
            {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md bg-white text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 shadow-sm transition"
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Search Box */}
        {showSearch && (
          <div
            ref={searchRef}
            className="absolute top-full mt-2 right-4 bg-white dark:bg-gray-800 shadow-lg rounded-md p-2 w-64 sm:w-72 z-50"
          >
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        )}
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 py-4 border-t border-gray-200 dark:border-gray-700 space-y-4 transition-all duration-300 ease-in-out">
          {navItems.map((item) =>
            location.pathname === "/" ? (
              <ScrollLink
                key={item.id}
                to={item.id}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => setIsMenuOpen(false)}
                className="block text-gray-700 dark:text-gray-200 hover:text-blue-500 transition-colors"
              >
                {item.label}
              </ScrollLink>
            ) : (
              <RouterLink
                key={item.id}
                to={`/#${item.id}`}
                onClick={() => setIsMenuOpen(false)}
                className="block text-gray-700 dark:text-gray-200 hover:text-blue-500 transition-colors"
              >
                {item.label}
              </RouterLink>
            )
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
