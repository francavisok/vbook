import React from "react";

import { Search2Icon } from '@chakra-ui/icons'
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  Input,
  InputLeftElement,
  InputGroup
} from "@chakra-ui/react";

const Hero = () => {
  return (
    <>
      <Container maxW={"3xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            Already now what you are looking for ? <br />
            <Text as={"span"} color={"green.400"}>
              search here
            </Text>
          </Heading>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              color="grey.600"
              fontSize="1.2em"
              children={<Search2Icon color='green.500' />}
            />
            <Input borderColor='black.600' />
          </InputGroup>
          <Text color={"gray.500"}>
            Still not sure ? Dont worry, click in the button below and get a random book!
          </Text>
          <Stack
            direction={"column"}
            spacing={2}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
            <Button
              colorScheme={"green"}
              bg={"green.400"}
              rounded={"full"}
              px={6}
              _hover={{
                bg: "green.500",
              }}
            >
              Get Random Book
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  );
};

export default Hero;
