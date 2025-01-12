import React, { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { MdOutlinePhoneInTalk } from 'react-icons/md';
import { Link, NavLink } from "react-router-dom";
const MainLink = () => {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);


  const mobileLinks = [
    { 'name': "Home", "link": "/" },
    { 'name': "Shop", "link": "/shop" },
    { 'name': "Pages", "link": "/stack-overflow" },
    { 'name': "Blogs", "link": "/blogs" },
    { 'name': "About Us", "link": "/about-us" },
    { 'name': "Contact Us", "link": "/contact-us" },

  ]

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawerOnNavigate = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div>
      <nav className="bg-gray-900 text-white p-4 hidden lg:block">
        <div className="container mx-auto flex justify-between items-center">
          <ul className="flex space-x-6">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "font-bold text-white" : "hover:text-gray-400"
                }
              >
                <p className="flex items-center gap-1">Home<FaAngleDown /></p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  isActive ? "font-bold text-white" : "hover:text-gray-400"
                }
              >
                <p className="flex items-center gap-1">Shop<FaAngleDown /></p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/pages"
                className={({ isActive }) =>
                  isActive ? "font-bold text-white" : "hover:text-gray-400"
                }
              >

                <p className="flex items-center gap-1">Pages<FaAngleDown /></p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive ? "font-bold text-white" : "hover:text-gray-400"
                }
              >

                <p className="flex items-center gap-1">Blog<FaAngleDown /></p>

              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about-us"
                className={({ isActive }) =>
                  isActive ? "font-bold text-white" : "hover:text-gray-400"
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact-us"
                className={({ isActive }) =>
                  isActive ? "font-bold text-white" : "hover:text-gray-400"
                }
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="flex items-center gap-2">
            <span className="text-gray-400 text-xl"><MdOutlinePhoneInTalk /></span>
            <span className="ml-2">(+088) 1755-450127</span>
          </div>
        </div>
      </nav>


      <div className="">

        <div className="lg:hidden">
          <div className="dropdown relative">
            <div
              tabIndex={0}
              role="button"
              onClick={handleDrawerToggle}
              className="btn btn-ghost lg:hidden flex gap-16 items-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <div className="flex items-center gap-2">
                <div className="">
                  <img src="https://res.cloudinary.com/deifi77os/image/upload/v1736661929/GreenFrams/Public/ympwetlspx7lk3dkyu5g.png" alt="" />
                </div>
                <p className="text-2xl font-semibold">GreenFarms</p>
              </div>

            </div>

            {/* Drawer Menu */}
            <div
              className={`absolute inset-0 top-[50px] h-screen rounded-r-lg bg-black text-white transform ${isDrawerOpen ? "translate-x-0" : "-translate-x-full"
                } transition-transform duration-500 z-50`}>
              <ul className="flex flex-col justify-center items-center mt-20">
                {mobileLinks.map((link, index) => (
                  <li key={index} className="my-4">
                    <Link
                      to={`${link?.link}`}
                      onClick={closeDrawerOnNavigate}
                      className="text-lg py-3 px-8 rounded-3xl hover:bg-theme_orange duration-300">
                      {link?.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default MainLink;