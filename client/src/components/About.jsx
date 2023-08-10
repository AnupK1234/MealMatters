import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="bg-transparent py-10 w-full">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-6">About Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg">
              At our student food insecurity project, we are dedicated to addressing the issue of hunger among students. Our mission is to provide a platform that connects students, colleges, and restaurants to ensure that no student goes hungry. We believe that access to nutritious meals is essential for students' well-being and academic success.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">How It Works</h2>
            <p className="text-lg">
              Our platform enables students to easily find nearby restaurants that offer free food. Participating colleges provide students with free coupons that can be redeemed at these restaurants. Students can search for restaurants based on their location, cuisine preferences, and availability. The platform also allows restaurants to register and update their offerings, ensuring accurate and up-to-date information for students.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Join Us</h2>
            <p className="text-lg">
              We are always looking for passionate individuals and organizations to join our cause. Whether you are a student, college representative, or restaurant owner, you can make a difference. Students can reach out to their colleges to participate in the program, while colleges and restaurants can contact us directly to become part of our network. Together, we can create a supportive community that ensures no student goes hungry.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <p className="text-lg">
            Join us in our mission to eliminate student food insecurity and make a positive impact on the lives of students across the country. Together, we can create a future where every student has access to nutritious meals and the opportunity to thrive academically.
          </p>
        </div>
      </div>
    </div>
      <Footer />
    </>
  );
}
