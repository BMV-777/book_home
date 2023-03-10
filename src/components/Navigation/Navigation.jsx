
import { Link } from "./Navigation.styled";



 const Navigation = () => {

  return (
    <nav>
      <Link to="/"> Главная </Link>
      <Link to="/authors"> Автор</Link>
      <Link to="/books">Книги </Link>
      
    </nav>
  );

}

export default Navigation;