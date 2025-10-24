import React, { useState, useEffect } from "react";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/footer/Footer";
import { Outlet, useLocation } from "react-router";
import Loader from "../../components/Loader/Loader";

const Root = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className="max-w-6xl mx-auto">
      <Navbar />
      {loading && <Loader />}
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
