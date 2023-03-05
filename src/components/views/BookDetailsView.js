 import { useState, useEffect } from "react";
import * as bookShelfApi from '../server/bookshelf-app';
// import PageHeading from '../PageHeading/PageHeading';
import { useParams } from "react-router-dom"



export default function BookDetailsView() {
  const { bookId } = useParams();
   const [book, setBook] = useState(null);
  
  useEffect (() => {
    bookShelfApi.fetchBookById(bookId).then(setBook);
  }, [bookId])
  
  return (
    <div>
      {/* <PageHeading text={`Книга 1`} */}
      {book && (
        <>
          {/* <h1>{book.title}</h1> */}
          <img src={book.imgUrl} alt={book.title} />
          <h2> {book.title}</h2>
          <p>Автор: {book.author.name}</p>
          <p>Описание: {book.descry}</p>
          <p>Жанр: {book.genre}</p>
        </>
      )}
    </div>
  );
}