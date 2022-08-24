import React from "react";

import { FcGoogle } from "react-icons/fc";

import { useForm } from "react-hook-form";

import { Link, useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";

import { postLoginUser } from "../state/user";

import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Flex,
  Box,
  Stack,
  Heading,
  Text,
  useColorModeValue,
  Divider,
} from "@chakra-ui/react";

const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  function onSubmit(values) {
    console.log(values)
    dispatch(postLoginUser(values))
    navigate('/');
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
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
          m={"auto"}
        >
          <Stack align={"center"} mb="8">
            <Heading fontSize={"4xl"}>Sign in to your account</Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to enjoy our selection of books
            </Text>
          </Stack>
          <FormControl isInvalid={errors.email}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              id="email"
              {...register("email", {
                required: "This is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address",
                },
              })}
            />
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.password}>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              type={"password"}
              id="password"
              {...register("password", {
                required: true,
                minLength: {
                  value: 8,
                  message: "Minimum length should be 8",
                },
              })}
            />
            <FormErrorMessage>
              {errors.password && errors.password.message}
            </FormErrorMessage>
          </FormControl>
          <Button
            mt={4}
            colorScheme="pink"
            isLoading={isSubmitting}
            type="submit"
          >
            Sing in
          </Button>
          <Button
            mt={4}
            color={"black"}
            leftIcon={<FcGoogle />}
            variant="outline"
          >
            Login with Google
          </Button>

          <Divider orientation="horizontal" mt={9} />

          <Heading fontSize={"md"} mt={9}>
            New in our site ?{" "}
          </Heading>
          <Link to={'/register'}>
            <Button mt={6} colorScheme="blue">
              Register
            </Button>
          </Link>
        </Flex>
      </form>
    </>
  );
};

export default Login;
