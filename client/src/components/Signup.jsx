import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../redux/authSlice";
import { useDispatch } from "react-redux";
import classes from "./login.module.css";
import logo from "../assets/Logo-Ic.png";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState(0);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL || `https://mealmatters-backend.onrender.com`}/auth/register`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ username, email, password, phone }),
      });

      const data = await res.json();
      localStorage.setItem('user', JSON.stringify(data));
      console.log(data);
      dispatch(register(data));
      navigate("/");
    } catch (error) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };

  return (
    <>
      <div className="h-screen w-full flex items-center justify-center">
        <div className="h-4/6 w-full max-w-md bg-white rounded-lg flex flex-col justify-between px-8  md:px-16 py-4">
          <div className="self-center flex items-end pt-2 sm:pb-6">
            <img src={logo} alt="logo" className="h-16 w-16" />
            <h3 className="text-2xl font-semibold">Meal Matters</h3>
          </div>
          <form
            onSubmit={handleSignup}
            className="flex flex-col gap-2.5 max-w-md self-center w-full"
          >
            <div className="relative">
              <input
                type="text"
                id="name"
                className="block px-4 p-2 w-full text-sm text-gray-900 bg-transparent rounded-md border-2 appearance-none  focus:outline-none focus:ring-0 peer"
                required
                onChange={(e) => setUsername(e.target.value)}
              />
              <label
                htmlFor="name"
                className="absolute text-md bg-white text-gray-500 dark:text-black duration-300 transform -translate-y-5 scale-75 top-2 z-10 origin-[0]  peer-focus:px-2  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Name
              </label>
            </div>

            <div className="relative">
              <input
                type="number"
                id="phone"
                className="block px-4 p-2 w-full text-sm text-gray-900 bg-transparent rounded-md border-2 appearance-none  focus:outline-none focus:ring-0 peer"
                required
                onChange={(e) => setPhone(e.target.value)}
              />
              <label
                htmlFor="phone"
                className="absolute text-md bg-white text-gray-500 dark:text-black duration-300 transform -translate-y-5 scale-75 top-2 z-10 origin-[0]  peer-focus:px-2  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Phone
              </label>
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                className="block px-4 p-2 w-full text-sm text-gray-900 bg-transparent rounded-md border-2 appearance-none  focus:outline-none focus:ring-0 peer"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <label
                htmlFor="email"
                className="absolute text-md bg-white text-gray-500 dark:text-black duration-300 transform -translate-y-5 scale-75 top-2 z-10 origin-[0]  peer-focus:px-2  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Email
              </label>
            </div>

            <div className="relative">
              <input
                type="password"
                id="password"
                className="block px-4 p-2 w-full text-sm text-gray-900 bg-transparent rounded-md border-2 appearance-none  focus:outline-none focus:ring-0 peer"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <label
                htmlFor="password"
                className="absolute text-md bg-white text-gray-500 dark:text-black duration-300 transform -translate-y-5 scale-75 top-2 z-10 origin-[0]  peer-focus:px-2  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Password
              </label>
            </div>
            <a className="self-start text-xs -mt-1 hover:text-blue-600">
              Forgot Password ?
            </a>

            <div className="flex items-center">
              <div className="flex items-center">
                <input id="remember" type="checkbox" value="" required />
              </div>
              <label
                htmlFor="remember"
                className="ml-3 text-xs font-medium text-black dark:text-black"
              >
                I agree with the{" "}
                <a
                  href="#"
                  className="text-blue-600 hover:underline dark:text-blue-500"
                >
                  {" "}
                  terms and conditions
                </a>
              </label>
            </div>
            <div className="flex flex-col gap-2 py-5">
              <button className="w-full text-xs sm:text-base hover:bg-sky-100 transition duration-300 font-semibold border-2 rounded-md hover:shadow-md p-2 ">
                Sign up
              </button>
              <a className="w-full text-xs sm:text-base hover:bg-black/90 transition duration-300  bg-black text-white font-semibold border-2 rounded-md hover:shadow-md p-2 ">
                Continue With Google
              </a>
              <div className="text-black text-xs self-start">
                Already have an account ?{" "}
                <Link
                  to="/login"
                  className="text-[#000000]  hover:text-blue-700 hover:underline"
                >
                  Login
                </Link>
              </div>
            </div>
          </form>
          {error && (
            <div className={classes.errorMessageCon}>
              <div className={classes.errorMessage}>
                {" "}
                Wrong credentials! Try different ones
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
