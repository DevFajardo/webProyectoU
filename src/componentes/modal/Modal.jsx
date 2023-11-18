export const Modal = ({pro}) => {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div id="modal" className=" modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {pro.nombre}
            </h5>
           
          </div>
          <div className="modal-body">
            {pro.descripcion}
            <br />
            Fecha: {pro.fecha} <br />
            Hora: {pro.hora}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
