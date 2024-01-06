import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="text-center bg-blue-500 lg:text-left mt-10 w-full text-neutral-700 dark:text-neutral-200">
      <div className="container p-6 mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-2">
          <div className="mb-6 justify-self-start">
            <ul className="mb-0 list-none">
              <li>
                <Link to="/" className="mission-link text-lg text-neutral-800 dark:text-neutral-200 relative before:content-[''] before:block before:w-full before:h-1 before:bg-gray-200 before:absolute before:top-full before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full hover:before:w-0 hover:before:h-0 hover:before:transition-all hover:before:duration-300">
                  Mission
                </Link>
              </li>
              <li>
                <Link to="/" className="partners-link text-lg text-neutral-800 dark:text-neutral-200 relative before:content-[''] before:block before:w-full before:h-1 before:bg-gray-200 before:absolute before:top-full before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full hover:before:w-0 hover:before:h-0 hover:before:transition-all hover:before:duration-300">
                  Partners
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="about-link text-lg text-neutral-800 dark:text-neutral-200 relative before:content-[''] before:block before:w-full before:h-1 before:bg-gray-200 before:absolute before:top-full before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full hover:before:w-0 hover:before:h-0 hover:before:transition-all hover:before:duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="contact-link text-lg text-neutral-800 dark:text-neutral-200 relative before:content-[''] before:block before:w-full before:h-1 before:bg-gray-200 before:absolute before:top-full before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full hover:before:w-0 hover:before:h-0 hover:before:transition-all hover:before:duration-300"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="mb-6 justify-self-end">
            <h5 className="mb-2.5 font-bold uppercase text-lg text-neutral-800 dark:text-neutral-200">
              Contact Us
            </h5>

            <ul className="mb-0 list-none">
              <li>
                <FontAwesomeIcon icon={faEnvelope} className="text-lg text-neutral-800 dark:text-neutral-200" />
                <a
                  href="mailto:contact@mealmatters.com"
                  className="ml-2 text-lg text-neutral-800 dark:text-neutral-200 hover:text-blue-600 hover:underline hover:bg-gray-100 transition duration-300 ease-in-out"
                >
                  contact@mealmatters.com
                </a>
              </li>
              <li>
                <FontAwesomeIcon icon={faPhone} className="text-lg text-neutral-800 dark:text-neutral-200" />
                <a href="#!" className="ml-2 text-lg text-neutral-800 dark:text-neutral-200 hover:text-blue-600 hover:underline hover:bg-gray-100 transition duration-300 ease-in-out">
                  +91 123456789
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-neutral-200 p-4 text-center dark:bg-neutral-700" style={{ background: "#4a4a4a", color: "white" }}>
        © 2023 Copyright:
        <a className="text-lg text-neutral-800 dark:text-neutral-400 ml-2 relative" href="#" style={{ color: "grey" }}>
         
          MealMatters
        </a>
      </div>
    </footer>
  );
}
