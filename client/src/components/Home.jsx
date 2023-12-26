import React from "react";
import Navbar from "../components/Navbar.jsx";
import HP1 from "../assets/HomePage1.png";
import HP2 from "../assets/HomePage2.1.png";
import HP3 from "../assets/HomePage3.png";
import HP4 from "../assets/Snap-1.png";
import Footer from "./Footer.jsx";
import "./Home.css";

function Home() {
  return (
    <>
      <Navbar />
      <div style={{ position: "static" }}>
        <img
          src={HP1}
          alt="Image 1"
          width={`${480}rem`}
          height={`${480}rem`}
          className="absolute -left-4 bottom-0"
        />
        <img
          src={HP2}
          alt="Image 2"
          width={`${440}rem`}
          height={`${440}rem`}
          className="absolute left-1/3 mt-80"
        />
        <img
          src={HP4}
          alt="Image 3"
          width={`${600}rem`}
          height={`${600}rem`}
          className="absolute right-24 mt-30"
        />
      </div>

      <div style={{ paddingTop: "700px" }}>
        <h1 className="text-6xl">MealMatters</h1>
      </div>
      {/* <div className="max-h-14">
          <img src={HP4} alt="Image 4" className="max-h-full max-w-full" />
        </div> */}

      <div className="parent">
        <div className="div1 mt-10">
          <h1 className="head">Businesses can donate</h1>
          <p>
            Meal Matters makes it easier for organization to register and track
            food donations.
          </p>
        </div>

        <div className="div2 mt-10">
          <h1 className="head">Students won't go hungry</h1>
          <p>
            We ensure that students who need financial support will never have
            to worry their next meal.
          </p>
        </div>
        <div className="div3">
          <h1 className="head">Schools and Colleges can obtain resources</h1>
          <p>
            Meal Matters aids educational instituties to connect with
            restaurants and delivery partners for food donations.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
