export const NavBar = () => {
  return (
    <nav id="navbar" className="navbar text-white">
      <div
        id="containerNav"
        className="container-fluid justify-content-center "
      >
        <a
          id="title"
          className=" navbar-brand w-50 text-white text-center m-0"
          href="#"
        >
          Gestion de Proyectos
        </a>
        <ul
          id="menu"
          className="d-flex w-50 justify-content-evenly container-fluid "
        >
          <li>
            <a className="nav-link" href="#funcion">
              Funcion
            </a>
          </li>
          <li>
            <a className="nav-link" href="#container-cards">
              Proyectos
            </a>
          </li>
          <li>
            <a className="nav-link" href="#content-footer">
              Sobre nosotros
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
