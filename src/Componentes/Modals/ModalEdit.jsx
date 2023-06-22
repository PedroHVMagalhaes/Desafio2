import "./index.scss";

const ModalEdit = ({ isOpen, onClose }) => {
  if (isOpen) {
    return (
      <div>
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
      </div>
    );
  }
  return null;
};

export default ModalEdit;
