import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-white/70 flex items-center justify-center z-50">
      <div className="w-16 h-16 border-4 border-purple-600 border-dashed rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
