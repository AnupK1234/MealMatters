import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { contactUsSchema } from "../formSchema/ContactUsFormSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export default function Contact() {
  const [isSubmitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactUsSchema),
    mode: "onChange",
  });

  const onSubmit = async (data, e) => {
    setSubmitted(true);
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:5000/contact-us`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      });
      const formSubmitted = await res.json();
      if (formSubmitted.statusCode === 200) {
        reset();
        alert("Form submitted successfully!");
      } else {
        console.log(formSubmitted.message);
      }
    } catch (error) {
      console.log(error);
    }
    setSubmitted(false);
  };

  return (
    <>
      <Navbar />

      <div className="bg-transparent">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-white text-center mb-12">
            Contact Us
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Form Section */}
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                Get in Touch
              </h2>
              <form method="POST" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-6">
                  <label
                    htmlFor="Name"
                    className="block text-xl font-medium text-gray-700 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="Name"
                    id="Name"
                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    {...register("name")}
                  />
                  {errors?.name?.message && (
                    <p className="text-red-500 mt-2">{errors?.name?.message}</p>
                  )}
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="Email"
                    className="block text-xl font-medium text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="Email"
                    id="Email"
                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    {...register("email")}
                  />
                  {errors?.email?.message && (
                    <p className="text-red-500 mt-2">{errors?.email?.message}</p>
                  )}
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="Subject"
                    className="block text-xl font-medium text-gray-700 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    name="Subject"
                    id="Subject"
                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    {...register("subject")}
                  />
                  {errors?.subject?.message && (
                    <p className="text-red-500 mt-2">{errors?.subject?.message}</p>
                  )}
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="Message"
                    className="block text-xl font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    name="Message"
                    id="Message"
                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    rows="5"
                    {...register("message")}
                  ></textarea>
                  {errors?.message?.message && (
                    <p className="text-red-500 mt-2">{errors?.message?.message}</p>
                  )}
                </div>
                <button
                  type="submit"
                  className={`${
                    isSubmitted
                      ? "bg-gray-500 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700"
                  } text-white py-3 px-6 rounded-lg w-full text-xl font-bold transition duration-300`}
                  disabled={isSubmitted}
                >
                  {isSubmitted ? "Submitting..." : "Submit"}
                </button>
              </form>
            </div>
            {/* Image Section */}
            <div className="flex items-center justify-center">
              <img
                src="https://bluerevolution.ifremer.fr/var/storage/images/_aliases/opengraphimage/medias-ifremer/medias-bluerevolution/contact-us/1811720-1-eng-GB/Contact-us.png"
                alt="contact-img"
                className="rounded-lg shadow-xl transform hover:scale-105 transition duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
