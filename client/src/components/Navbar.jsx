import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/Logo-Ic.png";

export default function Navbar() {

  const navigate  = useNavigate();

  const logout = () => {
    // add more events to when user log out
    localStorage.removeItem('user');
    navigate("/login");
  }

  const handleChange = (e) => {
    const selectedOption = e.target.value;
    window.location.href = selectedOption;
  };
  const auth = localStorage.getItem("user") ? true : false;

  return (
    <>
      <nav className="bg-transparent">
        {" "}
        {/*bg-transparent*/}
        <div className="container mx-auto flex justify-between px-4 py-3">
          <Link to={'/'}>
            <img
              src={Logo}
              alt="My Website Logo"
              className="w-14 h-14 ml-5 border-2 border-sky-500 rounded-full cursor-pointer	"
            />
          </Link>
          <ul className="flex space-x-36 items-center">
            <li>
              <select
                className="text-[#000000] hover:text-blue-700 hover:underline text-[1.25rem] font-[600]"
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
            {!auth ? (
              <li className="bg-[#ff914d] border-2 border-dotted rounded-full px-3 py-1 w-35 flex items-center">
                <Link
                  to="/login"
                  className="text-[#000000] hover:text-blue-700 text-[1.25rem] font-[600]"
                >
                  Login &gt;
                </Link>
              </li>
            ) : (
              <button
                type="button"
                className="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                onClick={() =>
                  logout()
                }
              >
                Logout
              </button>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
}
