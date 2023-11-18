export const Final = () => {
  return (
    <>
      <div id="content-footer" className="p-5">
        <div className="desarrolladores">
          <h5>Desarrollado por  </h5>
          <ul className="nav flex-column">
            <li>
              <a href="#" className=" nav-link p-0 text-white">
                Emmanuel Fajardo Cadena
              </a>
            </li>
            <li>
              <a href="#" className="nav-link p-0 text-white">
                Antony ospino polo
              </a>
            </li>
            <li>
              <a href="#" className="nav-link p-0 text-white">
                Alejandro Cantillo Pallares
              </a>
            </li>
          </ul>
        </div>

        <div className="correo">
          <form>
            <h5>Obten Nuestro Software</h5>
            <p>El ejecutable sera enviado a tu correo.</p>
            <div className="contentInput d-flex  gap-2">
              <input
                id="newsletter1"
                type="text"
                className="w-50 form-control"
                placeholder="Direccion de Email"
              />
              <button className="btn btn-primary" type="button">
                Obtener
              </button>
            </div>
          </form>
          <ul className="contentRedes nav">
            <li>
              <a href="#">
                <i
                  id="footerIcon"
                  className="text-white fa-brands fa-twitter"
                ></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i
                  id="footerIcon"
                  className="text-white fa-brands fa-instagram"
                ></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i
                  id="footerIcon"
                  className="text-white fa-brands fa-facebook"
                ></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div
        id="derechos"
        className="d-flex text-center  justify-content-center border-top pt-5"
      >
        <p>&copy; 2023 Todos los Derechos Reservados.</p>
      </div>
    </>
  );
};
