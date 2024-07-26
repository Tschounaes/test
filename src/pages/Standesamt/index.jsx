import React from "react";
import textPath from "./text.md";
import useMD from "../../hooks/useMD";
import Markdown from "../../components/Markdown";

const Standesamt = () => {
  const text = useMD(textPath);
  return <Markdown children={text} />;
};

export default Standesamt;
