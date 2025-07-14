import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-90 backdrop-filter backdrop-blur-lg shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a
            href="#"
            className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500"
          >
            My Portfolio
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-9">
            <a
              href="#about"
              className="text-white hover:text-purple-400 transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-white hover:text-purple-400 transition-colors duration-300"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-white hover:text-purple-400 transition-colors duration-300"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="text-white hover:text-purple-400 transition-colors duration-300"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white focus:outline-none"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 flex flex-col space-y-4">
            <a
              href="#about"
              onClick={() => setIsMenuOpen(false)}
              className="text-white hover:text-purple-400 transition-colors duration-300 px-2 py-2"
            >
              About
            </a>
            <a
              href="#projects"
              onClick={() => setIsMenuOpen(false)}
              className="text-white hover:text-purple-400 transition-colors duration-300 px-2 py-2"
            >
              Projects
            </a>
            <a
              href="#skills"
              onClick={() => setIsMenuOpen(false)}
              className="text-white hover:text-purple-400 transition-colors duration-300 px-2 py-2"
            >
              Skills
            </a>
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="text-white hover:text-purple-400 transition-colors duration-300 px-2 py-2"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;