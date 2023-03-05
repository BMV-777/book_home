  import { Route,Routes } from "react-router-dom";
 import AppBar from "./components/AppBar/AppBar";
import Container from "./components/Container/Container";
import AuthorsView from "./components/views/AuthorsView";
import BookDetailsView from "./components/views/BookDetailsView";
import BooksView from "./components/views/BooksView";

import HomeView from "./components/views/HomeView";
 import NotFoundView from "./components/views/NotFoundView";
// import db from '../db.json';

// console.log(db)
function App() {
  return (
    <Container>
      <AppBar />

      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/authors" element={<AuthorsView />} />
        <Route path="/books" element={<BooksView />} />
        <Route path="/books/:bookId" element={<BookDetailsView />} />
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </Container>
    // --delay 300 --port 4040
  );
}

export default App;
