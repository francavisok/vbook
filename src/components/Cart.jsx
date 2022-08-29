import React, { useEffect } from "react";
import {
  Stack,
  Text,
  Button,
  useColorModeValue,
  Flex,
  Divider,
  SimpleGrid,
  Box,
  GridItem,
  Heading,
} from "@chakra-ui/react";
import CartItem from "../commons/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { getOrder } from "../state/order";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const order = useSelector((state) => state.order);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrder());
  }, [dispatch]);

  return (
    <>
      <SimpleGrid
        mx={60}
        minChildWidth="300px"
        spacing="40px"
        h="200px"
        templateRows="repeat(2, 1fr)"
        gap={4}
      >
        <GridItem
          rowSpan={1}
          colSpan={2}
          align={"center"}
          justify={"space-between"}
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={2}
          m={"auto"}
        >
          {order.carts?.length
            ? order.carts?.map((book) => {
                return <CartItem book={book} key={book.productId} />;
              })
            : "You have nothing in your cart yet."}
        </GridItem>
        <GridItem
          rounded={"md"}
          h={242}
          boxShadow={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          justifyItems={"center"}
          align={"center"}
        >
          <Heading m={5}>TOTAL</Heading>
          <Text>AR$: </Text>
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
            Buy{" "}
          </Button>
        </GridItem>
      </SimpleGrid>
    </>
  );
};

export default Cart;
