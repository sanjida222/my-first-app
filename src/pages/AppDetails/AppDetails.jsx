import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  YAxis,
} from "recharts";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import appsData from "../../../public/Data/appsData.json";
import Download from "../../../public/assets/images/icon-downloads.png";
import Ratings from "../../../public/assets/images/icon-ratings.png";
import Reviews from "../../../public/assets/images/icon-review.png";
import NotFoundImage from "../../../public/assets/images/App-Error.png";

const AppDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const app = appsData.find((item) => item.id === Number(id));

  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const installedApps =
      JSON.parse(localStorage.getItem("installedApps")) || [];
    setIsInstalled(installedApps.some((a) => a.id === app?.id));
  }, [app]);

  if (!app) {
    return (
      <div className="flex flex-col items-center justify-center text-center min-h-screen bg-gray-50 px-4">
        <img
          src={NotFoundImage}
          alt="Not Found"
          className="w-40 sm:w-60 h-40 sm:h-60 object-contain mb-6"
        />
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
          App Not Found
        </h1>
        <p className="text-gray-600 mb-6 text-sm sm:text-base">
          The app you are looking for doesn’t exist or has been removed.
        </p>
        <button
          className="bg-purple-600 text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-purple-700 transition"
          onClick={() => navigate("/apps")}
        >
          Go Back to Apps
        </button>
      </div>
    );
  }

  const ratingsData = app.ratings?.map((rating) => ({
    name: rating.name.replace("star", "★"),
    value: rating.count,
  }));

  const formatNumber = (num) => {
    if (!num) return "0";
    if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
    if (num >= 1_000) return (num / 1_000).toFixed(1) + "K";
    return num.toString();
  };

  const handleInstall = () => {
    const installedApps =
      JSON.parse(localStorage.getItem("installedApps")) || [];
    if (!installedApps.some((a) => a.id === app.id)) {
      installedApps.push(app);
      localStorage.setItem("installedApps", JSON.stringify(installedApps));
      setIsInstalled(true);
      toast.success("App installed successfully!", {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };

  return (
    <div className="bg-gray-50 max-w-6xl mx-auto py-8 sm:py-12 px-4 sm:px-6">
      <ToastContainer />

      {/* Header */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
        <img
          src={app.image}
          alt={app.title}
          className="w-40 h-40 sm:w-48 sm:h-48 object-contain rounded-2xl shadow-md"
        />
        <div className="flex-1 w-full md:w-auto">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            {app.title}
          </h1>

          <p className="text-sm sm:text-base text-gray-500 mt-1">
            Developed by{" "}
            <span className="text-indigo-600 font-medium">
              {app.companyName || "Unknown Company"}
            </span>
          </p>
          <div className="h-[1px] bg-gray-300 my-2 w-full"></div>

          <div className="flex flex-wrap gap-4 sm:gap-6 mt-6 text-center justify-start">
            <div className="flex flex-col items-center sm:items-start">
              <img
                src={Download}
                alt="Downloads"
                className="w-5 h-5 sm:w-6 sm:h-6 mb-1"
              />
              <p className="text-lg sm:text-xl font-semibold text-gray-800">
                {formatNumber(app.downloads)}
              </p>
              <p className="text-gray-500 text-xs sm:text-sm">Downloads</p>
            </div>
            <div className="flex flex-col items-center sm:items-start">
              <img
                src={Ratings}
                alt="Ratings"
                className="w-5 h-5 sm:w-6 sm:h-6 mb-1"
              />
              <p className="text-lg sm:text-xl font-semibold text-gray-800">
                {app.ratingAvg?.toFixed(1) || "N/A"}
              </p>
              <p className="text-gray-500 text-xs sm:text-sm">Avg. Rating</p>
            </div>
            <div className="flex flex-col items-center sm:items-start">
              <img
                src={Reviews}
                alt="Reviews"
                className="w-5 h-5 sm:w-6 sm:h-6 mb-1"
              />
              <p className="text-lg sm:text-xl font-semibold text-gray-800">
                {formatNumber(app.reviews)}
              </p>
              <p className="text-gray-500 text-xs sm:text-sm">Reviews</p>
            </div>
          </div>

          <button
            onClick={handleInstall}
            disabled={isInstalled}
            className={`mt-6 sm:mt-8 px-4 sm:px-6 py-2 rounded-lg text-white font-medium transition ${
              isInstalled
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700"
            }`}
          >
            {isInstalled
              ? "Installed ✓"
              : `Install Now (${app.size || "—"} MB)`}
          </button>
        </div>
      </div>

      <div className="mt-8 sm:mt-12">
        <div className="h-[1px] bg-gray-300 my-4 w-full"></div>

        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
          Ratings
        </h2>
        <div className="w-full h-56 sm:h-64 bg-gray-50 rounded-lg p-2 sm:p-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={ratingsData}
              layout="vertical"
              margin={{ left: 40 }}
            >
              <XAxis type="number" />
              <YAxis
                dataKey="name"
                type="category"
                width={50}
                tick={{ fontSize: 12 }}
              />
              <Tooltip />
              <Bar dataKey="value" fill="#f97316" radius={[0, 10, 10, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="h-[1px] bg-gray-300 my-4 w-full"></div>
      </div>

      <div className="mt-8 sm:mt-12">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3">
          Description
        </h2>
        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
          {app.description}
        </p>
      </div>
    </div>
  );
};

export default AppDetails;
