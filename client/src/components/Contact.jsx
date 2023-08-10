import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Contact() {
  return (
    <>
    <Navbar />

    <div className="bg-transparent py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <form action="https://formspree.io/f/xbjvgolr" method="POST">
              <div className="mb-4">
                <label htmlFor="Name" className="block text-lg font-medium mb-2">Name</label>
                <input type="text" name="Name" id="Name" className="w-full border border-gray-300 rounded-md p-2" />
              </div>
              <div className="mb-4">
                <label htmlFor="Email" className="block text-lg font-medium mb-2">Email</label>
                <input type="email" name="Email" id="Email"className="w-full border border-gray-300 rounded-md p-2" />
              </div>
              <div className="mb-4">
                <label htmlFor="Subject" className="block text-lg font-medium mb-2">Subject</label>
                <input type="text" name="Subject" id="Subject" className="w-full border border-gray-300 rounded-md p-2" />
              </div>
              <div className="mb-4">
                <label htmlFor="Message" className="block text-lg font-medium mb-2">Message</label>
                <textarea name="Message" id="Message" className="w-full border border-gray-300 rounded-md p-2" rows="4"></textarea>
              </div>
              <button type="submit" className="bg-blue-500 text-white py-3 px-5 rounded-md hover:bg-blue-600 w-25 text-xl">Submit</button>
            </form>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            
            <img src="https://bluerevolution.ifremer.fr/var/storage/images/_aliases/opengraphimage/medias-ifremer/medias-bluerevolution/contact-us/1811720-1-eng-GB/Contact-us.png" alt="contact-img" style={{ width: '90%', height: '90%'}} className="mt-6 rounded-md mx-auto" />
          </div>
        </div>
      </div>
    </div>

    <Footer />
    </>
  );
}
