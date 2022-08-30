import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getBooks } from "../state/books";

import AdminBookItem from "../commons/AdminBookItem";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Flex,
  Button
} from '@chakra-ui/react'

const AdminBooks = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  //modal
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <Flex direction={"column"}>

      <Button mb={"40px"} onClick={onOpen}>
        Add new book
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create new book</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>

            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input ref={initialRef} placeholder="Title" required />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Input placeholder="Description" type={'text'} required />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Author</FormLabel>
              <Input placeholder="Author" required />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Price</FormLabel>
              <Input placeholder="Price" type={'number'} required />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>PosterURL</FormLabel>
              <Input placeholder="PosterURL" type={'url'}/>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Release date</FormLabel>
              <Input placeholder="Release date" type="date" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Publisher</FormLabel>
              <Input placeholder="Publisher" />
            </FormControl>

          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Flex direction={"column"}>
        {books.map((book) => (
          <AdminBookItem book={book} key={book.id} />
        ))}
      </Flex>
    </Flex>
  );
};

export default AdminBooks;
