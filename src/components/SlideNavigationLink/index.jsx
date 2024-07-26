import React, { useContext, useEffect, useState } from "react";
import { GROUPS } from "../../misc/groups";
import { SearchContext } from "../../router";

const SlideNavigationLink = ({ groups, title, topic, onClick }) => {
  const search = useContext(SearchContext);
  const [doRender, setDoRender] = useState(groups.indexOf(GROUPS.ALLE) !== -1);
  const [active, setActive] = useState(
    window.location.hash.replace("#", "") === topic
  );

  useEffect(() => {
    if (groups.indexOf(search.group) !== -1) {
      setDoRender(true);
    }
  }, [search.group, groups]);

  useEffect(() => {
    function handleHashChange() {
      setActive(window.location.hash.replace("#", "") === topic);
    }

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [topic]);

  return (
    <>
      {doRender ? (
        <li
          className={` w-full cursor-pointer text-2xl m-2  xl:text-4xl xl:m-4  hover:bg-white hover:bg-opacity-25 ${
            active ? "bg-white" : null
          }`}
          onClick={onClick}
        >
          {" "}
          <a className="block w-full p-2 xl:p-4" href={`#${topic}`}>
            {" "}
            {title}
          </a>
        </li>
      ) : null}
    </>
  );
};

export default SlideNavigationLink;
