import Header from "../../Header/Header";
import "./index.scss";

const Sobre = () => {
  return (
    <div className="container">
      <Header />
      <section className="container__inform">
        <h1 className="container__inform-title">Autor</h1>
        <h3 className="container__inform-name">Pedro Viana</h3>
        <h3>
          GitHub:
          <a className="link" href="https://github.com/PedroHVMagalhaes">
            https://github.com/PedroHVMagalhaes
          </a>
        </h3>
      </section>
    </div>
  );
};

export default Sobre;
