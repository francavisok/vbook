import React, { useEffect, useState } from "react";
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
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  FormLabel,
  Input,
  useToast,
  FormErrorMessage,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
  MenuItemOption,
  Radio,
  RadioGroup,
  Container,
} from "@chakra-ui/react";
import CartItem from "../commons/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { continueOrder, getOrder, payOrder } from "../state/order";
import { cartTotal } from "../utils/cartTotal";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";

const Cart = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const order = useSelector((state) => state.order);
  const user = useSelector((state) => state.user);

  const [isNotSmallerScreen] = useMediaQuery("(min-width: 1200px)");
  const [paymentMethod, setPaymentMethod] = React.useState("Credit card");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const handleBuy = async () => {
    if (order.carts.length) {
      await dispatch(continueOrder());
      onOpen();
    } else {
      toast({
        title: `Please add something to your cart`,
        status: "error",
        position: "top",
        isClosable: true,
      });
    }
  };
  const onSubmit = async ({ direction }) => {
    await dispatch(payOrder({ direction, paymentMethod }));
    navigate("/checkout");
  };

  useEffect(() => {
    dispatch(getOrder());
  }, [dispatch]);

  return (
    <>
    <Container maxW='8xl'>
      <SimpleGrid
        minChildWidth="300px"
        templateRows="repeat(2, 1fr)"
        justifyItems={"center"}
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
                return <CartItem book={book} key={book.productId} />;
              })
            : "You have nothing in your cart yet."}
        </Box>
        <Box
          maxWidth={"300px"}
          w={"100%"}
          mt={isNotSmallerScreen ? "8px" : "10px"}
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
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>
                  Please complete these fields to continue
                </ModalHeader>
                <ModalCloseButton />
                <form onSubmit={handleSubmit(onSubmit)}>
                  <ModalBody pb={6}>
                    <FormControl isInvalid={errors.direction}>
                      <FormLabel>Address</FormLabel>
                      <Input
                        placeholder="Your address"
                        {...register("direction", {
                          required: true,
                          minLength: {
                            value: 4,
                            message: "Invalid address, add another.",
                          },
                        })}
                      />
                      <FormErrorMessage>
                        {errors.direction && errors.direction.message}
                      </FormErrorMessage>
                    </FormControl>

                    <FormControl mt={10}>
                      <FormLabel fontWeight={"semibold"}>
                        Payment method
                      </FormLabel>
                      <RadioGroup
                        onChange={setPaymentMethod}
                        value={paymentMethod}
                      >
                        <Stack direction="row">
                          <Radio value="Credit card">Credit card</Radio>
                          <Radio value="Debit card">Debit card</Radio>
                          <Radio value="PayPal">PayPal</Radio>
                        </Stack>
                      </RadioGroup>
                    </FormControl>
                    <Flex mt={7} justify={"end"}>
                      <Button colorScheme="pink" mr={3} type="submit">
                        Confirm purchase
                      </Button>
                      <Button onClick={onClose}>Cancel</Button>
                    </Flex>
                  </ModalBody>
                </form>
              </ModalContent>
            </Modal>
          </Box>
        </SimpleGrid>
      </Container>
    </>
  );
};

export default Cart;
