import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Logo from "../assets/Logo-Ic.png";

export default function Navbar() {
  const { isAuthenticated, logout } = useAuth0();
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e) => {
    const selectedOption = e.target.value;
    window.location.href = selectedOption;
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-transparent">
        <div className="container mx-auto flex justify-between px-4 py-3 items-center">
          <img
            src={Logo}
            alt="My Website Logo"
            className="w-14 h-14 ml-5 border-2 border-sky-500 rounded-full"
          />

          <ul className="flex space-x-36">
            <li>
              <div
                className="relative inline-block"
                onMouseEnter={toggleDropdown}
                onMouseLeave={toggleDropdown}
              >
                <select
                  className="text-[#000000] rounded-md py-1 px-2 hover:text-blue-700 hover:underline text-[1.25rem] font-[600]"
                  onChange={handleChange}
                  onFocus={toggleDropdown}
                  onBlur={toggleDropdown}
                >
                  <option value="/">User</option>
                  <option value="/dashboard">Dashboard</option>
                  <option value="/inventory">Inventory</option>
                </select>
                {isOpen && (
                  <div className="absolute mt-1 w-32 bg-white shadow-lg rounded-md">
                    <Link to="/" className="block px-4 py-2 text-sm text-gray-700">
                      User
                    </Link>
                    <Link to="/dashboard" className="block px-4 py-2 text-sm text-gray-700">
                      Dashboard
                    </Link>
                    <Link to="/inventory" className="block px-4 py-2 text-sm text-gray-700">
                      Inventory
                    </Link>
                  </div>
                )}
              </div>
            </li>
            <li>
              <a
                href="https://rzp.io/l/aK0bXinyA"
                className="text-[#000000] hover:text-blue-700 hover:underline text-[1.25rem] font-[600]"
              >
                Donate
              </a>
            </li>
            <li>
              <Link
                to="/about"
                className="text-[#000000] hover:text-blue-700 hover:underline text-[1.25rem] font-[600]"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-[#000000] hover:text-blue-700 hover:underline text-[1.25rem] font-[600]"
              >
                Contact Us
              </Link>
            </li>
            {!isAuthenticated ? (
              <li className="bg-[#ff914d] border-2 border-dotted  rounded-full px-3 py-1 w-35">
                <Link
                  to="/login"
                  className="text-[#000000]  hover:text-blue-700 text-[1.25rem] font-[600]"
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
                    logout({ logoutParams: { returnTo: window.location.origin } })
                  }
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
}
