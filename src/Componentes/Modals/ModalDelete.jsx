import "./index.scss";

const ModalDelete = ({ isOpenDelete, onClose }) => {
  if (isOpenDelete) {
    return (
      <div className="modalcontainer">
        <div className="modalcontainercontent">
          <h1>Deseja excluir esse item?</h1>
          <div className="modalcontainercontentbuttons">
            <button className="no" onClick={onClose}>
              Não
            </button>
            <button className="yes">Sim</button>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export default ModalDelete;
