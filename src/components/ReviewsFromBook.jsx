import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReviewsOfBook } from "../state/reviews";
import { useParams } from "react-router-dom";

import {
  useDisclosure,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Flex,
  Button,
  RadioGroup,
  Stack,
  Radio,
  useColorModeValue,
  Divider,
  Textarea,
  Heading,
  Text,
} from "@chakra-ui/react";
import SingleReviewCard from "../commons/SingleReviewCard";

const ReviewsFromBook = () => {
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.reviews);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getReviewsOfBook(id));
  }, [dispatch]);
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
      minW={"85%"}
      m={"auto"}
    >
      <Heading mb={'40px'}>Reviews</Heading>
      {reviews.map((review) => (
        <SingleReviewCard review={review} key={review.id}/>
      ))}
    </Flex>
  );
};

export default ReviewsFromBook;
