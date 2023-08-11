import React from "react";

const Reviews = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-indigo-500 text-xs tracking-widest font-medium mb-1">
            ROOF PARTY POLAROID
          </h2>
          <h1 className="text-3xl sm:text-4xl font-medium text-gray-900">
            See Our Customers' Feedback
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-green-300 rounded-lg p-8 shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 mr-3 flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9-9-24 7 7h4l3 9z"></path>
                </svg>
              </div>
              <h2 className="text-gray-900 text-lg font-medium">Sam Karn</h2>
            </div>
            <p className="text-base leading-relaxed">
              "This charging station is a game-changer for me! As a frequent road tripper, I rely on dependable charging points, and this one never disappoints. It's always in good working condition, and the multiple ports ensure I can charge both my EV and my friend's without any hassle. Thumbs up!"
            </p>
            <a
              href="#"
              className="mt-6 inline-flex items-center text-indigo-500"
            >
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div className="bg-green-300 rounded-lg p-8 shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 mr-3 flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9-9-24 7 7h4l3 9z"></path>
                </svg>
              </div>
              <h2 className="text-gray-900 text-lg font-medium">John Wick</h2>
            </div>
            <p className="text-base leading-relaxed">
              "I definitely got one of the best services from ASTRA. They give quality services. Earlier it was very inconvenitent to find the proper EV aound. Now it is quite easy and at the same time conveninet to find them all due to ASTRA."
            </p>
            <a
              href="#"
              className="mt-6 inline-flex items-center text-indigo-500"
            >
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div className="bg-green-300 rounded-lg p-8 shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 mr-3 flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9-9-24 7 7h4l3 9z"></path>
                </svg>
              </div>
              <h2 className="text-gray-900 text-lg font-medium">Jain Paul</h2>
            </div>
            <p className="text-base leading-relaxed">
              "In the ever increasing world of power consumption where green energey is exploding we need a proper system to manage the entire ecosystem. Astra are among those organizations which solves the problem to a large scale. "
            </p>
            <a
              href="#"
              className="mt-6 inline-flex items-center text-indigo-500"
            >
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          {/* Add two more reviews here with similar structure */}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
