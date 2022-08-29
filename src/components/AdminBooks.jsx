import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getBooks } from "../state/books";

import AdminBookItem from "../commons/AdminBookItem";

import { Flex, Button } from "@chakra-ui/react";

const AdminBooks = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  console.log("BOOOOKS", books);

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <Flex direction={'column'}>
      <Button mb={'40px'} >Add new book</Button>
      <Flex direction={"column"}>
        {books.map((book) => (
          <AdminBookItem book={book} />
        ))}
      </Flex>
    </Flex>
  );
};

export default AdminBooks;
