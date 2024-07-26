import React, { useContext, useEffect, useState } from "react";
import { AnimatedLine } from "../AnimatedLine";
import { GROUPS } from "../../misc/groups";

import { SearchContext } from "../../router";

import Pattern from "./background/pattern_medium.jpg";

const Slide = ({
  groups,
  children,
  title,
  topic,
  backgroundImageFile,
  hideTitle,
}) => {
  const search = useContext(SearchContext);
  const [doRender, setDoRender] = useState(groups.indexOf(GROUPS.ALLE) !== -1);

  useEffect(() => {
    if (groups.indexOf(search.group) !== -1) {
      setDoRender(true);
    }
  }, [search.group, groups]);

  useEffect(() => {
    const pageElem = document.getElementById(
      window.location.hash.replace("#", "")
    );

    if (!pageElem) {
      return;
    }

    pageElem.scrollIntoView();
  }, [doRender]);

  const slideWarapperClasses = [
    "h-screen",
    "flex",
    "justify-center",
    "items-center",
    "snap-always",
    "snap-center",
    backgroundImageFile ? "bg-no-repeat" : null,
    backgroundImageFile ? "bg-cover" : null,
    backgroundImageFile ? "bg-center" : null,
  ];

  return (
    <>
      {doRender ? (
        <>
          <article
            className={slideWarapperClasses.join(" ").trim()}
            style={
              backgroundImageFile
                ? { backgroundImage: `url("${backgroundImageFile}")` }
                : {
                    backgroundImage: `url("${Pattern}")`,
                    backgroundBlendMode: "difference",
                  }
            }
            id={topic}
          >
            <div className="max-h-[calc(100%-200px)] overflow-y-auto w-screen py-32">
              <div className="container mx-auto 2xl:px-64 xl:px-32 lg:px-16 px-4">
                {!hideTitle ? (
                  <>
                    <h1 className="lg:text-6xl text-4xl text-center mb-4 tracking-widest">
                      {title}
                    </h1>
                    <AnimatedLine additionalClassNames="mb-16" />
                  </>
                ) : null}
                {children}
              </div>
            </div>
          </article>
          <div className="bg-slate-600 h-[800px]" />
        </>
      ) : null}
    </>
  );
};

export default Slide;
