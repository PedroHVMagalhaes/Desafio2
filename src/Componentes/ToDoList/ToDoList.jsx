import { useState } from "react";
import ModalDelete from "../Modals/ModalDelete";
import ModalEdit from "../Modals/ModalEdit";
import "./index.scss";

const ToDoList = ({ data }) => {
  const [openModal, setOpenModal] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);

  const closeModal = () => {
    setOpenModal(false);
    setOpenModalDelete(false);
  };

  return (
    <div>
      <table
        className="tftable"
        style={{
          display: openModal || openModalDelete ? "none" : "table",
        }}
      >
        <thead>
          <tr className="tftable__task">
            <th>Tarefa</th>
            <th>Status</th>
            <th>Opções</th>
          </tr>
        </thead>
        {data.map((task) => (
          <tbody key={task.id}>
            <tr className="tftable__task">
              <td>{task.title}</td>
              <td>
                <input type="checkbox" checked={task.completed} />
              </td>
              <td className="icones">
                <img
                  src="./editar.svg"
                  height="20rem"
                  onClick={() => setOpenModal(true)}
                />
                <img
                  src="./lixeira.svg"
                  height="20rem"
                  onClick={() => setOpenModalDelete(true)}
                />
              </td>
            </tr>
          </tbody>
        ))}
      </table>
      <div>
        <ModalEdit isOpen={openModal} onClose={closeModal} />
        <ModalDelete isOpenDelete={openModalDelete} onClose={closeModal} />
      </div>
    </div>
  );
};

export default ToDoList;
