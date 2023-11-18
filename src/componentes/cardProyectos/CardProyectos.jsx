export const CardProyectos = ({pr, buscarProyecto, setPro}) => {
  return (
    <div id="tarjeta" key={pr.id}>
      <h3>{pr.nombre}</h3>
      <i id="icon-proyect" className="fa-solid fa-book m-5"></i>
      <button
        data-toggle="modal"
        data-target="#exampleModal"
        id="button-card"
        className="mt-4"
        onClick={() => {
          setPro(buscarProyecto(pr.id));
        }}
      >
        Ver mas!
      </button>
    </div>
  );
};
