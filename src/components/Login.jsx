import React from "react";

import { FcGoogle } from "react-icons/fc";

import { useForm } from "react-hook-form";

import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Flex,
  Box,
  Checkbox,
  Stack,
  Link,
  Heading,
  Text,
  useColorModeValue,
  InputLeftElement,
} from "@chakra-ui/react";

const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  function onSubmit(values) {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve();
      }, 3000);
    });
  }

  return (
    <>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack align={"center"}>
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
        </form>
      </Flex>
    </>
  );
};

export default Login;
