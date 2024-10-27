import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/Logo-Ic.png";

export default function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    // add more events to when user log out
    localStorage.removeItem("user");
    navigate("/login");
  };

  const handleChange = (e) => {
    const selectedOption = e.target.value;
    window.location.href = selectedOption;
  };
  const auth = localStorage.getItem("user") ? true : false;

  const storedUser = localStorage.getItem("user");

  const username = storedUser ? JSON.parse(storedUser).username : null;

  console.log("Username:", username);

  let [navbar, setNavbar] = useState(true);
  const [show, setShow] = useState(false);

  window.addEventListener("resize", settingNav);
  function settingNav() {
    if (window.innerWidth >= 1024) setNavbar(true);
    else setNavbar(false);
  }
  const handleShow = () => {
    setShow(!show);
  };

  return (
    <>
      <nav className="bg-transparent sticky z-50 lg:relative top-0 mx-auto container w-full flex justify-between items-center">
        <Link to={"/"}>
          <img
            src={Logo}
            alt="My Website Logo"
            className="w-14 h-14 ml-5 border-2 border-sky-500 rounded-full cursor-pointer"
          />
        </Link>
        <div
          className={`${
            navbar ? "border border-md border-black" : ""
          } lg:hidden flex flex-col justify-evenly h-8 px-1 rounded-sm`}
          onClick={() => {
            setNavbar(!navbar);
          }}
        >
          <span className="h-0.5 w-7 bg-black"></span>
          <span className="h-0.5 w-7 bg-black"></span>
          <span className="h-0.5 w-7 bg-black"></span>
        </div>
        {navbar && (
          <ul className="absolute bg-[#000b] z-50 top-full w-full py-5 lg:py-0 lg:relative lg:w-4/5 lg:bg-transparent lg:max-w-4xl lg:pr-4 flex-col lg:flex-row flex items-center  lg:justify-between">
            <li className="my-5 lg:my-0">
              <a
                href="https://rzp.io/l/aK0bXinyA"
                className="text-[#fff] lg:text-[#000000]  block hover:scale-110 transition text-[1.25rem] font-[600]"
              >
                Donate
              </a>
            </li>

            <li className="my-5 lg:my-0">
              <Link
                to="/about"
                className="text-[#fff] lg:text-[#000000] block hover:scale-110 transition text-[1.25rem] font-[600]"
              >
                About Us
              </Link>
            </li>
            <li className="my-5 lg:my-0">
              <Link
                to="/contact"
                className="text-[#fff] lg:text-[#000000] block hover:scale-110 transition text-[1.25rem] font-[600]"
              >
                Contact Us
              </Link>
            </li>
            {!auth ? (
              <li className="my-5 lg:my-0 bg-[#ff914d] text-[#000000] transition border-0 hover:bg-[#fff] rounded-full px-6 py-1 pb-2 flex items-center">
                <Link to="/login" className="text-[1.2rem] font-[600]">
                  {auth ? "Logout" : "Login"}
                </Link>
              </li>
            ) : null}
            {auth && auth ? (
              <div
                onClick={handleShow}
                onMouseEnter={() => setShow(true)}
                onMouseLeave={() => setTimeout(() => setShow(false), 2000)}
                className="bg-white w-10 h-10 flex items-center justify-center mr-10 rounded-full"
              >
                <img
                  src="https://static.everypixel.com/ep-pixabay/0329/8099/0858/84037/3298099085884037069-head.png"
                  className="w-7 h-7 mb-2"
                />
              </div>
            ) : null}
            {show && (
              <div className="absolute top-10 right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl">
                <h1 className="font-sans font-bold">Hi {username}!</h1>
                <Link
                  to="/dashboard"
                  className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
                >
                  Profile
                </Link>
                <Link
                  to="/settings"
                  className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
                >
                  Settings
                </Link>
                <button
                  onClick={() => logout()}
                  className=" w-full px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
                >
                  {auth ? "Logout" : "Login"}
                </button>
              </div>
            )}
          </ul>
        )}
      </nav>
    </>
  );
}
