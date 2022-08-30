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
  useMediaQuery,
} from "@chakra-ui/react";
import CartItem from "../commons/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { getOrder } from "../state/order";
import { cartTotal } from "../utils/cartTotal";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const order = useSelector((state) => state.order);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrder());
  }, [dispatch]);

  const [isNotSmallerScreen] = useMediaQuery('(min-width: 1200px)')


  return (
    <>
      <SimpleGrid
        minChildWidth="300px"

        templateRows="repeat(2, 1fr)"
        justifyItems={"center"}
        ml={isNotSmallerScreen? "300px" : "0"}
      >
        <Box
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
                return <CartItem 
                book={book} key={book.productId} />;
              })
            : "You have nothing in your cart yet."}
        </Box>
        <Box
        maxWidth={"300px"}
        w={"100%"}
        mt={isNotSmallerScreen? "8px" : "0px"}
          rounded={"md"}
          h={242}
          boxShadow={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          justifyItems={"center"}
          align={"center"} 
        >
          <Heading m={5}>TOTAL</Heading>
          <Text>AR$ {order.carts ? cartTotal(order.carts) : 0} </Text>
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
        </Box>
      </SimpleGrid>
    </>
  );
};

export default Cart;
