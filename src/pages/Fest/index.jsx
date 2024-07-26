import React from "react";
import textPath from "./text.md";
import useMD from "../../hooks/useMD";
import Markdown from "../../components/Markdown";

const Fest = () => {
  const text = useMD(textPath);
  return <Markdown children={text} />;
};

export default Fest;
