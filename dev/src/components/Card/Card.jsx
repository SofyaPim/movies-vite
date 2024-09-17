/* eslint-disable react/prop-types */
import { useState } from "react";
import MenuItem from "../MenuItem/MenuItem";

// eslint-disable-next-line react/prop-types
export default function Card({ id, title,filmUrl, imgUrl, genre, desc }) {
 
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <li key={id}>
        <div className="card" style={{ width: 290 }}>
          <div>
            <a href={filmUrl} target="_blank" rel="noopener noreferrer">
            <img className="card-img-top" src={imgUrl} alt="person" />
            </a>
            
            <div>
              <h4 className="display-6 text-light p-2">{title}</h4>
              <h6 className="text-light p-2">{genre}</h6>

              <p className="card-desc text-light p-2">
                {isExpanded ? desc : `${desc.slice(0, 150)}...`}
              
              </p>
              <div className="p-2">
                 <MenuItem onClick={handleExpandClick}>
           
                <p>{isExpanded ? "Скрыть" : "Показать полностью"}</p>
              </MenuItem>
              </div>
             
            </div>
          </div>
        </div>
      </li>
    </>
  );
}
