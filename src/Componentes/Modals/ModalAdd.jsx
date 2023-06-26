import "./index.scss";

const ModalDelete = ({ isOpenNewTask, onClose }) => {
  if (isOpenNewTask) {
    return (
      <div className="modalContainer">
        <h1 className="modalContainer__title">
          Deseja adicionar uma atividade?
        </h1>
        <input placeholder="Adicione a tarefa"></input>
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
