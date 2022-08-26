import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Register from "./components/Register";
import ProductPage from "./commons/ProductPage";
import Home from "./components/Home";


import { Flex, Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "./state/user";
import CategoriesPage from "./commons/CategoriesPage";

function App() {
  const dispatch= useDispatch();

  //se ejecuta una sola vez cuando carga la pagina y ahce un pedido a /me para ver si hay un token
  useEffect(()=>{
    dispatch(getUser());
  }, [dispatch])

  return (
    <Flex direction={"column"} minHeight="100vh">
      <Navbar />
      <Box p={'9'} flexGrow='1' bg={'#F7F0F5'} >
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<div>CART</div>} />
          <Route path="/search" element={<div>SEARCH</div>} />
          <Route path="/category/:genre" element={<CategoriesPage/>} />
          <Route path="/book/:id" element={<ProductPage />}/>
        </Routes>
      </Box>

      <Footer />
    </Flex>
  );
}

export default App;
