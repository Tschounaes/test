import React, { useEffect, useState, useContext } from "react";
import { SearchContext } from "../../router";

import ReactMarkdown from "react-markdown";
import textPath from "./text.md";
import useMD from "../../hooks/useMD";
import { GROUPS } from "../../misc/groups";

const Einladung = () => {
  const search = useContext(SearchContext);
  const text = useMD(textPath);

  const [invitesString, setInvitesString] = useState("");

  useEffect(() => {
    let welcomeValue = [];

    if (!search.people) {
      setInvitesString("Liebe Gästin, lieber Gast");
      return;
    }

    search.people.forEach((person, index) => {
      if (index === 0) {
        welcomeValue.push(
          person.gender === "m"
            ? `Lieber ${person.name}`
            : `Liebe ${person.name}`
        );
      } else {
        welcomeValue.push(
          person.gender === "m"
            ? `lieber ${person.name}`
            : `liebe ${person.name}`
        );
      }

      setInvitesString(welcomeValue.join(", "));
    });
  }, [search]);

  return (
    <div>
      <h4 className="text-3xl mb-4">{invitesString}</h4>
      {search.people ? (
        <p className="text-xl mb-4">
          {search.people.length > 1 ? "Ihr seid" : "Du bist"}
          {search.group === GROUPS.AMT ? (
            <>
              {" "}
              ins <a href="#standesamt">Standesamt</a>,
            </>
          ) : null}{" "}
          zum <a href="#apero">Apéro</a>
          {search.group === GROUPS.PARTY || search.group === GROUPS.AMT ? (
            <>
              {" "}
              und dem anschliessenden <a href="#fest">Fest</a>
            </>
          ) : null}{" "}
          eingeladen.
        </p>
      ) : (
        <p className="text-xl mb-4">
          Bitte verwende den Link aus dem QR-Code aus der persönlichen
          Eiladungskarte um die richtigen Informationen zu sehen!
        </p>
      )}{" "}
      <ReactMarkdown className="markdown" children={text} />
    </div>
  );
};

export default Einladung;
