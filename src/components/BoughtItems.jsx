import React, {useEffect} from "react";

import { Flex, Heading, useColorModeValue } from "@chakra-ui/react";

import { useDispatch, useSelector } from "react-redux";
import { getAllOrdersFromUser } from "../state/orders";

import OrderFullfiledCard from "../commons/OrderFullfiledCard";

const BoughtItems = () => {
  const dispatch = useDispatch();
  const orders = useSelector(state=> state.orders)

  useEffect(()=>{
    dispatch(getAllOrdersFromUser())
  }, [dispatch])

  return (
    <Flex
      direction={"column"}
      align={"center"}
      justify={"center"}
      rounded={"lg"}
      bg={useColorModeValue("white", "gray.700")}
      boxShadow={"lg"}
      p={8}
      spacing={4}
      maxWidth="fit-content"
      minW={"80%"}
      m={"auto"}
    >
      <Heading mb={'40px'}>Purchase history</Heading>

      {orders.map(order => (
        <OrderFullfiledCard order={order} key={order.id} />
      ))}


    </Flex>
  );
};

export default BoughtItems;
