import React, { useState } from "react";
import 'animate.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';


const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("https://portofolio0.herokuapp.com/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <AnimationOnScroll animateIn="animate__slideInUp" animateOut='animate__zoomOut'>
    <section id="four">
      <div class="mt-2 pt-20">
        <h2 class="text-center about  mb-20">
          <span class="number">04. </span>
          Get In Touch{" "}
        </h2>
      </div>
      <div class="max-w-4xl mx-auto px-6 sm:px-6 lg:px-8 ">
        <div class="bg-white w-full shadow rounded p-8 sm:p-12 ">
          <p class="text-3xl font-bold leading-7 text-center text-dark">
            Contact me
          </p>
          <form onSubmit={handleSubmit}>
            <div class="md:flex items-center mt-12">
              <div class="w-full md:w-1/2 flex flex-col">
                <label
                  htmlFor="name"
                  class="font-semibold leading-none" 
                >
                  Name
                </label>
                <input
                  id="name"
                  required
                  type="text"
                  class="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"
                />
              </div>
              <div class="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                <label
                  htmlFor="email"
                  class="font-semibold leading-none"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  class="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"
                />
              </div>
            </div>

            <div>
              <div class="w-full flex flex-col mt-8">
                <label
                  htmlFor="message"
                  class="font-semibold leading-none"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  type="text"
                  class="h-40 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"
                ></textarea>
              </div>
            </div>
            <div class="flex items-center justify-center w-full">
              <button
              id="contact"
                class="mt-9 font-semibold leading-none text-white py-4 px-10 contact mt-5 ml-9 bg-transparent    hover:text-white py-1.5 px-5  rounded rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none"
                type="submit"
              >
                {status}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
    </AnimationOnScroll>
  );
};

export default ContactForm;
