import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Logo from "../assets/Logo-Ic.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css";

export default function Navbar() {
  const { isAuthenticated, logout } = useAuth0();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleChange = (e) => {
    const selectedOption = e.target.value;
    window.location.href = selectedOption;
  };

  const auth = localStorage.getItem("user");
  console.log(auth);

  return (
    <>
      <nav className="bg-transparent">
        <div className="container mx-auto flex justify-between px-4 py-3">
          <img
            src={Logo}
            alt="My Website Logo"
            className="w-14 h-14 ml-5 border-2 border-sky-500 rounded-full"
          />

          <div className="hidden md:flex custom-flex-container ">
            <ul className="flex space-x-10">
              <li>
                <select
                  className="text-[#000000]  hover:underline text-[1.25rem] font-[600] bg-transparent border-none outline-none"
                  onChange={handleChange}
                >
                  <option value="/">User</option>
                  <option value="/dashboard">Dashboard</option>
                  <option value="/inventory">Inventory</option>
                </select>
              </li>
              <li>
                <a
                  href="https://rzp.io/l/aK0bXinyA"
                  className="text-[#000000]  hover:underline text-[1.25rem] font-[600] round-background"
                >
                  Donate
                </a>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-[#000000]  hover:underline text-[1.25rem] font-[600] round-background"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-[#000000]  hover:underline text-[1.25rem] font-[600] round-background"
                >
                  Contact Us
                </Link>
              </li>
            </ul>

            <ul className="flex">
              {!isAuthenticated ? (
                <li className="bg-[#ff914d] border-2 border-dotted rounded-full  w-35 flex items-center justify-center mb-11 round-background">
                  <Link
                    to="/login"
                    className="text-[#000000]  text-[1.25rem] font-[600] text-center"
                  >
                    Login &gt;
                  </Link>
                </li>
              ) : (
                <li>
                  <button
                    type="button"
                    className="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                    onClick={() =>
                      logout({
                        logoutParams: { returnTo: window.location.origin },
                      })
                    }
                  >
                    Logout
                  </button>
                </li>
              )}
            </ul>
          </div>

          <div className="md:hidden ">
            <button
              className="text-[#000000] hover:text-blue-700 text-[1.25rem] font-[600] z-50 "
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} size="lg" />
            </button>
            {isMenuOpen && (
              <div className="fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-start z-50 mt-20 ">
                <div className="w-full bg-white rounded-md mt-4">
                  <div className="flex flex-col items-center justify-center py-3  ">
                    <select
                      className="block w-full px-4 py-2 mb-2 mx-auto text-center text-[#000000] hover:text-blue-700 hover:underline text-[1.25rem] font-[600]"
                      onChange={handleChange}
                    >
                      <option value="/">User</option>
                      <option value="/dashboard">Dashboard</option>
                      <option value="/inventory">Inventory</option>
                    </select>

                    <a
                      href="https://rzp.io/l/aK0bXinyA"
                      className="block w-full px-4 py-2 mb-2 text-[#000000] hover:text-blue-700 hover:underline text-[1.25rem] font-[600]"
                    >
                      Donate
                    </a>
                    <Link
                      to="/about"
                      className="block w-full px-4 py-2 mb-2 text-[#000000] hover:text-blue-700 hover:underline text-[1.25rem] font-[600]"
                    >
                      About Us
                    </Link>
                    <Link
                      to="/contact"
                      className="block w-full px-4 py-2 mb-2 text-[#000000] hover:text-blue-700 hover:underline text-[1.25rem] font-[600]"
                    >
                      Contact Us
                    </Link>
                    {!isAuthenticated ? (
                      <Link
                        to="/login"
                        className="block w-full px-4 py-2 mb-2 bg-[#ff914d] text-[#000000] hover:text-blue-700 text-[1.25rem] font-[600] rounded-b-md"
                      >
                        Login &gt;
                      </Link>
                    ) : (
                      <button
                        type="button"
                        className="block w-full px-4 py-2 mb-2 text-gray-900 bg-white border-t border-gray-300 hover:bg-gray-100 font-medium rounded-b-md text-sm dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                        onClick={() =>
                          logout({
                            logoutParams: {
                              returnTo: window.location.origin,
                            },
                          })
                        }
                      >
                        Logout
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
