import React from "react";
import GridComponent from "../commons/GridComponent";
import Hero from "./Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <GridComponent id='gridView' />
    </>
  );
};

export default Home;
