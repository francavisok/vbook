import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Login from "./components/Login";

import Footer from "./components/Footer";
import { Flex } from "@chakra-ui/react";
import Register from "./components/Register";


function App() {
  return (
    <Flex direction={'column'} minHeight='100vh'>
      <Navbar />
      <Routes>
        <Route path="/" element={<div>MAIN</div>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/cart" element={<div>CART</div>} />
        <Route path="/search" element={<div>SEARCH</div>} />
        <Route path="/category/:genre" element={<div>GENRE</div>} />
      </Routes>
      <Footer />
    </Flex>
  );
}

export default App;
