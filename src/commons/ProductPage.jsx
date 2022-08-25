import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdLocalShipping, MdOutlineAddShoppingCart } from "react-icons/md";
import {RiHeartAddFill} from "react-icons/ri"
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getBook } from "../state/book";

//TODO:
//FIX releaseDate format

const ProductPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [book, setBook] = useState({});

  if (!book.id) {
    dispatch(getBook(id))
      .then((res) => setBook(res.payload))
      .then();
  }

  return (
    <Container maxW={"6xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Image
            rounded={"md"}
            alt={"product image"}
            src={`${book.posterURL}`}
            fit={"cover"}
            align={"center"}
            w={"60%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {book.title}
            </Heading>
            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={300}
              fontSize={"2xl"}
            >
              AR$ {book.price}
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue("gray.500", "gray.400")}
                fontSize={"7lg"}
                fontWeight={"300"}
              >
                {book.description}
              </Text>
            </VStack>

            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Book Details
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Author:
                  </Text>{" "}
                  {book.author}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Editorial:
                  </Text>{" "}
                  {book.publisher}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Release date:
                  </Text>{" "}
                </ListItem>
              </List>
            </Box>
          </Stack>
          <Stack>
            <Box>
            <Button
              rounded={"md"}
              w={"40%"}
              mt={8}
              size={"lg"}
              py={"7"}
              bg={useColorModeValue("#d43c8c", "gray.50")}
              color={useColorModeValue("white", "gray.900")}
              textTransform={"uppercase"}
              _hover={{
                transform: "translateY(2px)",
                boxShadow: "xl",
              }}
            >
              Add to cart  
              <MdOutlineAddShoppingCart style={{marginLeft:"6px"}}/>
            </Button>
            <Button
              rounded={"md"}
              w={"40%"}
              mt={8}
              ml={1}
              size={"lg"}
              py={"7"}
              
              variant="ghost"
              color={useColorModeValue("#d43c8c", "#d43c8c")}
              
              textTransform={"uppercase"}
              _hover={{
                transform: "translateY(2px)",
                boxShadow: "xl",
              }}
            >
             
              Add to favorites 
              <RiHeartAddFill  style={{marginLeft:"6px"}} />
            </Button>
            </Box>
          </Stack>

          <Stack direction="row" alignItems="center" justifyContent={"center"}>
            <MdLocalShipping />
            <Text>After paying we'll send you the Ebook document</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
};

export default ProductPage;
