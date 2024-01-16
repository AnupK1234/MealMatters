import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice';
import { useAuth0 } from "@auth0/auth0-react";
import Navbar from "./Navbar";
import classes from './login.module.css';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:5000/auth/login`, {
        headers: {
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({ email, password })
      });
      const data = await res.json()
      console.log(data)
      dispatch(login(data)) // {userInfo, token}
      if (res.status === 200) {
        localStorage.setItem('user', JSON.stringify(data.others));
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
        setError(false);
      }, 3000);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen bg-gradient-to-r font-sans">
        <div className="relative w-full max-w-md bg-white p-10 rounded-lg border border-black hover:border-2 shadow-lg">
          <h2 className="text-4xl font-semibold text-center mb-8 text-black">
            Welcome to MealMatters
          </h2>
          <form onSubmit={handleLogin}>
            <div className="mb-6">
              <div className="flex items-center border-b border-gray-300">
                <i className="fa fa-user text-lg mr-3 text-gray-500"></i>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full h-12 bg-transparent outline-none text-black placeholder-gray-500"
                  style={{ fontSize: '16px' }}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-6">
              <div className="flex items-center border-b border-gray-300">
                <i className="fa fa-unlock-alt text-lg mr-3 text-gray-500"></i>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full h-12 bg-transparent outline-none text-black placeholder-gray-500"
                  style={{ fontSize: '16px' }}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-6">
              <button
                className="w-full h-12 cursor-pointer font-semibold text-lg text-center border-2 border-purple-600 rounded-[25px] bg-pink-300 hover:text-white hover:bg-purple-600"
              >
                Login
              </button>
            </div>
            <div className="mb-6 flex flex-col items-center">
              <h4 className="text-base font-bold pb-2 text-black">OR</h4>
              <button
                type="button"
                className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                onClick={() => loginWithRedirect()}
              >
                <svg
                  className="w-4 h-4 mr-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 19"
                >
                  {/* ... (Google icon path) */}
                </svg>
                Sign in with Google
              </button>
            </div>
            <div className="flex justify-between">
              <a className="text-sm text-gray-600 cursor-pointer">Forgot Password?</a>
              <Link to="/signup" className="text-sm text-gray-600">
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
      {/* Error if wrong credentials entered */}
      {error && (
        <div className={`${classes.errorMessageCon} absolute top-0 left-0 w-full h-full flex items-center justify-center`}>
          <div className={`${classes.errorMessage} bg-red-500 text-white px-4 py-2 rounded-md`}>
            Wrong credentials! Try different ones
          </div>
        </div>
      )}
    </>
  );
}
