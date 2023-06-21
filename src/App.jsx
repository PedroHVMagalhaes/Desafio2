import "./App.scss";
import Header from "./Componentes/Header/Header";
import ToDoList from "./Componentes/ToDoList/ToDoList";
import { DB } from "./Mock/task.mock";

const App = () => {
  return (
    <section className="body">
      <header>
        <Header />
      </header>
      <h1 className="title">
        Otimize seu tempo e se organize com o nosso Planejador Diário.
      </h1>
      <ToDoList data={DB} />
    </section>
  );
};
export default App;
