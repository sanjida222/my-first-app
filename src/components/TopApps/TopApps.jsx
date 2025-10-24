import React from "react";
import { useNavigate } from "react-router";
import appsData from "../../../public/Data/appsData.json";
import Download from "../../../public/assets/images/icon-downloads.png";
import Ratings from "../../../public/assets/images/icon-ratings.png";

const TopApps = () => {
  const navigate = useNavigate();
  const topApps = appsData.slice(0, 8);

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(1) + "K";
    return num;
  };

  return (
    <section className="max-w-6xl mx-auto py-16 px-4 bg-gray-50">
      <h2 className="text-center text-4xl font-bold text-gray-800 mb-2">
        Trending Apps
      </h2>
      <p className="text-center text-[18px] text-gray-400 mb-10">
        Explore All Trending Apps on the Market developed by us
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {topApps.map((app) => (
          <div
            key={app.id}
            className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition p-4 cursor-pointer flex flex-col"
            onClick={() => navigate(`/apps/${app.id}`)}
          >
            <div className="w-full h-52 bg-gray-100 rounded-lg mb-4 overflow-hidden">
              <img
                src={app.image}
                alt={app.title}
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="font-semibold text-lg text-gray-800 mb-4 line-clamp-2">
              {app.title}
            </h3>

            <div className="flex justify-between items-center mt-auto">
              <div className="flex items-center gap-1 bg-green-100 text-green-600 px-2 py-1 rounded-md text-sm font-medium">
                <img src={Download} alt="download icon" className="w-4 h-4" />
                <span>{formatNumber(app.downloads)}</span>
              </div>

              <div className="flex items-center gap-1 bg-orange-100 text-orange-500 px-2 py-1 rounded-md text-sm font-medium">
                <img src={Ratings} alt="rating icon" className="w-4 h-4" />
                <span>{app.ratingAvg}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <button
          className="bg-gradient-to-r from-purple-700 to-purple-500 text-white px-8 py-2 rounded-md font-medium shadow hover:opacity-90 transition"
          onClick={() => navigate("/apps")}
        >
          Show All
        </button>
      </div>
    </section>
  );
};

export default TopApps;
