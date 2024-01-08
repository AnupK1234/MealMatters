import React from "react";
import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { register } from "../redux/authSlice";
import { useDispatch } from "react-redux";
import classes from './login.module.css'

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
      const res = await fetch(`http://localhost:5000/auth/register`, {
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
      <div className="flex justify-center items-center h-screen bg-gradient-to-r from-yellow-200 to-pink-400 font-sans">
        <div className="relative w-2/5 h-4/5  bg-white-400 flex justify-center border-4 ">
          <div className="absolute bg-red-100 inset-1.5 p-10 ">
            <h2 className="text-4xl font-semibold text-center mb-5">
              Welcome to MealMatters
            </h2>
            <form onSubmit={handleSignup}>
              <div className="flex items-center">
                <div className="mb-6">
                  <div className="static items-center">
                    <input
                      type="text"
                      placeholder=" Name "
                      className="placeholder-black w-99 h-15 color-red bg-red-200 border-b-2 border-pink-500 text-lg outline-none"
                      required
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                </div>

                <div className="mb-5">
                  <div className="inline-block inset-y-20 right-10 w-65 ">
                    <i className="fa fa-user text-lg mr-6"></i>
                    <input
                      type="number"
                      placeholder=" Phone "
                      className="placeholder-black w-95 h-15 color-red bg-red-200 border-b-2 border-pink-500 text-lg  outline-none  "
                      required
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="mb-5">
                <input
                  type="email"
                  id="email"
                  className="   border-b-2 border-pink-500
                text-red-500 block p-1.5  placeholder-black
                dark:text-black dark:focus:border-red-50 w-80 h-15 
                color-red bg-red-200  text-lg  outline-none "
                  placeholder=" Email "
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-5">
                <input
                  type="password"
                  id="password"
                  className="   border-b-2 border-pink-500
                text-red-500 block p-1.5  placeholder-black
                dark:text-black dark:focus:border-red-50 w-80 h-15 
                color-red bg-red-200  text-lg  outline-none "
                  placeholder="Password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="bg-red-20 border border-red-200 text-red-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-red-200 dark:border-red-200 dark:placeholder-red-200 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <label
                  htmlFor="remember"
                  className="ml-3 text-rm font-medium text-black dark:text-black"
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

              <div className="mb-5 flex flex-col items-center">
                <button className="w-400 h-9 cursor-pointer font-semibold text-lg text-center border-2 border-pink-600 rounded-[25px] bg-pink-300 flex items-center justify-center my-2 px-5 hover:text-white hover:bg-blue-600">
                  SignUp
                </button>
                <h4 className="mt-1 text-base font-bold pb-2">OR</h4>
                <a className="w-300 h-12 cursor-pointer font-semibold text-lg text-center border-2 border-red-300 rounded-[25px] bg-blue-300 flex items-center justify-center my-2 px-5 hover:text-white hover:bg-blue-600">
                  Continue With Google
                </a>
              </div>
            </form>
            <div className="flex justify-between">
              <a className="text-lg cursor-pointer">Forgot Password ?</a>
              <Link
                to="/login"
                className="text-[#000000] hover:text-blue-700 hover:underline text-[1.25rem] font-[600]"
              >
                Login
              </Link>
            </div>
            {/* Error if wrong credentials entered */}
            {error && (
              <div className={classes.errorMessageCon}>
                <div className={classes.errorMessage}>
                  Wrong credentials! Try different ones
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
