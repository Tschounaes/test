import React from "react";
import Icon from "../Icon";

const Person = ({ portrait, name, role, phone, email }) => {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-center">
      <div className="flex h-[200px] w-[200px] justify-center items-center overflow-hidden">
        <img src={portrait} alt={name} />
      </div>
      <div>
        <h4 className="text-4xl">{name}</h4>
        <h5 className="text-2xl">{role}</h5>
        <div className="mt-2">
          <a href={`tel:${phone}`} className="flex">
            <Icon>phone</Icon>
            <span className="ml-2">{phone}</span>
          </a>
          <a href={`mailto:${email}`} className="flex">
            <Icon>email</Icon>
            <span className="ml-2">{email}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Person;
