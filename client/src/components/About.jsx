import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import OurMission from "../assets/OurMission.jpg";
import HowItWorks from "../assets/HowItWorks.jpg";
import JoinUs from "../assets/JoinUs.jpg";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b from-blue-50 via-white to-blue-50 py-10 w-full">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              type: "spring",
              stiffness: 80,
              delay: 0,
            }}
            className="text-5xl font-extrabold text-center text-blue-700 mb-8"
          >
            About Us
          </motion.div>
          <div className="flex flex-col gap-10 mt-12">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                type: "spring",
                stiffness: 80,
                delay: 0.5,
              }}
              className="flex flex-col-reverse gap-6 md:flex-row items-center"
            >
              <div className="bg-white border-l-4 border-blue-400 shadow-lg rounded-lg py-6 px-8 md:w-3/4 transform hover:scale-105 transition-transform duration-300">
                <h1 className="text-3xl font-bold mb-4 text-blue-800">
                  Our Mission
                </h1>
                <p className="text-lg text-gray-700 leading-relaxed">
                  At our student food insecurity project, we are dedicated to
                  addressing the issue of hunger among students. Our mission is
                  to provide a platform that connects students, colleges, and
                  restaurants to ensure that no student goes hungry. We believe
                  that access to nutritious meals is essential for students'
                  well-being and academic success.
                </p>
              </div>
              <div className="rounded-lg shadow-xl overflow-hidden md:w-1/4 flex items-start">
                <img
                  className="w-full object-cover transform hover:scale-110 transition-transform duration-300"
                  src={OurMission}
                  alt="Our Mission"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                type: "spring",
                stiffness: 80,
                delay: 1,
              }}
              className="flex flex-col gap-6 md:flex-row items-center"
            >
              <div className="rounded-lg shadow-xl overflow-hidden md:w-1/4 flex items-start">
                <img
                  className="w-full object-cover transform hover:scale-110 transition-transform duration-300"
                  src={HowItWorks}
                  alt="How It Works"
                />
              </div>
              <div className="bg-white border-r-4 border-green-400 shadow-lg rounded-lg py-6 px-8 md:w-3/4 transform hover:scale-105 transition-transform duration-300">
                <h2 className="text-3xl font-bold mb-4 text-green-700">
                  How It Works
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our platform enables students to easily find nearby
                  restaurants that offer free food. Participating colleges
                  provide students with free coupons that can be redeemed at
                  these restaurants. Students can search for restaurants based
                  on their location, cuisine preferences, and availability. The
                  platform also allows restaurants to register and update their
                  offerings, ensuring accurate and up-to-date information for
                  students.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                type: "spring",
                stiffness: 80,
                delay: 1.5,
              }}
              className="flex flex-col-reverse gap-6 md:flex-row items-center"
            >
              <div className="bg-white border-l-4 border-blue-400 shadow-lg rounded-lg py-6 px-8 md:w-3/4 transform hover:scale-105 transition-transform duration-300">
                <h2 className="text-3xl font-bold mb-4 text-blue-800">
                  Join Us
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We are always looking for passionate individuals and
                  organizations to join our cause. Whether you are a student,
                  college representative, or restaurant owner, you can make a
                  difference. Students can reach out to their colleges to
                  participate in the program, while colleges and restaurants can
                  contact us directly to become part of our network. Together,
                  we can create a supportive community that ensures no student
                  goes hungry.
                </p>
              </div>
              <div className="rounded-lg shadow-xl overflow-hidden md:w-1/4 flex items-start">
                <img
                  className="w-full object-cover transform hover:scale-110 transition-transform duration-300"
                  src={JoinUs}
                  alt="Join Us"
                />
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              type: "spring",
              stiffness: 80,
              delay: 2,
            }}
            className="mt-12"
          >
            <p className="text-xl font-semibold bg-white border-b-4 border-blue-400 shadow-lg rounded-lg px-6 py-8 text-center text-gray-800 transform hover:scale-105 transition-transform duration-300">
              Join us in our mission to eliminate student food insecurity and
              make a positive impact on the lives of students across the
              country. Together, we can create a future where every student has
              access to nutritious meals and the opportunity to thrive
              academically.
            </p>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
}
