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
      {/* Including Navbar */}
      <Navbar />

      {/* Main content wrapper with transparent background */}
      <div className="bg-transparent py-10 w-full">
        <div className="container mx-auto px-4">
          {/* Animated title section */}
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 80,
              delay: 0,
            }}
            className="text-5xl font-bold mb-6"
          >
            About Us
          </motion.div>

          {/* Content sections */}
          <div className="flex flex-col gap-6 mt-10">
            {/* Mission Section */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 80,
                delay: 0.5,
              }}
              className="flex flex-col-reverse gap-4 md:flex-row"
            >
              <div className="bg-[#f2f2f2a5] border-s-4 border-[#4cc6ec] shadow-lg rounded-md py-4 px-4 md:w-3/4">
                <h1 className="text-3xl font-bold mb-4 text-[#296b7f]">
                  Our Mission
                </h1>
                <p className="text-2xl">
                  At our student food insecurity project, we are dedicated to
                  addressing the issue of hunger among students. Our mission is
                  to provide a platform that connects students, colleges, and
                  restaurants to ensure that no student goes hungry. We believe
                  that access to nutritious meals is essential for students'
                  well-being and academic success.
                </p>
              </div>
              <div className="rounded-lg shadow-xl overflow-hidden md:w-1/4 flex items-start">
                <img className="w-full" src={OurMission} alt="Our Mission" />
              </div>
            </motion.div>

            {/* How It Works Section */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 80,
                delay: 1,
              }}
              className="flex flex-col gap-4 md:flex-row"
            >
              <div className="rounded-md shadow-lg overflow-hidden md:w-1/4 flex items-start">
                <img className="w-full" src={HowItWorks} alt="How It Works" />
              </div>
              <div className="bg-[#f2f2f2a5] border-e-4 border-[#4bc196] shadow-lg rounded-md py-4 px-4 md:w-3/4">
                <h2 className="text-3xl font-bold mb-4 text-[#358a6b]">
                  How It Works
                </h2>
                <p className="text-2xl">
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

            {/* Join Us Section */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 80,
                delay: 0.2,
              }}
              className="flex flex-col-reverse gap-4 md:flex-row"
            >
              <div className="bg-[#f2f2f2a5] border-s-4 border-[#4cc6ec] shadow-lg rounded-md py-4 px-4 md:w-3/4">
                <h2 className="text-3xl font-bold mb-4 text-[#296b7f]">
                  Join Us
                </h2>
                <p className="text-2xl">
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
              <div className="rounded-md shadow-lg bg-opacity-80 overflow-hidden md:w-1/4 flex items-start">
                <img className="w-full" src={JoinUs} alt="Join Us" />
              </div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 80,
              delay: 0.2,
            }}
            className="mt-8"
          >
            <p className="text-lg font-medium bg-[#f2f2f2a5] border-b-4 border-[#4cc6ec] shadow-lg rounded-md px-4 py-6">
              Join us in our mission to eliminate student food insecurity and
              make a positive impact on the lives of students across the
              country. Together, we can create a future where every student has
              access to nutritious meals and the opportunity to thrive
              academically.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Including Footer */}
      <Footer />
    </>
  );
}
