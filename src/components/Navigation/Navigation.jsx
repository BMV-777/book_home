// import styled from "./Navigation.module.css";
import { Link } from "./Navigation.stuled";

// let active = {
//   color: "#2196f3",
// };
// let actives = ({ isActive }) => (isActive ? active : undefined);

 const Navigation = () => {

  return (
    <nav>
      <Link to="/"> Главная </Link>
      <Link to="/authors"> Автор</Link>
      <Link to="/books">Книги </Link>
      <hr />
    </nav>
  );

}

export default Navigation;