import { description } from "../data";

import { useState } from "react";
// import Tab from "./Tab/Tab";
import MenuItem from "./MenuItem/MenuItem";

export default function TabBlock() {
  const [contentType, setContentType] = useState("comedy");

  function handleClick(type) {
    console.log("btn clicked", type);
    setContentType(type);
  }
  return (
    <>
      <section>
        <div className="d-flex flex-wrap">
          <MenuItem
            isActive={contentType === "comedy"}
            onClick={() => handleClick("comedy")}
          >
           <h4 className="p-2">Комедии</h4> 
          </MenuItem>
          <MenuItem
            isActive={contentType === "triller"}
            onClick={() => handleClick("triller")}
          >
           <h4 className="p-2">Триллеры</h4> 
          </MenuItem>
          <MenuItem
            isActive={contentType === "drama"}
            onClick={() => handleClick("drama")}
          >
           <h4 className="p-2">Драмы</h4> 
          </MenuItem>
          <MenuItem
            isActive={contentType === "fantasy"}
            onClick={() => handleClick("fantasy")}
          >
           <h4 className="p-2">Фэнтези</h4> 
          </MenuItem>
        </div>
      
        {contentType && (
          <p className="text-light p-2">{description[contentType]}</p>
        )}
      </section>
    </>
  );
}
