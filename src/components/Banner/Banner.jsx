import React from "react";
import { FaGooglePlay, FaAppStoreIos } from "react-icons/fa";
import hero from "../../../public/assets/images/hero.png";

const Banner = () => {
  return (
    <section className="flex flex-col items-center text-center py-16 px-6 md:px-20 bg-gray-50">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        We Build <span className="text-purple-600">Productive</span> Apps
      </h1>

      <p className="text-gray-600 max-w-2xl mb-8">
        At HERO.IO, we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting. Our goal is to turn your ideas into
        digital experiences that truly make an impact.
      </p>

      <div className="flex gap-4 mb-10">
        <a
          href="https://play.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 border border-gray-400 text-gray-700 rounded-lg font-medium hover:bg-gray-100 transition"
        >
          <FaGooglePlay className="text-lg" />
          Google Play
        </a>

        <a
          href="https://www.apple.com/app-store/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 border border-gray-400 text-gray-700 rounded-lg font-medium hover:bg-gray-100 transition"
        >
          <FaAppStoreIos className="text-lg" />
          App Store
        </a>
      </div>

      <div className="flex justify-center">
        <img
          src={hero}
          alt="Hero banner"
          className="w-[300px] md:w-[400px] lg:w-[450px]"
        />
      </div>
    </section>
  );
};

export default Banner;
