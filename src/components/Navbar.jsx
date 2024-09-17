import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.svg";
import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import NavbarButton from "./NavbarButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="navbar justify-between">
      <Link to={"/"}>
        <img src={Logo} alt="logo" className="w-[190px]" />
      </Link>
      <ul className="menu-horizontal gap-8">
        <li className=" text-gray-dark font-poppins text-sm capitalize hover:text-primary-blue transition-colors duration-200">
          <NavLink>Home</NavLink>
        </li>
        <li className=" text-gray-dark font-poppins text-sm capitalize hover:text-primary-blue transition-colors duration-200">
          <NavLink>Courses</NavLink>
        </li>
        <li className=" text-gray-dark font-poppins text-sm capitalize hover:text-primary-blue transition-colors duration-200">
          <NavLink>study material</NavLink>
        </li>
        <li className=" text-gray-dark font-poppins text-sm capitalize hover:text-primary-blue transition-colors duration-200">
          <NavLink>videos</NavLink>
        </li>
        <li className=" text-gray-dark font-poppins text-sm capitalize hover:text-primary-blue transition-colors duration-200">
          <NavLink>forums</NavLink>
        </li>
        <li className=" text-gray-dark font-poppins text-sm capitalize hover:text-primary-blue transition-colors duration-200">
          <NavLink>blog</NavLink>
        </li>
        <li className=" text-gray-dark font-poppins text-sm capitalize relative hover:text-primary-blue transition-colors duration-200">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-1"
          >
            About Us{" "}
            <span>
              <RiArrowDropDownLine size={20} />
            </span>
          </button>
          {isOpen && (
            <div className="absolute top-8 left-0 w-40 mt-2 origin-top-left rounded-md shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y divide-gray-200">
              <div className="py-1">
                <Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Link 1
                </Link>
              </div>
            </div>
          )}
        </li>
        <li className=" text-gray-dark font-poppins text-sm capitalize hover:text-primary-blue transition-colors duration-200">
          <NavLink>contact us</NavLink>
        </li>
      </ul>
      <Link to={"/signup"}>
        <NavbarButton />
      </Link>
    </nav>
  );
};

export default Navbar;
