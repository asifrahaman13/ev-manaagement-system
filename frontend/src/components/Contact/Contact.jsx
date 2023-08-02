import React, { useState } from "react";
import axios from "axios";
import "./Contact.css";
import Success from "../Sucess/Success";
import { handleShowToast } from "../states/states";

const Contact = () => {
  const [message,setMessage] = useState({
     msg: "",
     statuscode: 0,
  });
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleContact = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post("http://localhost:8000/contactus",
      {
        name: contact.name,
        email: contact.email,
        message: contact.message
      }
      );
      console.log(response);
   
      if (response.status == 200) {
      
        setMessage({msg:"Everything is successfully sent", statuscode:200});
      } else {
        setMessage({msg:"There was a problem asociated.", statuscode:404});
      }
    } catch (err) {
      console.error(err);
      setMessage({msg:"There was a problem asociated.", statuscode:404});
    }
    handleShowToast();
  };

  const handleChange = (e) => {
    setContact((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
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

      {showToast && <Success message={message}/>
      }
    </div>

    <section class="text-gray-900 body-font relative">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-4xl text-3xl font-medium title-font mb-4 text-purple-500">
        Contact Us
      </h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
        Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
        gentrify.
      </p>
    </div>
    <div class="lg:w-1/2 md:w-2/3 mx-auto">
      <div class="flex flex-wrap -m-2">
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="name" class="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={(e) => {
                handleChange(e);
              }}
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-900 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="email" class="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) => {
                handleChange(e);
              }}
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-900 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div class="p-2 w-full">
          <div class="relative">
            <label for="message" class="leading-7 text-sm text-gray-600">
              Message
            </label>
            <textarea
              id="message"
              onChange={(e) => {
                handleChange(e);
              }}
              name="message"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-900 py-2 px-4 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
        </div>
        <div class="p-2 w-full">
          <button
            class="flex mx-auto text-white bg-indigo-500 border-0 py-3 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            onClick={(e) => {
              handleContact(e);
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  );
};

export default Contact;
