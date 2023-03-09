import { useEffect, useState} from "react";
import { Link, Route, Routes} from "react-router-dom";
 import * as bookShelfAPI from "../server/bookshelf-app";
  // import AuthorSubView from "./AuthorSubView";

// import PageHeading from "../PageHeading/PageHeading";


export default function AuthorsView() {
  const [authors, setAuthors] = useState([]);

  //  debugger
  useEffect(() => {
    bookShelfAPI.fetchAuthors().then(setAuthors);
    
  },[])
  
  return (
    <>
      {/* <PageHeading text="Авторы" /> */}
      {authors &&
        authors.map((a) => (
          <Link key={a.id} to={`authorId/${a.id}`}>
            <li> {a.name}</li>
          </Link>
        ))}

      <hr />
      {/* <Outlet /> */}

      <Routes>
        <Route path={`authors/`} element={<p>dff</p>} />
        {/* {authors && <Route path={`authorId/id`} element={<AuthorSubView />} />} */}
      </Routes>
    </>
  );

}

  // authors.map((a) => (
  //           <li>
  //             {/* to={`authorId/${a.id + a.name}`} */}
  //             <Link key={a.id} to={`authorId/${a.id}`}>
  //               {a.name}
  //             </Link>
  //           </li>
  //         ))