import React from "react";
import GridItems from "./GridItems";

import { Grid, SimpleGrid } from '@chakra-ui/react'

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getBooks } from "../state/books";

import { useMediaQuery } from "@chakra-ui/react";

const GridComponent = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  const [isNotSmallerScreen] = useMediaQuery('(min-width: 700px)')
  

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    books.length ? (
        <SimpleGrid /* templateColumns={isNotSmallerScreen ?  'repeat(3, 1fr)' : 'repeat(1, 1fr)' } gap={'40px'} */ minChildWidth='300px' spacing='40px'> 
          {books.map(book => (
            <GridItems key={book.id} book={book} />
          ))}
        </SimpleGrid>
    ) : 'Nothing was found, try again'
  );
};

export default GridComponent;
