import Card from "../Card/Card";
import { cards } from "../../data";

export default function Movies() {
     const all = cards.filter((card) => card);
   

    return (
      <>
        <section>
          <ul className="p-2 d-flex flex-wrap justify-content-between">
            {all.map((card) => (
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