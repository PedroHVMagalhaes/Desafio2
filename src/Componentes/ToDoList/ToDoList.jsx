import { useState } from "react";
import ModalDelete from "../Modals/ModalDelete";
import ModalEdit from "../Modals/ModalEdit";
import ModalAdd from "../Modals/ModalAdd";
import "./index.scss";

const ToDoList = ({ data }) => {
  const [openModal, setOpenModal] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [openNewTask, setOpenNewTask] = useState(false);
  const [openDescription, setOpenDescription] = useState("");

  const closeModal = () => {
    setOpenModal(false);
    setOpenModalDelete(false);
    setOpenNewTask(false);
  };

  const psModalEdit = (description) => {
    setOpenDescription(description);
    setOpenModal(true);
  };

  const psModalDelete = (description) => {
    setOpenDescription(description);
    setOpenModalDelete(true);
  };

  const modalAddTask = () => {
    setOpenNewTask(true);
  };

  return (
    <div>
      <table
        className="tftable"
        style={{
          display:
            openModal || openModalDelete || openNewTask ? "none" : "table",
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
                  onClick={() => psModalEdit(task.description)}
                />
                <img
                  src="./lixeira.svg"
                  height="20rem"
                  onClick={() => psModalDelete(task.description)}
                />
              </td>
            </tr>
          </tbody>
        ))}
        <tbody>
          <tr className="newTask">
            <td>Nova Tarefa</td>
            <td className="newTask__add" onClick={() => modalAddTask()}>
              +
            </td>
          </tr>
        </tbody>
      </table>
      <ModalEdit
        isOpen={openModal}
        onClose={closeModal}
        TaskDescription={openDescription}
      />
      <ModalDelete
        isOpenDelete={openModalDelete}
        onClose={closeModal}
        TaskDescription={openDescription}
      />

      <ModalAdd isOpenNewTask={openNewTask} onClose={closeModal} />
    </div>
  );
};

export default ToDoList;
