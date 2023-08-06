import React, { useState } from "react";
import axios from "axios";
import Success from "../Sucess/Success";

const Signup = () => {
  const [message, setMessage] = useState({
    msg: "",
    statuscode: 0,
  });

  const [evdetails, setEvdetails] = useState({
    name: "",
    age: 0,
    gender: "",
    contact: null,
    email_address: "",
  });

  const handleChange = (e) => {
    setEvdetails((prevEvdetails) => ({
      ...prevEvdetails,
      [e.target.name]: e.target.value,
    }));
  };

  const handeSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/postuserdata", {
        name: evdetails.name,
        age: evdetails.age,
        gender: evdetails.gender,
        contact: evdetails.contact,
        email_address: evdetails.email_address,
      });
      if (response.status == 200) {
        setMessage({ msg: "Everything is successfully sent", statuscode: 200 });
      } else {
        setMessage({ msg: "There was a problem asociated.", statuscode: 404 });
      }
    } catch (err) {
      console.log(err);
    }
    handleShowToast();
  };

  const [showToast, setShowToast] = useState(false);

  // Function to show the toast
  const handleShowToast = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000); // Hide the toast after 3 seconds (adjust as needed)
  };

  return (
    <>
      <div className="relative">
        {showToast && <Success message={message} />}
      </div>

      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <img
              alt="content"
              class="object-cover object-center h-full w-full rounded-lg sm:rounded-none md:rounded-md lg:rounded-xl"
              src="https://uploads-ssl.webflow.com/64b66ad2d48ca7a912ddf3eb/64b66ad2d48ca7a912ddf45f_Group%2011383.png"
            />
          </div>
          <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 class="text-gray-900 text-lg font-medium title-font mb-5">
              Sign Up
            </h2>
            <div class="relative mb-4">
              <label for="full-name" class="leading-7 text-sm text-gray-600">
                Choose a username
              </label>
              <input
                type="text"
                id="full-name"
                name="name"
                onChange={(e) => {
                  handleChange(e);
                }}
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">
                Age
              </label>
              <input
                type="email"
                id="email"
                name="age"
                onChange={(e) => {
                  handleChange(e);
                }}
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">
                Gender
              </label>
              <input
                type="email"
                id="email"
                name="gender"
                onChange={(e) => {
                  handleChange(e);
                }}
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">
                Contact Number
              </label>
              <input
                type="email"
                id="email"
                name="contact"
                onChange={(e) => {
                  handleChange(e);
                }}
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email_address"
                onChange={(e) => {
                  handleChange(e);
                }}
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <button
              class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              onClick={(e) => {
                handeSignup(e);
              }}
            >
              Signup
            </button>
            <p class="text-xs text-gray-500 mt-3">
              Literally you probably haven't heard of them jean shorts.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
