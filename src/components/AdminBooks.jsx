import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getBooks } from "../state/books";

import AdminBookItem from "../commons/AdminBookItem";


import { Flex } from "@chakra-ui/react";

const AdminBooks = () => {
  const dispatch = useDispatch();
  const books = useSelector(state => state.books)
  console.log('BOOOOKS', books)

  useEffect(() => {
    dispatch(getBooks())
  }, [dispatch]);

  return (
    <Flex direction={'column'}>
        {books.map(book => (
            <AdminBookItem book={book} />
        ))}
    </Flex>
  )
};

export default AdminBooks;
