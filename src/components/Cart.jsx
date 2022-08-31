import React, { useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
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
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import CartItem from "../commons/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { continueOrder, getOrder, payOrder } from "../state/order";
import { cartTotal } from "../utils/cartTotal";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const order = useSelector((state) => state.order);
  const dispatch = useDispatch();
  const [isNotSmallerScreen] = useMediaQuery('(min-width: 1200px)')

  
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { register, handleSubmit } = useForm();
const navigate = useNavigate()

  const handleBuy = ()=>{
    dispatch(continueOrder())
    onOpen()
  }
  const onSubmit = async (values)=>{
    await dispatch(payOrder(values))
     navigate("/checkout")
  }

  useEffect(() => {
    dispatch(getOrder());
  }, [dispatch]);



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
          onClick={handleBuy}
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
            <Modal
     
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Please complete these fields to continue</ModalHeader>
          <ModalCloseButton 
          />
          <form onSubmit={handleSubmit(onSubmit)}>

          <ModalBody pb={6}>
            <FormControl >
              <FormLabel>Address</FormLabel>
              <Input placeholder='Your address' {...register('direction')}/>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Payment method</FormLabel>
              <Input disabled placeholder='Credit card' {...register('paymentMethod')}/>
            </FormControl>
          <Flex mt={7} justify={"end"}>
            <Button colorScheme='pink' mr={3} type="submit">
              Confirm purchase
            </Button>
            <Button onClick={onClose} >Cancel</Button>
            </Flex>
            </ModalBody>

            </form>
        </ModalContent>
      </Modal>
        </Box>
      </SimpleGrid>
    </>
  );
};

export default Cart;
