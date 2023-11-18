import { CardProyectos } from '../cardProyectos/CardProyectos';
import { buscarProyecto, proyectos} from '../../data/proyectos';
export const Proyectos = ({setPro}) => {
  return (
    <>
      <div className="text-center p-5 ">
        <h1 id="main-title" className="p-5 m-5 text-white">
          Muestras de proyectos
        </h1>
      </div>
      <hr />
      <div
        id="container-cards"
        className="d-flex gap-5  justify-content-center flex-wrap p-5"
      >
        {proyectos.map((pr) => (
          <CardProyectos
            key={pr.id}
            pr={pr}
            buscarProyecto={buscarProyecto}
            setPro={setPro}
          />
        ))}
      </div>
    </>
  );
};
