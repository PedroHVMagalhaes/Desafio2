import "./index.scss";

const ModalDelete = ({ isOpenDelete, onClose, TaskDescription }) => {
  if (isOpenDelete) {
    return (
      <div className="modalContainer">
        <h1 className="modalContainer__title">Deseja excluir esse item?</h1>
        <p>{TaskDescription}</p>
        <div className="modalContainer__buttons">
          <button className="no" onClick={onClose}>
            Não
          </button>
          <button className="yes">Sim</button>
        </div>
      </div>
    );
  }
  return null;
};

export default ModalDelete;
