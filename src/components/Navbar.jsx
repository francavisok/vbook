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
import { FaShoppingCart } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";
import { postLogoutUser } from "../state/user";

//TODO:
//1- Mostrar "Register" o "Login" dependiendo en qué estado está
//2- Cambiar "Cart" por CartIcon(no hay en chakra icons)
//3- Corregir Link to="" de "Categories"
//4- Tamaño de input search?

const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(postLogoutUser());
  };

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
              _hover={{ color: "#d43c8c" }}
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

          {user.id ? (
            <>
              <Link to="/">
                <Button
                  rounded="md"
                  as="a"
                  variant="ghost"
                  aria-label="Cart"
                  mx={1}
                  my={5}
                  w="100%"
                  _hover={{ color: "#d43c8c" }}
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
                  _hover={{ color: "#d43c8c" }}
                >
                  <FaShoppingCart />
                </Button>
              </Link>
              <Button
                colorScheme="pink"
                boxShadow="xl"
                rounded="md"
                variant="ghost"
                aria-label="Logout"
                mx={1}
                my={5}
                w="100%"
                onClick={handleClick}
              >
                Logout
              </Button>
            </>
          ) : (
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
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
