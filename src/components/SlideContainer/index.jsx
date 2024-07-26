import React from "react";

const SlideContainer = ({ children }) => {
  return (
    <div className="bg-slate-300 snap-y snap-mandatory h-screen overflow-scroll sepia-[.1]">
      {children}
    </div>
  );
};

export default SlideContainer;
