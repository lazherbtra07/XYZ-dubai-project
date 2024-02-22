import { useState } from "react";
import logo from "../assets/Rectangle 9.png"
import { MdLanguage } from "react-icons/md";
import { FaXmark } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";
import {Link} from "react-scroll"

const Navbar = () => {
const [isMenuOpen, setisMenuOpen] = useState(false);
const toggleMenu = () => {
  setisMenuOpen(!isMenuOpen);
}

const navItem = [
  {link:"Overviw" ,path : "home"},
  {link:"Feature" ,path : "feature"},
  {link:"About" ,path : "about"},
  {link:"Pricing" ,path : "Pricing"},
  {link:"Latter" ,path : "Latter"}
]

  return (
    <>
      <nav className="bg-white md:bx-14 p-4 border-b max-w-screen-2xl mx-auto text-primary fixed top-0 right-0 left-0  ">
      <div className="text-lg container mx-auto flex justify-between items-center font-medium">
        <div className="flex space-x-14 items-center">
          <a href="" className="text-2xl font-semibold flex items-center span-x-3 text-primary">
            <img src={logo} alt="" className="w-10 inline-block item-center " /><span>XYZ </span></a>
            {/* showing navitem using map   */}
            <ul className="md:flex space-x-12 hidden">
              {navItem.map(({link, path}) => <Link activeClass='active' spy={true} smooth={true} offset={-100 } key={link} to={path} className="block hover:text-gray-300 cursor-pointer">{link}</Link>)}
            </ul>
        </div>
        {/* languge and sing up */}
        <div className="space-x-12 hidden md:flex item-center  ">
          <a href="" className="hidden lg:flex items-center hover:text-sicondary"><MdLanguage/><span>language  </span></a>
          <button className="bg-sicondary py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-indigo-600">Sing Up</button>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className=" text-white focus:outline-none  ">
            {
              isMenuOpen ? (<FaXmark className="w-6 h-6 text-primary"/>) : (<FaBars className="w-6 h-6 text-primary"/>)
            }
          </button>
        </div>
      </div>
      </nav>
      {/* navitem for mobile device */}
      <div className={`space-y-4 px-4 pt-24 text-center pb-5 bg-sicondary text-xl ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
      {navItem.map(({link, path}) => <Link activeClass='active' spy={true} smooth={true} offset={-100 } key={link} to={path} className="block hover:text-gray-300" onClick={toggleMenu}>{link}</Link>)}
      </div>
    </>
  ) 
}

export default Navbar