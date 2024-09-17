/* eslint-disable react/prop-types */

import Button from "../Button/Button";
// import MenuItem from "../MenuItem/MenuItem";

export default function FilterSection({ active, onChange }) {
  return (
    <>
      <section className=" p-2" >
        <h4 className="text-light display-6">
          А теперь выбирай что посмотреть на выходных
        </h4>

        <Button isActive={active === "All"} onClick={() => onChange("All")}>
          All
        </Button>
        <Button isActive={active === "Comedy"} onClick={() => onChange("Comedy")}>
          Comedy
        </Button>
        <Button isActive={active === "Trillers"} onClick={() => onChange("Trillers")}>
          Trillers
        </Button>
        <Button isActive={active === "Fantasy"} onClick={() => onChange("Fantasy")}>
          Fantasy
        </Button>
        <Button isActive={active === "Drama"} onClick={() => onChange("Drama")}>
          Drama
        </Button>
       
      </section>
    </>
  );
}
