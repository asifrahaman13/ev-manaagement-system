import React, { useState } from "react";
import axios from "axios";
import Success from "../Sucess/Success";

const Listing = () => {
  const [message, setMessage] = useState({
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
        password: evdetails.password,
      });
      if (response.status == 200) {
        setMessage({ msg: "Everything is successfully sent", statuscode: 200 });
      } else {
        setMessage({ msg: "There was a problem asociated.", statuscode: 404 });
      }
    } catch (err) {
      console.log(err);
      setMessage({ msg: "There was a problem asociated.", statuscode: 404 });
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
        <div class="container px-5 py-24 mx-auto flex flex-col">
          <div class="lg:w-4/6 mx-auto">
            <img
              alt="content"
              class="object-cover object-center h-full w-full border-gray-600"
              src="vehicle.jpg"
            />

            <div class="flex flex-col sm:flex-row mt-10">
              <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-10 h-10"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div class="flex flex-col items-center text-center justify-center">
                  <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">
                    Admin
                  </h2>
                  <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                  <p class="text-base">This section is only for the admins</p>
                </div>
              </div>
              <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p class="leading-relaxed text-lg mb-4">
                  Note that only the admins are allowed to inssrt the
                  information about the EVs. If you are a user please refer to
                  teh signup page to signup to our site. You can find the Evs
                  available in the reserve page.
                </p>
                <a class="text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              List The EV
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              List the EV details here. Add the name, price, address, image URL.
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="ev_name"
                    onChange={handleChange}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="price"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Price
                  </label>
                  <input
                    type="text"
                    id="price"
                    name="ev_price"
                    onChange={handleChange}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="address"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    onChange={handleChange}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="image"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Image
                  </label>
                  <input
                    type="text"
                    id="image"
                    name="image"
                    onChange={handleChange}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="username"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    onChange={handleChange}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="password"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    onChange={handleChange}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  onClick={postevData}
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
