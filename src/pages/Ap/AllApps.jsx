import React, { useState } from "react";
import { useNavigate } from "react-router";
import appsData from "../../../public/Data/appsData.json";
import Download from "../../../public/assets/images/icon-downloads.png";
import Ratings from "../../../public/assets/images/icon-ratings.png";
import { FaSearch } from "react-icons/fa";

const AllApps = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const filteredApps = appsData.filter((app) =>
    app.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(1) + "K";
    return num;
  };

  return (
    <div className="bg-gray-50 max-w-6xl mx-auto py-12 px-4">
      <div className="flex flex-col justify-center items-center py-2 bg-gray-50">
        <h1 className="text-3xl font-bold text-gray-900 mb-1">
          Our All Applications
        </h1>
        <p className="text-gray-500 text-sm text-center">
          Explore All Apps on the Market developed by us. We code for Millions.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center md:items-center mb-6 gap-4">
        <div>
          <p className="mt-2 text-gray-700 font-medium">
            ({filteredApps.length}) Apps Found
          </p>
        </div>

        <div className="relative w-full md:w-64">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search Apps"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 rounded-lg pl-10 pr-3 py-2 w-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
      </div>

      {filteredApps.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16">
          <FaSearch className="text-3xl text-gray-500" />
          <h2 className="text-3xl font-semibold text-gray-600 mb-4">
            No App Found
          </h2>
          <button
            onClick={() => setSearchTerm("")}
            className="bg-purple-600 text-white px-5 py-2 rounded-lg hover:bg-purple-700 transition"
          >
            See All Apps
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {filteredApps.map((app) => (
            <div
              key={app.id}
              onClick={() => navigate(`/apps/${app.id}`)}
              className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition cursor-pointer p-4 flex flex-col"
            >
              <div className="w-full h-48 bg-gray-100 rounded-lg mb-4 overflow-hidden">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="font-semibold text-lg text-gray-800 mb-2 line-clamp-2">
                {app.title}
              </h3>

              <div className="flex justify-between items-center mt-auto">
                <div className="flex items-center gap-1 bg-green-100 text-green-600 px-2 py-1 rounded-md text-sm font-medium">
                  <img src={Download} alt="download" className="w-4 h-4" />
                  <span>{formatNumber(app.downloads)}</span>
                </div>

                <div className="flex items-center gap-1 bg-orange-100 text-orange-500 px-2 py-1 rounded-md text-sm font-medium">
                  <img src={Ratings} alt="rating" className="w-4 h-4" />
                  <span>{app.ratingAvg}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllApps;
