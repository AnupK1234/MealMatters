import React,{ useState } from "react";
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

      const data = await res.json();
      console.log(data);
      dispatch(login(data)); // {userInfo, token}
      if (res.status === 200) {
        navigate('/');
      } else {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 3000);
      }

    } catch (error) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen bg-gradient-to-r font-sans">
        <div className="relative w-full max-w-md bg-white p-10 rounded-lg border border-black hover:border-2 ">
          <h2 className="text-4xl font-semibold text-center mb-10 text-black">
            Welcome to MealMatters
          </h2>
          <form onSubmit={handleLogin}>
            <div className="mb-5">
              <div className="flex items-center">
                <i className="fa fa-user text-lg mr-3 text-white"></i>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full h-12 bg-transparent border-none outline-none border-b-2 text-white"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-5">
              <div className="flex items-center">
                <i className="fa fa-unlock-alt text-lg mr-3 text-black"></i>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full h-12 bg-transparent border-none outline-none border-b-2 text-black"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-5">
              <button
                className="w-full h-12 cursor-pointer font-semibold text-lg text-center border-2 border-purple-600 rounded-[25px] bg-pink-300 hover:text-white hover:bg-purple-600"
              >
                Login
              </button>
            </div>
            <div className="mb-5 flex flex-col items-center">
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
              <a className="text-sm text-black cursor-pointer">Forgot Password?</a>
              <Link to="/signup" className="text-sm text-black">
                SignUp
              </Link>
            </div>
          </form>
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
