import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import React from "react";

import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { SearchIcon } from "@chakra-ui/icons";
import {FaShoppingCart} from "react-icons/fa"

//TODO:
//1- Mostrar "Register" o "Login" dependiendo en qué estado está
//2- Cambiar "Cart" por CartIcon(no hay en chakra icons)
//3- Corregir Link to="" de "Categories"
//4- Tamaño de input search?

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
        <Flex>
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
              _hover={{color:"#d43c8c"}}
            >
              Categories
            </Button>
          </Link>

          <InputGroup mx={10} my={5}>
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="gray.300" />}
            />
            <Input
              type={"text"}
              focusBorderColor="pink.400"
              placeholder="Search here"
              boxShadow="xl"
              rounded="xl"
              w="200%"
            />
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
              _hover={{color:"#d43c8c"}}
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
              marginRight={2}
              w="100%"
              _hover={{color:"#d43c8c"}}

            >
             <FaShoppingCart/>
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
