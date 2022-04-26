import React from "react";

import Github from "./Github";

export default function Cards(props) {
  return (
    <div>
      <div className="flex items-center flex-col h-full">
        <a href={props.link}>
            <img
              src={props.image}
              alt={props.name}
              className="h-[17rem] w-[27rem] rounded-md border-4 border-white"
            />
        </a>
        <div className="flex pt-2">
          <div className="lg:text-xl md:text-sm text-sm font-medium text-white">{props.name}</div>
          <a href={props.gitLink} className="ml-5 ">
            <Github />
          </a>
        </div>
      </div>
    </div>
  );
}
