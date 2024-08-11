import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { contactUsSchema } from "../formSchema/ContactUsFormSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export default function Contact() {
  // State to manage form submission status
  const [isSubmitted, setSubmitted] = useState(false);

  // Hook to manage form and validation
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactUsSchema),
    mode: "onChange",
  });

  // Function to handle form submission
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
        alert("Form submitted successfully");
      } else {
        console.log(formSubmitted.message);
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
    setSubmitted(false);
  };

  return (
    <>
      <Navbar />

      <div className="bg-transparent py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
              <form method="POST" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                  <label
                    htmlFor="Name"
                    className="block text-lg font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="Name"
                    id="Name"
                    className="w-full border border-gray-300 rounded-md p-2"
                    {...register("name")}
                  />
                </div>
                {errors?.name?.message && (
                  <p className="text-red-500 mb-2 text-base">
                    {errors?.name?.message}
                  </p>
                )}
                <div className="mb-4">
                  <label
                    htmlFor="Email"
                    className="block text-lg font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="Email"
                    id="Email"
                    className="w-full border border-gray-300 rounded-md p-2"
                    {...register("email")}
                  />
                </div>
                {errors?.email?.message && (
                  <p className="text-red-500 mb-2 text-base">
                    {errors?.email?.message}
                  </p>
                )}
                <div className="mb-4">
                  <label
                    htmlFor="Subject"
                    className="block text-lg font-medium mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    name="Subject"
                    id="Subject"
                    className="w-full border border-gray-300 rounded-md p-2"
                    {...register("subject")}
                  />
                </div>
                {errors?.subject?.message && (
                  <p className="text-red-500 mb-2 text-base">
                    {errors?.subject?.message}
                  </p>
                )}
                <div className="mb-4">
                  <label
                    htmlFor="Message"
                    className="block text-lg font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    name="Message"
                    id="Message"
                    className="w-full border border-gray-300 rounded-md p-2"
                    rows="4"
                    {...register("message")}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-3 px-5 rounded-md hover:bg-blue-600 w-25 text-xl"
                >
                  {isSubmitted ? "Submitting" : "Submit"}
                </button>
              </form>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <img
                src="https://bluerevolution.ifremer.fr/var/storage/images/_aliases/opengraphimage/medias-ifremer/medias-bluerevolution/contact-us/1811720-1-eng-GB/Contact-us.png"
                alt="contact-img"
                style={{ width: "90%", height: "90%" }}
                className="mt-6 rounded-md mx-auto"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
