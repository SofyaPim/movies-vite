/* eslint-disable react/prop-types */
import MenuItem from "../MenuItem/MenuItem";
export default function MenuSection({ active, onChange }) {
  return (
    <>
      <header className="d-flex flex-wrap align-items-center justify-content-between p-2">
        <img className="logo" src="/public/img/Movie Camera.png" alt=""/>
        <MenuItem isActive={active === "main"} onClick={() => onChange("main")}>        
          <h1 className="display-2">Лучшие фильмы</h1>
        </MenuItem>
        <MenuItem isActive={active === "feedBack"} onClick={() => onChange("feedBack")} >
          <h6 className="flex-shrink-1 align-self-start">Обратная связь</h6>
        </MenuItem>
      </header>
    </>
  );
}
