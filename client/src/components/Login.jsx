import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react'
import Navbar from "./Navbar";
import classes from './login.module.css'

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)
  const navigate = useNavigate()

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
      // dispatch(login(data)) // {userInfo, token}
      // navigate("/")
      
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
            <div className="mb-5">
              <div className="flex items-center">
                <i className="fa fa-user text-lg mr-5"></i>
                <input
                  type="email"
                  placeholder="Email"
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
      {/* Error if wrong credentials entered */}
      {
            error && <div className={classes.errorMessageCon}><div className={classes.errorMessage}>
                 Wrong credentials! Try different ones
            </div></div>
      }
    </>
  );
}

