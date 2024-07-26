import React from "react";
import textPath from "./text.md";
import useMD from "../../hooks/useMD";
import Markdown from "../../components/Markdown";
import Person from "../../components/Person";
import people from "./people";
import { v4 as uuid } from "uuid";

const Organisatoren = () => {
  const text = useMD(textPath);
  return (
    <>
      <Markdown children={text} />
      <div className="grid lg:grid-cols-2  grid-cols-1 gap-8">
        {people.map((person) => {
          return (
            <Person
              key={uuid()}
              portrait={person.portrait}
              name={person.name}
              role={person.role}
              phone={person.phone}
              email={person.email}
            />
          );
        })}
      </div>
    </>
  );
};

export default Organisatoren;
