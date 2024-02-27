import React from "react";
import Navbar from "../components/Navbar.jsx";
import HP1 from "../assets/HomePage1.png";
import HP2 from "../assets/HomePage2.1.png";
import HP3 from "../assets/HomePage3.png";
import HP4 from "../assets/Snap-1.png";
import Footer from "./Footer.jsx";
import "./Home.css";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="w-full">
      <Navbar />
      <div className="relative -top-5 lg:absolute lg:top-52 lg:left-1/2 lg:-translate-x-2/4">
        <motion.h1
          initial={{ opacity: 0, y: -200 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 80,
          }}
          className="text-[8vmin]"
        >
          MealMatters
        </motion.h1>
      </div>
      {/* <div className="max-h-14">
          <img src={HP4} alt="Image 4" className="max-h-full max-w-full" />
        </div> */}

      <div className="parent flex justify-between flex-col lg:flex-row lg:py-10">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 80,
            delay: 0,
          }}
          className="div1 mt-5 mb-20 lg:mb-0 flex items-center flex-1 flex-col sm:flex-row lg:flex-col"
        >
          <img src={HP1} alt="Image 1" width={`${400}rem`} className="mt-5" />
          <div className="relative sm:-left-10 lg:left-0 lg:mt-20">
            <h1 className="head pt-10 pb-5">Businesses can donate</h1>
            <p className="max-w-sm mx-auto">
              Meal Matters makes it easier for organization to register and
              track food donations.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 80,
          }}
          className="div2 mb-20 lg:mb-0 flex flex-col items-center flex-1"
        >
          <img
            src={HP2}
            alt="Image 2"
            width={`${380}rem`}
            className="lg:mt-80 lg:mb-40"
          />
          <div>
            <h1 className="head pt-10 pb-5">Students won't go hungry</h1>
            <p className="max-w-sm mx-auto">
              We ensure that students who need financial support will never have
              to worry their next meal.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            type: "sring",
            stiffness: 80,
            delay: 0,
          }}
          className="div3 mb-20 lg:mb-0 lg:mr-5 flex flex-col items-center flex-1"
        >
          <img
            src={HP4}
            alt="Image 3"
            width={`${500}rem`}
            className="lg:mt-20 lg:mb-64"
          />
          <div>
            <h1 className="head px-5 pt-5">
              Schools and Colleges can obtain resources
            </h1>
            <p className="max-w-sm py-5 mx-auto">
              Meal Matters aids educational instituties to connect with
              restaurants and delivery partners for food donations.
            </p>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
