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
      <div className="img">
        <div className="d1">
          <div className="d3">
            <img src={HP1} alt="Image 1" className="ig" />
          </div>
          <div className="d4">
            <img src={HP4} alt="Image 3" className="ig" />
          </div>
        </div>
        <div className="d2">
          <center>
            <img src={HP2} alt="Image 2" className="ig1" />
          </center>
        </div>
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
