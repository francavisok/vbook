import React from "react";
import {
  Flex,
  Image,
  Text,
  Spacer,
  Icon,
  Tooltip,
} from "@chakra-ui/react";
import { FaTrashAlt, FaEdit } from "react-icons/fa";

import { useDispatch } from "react-redux";
import { deleteBook } from "../state/book";
import { getBooks } from "../state/books";

const AdminBookItem = ({ book }) => {
  const dispatch = useDispatch();

  async function handleDeleteClick(bookId) {
    await dispatch(deleteBook(bookId));
    dispatch(getBooks());
  }

  return (
    <Flex width={"100%"} my="10px" >
      <Image src={book.posterURL} boxSize="30px" objectFit={"cover"} />
      <Text ml={"30px"}>{book.title}</Text>

      <Spacer />
      <Tooltip
        label="Edit book"
        bg="white"
        placement={"top"}
        color={"gray.800"}
        fontSize={"1.2em"}
      >
        <span>
          <Icon as={FaEdit} _hover={{ color: "blue" }} />
        </span>
      </Tooltip>
      <Tooltip
        label="Delete book"
        bg="white"
        placement={"top"}
        color={"gray.800"}
        fontSize={"1.2em"}
      >
        <span>
          <Icon
            as={FaTrashAlt}
            ml="20px"
            _hover={{ color: "red" }}
            onClick={() => handleDeleteClick(book.id)}
          />
        </span>
      </Tooltip>
    </Flex>
  );
};

export default AdminBookItem;
