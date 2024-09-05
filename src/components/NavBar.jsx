import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // Import NavLink
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false); // Close the menu
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-transparent text-black text-sm py-2 sm:block hidden">
        <div className="max-w-screen-xl mx-auto justify-start items-start px-4">
          <div className="flex items-start flex-row space-x-10 text-left">
            <div className="flex items-center space-x-2">
              <MdOutlineEmail size={20} />
              <span>hopethreadsco@gmail.com</span>
            </div>

            <div className="flex items-center space-x-2">
              <FaPhoneAlt size={15} />
              <span>240-721-0434</span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-black" />

      <nav className="border-gray-200 bg-transparent">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <a href="/">
              <img
                src="https://placehold.co/17x12/png"
                className="h-8"
                alt="Flowbite Logo"
              />
            </a>
            <span className="self-center text-2xl font-extrabold whitespace-nowrap text-black ">
              Hopethreads
            </span>
          </div>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:hover:bg-[#90D5FF] dark:focus:ring-[#7bc3f0]"
            aria-controls="navbar-default"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          {/* Desktop Menu */}
          <div className="hidden md:flex md:ml-auto">
            <ul className="font-medium flex space-x-8 p-4">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => {
                    return `block py-2 px-3 rounded  ${
                      isActive ? "text-black " : "md:bg-transparent text-white"
                    } hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0`;
                  }}
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 px-3 rounded  ${
                      isActive ? "text-black" : "text-white"
                    }   md:hover:bg-transparent md:border-0 md:p-0`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/programs"
                  className={({ isActive }) =>
                    `block py-2 px-3 rounded   ${
                      isActive ? "text-black" : "text-white"
                    }  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0`
                  }
                >
                  Programs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/fundraisers"
                  className={({ isActive }) =>
                    `block py-2 px-3 rounded  ${
                      isActive ? "text-black" : "text-white"
                    }  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0`
                  }
                >
                  Fundraisers
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/donate"
                  className={({ isActive }) =>
                    `block py-2 px-3 rounded  ${
                      isActive ? "text-black" : "text-white"
                    } md:hover:bg-transparent md:border-0 md:p-0`
                  }
                >
                  <span className="bg-green-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-600">
                    Donate
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/get-involved"
                  className={({ isActive }) =>
                    `block py-2 px-3 rounded  ${
                      isActive ? "text-black" : "text-white"
                    } md:hover:bg-transparent md:border-0 md:p-0`
                  }
                >
                  <span className="bg-black text-white font-bold py-2 px-4 rounded-full hover:bg-blue-600">
                    Get Involved
                  </span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        {/* Dropdown Menu for Mobile */}
        <div
          className={`w-full md:hidden bg-[#8cc5e6] overflow-hidden transition-max-height duration-300 ease-in-out ${
            isOpen ? "max-h-screen" : "max-h-0"
          }`} // Smooth transition effect
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 rounded-lg dark:border-gray-700">
            <li>
              <NavLink
                to="/"
                onClick={closeMenu} // Close menu on click
                className={({ isActive }) =>
                  `block py-2 px-3 rounded  ${
                    isActive ? "text-blue-500 bg-blue-400" : "text-blue-700"
                  } hover:bg-blue-400  md:hover:bg-transparent md:border-0 md:p-0`
                }
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={closeMenu} // Close menu on click
                className={({ isActive }) =>
                  `block py-2 px-3 rounded  ${
                    isActive ? "text-blue-500 bg-blue-400" : "text-blue-700"
                  } hover:bg-blue-400 md:hover:bg-transparent md:border-0 md:p-0`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/programs"
                onClick={closeMenu} // Close menu on click
                className={({ isActive }) =>
                  `block py-2 px-3 rounded  ${
                    isActive ? "text-blue-500 bg-blue-400" : "text-blue-700"
                  }  hover:bg-blue-400 md:hover:bg-transparent md:border-0 md:p-0`
                }
              >
                Programs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/fundraisers"
                onClick={closeMenu} // Close menu on click
                className={({ isActive }) =>
                  `block py-2 px-3 rounded  ${
                    isActive ? "text-blue-500 bg-blue-400" : "text-blue-700"
                  } hover:bg-blue-400 md:hover:bg-transparent md:border-0 md:p-0`
                }
              >
                Fundraisers
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/donate"
                onClick={closeMenu} // Close menu on click
                className={({ isActive }) =>
                  `block py-2 px-3 rounded mt-2 ${
                    isActive ? "text-blue-500" : "text-white"
                  } hover:bg-transparent md:border-0 md:p-0`
                }
              >
                <span className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 ">
                  Donate
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/get-involved"
                onClick={closeMenu} // Close menu on click
                className={({ isActive }) =>
                  `block py-2 px-3 rounded mt-2 ${
                    isActive ? "text-blue-500" : "text-white"
                  } hover:bg-transparent md:border-0 md:p-0`
                }
              >
                <span className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 ">
                  Get Involved
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
