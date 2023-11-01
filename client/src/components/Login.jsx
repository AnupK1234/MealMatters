import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import Navbar from "./Navbar";
import classes from './login.module.css'
import { login } from '../redux/authSlice'
import { useAuth0 } from "@auth0/auth0-react";

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { loginWithRedirect } = useAuth0();


  const handleLogin = async(e) => {
      e.preventDefault()

      try {
        const res = await fetch(`http://localhost:5000/auth/login`, {
          headers: {
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify({email, password})
        })

        const data = await res.json()
        console.log(data)
        dispatch(login(data)) // {userInfo, token}
        if (res.status === 200) {
          navigate('/');
        } else {
          setError(true);
          setTimeout(() => {
            setError(false);
          }, 3000);
        }
        
      } catch (error) {
        setError(true)
        setTimeout(() => {
          setError(false)
        }, 3000)
      }
  }

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen bg-gradient-to-r font-sans">
        <div className="relative w-2/5 h-4/5  bg-fuchsia-400 flex items-center justify-center">
          <div className="absolute bg-red-100 inset-1.5 p-10 text-stone-950">
            <h2 className="text-4xl font-semibold text-center mb-10">
              Welcome to MealMatters
            </h2>
            <form onSubmit={handleLogin}>
              <div className="mb-5">
                <div className="flex items-center">
                  <i className="fa fa-user text-lg mr-5"></i>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-95 h-15 bg-transparent border-none outline-none border-b-2"
                    onChange={(e) => setEmail(e.target.value)}
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
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-5 flex flex-col items-center">
                <button className="w-300 h-12 cursor-pointer font-semibold text-lg text-center border-2 border-purple-600 rounded-[25px] bg-pink-300 flex items-center justify-center my-2 px-5 hover:text-white hover:bg-purple-600">
                  Login
                </button>
                <h4 className="mt-1 text-base font-bold pb-2">OR</h4>
                {/* <a className="w-300 h-12 cursor-pointer font-semibold text-lg text-center border-2 border-purple-600 rounded-[25px] bg-blue-300 flex items-center justify-center my-2 px-5 hover:text-white hover:bg-blue-600">
                Continue With Google
              </a> */}
                {/* <button
                  className="w-300 h-12 cursor-pointer font-semibold text-lg text-center border-2 border-purple-600 rounded-[25px] bg-blue-300 flex items-center justify-center my-2 px-5 hover:text-white hover:bg-blue-600"
                  onClick={() => loginWithRedirect()}
                >
                  Continue With Google
                </button> */}
                <button
                  type="button"
                  className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
                  onClick={() => loginWithRedirect()}
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 19"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Sign in with Google
                </button>
              </div>
              <div className="flex justify-between">
                <a className="text-lg cursor-pointer">Forgot Password ?</a>
                <Link to="/signup" className="text-lg cursor-pointer">
                  SignUp
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Error if wrong credentials entered */}
      {error && (
        <div className={classes.errorMessageCon}>
          <div className={classes.errorMessage}>
            Wrong credentials! Try different ones
          </div>
        </div>
      )}
    </>
  );
}

