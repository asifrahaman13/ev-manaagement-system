import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="container px-5 py-16 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="px-4">
            <h2 className="text-indigo-500 text-sm font-medium mb-3">
              Explore Our Services
            </h2>
            <ul className="list-none space-y-2">
              <li>
                <NavLink
                  to="/explore-ev"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Explore available EV
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/customer-care"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Good customer care
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="px-4">
            <h2 className="text-indigo-500 text-sm font-medium mb-3">
              Upcoming Events Calendar
            </h2>
            <ul className="list-none space-y-2">
              <li>
                <NavLink
                  to="/install-stations"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Planning to install 40 more stations
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/payment-integrations"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Payment integrations
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/download-files"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Download your files
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="px-4">
            <h2 className="text-indigo-500 text-sm font-medium mb-3">
              Client Testimonials
            </h2>
            <ul className="list-none space-y-2">
              <li>
                <NavLink
                  to="/testimonial-government"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Government of India
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/testimonial-ev-agency"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Indian EV agency
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/testimonial-green-energy"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Indian Green energy
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="px-4">
            <h2 className="text-indigo-500 text-sm font-medium mb-3">
              Subscribe
            </h2>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Your email"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-sm text-gray-700 py-2 px-4 leading-5 transition-colors duration-200 ease-in-out"
              />
              <NavLink to="/signup">
                <button className="ml-4 px-6 py-2 bg-indigo-500 text-white font-medium rounded hover:bg-indigo-600 transition-colors duration-300">
                  Subscribe
                </button>
              </NavLink>
            </div>
            <p className="text-gray-500 text-sm mt-2">
              Bitters chicharrones fanny pack waistcoat green juice
            </p>
          </div>
        </div>
      </div>
      <div className="container px-5 py-6 mx-auto flex items-center justify-between">
        <NavLink to="/" className="flex items-center text-gray-900 font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">ASTRA</span>
        </NavLink>
        <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
          © 2023 astra —
          <a
            href="https://twitter.com/your-twitter-handle"
            rel="noopener noreferrer"
            className="text-gray-600 ml-1"
            target="_blank"
          >
            @astra2023
          </a>
        </p>
        <div className="flex space-x-2">
          <NavLink to="/facebook" className="text-gray-500">
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M17 2.01c4.418 0 8 3.582 8 8 0 4.418-3.582 8-8 8-4.418 0-8-3.582-8-8 0-4.418 3.582-8 8-8zm0 2a6 6 0 00-6 6c0 1.897.878 3.598 2.25 4.72V12h-1a1 1 0 00-1 1v2a1 1 0 001 1h1v3.28c0 .176.034.345.096.5H13a1 1 0 001-1v-5h1l.117-.001A6 6 0 0017 4.01zM20 7h-1v3h1"
              ></path>
            </svg>
          </NavLink>
          <NavLink to="/twitter" className="text-gray-500">
            <svg
              fill="currentColor"
              stroke="none"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M23 4.98c-.887.387-1.837.648-2.825.77a4.993 4.993 0 002.182-2.762 9.9 9.9 0 01-3.151 1.204 4.994 4.994 0 00-8.53 4.548 14.144 14.144 0 01-10.27-5.205 4.994 4.994 0 001.543 6.657A4.95 4.95 0 012.5 9.45v.063a4.992 4.992 0 004.01 4.887 4.982 4.982 0 01-2.26.087 4.994 4.994 0 004.661 3.466 10.02 10.02 0 01-6.2 2.14 10.154 10.154 0 01-1.188-.07 14.127 14.127 0 007.662 2.247c9.2 0 14.22-7.616 14.22-14.22 0-.216-.005-.431-.015-.646a10.137 10.137 0 002.488-2.587l-.035-.023z"></path>
            </svg>
          </NavLink>
          <NavLink to="/instagram" className="text-gray-500">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </NavLink>
          <NavLink to="/linkedin" className="text-gray-500">
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M17 2h4a2 2 0 012 2v4a2 2 0 01-2 2h-4m0 0l-3 9v6m0 0l-4 4v-4m4 4h5"
              ></path>
              <circle cx="9" cy="9" r="4"></circle>
            </svg>
          </NavLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
