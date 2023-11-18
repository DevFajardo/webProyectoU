import "./App.css";
import { NavBar } from "./componentes/navBar/NavBar";
import { NavBarResponsive } from "./componentes/responsive/navBar/NavBarResponsive";
import { Modal } from "./componentes/modal/Modal";
import { useState } from "react";
import { Proyectos } from "./componentes/proyectos/Proyectos";
import { Funcion } from "./componentes/funcion/Funcion";
import { Tecnologias } from './componentes/tecnologias/Tecnologias'
import { Final } from './componentes/final/Final'

function App() {
  const [pro, setPro] = useState({});
  return (
    <>
      <header>
        <NavBarResponsive />
        <NavBar />
      </header>

      <main className="d-flex ">
        <Modal pro={pro} />
        <Proyectos setPro={setPro} />
        <Funcion />
        <Tecnologias />
      </main>

      <footer className="py-5">
        <Final/>
      </footer>
    </>
  );
}

export default App;
