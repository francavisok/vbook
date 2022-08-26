import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchBooksByTitle } from "../state/books";
import { useNavigate } from "react-router-dom";

import { Search2Icon } from "@chakra-ui/icons";
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  Input,
  InputLeftElement,
  InputGroup,
} from "@chakra-ui/react";

const Hero = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const books = useSelector((state)=>state.books)

  const handleChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchBooksByTitle(value));
    setValue("");
    navigate("#prueba"); // esto todavia no me anda.. buscar solucion para que onsubmit me lleve mas abajo en la pagina ver el grid de productos
  };

  const handleClick = (e) =>{
    e.preventDefault()
    if(books.length){
        const totalBooks = books.length;
        const randomId = Math.ceil(Math.random() * totalBooks);
        navigate(`/book/${randomId}`)
    }
  }

  return (
    <>
      <Container maxW={"3xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            Already now what you are looking for ? <br />
            <Text as={"span"} color={"green.400"}>
              search here
            </Text>
          </Heading>
          <form onSubmit={handleSubmit}>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                color="grey.600"
                fontSize="1.2em"
                children={<Search2Icon color="green.500" />}
              />
              <Input
                borderColor="black.600"
                value={value}
                onChange={handleChange}
              />
            </InputGroup>
          </form>

          <Text color={"gray.500"}>
            Still not sure ? Dont worry, click in the button below and get a
            random book!
          </Text>
          <Stack
            direction={"column"}
            spacing={2}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
            <Button
            onClick={handleClick}
              colorScheme={"green"}
              bg={"green.400"}
              rounded={"full"}
              px={6}
              _hover={{
                bg: "green.500",
              }}
            >
              Get Random Book
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  );
};

export default Hero;