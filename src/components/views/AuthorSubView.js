import { useParams } from "react-router-dom";
//  import { useState, useEffect } from "react";
// import * as bookShelfApi from "../server/bookshelf-app";


export default function AuthorSubView() {
   
  const { authorId } = useParams();
  console.log(authorId)


  //  useEffect(() => {
  //    bookShelfApi.fetchBookById(authorId).then(setBook);
  //  }, [authorId]);
  
     const author = authorId.find(author => author.id === Number(authorId))
  return (
    <>
      {author}
        {/* <h2 key={author.id}>{author.name}</h2>   */}
      {/* {book && (<div key={book.id}>{book.name }</div>)} */}
    </>
  );
}