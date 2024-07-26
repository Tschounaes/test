import React, { useState, useCallback } from "react";
import { v4 as uuid } from "uuid";
import Icon from "../Icon";
import "./style.css";
import SlideNavigationLink from "../SlideNavigationLink";

const SlideNavigation = ({ router }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);
  return (
    <>
      <div className="w-screen sticky top-8 z-40">
        <div className=" text-white container m-auto grid justify-items-end">
          <button type="button" className="p-4 mx-4" onClick={handleOpen}>
            <Icon>{!isOpen ? "menu" : "close"}</Icon>
          </button>
        </div>
      </div>

      <div
        className={`sticky top-0 left-0 w-screen h-screen z-[39] overflow-hidden ${
          isOpen
            ? "slide-navigation-wrapper--open"
            : "slide-navigation-wrapper--closed"
        }`}
      >
        <div
          className={`bg-slate-600 w-full h-full slide-navigation-panel flex flex-col items-center ${
            isOpen
              ? "slide-navigation-panel--open"
              : "slide-navigation-panel--closed"
          }`}
        >
          <div className="container m-auto max-w-screen-md relative z-[41] flex items-center h-[calc(100%-200px)]">
            <nav className="w-full">
              <ul className="w-full">
                {router.routes.map((route) => {
                  return (
                    <SlideNavigationLink
                      key={uuid()}
                      groups={route.groups}
                      title={route.title}
                      topic={route.topic}
                      onClick={handleOpen}
                    />
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default SlideNavigation;
