import React from "react";
import Countdown from "../../components/Countdown";

const FullCountdown = () => {
  return (
    <Countdown
      additionalClassNames="text-6xl lg:text-7xl xl:text-9xl text-center mix-blend-difference text-white"
      withBreaks={true}
    />
  );
};

export default FullCountdown;
