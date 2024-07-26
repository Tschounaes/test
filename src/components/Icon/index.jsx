import React from "react";

const Icon = ({ children, className }) => {
  return (
    <span className={`material-symbols-outlined ${className}`}>{children}</span>
  );
};

export default Icon;
