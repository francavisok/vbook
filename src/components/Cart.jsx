import React, { useEffect } from "react";
import {
  Stack,
  Text,
  Button,
  useColorModeValue,
  Flex,
  Divider,
  SimpleGrid,
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
      <SimpleGrid minChildWidth="300px" spacing="40px">
        <Flex
          direction={"column"}
          align={"center"}
          justify={"space-between"}
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={2}
          maxWidth="60%"
          m={"auto"}
        >
          {order.carts?.length
            ? order.carts?.map((book) => {
                return <CartItem book={book} key={book.productId} />;
              })
            : "You have nothing in your cart yet."}
        </Flex>
      </SimpleGrid>
    </>
  );
};

export default Cart;
