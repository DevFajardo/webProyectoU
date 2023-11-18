export const Tecnologias = () => {
  return (
    <>
      <div className="text-center p-5 ">
        <h1 id="main-title" className="p-5 m-5 text-white">
          Tecnologias
        </h1>
      </div>

      <div id="content-tecnologias" className="d-flex justify-content-evenly">
        <div className="d-flex w-25 row justify-content-center mt-5">
          <div id="card-tecnologias">
            <i id="icon-proyect" className="fa-brands fa-java"></i>
          </div>
          <div className="w-75">
            <h3 className="text-center text-white">Java</h3>
            <p className="text-center text-white">
              <br />
              Lenguaje de programacion java para la creacion de las interfaz
            </p>
          </div>
        </div>

        <div className="d-flex w-25 row justify-content-center mt-5">
          <div id="card-tecnologias">
            <i id="icon-proyect" className="fa-solid fa-database"></i>
          </div>
          <div className="w-75">
            <h3 className="text-center text-white">Mysql</h3>
            <p className="text-center text-white">
              <br />
              motor de base de datos
            </p>
          </div>
        </div>

        <div className="d-flex w-25 row justify-content-center mt-5">
          <div id="card-tecnologias">
            <i id="icon-proyect" className="fa-brands fa-react"></i>
          </div>
          <div className="w-75">
            <h3 className="text-center text-white">React</h3>
            <p className="text-center text-white">
              <br />
              Framework de javascript para la creacion de interfaces
              </p>
          </div>
        </div>
      </div>
    </>
  );
};
