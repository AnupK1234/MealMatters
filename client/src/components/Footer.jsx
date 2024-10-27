import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8 w-full">
      <div className="container mx-auto px-6">
        <div className="flex justify-around flex-col sm:flex-row">
          {/* Links Section */}
          <div className="mb-6 sm:mb-0">
            <h5 className="text-lg font-extrabold uppercase mb-5">Explore</h5>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="hover:text-yellow-300 font-bold transition duration-300"
                >
                  Mission
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="hover:text-yellow-300 font-bold transition duration-300"
                >
                  Partners
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-yellow-300 font-bold transition duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-yellow-300 font-bold transition duration-300"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col items-center sm:items-start">
            <h5 className="text-lg font-bold uppercase mb-4">Contact Us</h5>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contact@mealmatters.com"
                  className="hover:text-yellow-300 font-bold transition duration-300"
                >
                  contact@mealmatters.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+91123456789"
                  className="hover:text-yellow-300 font-bold transition duration-300"
                >
                  +91 123456789
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 bg-gray-900 py-4 text-center">
        <p className="text-sm">
          © 2024 Copyright:
          <a
            className="text-yellow-300 ml-1 hover:text-yellow-500 transition duration-300"
            href="#"
          >
            MealMatters
          </a>
        </p>
      </div>
    </footer>
  );
}
