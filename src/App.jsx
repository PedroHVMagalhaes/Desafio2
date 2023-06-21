import "./App.scss";
import Header from "./Componentes/Header/Header";

const App = ({ data }) => {
  return (
    <section className="body">
      <header>
        <Header />
      </header>
      <h1 className="title">
        Otimize seu tempo e se organize com o nosso Planejador Diário.
      </h1>
      <table className="tftable">
        <tr className="tftable__task">
          <th>Tarefa</th>
          <th>Status</th>
          <th>Opções</th>
        </tr>
        {data.map((task) => (
          <tr key={task.id} className="tftable__task">
            <td>{task.title}</td>
            <td>
              <input type="checkbox" />
            </td>
            <td className="icones">
              <img src="./editar.svg" height="20rem" />
              <img src="./lixeira.svg" height="20rem" />
            </td>
          </tr>
        ))}
      </table>
    </section>
  );
};
export default App;
