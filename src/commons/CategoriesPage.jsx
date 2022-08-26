import { Grid, Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getGenresOfBook } from "../state/genre";
import GridItems from "./GridItems";

const CategoriesPage = () => {
  const dispatch = useDispatch();
  const { genreId } = useParams();
const genre = useSelector(state=>state.genre)

useEffect(()=>{
dispatch(getGenresOfBook(genreId))

},[genreId])

  return <> 
  
  {genre[0]?.books?.length ? (<>
    <Heading>{genre[0].genreName} books</Heading>
    <Grid templateColumns='repeat(2, 1fr)' > 
      {genre[0]?.books?.map(book => (
        <GridItems key={book.id} book={book} />
      ))}
    </Grid>
    </>
) : 'Nothing was found, try again'}</>;
};

export default CategoriesPage;
