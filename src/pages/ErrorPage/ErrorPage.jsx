import React from "react";
import { useNavigate } from "react-router";
import Error from "../../../public/assets/images/error-404.png";
const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-4">
      <img src={Error} alt="404 Not Found" className="w-80 md:w-96 mb-8" />
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
        Oops, page not found!
      </h1>

      <p className="text-gray-500 mb-6">
        The page you are looking for is not available.
      </p>

      <button
        onClick={() => navigate(-1)}
        className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-medium shadow-md transition"
      >
        Go Back!
      </button>

      <footer className="mt-20 w-full border-t pt-6 text-center">
        <div className="text-indigo-600 font-semibold text-lg mb-2">
          HERO.IO
        </div>
        <p className="text-gray-500 text-sm">
          Copyright © 2025 – All rights reserved
        </p>

        <div className="flex justify-center gap-4 mt-3 text-gray-500">
          <a href="#" className="hover:text-indigo-600">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a href="#" className="hover:text-indigo-600">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="#" className="hover:text-indigo-600">
            <i className="fa-brands fa-facebook"></i>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default ErrorPage;
