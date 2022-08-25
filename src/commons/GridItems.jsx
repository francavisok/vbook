import React from "react";

import {
  Flex,
  Box,
  Image,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
} from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";

import { Link } from "react-router-dom";

import { GridItem } from "@chakra-ui/react";

const GridItems = ({ book }) => {
  return (
    <GridItem>
      <Link to={`/book/${book.id}`}>
        <Flex p={50} w="full" alignItems="center" justifyContent="center">
          <Box
            bg={useColorModeValue("white", "gray.800")}
            maxW="sm"
            borderWidth="1px"
            rounded="lg"
            shadow="lg"
            position="relative"
          >
            <Image
              src={book.posterURL}
              alt={`Picture of ${book.title}`}
              roundedTop="lg"
            />

            <Box p="6">
              <Flex mt="1" justifyContent="space-between" alignContent="center">
                <Box
                  fontSize="2xl"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                >
                  {book.title}
                </Box>
                <Tooltip
                  label="Add to favorites"
                  bg="white"
                  placement={"top"}
                  color={"gray.800"}
                  fontSize={"1.2em"}
                >
                  <chakra.a href={"#"} display={"flex"}>
                    <Icon as={FaHeart} h={7} w={7} alignSelf={"center"} />
                  </chakra.a>
                </Tooltip>
                <Tooltip
                  label="Add to cart"
                  bg="white"
                  placement={"top"}
                  color={"gray.800"}
                  fontSize={"1.2em"}
                >
                  <chakra.a href={"#"} display={"flex"}>
                    <Icon
                      as={FiShoppingCart}
                      h={7}
                      w={7}
                      alignSelf={"center"}
                    />
                  </chakra.a>
                </Tooltip>
              </Flex>

              <Flex justifyContent="space-between" alignContent="center">
                <Box
                  fontSize="2xl"
                  color={useColorModeValue("gray.800", "white")}
                >
                  <Box as="span" color={"gray.600"} fontSize="lg">
                    $
                  </Box>
                  {book.price.toFixed(2)}
                </Box>
              </Flex>
            </Box>
          </Box>
        </Flex>
      </Link>
    </GridItem>
  );
};

export default GridItems;
