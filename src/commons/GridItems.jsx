import React from "react";
import { useState, useEffect } from "react";

//estilos de chakra ui
import {
  Flex,
  Box,
  Image,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
  useMediaQuery,
  GridItem,
  Text,
} from "@chakra-ui/react";

//iconos reactIcons
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { BsStar, BsStarFill } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";

//otros
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const GridItems = ({ book, favorites }) => {
  const user = useSelector(async (state) => state.user);
  console.log(user)
  const isInFavorites = (favorites.indexOf(book.id) !== -1)

  const handleFavorite = (e) => {
    e.preventDefault();
  };

  //const [isNotSmallerScreen] = useMediaQuery("(min-width: 700px)");

  //array de rating para cantidad de estrellas
  let arrayRating = [];
  for (let i = 1; i <= 5; i++) {
    arrayRating.push(
      <Icon
        key={i}
        as={BsStarFill}
        color={i <= book.rating ? "gold" : "blackAlpha.400"}
        h={4}
        w={4}
        alignSelf={"center"}
        mr="10px"
      />
    );
  }

  return (
    <GridItem>
      <Flex
        //w="full"
        alignItems="center"
        justifyContent="center"
        // h={isNotSmallerScreen ? "500px" : "auto"}
      >
        <Box
          bg={useColorModeValue("white", "gray.800")}
          maxW="sm"
          minW="100%"
          minH={"100%"}
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="relative"
          objectFit={"cover"}
          pt="24px"
        >
          <Link to={`/book/${book.id}`}>
            <Image
              src={book.posterURL}
              alt={`Picture of ${book.title}`}
              roundedTop="lg"
              //width={"200px"}
              height={"160px"}
              overflow="hidden"
              margin="0 auto"
              //boxSize={'300px'}
              //objectFit='cover'
            />
          </Link>

          <Box p="6">
            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Box
                fontSize="2xl"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                noOfLines={1}
              >
                {book.title}
              </Box>
            </Flex>

            <Flex>{arrayRating}</Flex>

            <Flex justifyContent="space-between" alignContent="center">
              <Box
                fontSize="2xl"
                color={useColorModeValue("gray.800", "white")}
                flexGrow="1"
              >
                <Box as="span" color={"gray.600"} fontSize="lg">
                  $
                </Box>
                {book.price.toFixed(2)}
              </Box>

              {user.id ? 
                <>
                  {!isInFavorites ? (<Tooltip
                    label="Remove from favorites"
                    bg="white"
                    placement={"top"}
                    color={"gray.800"}
                    fontSize={"1.2em"}
                  >
                    <Text as={"span"} alignSelf="center">
                      <Icon
                        as={FaHeart}
                        h={5}
                        w={5}
                        alignSelf={"center"}
                        _hover={ {color: "red"} }
                        onClick={handleFavorite}
                      />
                    </Text>
                  </Tooltip>)
                  :
                  (<Tooltip
                  label="Add to favorites"
                  bg="white"
                  placement={"top"}
                  color={"gray.800"}
                  fontSize={"1.2em"}
                >
                  <Text as={"span"} alignSelf="center">
                    <Icon
                      as={FaRegHeart}
                      h={5}
                      w={5}
                      alignSelf={"center"}
                      _hover={{ color: "red" }}
                      onClick={handleFavorite}
                    />
                  </Text>
                </Tooltip>)
                  }

                  <Tooltip
                    label="Add to cart"
                    bg="white"
                    placement={"top"}
                    color={"gray.800"}
                    fontSize={"1.2em"}
                  >
                    <Text as={"span"} alignSelf="center">
                      <Icon
                        as={FiShoppingCart}
                        h={5}
                        w={5}
                        alignSelf={"center"}
                        ml="20px"
                        _hover={{ color: "blue" }}
                      />
                    </Text>
                  </Tooltip>
                </>:<></>
              
              
          }
            </Flex>
          </Box>
        </Box>
      </Flex>
    </GridItem>
  );
};

export default GridItems;
