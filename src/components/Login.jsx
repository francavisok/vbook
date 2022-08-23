import React from "react";
import {
  Container,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
} from "@chakra-ui/react";
import { EmailIcon, LockIcon } from "@chakra-ui/icons";

const Login = () => {
  return (
    <Container  maxW='xl' bg='lightgray' centerContent  >
      <form>
        <Stack>
          <Heading as={"h2"} size="lg">
            Login
          </Heading>
          <InputGroup>
            <InputLeftElement children={<EmailIcon />} />
            <Input type={"email"} placeholder="Email" />
          </InputGroup>
          <InputGroup>
            <InputLeftElement children={<LockIcon />} />
            <Input type={"password"} placeholder="Password" />
          </InputGroup>
        </Stack>
      </form>
    </Container>
  );
};

export default Login;
