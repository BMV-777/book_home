import { useEffect, useState} from "react";
import { NavLink, Outlet} from "react-router-dom";
import * as bookShelfAPI from "../server/bookshelf-app";
import { PageHeading } from "../PageHeading/PageHeading";



export default function AuthorsView() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    bookShelfAPI.fetchAuthors().then(setAuthors);
    
  },[])
  
  return (
    <>
      <PageHeading>Авторы </PageHeading>

      {authors && (
        <ul>
          {authors.map((a) => (
            <NavLink key={a.id} to={`${a.id}`}>
              <li> {a.name}</li>
            </NavLink>
          ))}
        </ul>
      )}
      <hr/>
      <Outlet />
    </>
  );

}

