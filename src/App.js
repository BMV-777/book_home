  import { Route,Routes } from "react-router-dom";

import Layout from "./components/Layout/Layout";
// import Container from "./components/Container/Container";
// import AuthorSubView from "./components/views/AuthorSubView";
// import AuthorsView from "./components/views/AuthorsView";
// import BookDetailsView from "./components/views/BookDetailsView";
// import BooksView from "./components/views/BooksView";

 import HomeView from "./components/views/HomeView";
//  import NotFoundView from "./components/views/NotFoundView";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeView/>}/>
      </Route>
    </Routes>
    // --delay 300 --port 4040
  );
}

export default App;


// <Container>
//       <AppBar />

//        <Routes>
//         <Route path="/" element={<HomeView />} />
//         <Route path="authors/*" element={<AuthorsView />} />

//         <Route path="books" element={<BooksView />} />
//         <Route path="books/:bookId" element={<BookDetailsView />} />
//         <Route path="*" element={<NotFoundView />} />
//       </Routes> 
//     </Container>