/* eslint-disable react/prop-types */


import Card from "../Card/Card";
import { cards } from "../../data";
export default function Genre({ genre }) {
  const filteredCards = cards.filter((card) => card.genre === genre);

  return (
    <>
      <section>
        <ul className="p-2 d-flex flex-wrap justify-content-between">
          {filteredCards.map((card) => (
            <Card
              filmUrl={card.filmUrl}
              imgUrl={card.imgUrl}
              title={card.title}
              key={card.id}
              genre={card.genre}
              desc={card.desc}
            />
          ))}
        </ul>
      </section>
    </>
  );
}

