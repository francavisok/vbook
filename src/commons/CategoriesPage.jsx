import { Grid, Heading, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getGenresOfBook } from "../state/genre";
import GridItems from "./GridItems";
import { useMediaQuery } from "@chakra-ui/react";

const CategoriesPage = () => {
  const dispatch = useDispatch();
  const { genreId } = useParams();
  const genre = useSelector((state) => state.genre);
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 700px)");

  useEffect(() => {
    dispatch(getGenresOfBook(genreId));
  }, [genreId, dispatch]);

  return (
    <>
      {genre.length ? (
        <>
          <Heading>{genre.genreName} books</Heading>
          <SimpleGrid
            /* templateColumns={isNotSmallerScreen ?  'repeat(3, 1fr)' : 'repeat(1, 1fr)' } gap={'40px'} */ minChildWidth="300px"
            spacing="40px"
          >
            {genre?.map((book) => (
              <GridItems key={book.id} book={book} />
            ))}
          </SimpleGrid>
        </>
      ) : (
        "Nothing was found, try again"
      )}
    </>
  );
};

export default CategoriesPage;
