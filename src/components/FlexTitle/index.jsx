import React from "react";
import { v4 as uuid } from "uuid";

const FlexTitle = ({ title }) => {
  return (
    <div className="flex w-full justify-between">
      {title.split("").map((letter, index) => (
        <div key={uuid()} className="flex-title-letter">
          {letter}
        </div>
      ))}
    </div>
  );
};

export default FlexTitle;
