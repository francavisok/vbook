import React from "react";

import { useForm } from "react-hook-form";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  InputGroup,
  Button,
  InputLeftAddon,
  Stack,
  Icon,
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack m={9}>
        <FormControl isInvalid={errors.name}>
          <InputGroup>
            <InputLeftElement children={<Icon name="info" />} />
            <Input
              id="email"
              placeholder="email"
              {...register("email", {
                required: "This is required",
                minLength: { value: 4, message: "Minimum length should be 4" },
              })}
            />
          </InputGroup>
          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>
        <Button
          mt={4}
          colorScheme="teal"
          isLoading={isSubmitting}
          type="submit"
        >
          Submit
        </Button>
      </Stack>
    </form>
  );
};

export default Login;
