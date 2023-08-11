import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Reserve = () => {
  const [evdetails, setEvdetails] = useState([]); // Change the initial state to an array
  const [searched, setSearched] = useState([]); // Change the initial state

  useEffect(() => {
    getAllEvs();
  }, []);

  const [stationsearch, setStationsearch] = useState("");

  const handleChange = (e) => {
    setStationsearch(e.target.value);
    console.log(stationsearch);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("sdfsdfasdf");
    console.log(stationsearch);
    const filteredStations = evdetails.filter((station) =>
      station.address.toLowerCase().includes(stationsearch.toLowerCase())
    );
    var stations = [];
    for (let i = 0; i < filteredStations.length; i++) {
      stations = [...stations, filteredStations[i].id];
    }
    setSearched(stations);
    console.log("The ids", stations.includes(10));
  };

  const getAllEvs = async () => {
    try {
      const response = await axios("http://localhost:8000/getevdatas");

      var data = response.data;

      const updatedEvs = data.map((item) => ({
        id: item.id,
        ev_name: item.ev_name,
        price: item.ev_price,
        status: item.status == 1 ? "available" : "not available", // Check the status and set it accordingly
        address: item.address,
        image: item.image,
      }));

      setEvdetails(updatedEvs);
      console.log(updatedEvs); // Log the updated array here
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log(evdetails); // This will now log the updated evdetails state whenever it changes
  }, [evdetails]);

  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap w-full mb-20">
            <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Search for your EV here
              </h1>
              <div class="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
          </div>

          <div class="relative mb-4">
            <input
              name="search"
              type="text"
              id="searchInput"
              class="py-2 px-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Search charging station..."
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <button
              class="absolute right-0 top-0 mt-2 mr-3 text-gray-600 hover:text-gray-800 focus:outline-none"
              onClick={(e) => {
                handleSearch(e);
              }}
            >
              Search
            </button>
          </div>

          <div class="flex flex-wrap -m-4" id="chargingStations">
            {evdetails.map((item) =>
              searched.includes(item.id) == 1 ? (
                <NavLink to={`/${item.id}`} className="m-2">
                  {item.status == "available" && (
                    <div class="bg-green-200 p-4 rounded-lg transform transition duration-300 hover:scale-110">
                      <img
                        class="h-40 rounded w-full object-cover object-center mb-6"
                        src={item.image}
                        alt="content"
                      />
                      <div class="bg-green-200 p-4 rounded-lg transform transition duration-300 hover:scale-110">
                        <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
                          ID: {item.id}
                        </h3>
                        <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
                          Status: {item.status}
                        </h3>
                        <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                          ₹ {item.price} / min
                        </h2>
                        <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                          {item.ev_name}
                        </h2>
                        <p class="leading-relaxed text-base">{item.address.substring(0,30)}...</p>
                      </div>
                    </div>
                  )}

                  {item.status != "available" && (
                    <div class="bg-red-200 p-4 rounded-lg transform transition duration-300 hover:scale-110">
                      <img
                        class="h-40 rounded w-full object-cover object-center mb-6"
                        src={item.image}
                        alt="content"
                      />
                      <div class="bg-red-200 p-4 rounded-lg transform transition duration-300 hover:scale-110">
                        <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
                          ID: {item.id}
                        </h3>
                        <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
                          Status: {item.status}
                        </h3>
                        <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                          ₹ {item.price} / min
                        </h2>
                        <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                          {item.ev_name}
                        </h2>
                        <p class="leading-relaxed text-base">{item.address.substring(0,30)}...</p>
                      </div>
                    </div>
                  )}
                </NavLink>
              ) : null
            )}
          </div>
        </div>
      </section>

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap w-full mb-20">
            <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Get all the best EV Charging station here
              </h1>
              <div class="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Here are our EV Charging stations. You can opt for any charging
              station here. Just click on it and you will be directed to the
              single page. From there you will get the further instuction to
              reserve your charging.
            </p>
          </div>

          <div class="flex flex-wrap -m-4">
            {evdetails.map((item) => (
              <NavLink to={`/${item.id}`} className="m-2">
                {item.status == "available" && (
                  <div class="bg-green-200 p-4 rounded-lg transform transition duration-300 hover:scale-110">
                    <img
                      class="h-40 rounded w-full object-cover object-center mb-6"
                      src={item.image}
                      alt="content"
                    />
                    <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
                      {item.id}
                    </h3>
                    <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
                      {item.status}
                    </h3>
                    <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                      ₹ {item.price} / min
                    </h2>
                    <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                      {item.ev_name}
                    </h2>

                    <p class="leading-relaxed text-base">{item.address.substring(0,30)}...</p>
                  </div>
                )}

                {item.status != "available" && (
                  <div class="bg-red-200 p-4 rounded-lg transform transition duration-300 hover:scale-110">
                    <img
                      class="h-40 rounded w-full object-cover object-center mb-6"
                      src={item.image}
                      alt="content"
                    />
                    <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
                      {item.id}
                    </h3>
                    <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
                      {item.status}
                    </h3>
                    <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                      ₹ {item.price} / min
                    </h2>
                    <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                      {item.ev_name}
                    </h2>

                    <p class="leading-relaxed text-base">{item.address.substring(0,30)}...</p>
                  </div>
                )}
              </NavLink>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Reserve;
