import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const StationDetails = () => {
  const [username, setUsername] = useState("");
  const [payable, setPayable] = useState(0);
  const [evdetails, setEvdetails] = useState({
    id: "",
    ev_name: "",
    ev_price: 0,
    address: "",
    status: "",
    image: "",
  });
  const { slug } = useParams();

  useEffect(() => {
    getEvDetail(slug);
  }, []);

  const getEvDetail = async (slug) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/getevdata/${slug}`
      );
      var data = response.data;
      setEvdetails({
        id: data.id,
        ev_name: data.ev_name,
        ev_price: data.ev_price, // Correct the field name to ev_price
        status: data.status === true ? "available" : "not available", // Check the status and set it accordingly
        address: data.address,
        image: data.image,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleReserve = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:8000/startsession/${evdetails.id}`,
        {
          name: username,
          price: evdetails.price,
        }
      );
      if (response.status == 200) {
      } else {
        console.log("Something went wrong");
      }
    } catch (err) {}
  };

  const handleFinish = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:8000/endsession/${evdetails.id}`,
        {
          name: username,
          price: evdetails.price,
        }
      );
      setPayable(response.data.amount);
      console.log(response.data.amount);
      if (response.status == 200) {
        console.log("Eveetything alright");
      } else {
        console.log("Something went wrong");
      }
    } catch (err) {}
  };

  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img
              alt="feature"
              class="object-cover object-center h-full w-full"
              src={evdetails.image}
            />
          </div>
          <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <div class="flex flex-col mb-10 lg:items-start items-center">
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                  Name
                </h2>
                <p class="leading-relaxed text-base">{evdetails.ev_name}</p>
              </div>
            </div>
            <div class="flex flex-col mb-10 lg:items-start items-center">
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                  Price
                </h2>
                <p class="leading-relaxed text-base">₹ {evdetails.ev_price} /min</p>
              </div>
            </div>
            <div class="flex flex-col mb-10 lg:items-start items-center">
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                  Address
                </h2>
                <p class="leading-relaxed text-base">{evdetails.address}</p>
              </div>
            </div>
            <div class="flex flex-col mb-10 lg:items-start items-center">
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                  Availability
                </h2>
                <p class="leading-relaxed text-base">{evdetails.status}</p>
              </div>
            </div>
          </div>
        </div>
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-12">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Master Cleanse Reliac Heirloom
              </h1>
              <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
                gentrify, subway tile poke farm-to-table. Franzen you probably
                haven't heard of them man bun deep.
              </p>
            </div>
            <div class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
              <div class="relative flex-grow w-full">
                <label for="full-name" class="leading-7 text-sm text-gray-600">
                  username
                </label>
                <input
                  type="text"
                  id="full-name"
                  name="full-name"
                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
              </div>

              <button
                class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                onClick={(e) => {
                  handleReserve(e);
                }}
              >
                Start
              </button>
              <button
                class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                onClick={(e) => {
                  handleFinish(e);
                }}
              >
                End
              </button>
            </div>
          </div>
        </section>
      </section>

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Amount Payable
            </h1>
            <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table.
            </p>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="xl:w-full md:w-1/4 p-4">
              <div class="border border-gray-200 p-6 rounded-lg">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                  Amount in Indian Rs
                </h2>
                <p class="leading-relaxed text-base">{payable}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StationDetails;
