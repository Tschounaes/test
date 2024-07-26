import React, { createContext } from "react";
import { GROUPS } from "./misc/groups";
import Start from "./pages/Start";
import backgroundHochzeit from "./pages/Start/bg-start.jpg";
import Einladung from "./pages/Einladung";
import Organisatoren from "./pages/Organisatoren";
import Bildergalerie from "./pages/Bildergalerie";
import backgroundBildergalerie from "./pages/Bildergalerie/bg_bildergalerie.jpg";
import Schenken from "./pages/Schenken";
import Standesamt from "./pages/Standesamt";
import Fest from "./pages/Fest";
import FullCountdown from "./pages/FullCountdown";
import backgroundFullCountdown from "./pages/FullCountdown/bg-fullcountdown_edit.jpg";

const serachParams = new URLSearchParams(window.location.search);

const slideRouter = {
  search: {
    group: serachParams.get("typ"),
    people: serachParams
      .get("wer")
      ?.split(",")
      .map((person) => {
        return {
          name: person.split("-")[0],
          gender: person.split("-")[1],
        };
      }),
  },
  routes: [
    {
      title: "Startseite",
      hideTitle: true,
      topic: "start",
      content: <Start />,
      background: backgroundHochzeit,
      groups: [GROUPS.ALLE],
    },
    {
      title: "Einladung",
      topic: "einladung",
      content: <Einladung />,
      groups: [GROUPS.APERO, GROUPS.AMT, GROUPS.PARTY],
    },
    {
      title: "Standesamt",
      topic: "standesamt",
      content: <Standesamt />,
      groups: [GROUPS.AMT],
    },
    {
      title: "Apéro",
      topic: "apero",
      content: null,
      groups: [GROUPS.APERO, GROUPS.AMT, GROUPS.PARTY],
    },
    {
      title: "Fest",
      topic: "fest",
      content: <Fest />,
      groups: [GROUPS.AMT, GROUPS.PARTY],
    },
    {
      title: "Countdown",
      hideTitle: true,
      topic: "countdown",
      background: backgroundFullCountdown,
      content: <FullCountdown />,
      groups: [GROUPS.ALLE],
    },
    {
      title: "Organisatoren",
      topic: "organisation",
      content: <Organisatoren />,
      groups: [GROUPS.ALLE],
    },
    {
      title: "Geschenke",
      topic: "gechenke",
      content: <Schenken />,
      groups: [GROUPS.APERO, GROUPS.AMT, GROUPS.PARTY],
    },

    {
      title: "Bildergalerie",
      hideTitle: true,
      topic: "bilder",
      background: backgroundBildergalerie,
      content: <Bildergalerie />,
      groups: [GROUPS.ALLE],
    },
  ],
};
export const SearchContext = createContext({});

export default slideRouter;
