import React from "react";
import GridComponent from "../commons/GridComponent";
import Hero from "./Hero";
import { Container, Divider, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Pagination from "./Pagination";

const Home = () => {
  const [gridTitle, setGridTitle] = useState("OUR BOOKS");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);

  const books = useSelector((state) => state.books);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = books.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
      <GridComponent books={currentPosts} id="gridView" />
      <Divider my={8} />
      <Pagination
        currentPage={currentPage}
        postsPerPage={postsPerPage}
        totalPosts={books.length}
        paginate={paginate}
      />
    </>
  );
};

export default Home;
