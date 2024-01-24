import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/Logo-Ic.png";
import { set } from "react-hook-form";

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

  let [navbar,setNavbar] = useState(true);

  window.addEventListener('resize', settingNav);
  function settingNav(){
    if(window.innerWidth >= 1024) setNavbar(true);
    else setNavbar(false);
  }



  return (
    <>
      <nav className="bg-transparent sticky z-50 lg:relative top-0 mx-auto container w-full flex justify-between items-center">
          <Link to={'/'}>
            <img
              src={Logo}
              alt="My Website Logo"
              className="w-14 h-14 ml-5 border-2 border-sky-500 rounded-full cursor-pointer"
            />
          </Link>
          <div className={`${navbar ? "border border-md border-black":""} lg:hidden flex flex-col justify-evenly h-8 px-1 rounded-sm`} onClick={()=>{setNavbar(!navbar)}}>
            <span className="h-0.5 w-7 bg-black"></span>
            <span className="h-0.5 w-7 bg-black"></span>
            <span className="h-0.5 w-7 bg-black"></span>
          </div>
          {navbar && (<ul className="absolute bg-[#000b] z-50 top-full w-full py-5 lg:py-0 lg:relative lg:w-4/5 lg:bg-transparent lg:max-w-4xl lg:pr-4 flex-col lg:flex-row flex items-center  lg:justify-between">
            <li className="my-5 lg:my-0">
              <select
                className="text-[#000000] hover:scale-105 hover:text-[#ff914d] transition py-1 px-2 rounded-lg text-[1.25rem] font-[600]"
                onChange={handleChange}
              >
                <option value="/">User</option>
                <option value="/dashboard">Dashboard</option>
                <option value="/inventory">Inventory</option>
              </select>
            </li>
            <li className="my-5 lg:my-0">
              <a
                href="https://rzp.io/l/aK0bXinyA"
                className="text-[#fff] lg:text-[#000000] block hover:text-[#ff914d] hover:scale-110 transition text-[1.25rem] font-[600]"
              >
                Donate
              </a>
            </li>

            <li className="my-5 lg:my-0">
              <Link
                to="/about"
                className="text-[#fff] lg:text-[#000000] block hover:text-[#ff914d] hover:scale-110 transition text-[1.25rem] font-[600]"
              >
                About Us
              </Link>
            </li>
            <li className="my-5 lg:my-0">
              <Link
                to="/contact"
                className="text-[#fff] lg:text-[#000000] block hover:text-[#ff914d] hover:scale-110 transition text-[1.25rem] font-[600]"
              >
                Contact Us
              </Link>
            </li>
            {!auth ? (
              <li className="my-5 lg:my-0 bg-[#ff914d] text-[#000000] hover:text-[#ff914d] transition border-0 hover:bg-[#fff] rounded-full px-6 py-1 pb-2 flex items-center">
                <Link
                  to="/login"
                  className="text-[1.2rem] font-[600]"
                >
                  Login 
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
          )}
      </nav>
    </>
  );
}
