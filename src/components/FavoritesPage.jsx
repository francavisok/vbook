import React, {useEffect} from "react";

import { Container, Flex, Heading, SimpleGrid, useColorModeValue, useToast } from "@chakra-ui/react";

import { useDispatch, useSelector } from "react-redux";
import { getAllOrdersFromUser } from "../state/orders";

import OrderFullfiledCard from "../commons/OrderFullfiledCard";
import { getAllFavoritesFromUser } from "../state/favorites";
import GridItems from "../commons/GridItems";
import { useNavigate } from "react-router-dom";

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast()


  const favorites = useSelector(state=> state.favorites)
  const user = useSelector((state) => state.user);


  useEffect(()=>{
    user?.id ?   dispatch(getAllFavoritesFromUser()):
    navigate("/login");

  }, [dispatch])


  return (
    <Flex
      direction={"column"}
      align={"center"}
      justify={"center"}
      rounded={"lg"}
      bg={useColorModeValue("white", "gray.700")}
      boxShadow={"lg"}
      p={8}
      spacing={4}
      maxWidth="fit-content"
      minW={"80%"}
      m={"auto"}
    >
      <Heading mb={'40px'}>Favorites</Heading>
    {favorites.length ? 
      <Container maxW='4xl'>
        <SimpleGrid minChildWidth='300px' spacing='40px'> 
          {favorites.map(book => (
            <GridItems key={book.bookId} book={book} favorites={favorites}/>
          ))}
        </SimpleGrid>
        </Container>
: "You don't have any favorite"}
    </Flex>
  );
};

export default FavoritesPage;
