import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
 import * as bookShelfAPI from "../server/bookshelf-app";
// import PageHeading from "../PageHeading/PageHeading";
// import AuthorSubView from './AuthorSubView';

export default function AuthorsView() {
   const [authors, setAuthors] = useState(null);
  
  useEffect(() => {
    bookShelfAPI.fetchAuthors().then(setAuthors);
    
  },[])
  
  return (
    <>
      {/* <PageHeading text="Авторы" /> */}
      <ul>
        {authors &&
          authors.map((a) => (
            <NavLink key={a.id} to={`/books/${a.id}`}>
              <li >{a.name}</li>
            </NavLink>
          ))}
      </ul>
    </>
  );

}