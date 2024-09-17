import "./App.css";
// import Menu from "./components/Menu";
import About from "./components/About.jsx/About";
import { CSSTransition } from "react-transition-group";
import '/public/img/Movie Camera.png';

import Movies from "./components/Movies/Movies";
import FilterSection from "./components/FilterSection/FilterSection";
// import Trillers from "./components/Trillers/Trillers";
// import Drama from "./components/Drama/Drama";
// import Fantasy from "./components/Fantasy/Fantasy";
import { useState } from "react";
import FeedBacksection from "./components/FeedBacksection/FeedBacksection";
import MenuSection from "./components/MenuSection/MenuSection";
// import Comedy from "./components/Comedy/Comedy";
import Genre from "./components/Genre/Genre";

function App() {
  const [tab, setTab] = useState("All");
  const [main, setMain] = useState("main");
  return (
    <div className="container bg-dark container-fluid">
      <MenuSection active={main} onChange={(current) => setMain(current)} />

      <main>
        {main === "main" && (
          <>
            <About />
            <FilterSection
              active={tab}
              onChange={(current) => setTab(current)}
            />

            <CSSTransition
              in={tab === "All"}
              timeout={300}
              classNames="fade"
              unmountOnExit
            >
              <Movies />
            </CSSTransition>
            <CSSTransition
              in={tab === "Comedy"}
              timeout={300}
              classNames="fade"
              unmountOnExit
            >
              <Genre genre={"Comedy"} />
            </CSSTransition>
            <CSSTransition
              in={tab === "Trillers"}
              timeout={300}
              classNames="fade"
              unmountOnExit
            >
              <Genre genre={"Triller"} />
            </CSSTransition>
            <CSSTransition
              in={tab === "Fantasy"}
              timeout={300}
              classNames="fade"
              unmountOnExit
            >
              <Genre genre={"Fantasy"} />
            </CSSTransition>
            <CSSTransition
              in={tab === "Drama"}
              timeout={300}
              classNames="fade"
              unmountOnExit
            >
              <Genre genre={"Drama"} />
            </CSSTransition>
          </>
        )}

        {main === "feedBack" && (
          <>
            <section className="container">
              <FeedBacksection />
            </section>
          </>
        )}
      </main>
    </div>
  );
}

export default App;
