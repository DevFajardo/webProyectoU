export const NavBarResponsive = () => {
  return (
    <div id="responsiveNavbar" className="pos-f-t d-none">
      <div className="collapse" id="navbarToggleExternalContent">
        <div id="contentNav" className=" p-4">
          <nav>
            <ul className="container-fluid ">
              <li className="w-25">
                <a className="text-white nav-link" href="#funcion">
                  Funcion
                </a>
              </li>
              <li className="w-25">
                <a className="text-white nav-link" href="#container-cards">
                  Proyectos
                </a>
              </li>
              <li className="w-25">
                <a className="text-white nav-link" href="#content-footer">
                  Sobre nosotros
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <nav id="navRes" className="navbar navbar-dark ">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>
    </div>
  );
};
