import styled from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

let active = {
  color: "#2196f3",
};
let actives = ({ isActive }) => (isActive ? active : undefined);

 const Navigation = () => {

  return (
    <nav>
      <NavLink to="/" className={styled.link} style={actives}>
        Главная
      </NavLink>
      <NavLink to="/authors" className={styled.link} style={actives}>
        Автор
      </NavLink>
      <NavLink to="/books" className={styled.link} style={actives}>
        Книги
      </NavLink>
      <hr/>
    </nav>
  
  );

}

export default Navigation;