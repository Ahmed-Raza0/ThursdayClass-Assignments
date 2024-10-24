"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MdOutlineCancel } from "react-icons/md";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", menuOpen);
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const toggleSubMenu = () => setIsOpen(prev => !prev);

  return (
    <div className="bg-white p-5 shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center justify-between">
        <h1 className="text-black text-3xl font-bold font-['Geist_Sans']">Portfolio</h1>

        <div className="relative flex lg:space-x-4 space-x-2">
          <div
            onClick={toggleMenu}
            className="text-red-500 text-3xl cursor-pointer absolute right-6 -top-8 lg:hidden"
            aria-label="Open menu"
          >
            &#9776;
          </div>

          <ul
            className={`flex-col list-none bg-white text-black fixed right-0 top-0 left-[80%] mx-auto p-2 rounded-md transition-transform z-50 duration-300 ease-in-out lg:flex lg:static lg:flex-row lg:bg-transparent lg:p-0 ${menuOpen ? "flex" : "hidden lg:flex"}`}
          >
            <li className="w-full text-right pr-10 mt-4 lg:hidden">
              <MdOutlineCancel
                className="text-3xl cursor-pointer float-right"
                onClick={toggleMenu}
                aria-label="Close menu"
              />
            </li>

            <li className="pl-2 lg:pl-0">
              <Link
                href="/"
                className="block text-black px-2 lg:px-4 py-2 hover:bg-primary rounded-lg"
              >
                Home
              </Link>
            </li>

            <li className="pl-2 lg:pl-0 relative">
              <div
                onClick={toggleSubMenu}
                className="flex justify-between items-center cursor-pointer block text-black px-2 lg:px-4 py-2 hover:bg-primary rounded-lg"
                
              >
                About
                <span className={`ml-2 transition-transform ${isOpen ? "rotate-90" : ""}`}>
                  &#9654; {/* Arrow icon */}
                </span>
              </div>

              {isOpen && (
                <ul className="lg:flex-col lg:list-none lg:text-center lg:bg-white lg:text-black lg:fixed lg:right-0 lg:top-15 lg:left-[80%] lg:mx-auto lg:p-2 lg:rounded-md lg:shadow-lg lg:transition-transform lg:z-50 lg:duration-300 lg:ease-in-out">
                  <li>
                    <Link
                      href="/About/AboutUs"
                      className="block text-black px-4 py-2 hover:bg-primary rounded-lg transition duration-200"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/About/OurTeam"
                      className="block text-black px-4 py-2 hover:bg-primary rounded-lg transition duration-200"
                    >
                      Our Team
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li className="pl-2 lg:pl-0">
              <Link
                href="/Contact"
                className="block text-black px-2 lg:px-4 py-2 hover:bg-primary rounded-lg"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
