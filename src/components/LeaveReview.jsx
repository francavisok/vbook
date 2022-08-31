import React from "react";

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
} from "@chakra-ui/react";

import { useForm, Controller } from "react-hook-form";
import { useParams } from "react-router-dom";

import { addReview } from "../state/review";
import { getReviews } from "../state/reviews";
import { getReviewsOfBook } from "../state/reviews";

import { useDispatch } from "react-redux";

const LeaveReview = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const {
    handleSubmit,
    register,
    control,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(values) {
    const payload = {...values, bookId: id}
    console.log("values", payload);
    await dispatch(addReview(payload))
    dispatch(getReviewsOfBook(id))
  }

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <Flex
      direction={"column"}
      align={"start"}
      justify={"center"}
      rounded={"lg"}
      bg={useColorModeValue("white", "gray.700")}
      boxShadow={"lg"}
      p={8}
      spacing={4}
      maxWidth="fit-content"
      minW={"fit-content"}
      m={"auto"}
      mt={'30px'}
    >
        <Heading size={'md'} >Leave a review</Heading>
        <Divider my={'15px'}/>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl id="valoration">
          <FormLabel fontWeight={'bold'}>Rating</FormLabel>
          <Controller
            name="valoration"
            control={control}
            render={({ field }) => (
              <RadioGroup {...field}>
                <Stack direction="row">
                  <Radio value="1">1</Radio>
                  <Radio value="2">2</Radio>
                  <Radio value="3">3</Radio>
                  <Radio value="4">4</Radio>
                  <Radio value="5">5</Radio>
                </Stack>
              </RadioGroup>
            )}
          />
        </FormControl>

        <FormControl mt={4} isInvalid={errors.reviewComment}>
                <FormLabel htmlFor="reviewComment" fontWeight={'bold'}>Your comment</FormLabel>
                <Textarea
                  ref={initialRef}
                  type="text"
                  id="reviewComment"
                  {...register("reviewComment", {
                    required: "This is required",
                  })}
                />
                <FormErrorMessage>
                  {errors.reviewComment && errors.reviewComment.message}
                </FormErrorMessage>
              </FormControl>

        <Flex mt={7} >
          <Button
            colorScheme="blue"
            mr={3}
            isLoading={isSubmitting}
            type="submit"
          >
            Submit
          </Button>
        </Flex>
      </form>
    </Flex>
  );
};

export default LeaveReview;
