import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Register from "./components/Register";
import ProductPage from "./commons/ProductPage";
import Home from "./components/Home";
import AdminPanel from "./components/AdminPanel";
import Profile from "./components/Profile";

import { Flex, Box, useMediaQuery } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "./state/user";
import CategoriesPage from "./commons/CategoriesPage";
import Cart from "./components/Cart";
import PaymentPage from "./components/PaymentPage";

function App() {
  const dispatch = useDispatch();

  //se ejecuta una sola vez cuando carga la pagina y ahce un pedido a /me para ver si hay un token
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const [isNotSmallerScreen] = useMediaQuery("(min-width: 700px)");

  return (
    <Flex direction={"column"} minHeight="100vh">
      <Navbar />
      <Box p={isNotSmallerScreen ? "9" : '0'} flexGrow="1" bg={"#F7F0F5"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pay" element={<PaymentPage />} />
          <Route path="/search" element={<div>SEARCH</div>} />
          <Route path="/category/:genreId" element={<CategoriesPage />} />
          <Route path="/book/:id" element={<ProductPage />} />
          <Route path='/admin' element={<AdminPanel />} />
          <Route path='/me' element={<Profile/>} />
        </Routes>
      </Box>

      <Footer />
    </Flex>
  );
}

export default App;
