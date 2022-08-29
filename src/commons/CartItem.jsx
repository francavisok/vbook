import React, { useEffect } from "react";
import {
  Stack,
  Text,
  Button,
  useColorModeValue,
  Flex,
  Divider,
  Image,
  SimpleGrid,
  Link,
} from "@chakra-ui/react";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../state/cart";
import { getOrder } from "../state/order";

const CartItem = ({ book }) => {

  const dispatch = useDispatch()
const order = useSelector(state=>state.order)

const handleRemove = (e) =>{
  e.preventDefault()
  dispatch(removeFromCart(book.productId))
  dispatch(getOrder());
}


  return (
    <>
      <SimpleGrid columns={4} spacingX={"3rem"} rounded={"lg"}>
        <Stack p="10" m="4" borderRadius="sm">
          <Image objectFit="cover" boxSize={"100%"} src={book.productImage} />
        </Stack>

        <Stack
          ddirection={{ base: "column", md: "row" }}
          justifyContent="center"
          align="center"
        >
          <Text fontWeight="semibold">{book.productTitle}</Text>
        </Stack>

        <Stack
          direction={{ base: "column", md: "row" }}
          justifyContent="center"
          align={"center"}
        ><Link>
          <FaTrashAlt color="#BB421E" onClick={handleRemove}/>
          </Link>
        </Stack>
        
        <Stack
          direction={{ base: "column", md: "row" }}
          justifyContent="center"
          align={"center"}
        >
          <Text > AR${book.totalPrice}</Text>
        </Stack>
      </SimpleGrid>
      <Divider />
    </>
  );
};

export default CartItem;
