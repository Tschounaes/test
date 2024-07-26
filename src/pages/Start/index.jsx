import React from "react";
import FlexTitle from "../../components/FlexTitle";
import { AnimatedLine } from "../../components/AnimatedLine";
import "./style.css";

const Start = () => {
  const data = {
    SILAS: "Silas",
    MELANIE: "Melanie",
  };
  return (
    <>
      <div
        className="text-white 2xl:text-9xl xl:text-8xl md:text-7xl text-6xl drop-shadow-lg flex flex-col justify-center items-center"
        id="main-title--start"
      >
        <h2 className="xl:text-3xl  text-2xl mb-2 tracking-widest">Hochzeit</h2>
        <AnimatedLine additionalClassNames="mb-6 text-white" />
        <FlexTitle title={data.MELANIE} />
        <div className="text-4xl">&</div>
        <FlexTitle title={data.SILAS} />
        <AnimatedLine additionalClassNames="mt-6 text-white" />
        <h4 className="xl:text-3xl text-2xl mt-2 tracking-widest">
          2. November 2024
        </h4>
      </div>
    </>
  );
};

export default Start;
