import { Button, Flex, Input, InputGroup } from "@chakra-ui/react";
import React from "react";

import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

//TODO:
//1- Mostrar "Register" o "Login" dependiendo en qué estado está
//2- Cambiar "Cart" por CartIcon
//3- Agregar SearchIcon al input "Search" (dentro de InputGroup)
//4- Corregir Link to="" de "Categories"
//5- Tamaño de input search?

const Navbar = () => {
  return (
    <Box>
      <Flex
        pos="flex"
        top="1rem"
        right="1rem"
        align="center"
        justify="center"
        w="100%"
      >
        <Flex >
          <Link to="/">
            <Button
            
              boxShadow="xl"
              rounded="md"
              as="a"
              colorScheme="pink"
              aria-label="Home"
              mx={1}
              my={5}
              w="100%"
            >
              V-Book
            </Button>
          </Link>

          <Link to="/">
            <Button
              rounded="md"
              as="a"
              variant="ghost"
              aria-label="Home"
              mx={1}
              my={5}
              w="100%"
              _hover="none"

            >
              Categories
            </Button>
          </Link>
          <InputGroup>
            <Input
              focusBorderColor="pink.400"
              placeholder="Search here"
              boxShadow="xl"
              rounded="xl"
              mx={10}
              my={5}
              w="200%"
            ></Input>
          </InputGroup>
          <Link to="/">
            <Button
              rounded="md"
              as="a"
              variant="ghost"
              aria-label="Cart"
              mx={1}
              my={5}
              w="100%"
              _hover="none"

            >
              My shopping
            </Button>
          </Link>
          <Link to="/cart">
            <Button
              rounded="md"
              as="a"
              variant="ghost"
              aria-label="Cart"
              mx={1}
              my={5}
              w="100%"
              _hover="none"
            >
              Cart
            </Button>
          </Link>
          <Link to="/login">
            <Button
              colorScheme="pink"
              boxShadow="xl"
              rounded="md"
              as="a"
              variant="ghost"
              aria-label="Login"
              mx={1}
              my={5}
              w="100%"
            >
              Login
            </Button>
          </Link>
          <Link to="/register">
            <Button
              boxShadow="xl"
              colorScheme="pink"
              rounded="md"
              as="a"
              variant="ghost"
              aria-label="Register"
              mx={1}
              my={5}
              w="100%"
            >
              Register
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
