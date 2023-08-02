import React, { useState } from "react";
import axios from "axios";
import Success from "../Sucess/Success";

const Listing = () => {
  const [message,setMessage] = useState({
    msg: "",
    statuscode: 0,
 });
  const [evdetails, setEvdetails] = useState({
    ev_name: "",
    ev_price: 0,
    address: "",
    status: true,
    image: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setEvdetails((prevEvdetails) => ({
      ...prevEvdetails,
      [e.target.name]: e.target.value,
    }));

  };

  const postevData = async (e) => {

    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/postevdata/", {
        ev_name: evdetails.ev_name,
        ev_price: evdetails.ev_price,
        address: evdetails.address,
        status: evdetails.status,
        image: evdetails.image,
        username: evdetails.username,
        password: evdetails.password
      });
      if (response.status == 200) {
      
        setMessage({msg:"Everything is successfully sent", statuscode:200});
      } else {
        setMessage({msg:"There was a problem asociated.", statuscode:404});
      }
 
    } catch (err) {
      console.log(err);
      setMessage({msg:"There was a problem asociated.", statuscode:404});
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

{showToast && <Success message={message}/>
}
</div>
      <section class="text-gray-600 body-font relative">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              List The EV
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              List the EV details here. Add the name, price, address, image URL.
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
                    name="ev_name"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label
                    for="name"
                    class="leading-7 text-sm text-gray-600"
    
                  >
                    Price
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="ev_price"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label
                    for="name"
                    class="leading-7 text-sm text-gray-600"
                    name="address"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="address"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>

              <div class="p-2 w-1/2">
                <div class="relative">
                  <label
                    for="email"
                    class="leading-7 text-sm text-gray-600"
                    name="image"
                  >
                    Image
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="image"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>

              <div class="p-2 w-1/2">
                <div class="relative">
                  <label
                    for="email"
                    class="leading-7 text-sm text-gray-600"
                    name="image"
                  >
                    Username
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="username"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>


              <div class="p-2 w-1/2">
                <div class="relative">
                  <label
                    for="email"
                    class="leading-7 text-sm text-gray-600"
                    name="image"
                  >
                    Password
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="password"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>

              <div class="p-2 w-full">
                <button
                  class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  onClick={(e) => {
                    postevData(e);
                  }}
                >
                  SEND
                </button>
              </div>
       
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Listing;
