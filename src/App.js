import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<div>MAIN</div>} />
        <Route path="/login" element={<div>LOGIN</div>} />
        <Route path="/register" element={<div>REGISTER</div>} />
        <Route path="/cart" element={<div>CART</div>} />
        <Route path="/search" element={<div>SEARCH</div>} />
        <Route path="/category/:genre" element={<div>GENRE</div>} />
      </Routes>
    </div>
  );
}

export default App;
