import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="text-center bg-gray-100 lg:text-left mt-10 w-full">
      <div className="container p-5 mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-2">
          <div className="mb-6">
            <ul className="mb-0 mt-11 list-none ml-[2rem] justify-evenly flex">
              <li>
                <Link to="/" className="text-gray-800">
                  Mission
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-800">
                  Partners
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-800">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-800">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="mb-6 ml-auto mr-11">
            <h5 className="mb-2.5 font-bold uppercase text-gray-800">
              Contact Us
            </h5>

            <ul className="mb-0 list-none">
              <li>
                <a
                  href="mailto:contact@mealmatters.com"
                  className="text-gray-800"
                >
                  contact@mealmatters.com
                </a>
              </li>
              <li>
                <a href="#!" className="text-gray-800">
                  +91 123456789
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 p-4 text-center text-gray-700">
        © 2023 Copyright:
        <a className="text-gray-800" href="#">
          MealMatters
        </a>
      </div>
    </footer>
  );
}
