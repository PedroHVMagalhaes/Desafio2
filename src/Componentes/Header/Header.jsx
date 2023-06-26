import "./index.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header__div1">
        <h2 className="header__div-organizacao">Organização</h2>
      </div>
      <div className="header__div1">
        <h2 className="header__div-tarefas">Tarefas</h2>
      </div>
      <div className="header__div1">
        <h2 className="header__div-sobre">
          <Link to={"/Sobre"}>Sobre</Link>
        </h2>
      </div>
    </div>
  );
};

export default Header;
