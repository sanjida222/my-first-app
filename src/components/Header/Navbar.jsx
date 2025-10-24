import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../../public/assets/images/logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Apps", path: "/apps" },
    { name: "Installation", path: "/installation" },
  ];

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3 md:px-8">
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src={logo} alt="Logo" className="w-8 h-8 object-cover" />
          <h1 className="text-lg md:text-2xl text-purple-600 font-bold tracking-wide">
            HERO.IO
          </h1>
        </div>

        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium hover:text-purple-600 transition ${
                  isActive
                    ? "text-purple-600 border-b-2 border-purple-600 pb-1"
                    : "text-gray-700"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <a
          href="https://github.com/sanjida222"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block bg-purple-600 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-full transition"
        >
          <div className="flex items-center space-x-2">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt="GitHub"
              className="h-5 w-5 object-contain filter invert"
            />
            <span>Contribution</span>
          </div>
        </a>

        <button
          className="md:hidden text-gray-800 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white shadow-md border-t border-gray-200 flex flex-col items-center py-4 space-y-3">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `text-sm font-medium hover:text-purple-600 transition ${
                  isActive ? "text-purple-600" : "text-gray-700"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <a
            href="https://github.com/sanjida222"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 bg-purple-600 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-full transition flex items-center gap-2"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt="GitHub"
              className="h-5 w-5 object-contain filter invert"
            />
            <span>Contribution</span>
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
