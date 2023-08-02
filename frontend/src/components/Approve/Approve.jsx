import React from "react";

const Approve = () => {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Save your time
              <br class="hidden lg:inline-block" />
            </h1>
            <p class="mb-8 leading-relaxed">
              Save your precise time with the help of our service. No need to
              search and call to check for the availability of the EV charging
              stations
            </p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Button
              </button>
              <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Button
              </button>
            </div>
          </div>
          <div class="sm:w-1/2 mb-10 px-4">
            <img
              alt="content"
              class="object-cover object-center h-full w-full rounded-lg sm:rounded-none md:rounded-md lg:rounded-x"
              src="https://uploads-ssl.webflow.com/64b66ad2d48ca7a912ddf3eb/64b66ad2d48ca7a912ddf45d_Group%2011394.png"
            />
          </div>
        </div>
      </section>

      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <img
              alt="content"
              class="object-cover object-center h-full w-full rounded-lg sm:rounded-none md:rounded-md lg:rounded-xl"
              src="https://uploads-ssl.webflow.com/64b66ad2d48ca7a912ddf3eb/64b66ad2d48ca7a912ddf45f_Group%2011383.png"
            />
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Get more convenience
              <br class="hidden lg:inline-block" />
            </h1>
            <p class="mb-8 leading-relaxed">
              make it more convenient to find the EV station. Get the details of
              the charging station.
            </p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Button
              </button>
              <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Button
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Approve;
