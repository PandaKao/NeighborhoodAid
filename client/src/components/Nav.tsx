import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../public/neighborhood_logo.svg";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-20">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
          <div className="hidden space-x-8 font-bold lg:flex">
            <Link
              to="/features"
              className="text-grayishViolet hover:text-purpleLight"
            >
              Features
            </Link>
            <Link
              to="/pricing"
              className="text-grayishViolet hover:text-purpleLight"
            >
              Pricing
            </Link>
            <Link
              to="/testimonials"
              className="text-grayishViolet hover:text-purpleLight"
            >
              Testimonials
            </Link>
          </div>
        </div>

        <div className="hidden items-center space-x-6 font-bold text-grayishViolet lg:flex">
          <Link to="/login" className="hover:text-purpleLight">
            Login
          </Link>
          <Link
            to="/register"
            className="px-6 py-3 font-bold text-white bg-purpleLight rounded-full hover:bg-darkViolet"
          >
            Sign Up
          </Link>
        </div>

        {/* Hamburger button for mobile */}
        <button
          id="menu-btn"
          className={`hamburger lg:hidden ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          id="menu"
          className="absolute p-6 bg-zinc-800 left-6 right-6 top-20"
        >
          <div className="flex flex-col items-center space-y-6 text-white">
            <Link to="/features" className="hover:text-purpleLight">
              Features
            </Link>
            <Link to="/pricing" className="hover:text-purpleLight">
              Pricing
            </Link>
            <Link to="/testimonials" className="hover:text-purpleLight">
              Testimonials
            </Link>
            <Link
              to="/login"
              className="pt-6 border-t border-gray-400 hover:text-purpleLight"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-6 py-3 bg-purpleLight rounded-full hover:bg-purpleLighter"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
