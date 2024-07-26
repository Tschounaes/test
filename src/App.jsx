import React from "react";
import { v4 as uuid } from "uuid";

import dayjs from "dayjs";
import "dayjs/locale/de-ch";

import Slide from "./components/Slide";
import SlideContainer from "./components/SlideContainer";
import SlideNavigation from "./components/SlideNavigation";
import slideRouter, { SearchContext } from "./router";

import Countdown from "./components/Countdown";

dayjs.locale("de-ch");

const App = () => {
  return (
    <div className="App">
      <SearchContext.Provider value={slideRouter.search}>
        <SlideContainer>
          <SlideNavigation router={slideRouter} />
          {slideRouter.routes.map((page) => (
            <div key={uuid()}>
              <Slide
                key={uuid()}
                topic={page.topic}
                title={page.title}
                hideTitle={page.hideTitle}
                backgroundImageFile={page.background}
                groups={page.groups}
              >
                {page.content}
              </Slide>
            </div>
          ))}
        </SlideContainer>

        <Countdown additionalClassNames="absolute bottom-0 text-sm md:text-base text-white text-center bg-slate-800 bg-opacity-75 w-full flex justify-center" />
      </SearchContext.Provider>
    </div>
  );
};

export default App;
