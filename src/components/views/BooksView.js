import { useEffect, useState } from "react";
import * as  bookShelfAPI from '../server/bookshelf-app';
import { Link } from "react-router-dom";
// import PageHeading from "../PageHeading/PageHeading";


export default function BooksView() {
  const [books, setBooks] = useState(null);
  // const { pathname } = useLocation();

 
  useEffect(() => {
      bookShelfAPI.fetchBooks().then(setBooks);
    
  }, []);

  return (
    <>
      {/* <PageHeading text="Авторы" /> */}
      <ul>
        {books &&
          books.map((book) => (
            <Link key={book.id} to={`/books/${book.id}`}>
              <li> {book.title}</li>
            </Link>
          ))}
      </ul>
    </>
  );
}
