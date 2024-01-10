import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
  return (
    <footer
      className="text-center lg:text-left mt-10 w-full text-neutral-700 dark:text-neutral-200"
      style={{ color: "black" }}
    >
      <div className="container p-6 mx-auto">
        <div
          className="grid md:grid-cols-5 lg:grid-cols-5"
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <div className="mb-6 justify-self-start">
            <ul className="mb-0 list-none">
              <li>
                <br></br>
              </li>
              <li>
                <Link
                  to="/"
                  className="mission-link text-lg text-neutral-800 dark:text-neutral-200 relative before:content-[''] before:block before:w-full before:h-1 before:bg-gray-200 before:absolute before:top-full before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full hover:before:w-0 hover:before:h-0 hover:before:transition-all hover:before:duration-300"
                  style={{ fontFamily: "cursive", color: "black" }}
                >
                  MealMatters
                </Link>
              </li>
              <li>
                <p>Our social media accounts</p>
              </li>
              <li>
                <ul className="mb-0 list-none flex space-x-4">
                  <li>
                    <a
                      href="https://www.facebook.com/your-facebook-page-url"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg text-neutral-800 dark:text-neutral-200 hover:text-blue-600 hover:underline hover:bg-gray-100 transition duration-300 ease-in-out"
                    >
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://twitter.com/your-twitter-handle"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg text-neutral-800 dark:text-neutral-200 hover:text-blue-600 hover:underline hover:bg-gray-100 transition duration-300 ease-in-out"
                    >
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.instagram.com/your-instagram-handle"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg text-neutral-800 dark:text-neutral-200 hover:text-blue-600 hover:underline hover:bg-gray-100 transition duration-300 ease-in-out"
                    >
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.linkedin.com/in/your-linkedin-profile"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg text-neutral-800 dark:text-neutral-200 hover:text-blue-600 hover:underline hover:bg-gray-100 transition duration-300 ease-in-out"
                    >
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="mb-6 justify-self-start">
            <ul className="mb-0 list-none">
              <li>
                <p style={{ fontSize: "18px" }}>
                  <b>ABOUT</b>
                </p>
              </li>
              <li>
                <Link
                  to="/"
                  className="partners-link text-lg text-neutral-800 dark:text-neutral-200 relative "
                  style={{ fontSize: "16px", color: "rgb(105, 105, 105)" }}
                >
                  Partners
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="about-link text-lg text-neutral-800 dark:text-neutral-200 "
                  style={{ fontSize: "16px", color: "rgb(105, 105, 105)" }}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="contact-link text-lg text-neutral-800 dark:text-neutral-200 "
                  style={{ fontSize: "16px", color: "rgb(105, 105, 105)" }}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="mb-6 justify-self-start">
            <ul className="mb-0 list-none">
              <li>
                <p style={{ fontSize: "18px" }}>
                  <b>SUPPORT</b>
                </p>
              </li>
              <li>
                <Link
                  to="/"
                  className="partners-link text-lg text-neutral-800 dark:text-neutral-200 "
                  style={{ fontSize: "16px", color: "rgb(105, 105, 105)" }}
                >
                  Partners
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="about-link text-lg text-neutral-800 dark:text-neutral-200 "
                  style={{ fontSize: "16px", color: "rgb(105, 105, 105)" }}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="contact-link text-lg text-neutral-800 dark:text-neutral-200 "
                  style={{ fontSize: "16px", color: "rgb(105, 105, 105)" }}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="mb-6 justify-self-start">
            <ul className="mb-0 list-none">
              <li>
                <p style={{ fontSize: "18px" }}>
                  <b>PLATFORM</b>
                </p>
              </li>
              <li>
                <Link
                  to="/"
                  className="partners-link text-lg text-neutral-800 dark:text-neutral-200 "
                  style={{ fontSize: "16px", color: "rgb(105, 105, 105)" }}
                >
                  Partners
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="about-link text-lg text-neutral-800 dark:text-neutral-200 "
                  style={{ fontSize: "16px", color: "rgb(105, 105, 105)" }}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="contact-link text-lg text-neutral-800 dark:text-neutral-200 "
                  style={{ fontSize: "16px", color: "rgb(105, 105, 105)" }}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="mb-6 justify-self-start">
            <p style={{ fontSize: "18px" }}>
              <b>CONTACT</b>
            </p>

            <ul className="mb-0 list-none">
              <li>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-lg text-neutral-800 dark:text-neutral-200"
                />
                <a
                  href="mailto:contact@mealmatters.com"
                  className="ml-2 text-lg text-neutral-800 dark:text-neutral-200 hover:text-blue-600 hover:underline hover:bg-gray-100 transition duration-300 ease-in-out"
                >
                  contact@mealmatters.com
                </a>
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-lg text-neutral-800 dark:text-neutral-200"
                />
                <a
                  href="#!"
                  className="ml-2 text-lg text-neutral-800 dark:text-neutral-200 hover:text-blue-600 hover:underline hover:bg-gray-100 transition duration-300 ease-in-out"
                >
                  +91 123456789
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className="bg-neutral-200 p-4 text-center dark:bg-neutral-700"
        style={{ background: "transparent", color: "white" }}
      >
        © 2023 Copyright:
        <a
          className="text-lg text-neutral-800 dark:text-neutral-400 ml-2 relative"
          href="#"
          style={{ color: "rgb(105, 105, 105)" }}
        >
          MealMatters
        </a>
      </div>
    </footer>
  );
}
