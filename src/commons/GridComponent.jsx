import React from "react";
import GridItems from "./GridItems";

import { Grid } from '@chakra-ui/react'

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getBooks } from "../state/books";



const GridComponent = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    books.length ? (
        <Grid templateColumns='repeat(2, 1fr)' > 
          {books.map(book => (
            <GridItems key={book.id} book={book} />
          ))}
        </Grid>
    ) : 'Nothing was found, try again'
  );
};

export default GridComponent;
