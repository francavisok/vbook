import { AtSignIcon, EmailIcon, UnlockIcon } from "@chakra-ui/icons";
import {
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";

//TODO:
//1-Crear validaciones finales para cada input:
//      d)definir username lowercase

//3-Utilizar Redux para postear la info del user
//4-Usar useNavigate para redirigir a /login
//5-Styles y FormHelperText solucionados

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <Center>
      <VStack>
        <Heading marginBottom={10}>Create your account</Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl
            isInvalid={errors.firstName}
            isRequired
            id="firstName"
            marginBottom={5}
          >
            <FormLabel>First name</FormLabel>
            <Input
              type="text"
              placeholder=""
              {...register("firstName", {
                pattern: {
                  value: /^[A-Za-z0-9\s]+$/g,
                  message: "The name can only include letters.",
                },
                required: true,
                minLength:{
                  value:2,
                  message:"The name cannot be less than two characters."
                },
                maxLength: {
                  value: 20,
                  message: "The name cannot be longer than twenty characters.",
                },
              })}
            />
               <FormErrorMessage>
              {errors.firstName && errors.firstName.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl
            isInvalid={errors.lastName}
            isRequired
            id="lastName"
            marginBottom={5}
          >
            <FormLabel>Last name</FormLabel>
            <Input
              type="text"
              placeholder=""
              {...register("lastName", {
                pattern: {
                  value: /^[A-Za-z\s]+$/g,
                  message: "The name can only include letters.",
                },
                required: true,
                minLength:{
                  value:2,
                  message:"The name cannot be less than two characters."
                },
                maxLength: {
                  value: 20,
                  message: "The name cannot be longer than twenty characters.",
                },
              })}
            />
               <FormErrorMessage>
              {errors.lastName && errors.lastName.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.email} isRequired marginBottom={5}>
            <FormLabel htmlFor="email">Email address</FormLabel>
            <InputGroup>
            <InputLeftElement  pointerEvents="none"
              children={<EmailIcon color="gray.300" />}/>
            <Input
              id="email"
              type="email"
              placeholder=""
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address.",
                },
              })}
              />
              </InputGroup>
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>

            
          <FormControl  isRequired isInvalid={errors.password} marginBottom={5}>
            <FormLabel htmlFor="password">Password</FormLabel>
            <InputGroup>
            <InputLeftElement pointerEvents="none"
              children={<UnlockIcon color="gray.300" />}/>
            <Input
              id="password"
              type="password"
              placeholder=""
              {...register("password", {
                required: true,
                minLength: {
                  value: 8,
                  message: "Weak password, minimum length should be 8.",
                },
              })}
              />
              </InputGroup>
            <FormErrorMessage>
              {errors.password && errors.password.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl
            isInvalid={errors.userName}
            isRequired
            id="userName"
            marginBottom={5}
          >
            <FormLabel>Username</FormLabel>
            <InputGroup>
            <InputLeftElement pointerEvents="none"
              children={<AtSignIcon color="gray.300" />}/>
            <Input
              type="text"
              placeholder=""
              {...register("userName", {
                required: true,
                pattern:{
                  value: /^[A-Za-z0-9]+$/g,
                  message:"The username must be a combination of numbers or letters without spaces."
                },
                minLength: {
                value: 3,
                message:"Put a username with more than 2 characters."
              },
              })}
            />
                </InputGroup>
             <FormErrorMessage>
              {errors.userName && errors.userName.message}
            </FormErrorMessage>
          </FormControl>

          <Button
            boxShadow="xl"
            rounded="md"
            type="submit"
            colorScheme="pink"
            mx={1}
            my={5}
            isLoading={isSubmitting}
          >
            Send and continue
          </Button>
        </form>
      </VStack>
    </Center>
  );
};

export default Register;
