import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<div>MAIN</div>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/cart" element={<div>CART</div>} />
        <Route path="/search" element={<div>SEARCH</div>} />
        <Route path="/category/:genre" element={<div>GENRE</div>} />
      </Routes>
    </div>
  );
}

export default App;
