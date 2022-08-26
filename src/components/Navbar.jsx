import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import React, { useEffect } from "react";

import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {
  ChevronDownIcon,
  ExternalLinkIcon,
  SearchIcon,
} from "@chakra-ui/icons";
import { FaShoppingCart } from "react-icons/fa";
import {  BiBookBookmark } from "react-icons/bi";
import {FaHeart} from "react-icons/fa"

import { useDispatch, useSelector } from "react-redux";
import { postLogoutUser } from "../state/user";
import { getGenres } from "../state/genres";

//TODO:
//1- Corregir Link to="" de "Categories"

const Navbar = () => {
  
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const genres = useSelector(state=>state.genres)
  
  
  useEffect(()=>{
    dispatch(getGenres()).then()
  },[dispatch])
  
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

          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              rounded="md"
              variant="ghost"
              aria-label="categories"
              mx={2}
              my={5}
              w="50%"
              _hover="none"
            >
              Categories
            </MenuButton>
            <MenuList>
              {genres?.map((genre) => {
                return(
                <Link to={`/category/${genre.id} `}>
                  <MenuItem _hover={{ color: "#d43c8c" }}>{genre.genreName}</MenuItem>
                </Link>)
              })}
            </MenuList>
          </Menu>

          {user.id ? (
            <>
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
              <Menu>
                <MenuButton
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                  rounded="md"
                  variant="ghost"
                  aria-label="categories"
                  mx={1}
                  my={5}
                  w="50%"
                  _hover="none"
                >
                  {user.userName}
                </MenuButton>
                <MenuList>
                  <Link to={`/favorites`}>
                    <MenuItem  icon={<FaHeart/>} _hover={{ color: "#d43c8c" }}>
                      Favorites{" "}
                    </MenuItem>
                  </Link>
                  <Link to={`/boughtItems`}>
                    <MenuItem icon={<BiBookBookmark/>} _hover={{ color: "#d43c8c" }}>My books</MenuItem>
                  </Link>
                  <MenuDivider />
                  <Link to={`/me`}>
                    <MenuItem
                      icon={<ExternalLinkIcon />}
                      _hover={{ color: "#d43c8c" }}
                    >
                      Your account
                    </MenuItem>
                  </Link>
                </MenuList>
              </Menu>
              <Button
                colorScheme="pink"
                boxShadow="xl"
                rounded="md"
                variant="ghost"
                aria-label="Logout"
                mx={1}
                my={5}
                w="40%"
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
