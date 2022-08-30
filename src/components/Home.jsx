import React from "react";
import GridComponent from "../commons/GridComponent";
import Hero from "./Hero";
import { Heading } from "@chakra-ui/react";
import { useState } from "react";

const Home = () => {
  const [gridTitle, setGridTitle] = useState("OUR BOOKS");
  return (
    <>
      <Hero setGridTitle={setGridTitle} />
      <Heading
        w="100%"
        //bgColor={'pink.300'}
        bgGradient="linear(to-r, green.200, pink.500)"
        mb={"100px"}
        textAlign="center"
        //bgColor={"#d53f8c"}
        color="#f7f0f5"
        py={"40Px"}
      >
        {gridTitle}
      </Heading>
      <GridComponent id="gridView" />
    </>
  );
};

export default Home;
