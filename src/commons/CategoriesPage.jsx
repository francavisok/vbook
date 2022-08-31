import { Container, Grid, Heading, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getBooksOfGenre } from "../state/genre";
import GridItems from "./GridItems";
import { useMediaQuery } from "@chakra-ui/react";

const CategoriesPage = () => {
  const dispatch = useDispatch();
  const { genreId } = useParams();
  const genreData = useSelector((state) => state.genre);
  const [actualGenre,setActualGenre ] = useState({})

  useEffect(() => {
    dispatch(getBooksOfGenre(genreId));

  }, [genreId, dispatch]);


  return (
    <>
      {genreData.genreBooks?.length ? (
        <>
          <Heading
          mb={"6"}
          >{genreData.genre?.genreName} books</Heading>
          <Container maxW='6xl'>
          <SimpleGrid
             minChildWidth="300px"
            spacing="40px"
          >
            {genreData.genreBooks?.map((book) => (
              <GridItems key={book.id} book={book} />
            ))}
          </SimpleGrid>
          </Container>
        </>
      ) : (
        "Nothing was found, try again"
      )}
    </>
  );
};

export default CategoriesPage;
