import {  useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import * as bookShelfApi from "../server/bookshelf-app";

export const useFetchAuthor = () => {
  const { authorId } = useParams();
  const [authors, setAuthors] = useState(null);

  useEffect(() => {
    bookShelfApi.fetchAuthorById(authorId).then(setAuthors);
  }, [authorId]);
  return authors;
};
