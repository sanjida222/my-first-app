import React, { useState, useEffect } from "react";
import Download from "../../../public/assets/images/icon-downloads.png";
import Ratings from "../../../public/assets/images/icon-ratings.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Installation = () => {
  const [sortType, setSortType] = useState("size");
  const [installedApps, setInstalledApps] = useState([]);

  useEffect(() => {
    const apps = JSON.parse(localStorage.getItem("installedApps")) || [];
    setInstalledApps(apps);
  }, []);

  const handleSortChange = (e) => {
    const type = e.target.value;
    setSortType(type);

    const sorted = [...installedApps].sort((a, b) => {
      switch (type) {
        case "size":
          return b.size - a.size;
        case "rating":
          return b.ratingAvg - a.ratingAvg;
        case "downloadsHigh":
          return b.downloads - a.downloads;
        case "downloadsLow":
          return a.downloads - b.downloads;
        default:
          return 0;
      }
    });

    setInstalledApps(sorted);
  };

  const handleUninstall = (id) => {
    const updated = installedApps.filter((app) => app.id !== id);
    setInstalledApps(updated);
    localStorage.setItem("installedApps", JSON.stringify(updated));
    toast.info("App uninstalled successfully!", {
      position: "top-center",
      autoClose: 2000,
    });
  };

  const formatNumber = (num) => {
    if (!num) return "0";
    if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
    if (num >= 1_000) return (num / 1_000).toFixed(1) + "K";
    return num.toString();
  };

  if (installedApps.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
        <h2 className="text-3xl font-semibold text-gray-600 mb-4">
          No Apps Installed
        </h2>
        <p className="text-gray-500 mb-6">
          You haven’t installed any apps yet.
        </p>
        <ToastContainer />
      </div>
    );
  }

  return (
    <div className="bg-gray-50 max-w-6xl mx-auto py-12 px-4">
      <ToastContainer />
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-900 mb-1">
            Your Installed Apps
          </h1>
          <p className="text-gray-500 text-sm">
            Explore All Trending Apps on The Market Developed by Us
          </p>
          <p className="mt-2 text-gray-700 font-medium">
            {installedApps.length} Apps Found
          </p>
        </div>

        <div className="w-full md:w-auto">
          <select
            value={sortType}
            onChange={handleSortChange}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-600 w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="size">Sort By Size</option>
            <option value="rating">Sort By Rating</option>
            <option value="downloadsHigh">Downloads High → Low</option>
            <option value="downloadsLow">Downloads Low → High</option>
          </select>
        </div>
      </div>

      <div className="space-y-4">
        {installedApps.map((app) => (
          <div
            key={app.id}
            className="bg-white border border-gray-200 rounded-xl shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center p-4 gap-4 md:gap-0"
          >
            <div
              className="flex items-center gap-4 w-full cursor-pointer"
              onClick={() => (window.location.href = `/apps/${app.id}`)}
            >
              <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1">
                <h3 className="font-semibold text-gray-800 mb-1">
                  {app.title}
                </h3>
                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
                  <div className="flex items-center gap-1 text-green-600">
                    <img src={Download} alt="download" className="w-4 h-4" />
                    <span>{formatNumber(app.downloads)}</span>
                  </div>
                  <div className="flex items-center gap-1 text-orange-500">
                    <img src={Ratings} alt="rating" className="w-4 h-4" />
                    <span>{app.ratingAvg}</span>
                  </div>
                  <span>{app.size} MB</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleUninstall(app.id)}
              className="mt-3 md:mt-0 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition flex-shrink-0"
            >
              Uninstall
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installation;
