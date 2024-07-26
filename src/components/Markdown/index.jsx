import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "./style.css";

const Markdown = ({ children }) => {
  return (
    <ReactMarkdown
      className="markdown"
      children={children}
      remarkPlugins={[remarkGfm]}
    />
  );
};

export default Markdown;
