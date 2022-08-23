import {
  Button,
  Center,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Stack,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";

//TODO:
//1-Crear validaciones finales para cada input (
//      a)@ y .com para el email,
//      b)password con el mensaje de weak pass,
//      c)Poner dos nombres en First Name,
//      d)definir username lowercase)
//2-Manejar errores
//3-Utilizar Redux para postear la info del user
//4-Usar useNavigate para redirigir a /login
//5-Styles y FormHelperText solucionados

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <Center>
      <VStack>
        <Heading marginBottom={10}>Create your account</Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl
            isInvalid={errors.email}
            isRequired
            id="email"
            marginBottom={5}
          >
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              placeholder=""
              {...register("email", { required: true })}
            />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>

          <FormControl
            isInvalid={errors.password}
            isRequired
            id="password"
            marginBottom={5}
          >
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder=""
              {...register("password", { required: true, minLength: 8 })}
            />
            <FormHelperText>Put a strong password.</FormHelperText>
          </FormControl>

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
                pattern: /^[A-Za-z]+$/i,
                required: true,
                maxLength: 20,
              })}
            />
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
                pattern: /^[A-Za-z]+$/i,
                required: true,
                maxLength: 20,
              })}
            />
          </FormControl>

          <FormControl
            isInvalid={errors.userName}
            isRequired
            id="userName"
            marginBottom={5}
          >
            <FormLabel>Username</FormLabel>
            <Input
              type="text"
              placeholder=""
              {...register("userName", {
                required: true,
                minLength: 3,
              })}
            />
          </FormControl>

          {/* <input {...register("email",{ required: true }) } /> */}
          {/* <input {...register("password", { required: true })} /> */}
          {/* <input {...register("firstName", {pattern: /^[A-Za-z]+$/i,required: true,maxLength: 20,})}/> */}
          {/* <input {...register("lastName", { pattern: /^[A-Za-z]+$/i,required: true,maxLength: 20,})}/> */}
          {/* <input {...register("userName", { required: true, min: 3 })} /> */}

          {/* errors will return when field validation fails  */}

          
          <Button 
           boxShadow="xl"
           rounded="md"
           as="a"
           colorScheme="pink"
           aria-label="Home"
           mx={1}
           my={5}
          type="submit">Send and continue</Button>
        </form>
      </VStack>
    </Center>
  );
};

export default Register;
