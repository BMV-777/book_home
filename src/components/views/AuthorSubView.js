import { Link } from "react-router-dom";
import { useFetchAuthor } from "../hooks/useFetchAuthor";

export default function AuthorSubView() {
   
  const authors = useFetchAuthor();

  return (
    <>
      {!authors && <h2>Loading...</h2>}
      {authors && (
        <ul>
          {authors.books.map(book => (
            <li key={book.id}>
              <Link to={`/books/${book.id}`} >{book.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}