import { useEffect, useState } from "react";

const useMD = (textPath) => {
  const [text, setText] = useState("");
  useEffect(() => {
    fetch(textPath)
      .then((response) => response.text())
      .then((text) => {
        setText(text);
      });
  }, [text, textPath]);
  return text;
};

export default useMD;
