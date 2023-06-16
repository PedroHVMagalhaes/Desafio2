import "./App.scss";
import Header from "./Componentes/Header/Header";

function App() {
  return (
    <section className="body">
      <header>
        <Header />
      </header>
      <h1 className="title">
        Otimize seu tempo e se organize com o nosso Planejador Diário.
      </h1>
      <div className="divTopic">
        <div className="divTopic__tarefa">
          <h2>Tarefa</h2>
        </div>
        <div className="divTopic__status">
          <h2>Status</h2>
        </div>
        <div className="divTopic__opcoes">
          <h2>Opções</h2>
        </div>
      </div>
      <hr />
    </section>
  );
}

export default App;
