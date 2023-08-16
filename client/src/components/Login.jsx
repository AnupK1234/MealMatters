import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function Login() {
  return (
    <>
    <Navbar />
      <div className="flex justify-center items-center h-screen bg-gradient-to-r font-sans">
        <div className="relative w-2/5 h-4/5  bg-fuchsia-400 flex items-center justify-center">
          <div className="absolute bg-red-100 inset-1.5 p-10 text-stone-950">
            <h2 className="text-4xl font-semibold text-center mb-10">
              Welcome to MealMatters
            </h2>
            <div className="mb-5">
              <div className="flex items-center">
                <i className="fa fa-user text-lg mr-5"></i>
                <input
                  type="text"
                  placeholder="Username "
                  k
                  className="w-95 h-15 bg-transparent border-none outline-none border-b-2 "
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="mb-10">
              <div className="flex items-center">
                <i className="fa fa-unlock-alt text-lg mr-5"></i>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-95 h-10 bg-transparent border-none outline-none border-b-2 border-purple-600 text-lg"
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="mb-5 flex flex-col items-center">
              <a className="w-300 h-12 cursor-pointer font-semibold text-lg text-center border-2 border-purple-600 rounded-[25px] bg-pink-300 flex items-center justify-center my-2 px-5 hover:text-white hover:bg-purple-600">
                Submit
              </a>
              <h4 className="mt-1 text-base font-bold pb-2">OR</h4>
              <a className="w-300 h-12 cursor-pointer font-semibold text-lg text-center border-2 border-purple-600 rounded-[25px] bg-blue-300 flex items-center justify-center my-2 px-5 hover:text-white hover:bg-blue-600">
                Continue With Google
              </a>
            </div>
            <div className="flex justify-between">
              <a className="text-lg cursor-pointer">Forgot Password ?</a>
              <Link to="/signup" className="text-lg cursor-pointer">
                SignUp
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

