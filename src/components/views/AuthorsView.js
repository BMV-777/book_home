import { useEffect, useState } from "react";
import { NavLink, Outlet,Route,Routes } from "react-router-dom";
 import * as bookShelfAPI from "../server/bookshelf-app";
import AuthorSubView from "./AuthorSubView";

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
            <li>
              <NavLink key={a.id} to={`authorId/${a.id}`}>
                {a.name}
              </NavLink>
            </li>
          ))}
      </ul>
      <hr />
      <Outlet />
      <Routes>
        <Route path="authorId" element={<AuthorSubView  />} />
      </Routes>
    </>
  );

}