import React from "react";

const TrustedSection = () => {
  return (
    <section className="bg-gradient-to-r from-purple-700 to-purple-500 text-white py-16 text-center">
      <h2 className="text-3xl font-bold mb-8">
        Trusted By Millions, Built For You
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        <div>
          <p>Total Downloads</p>
          <p className="text-4xl font-extrabold">29.6M</p>
          <p className="text-sm text-white/70">21% More Than Last Month</p>
        </div>
        <div>
          <p>Total Reviews</p>
          <p className="text-4xl font-extrabold">906K</p>
          <p className="text-sm text-white/70">46% More Than Last Month</p>
        </div>
        <div>
          <p>Active Apps</p>
          <p className="text-4xl font-extrabold">132+</p>
          <p className="text-sm text-white/70">31 More Will Launch</p>
        </div>
      </div>
    </section>
  );
};

export default TrustedSection;
