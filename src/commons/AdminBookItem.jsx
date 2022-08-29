import React from "react";
import { Flex, Image, Text, Spacer, Icon, Tooltip } from "@chakra-ui/react";
import { FaTrashAlt, FaEdit } from "react-icons/fa";

const AdminBookItem = ({ book }) => {
  return (
    <Flex width={"100%"} my="10px">
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
          <Icon as={FaEdit} _hover={{color: 'blue'}} />
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
          <Icon as={FaTrashAlt} ml="20px" _hover={{color: 'red'}} />
        </span>
      </Tooltip>
    </Flex>
  );
};

export default AdminBookItem;
