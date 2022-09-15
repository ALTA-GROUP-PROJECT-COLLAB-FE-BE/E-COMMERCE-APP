import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar.jsx";
import Cart from "./pages/Cart";
import Detail from "./pages/Detail";
import EditProduct from "./pages/EditProduct";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Create from "./pages/Create";
import Product from "./pages/Product";


function App() {
  const [token, setToken] = useState(localStorage.getItem("userToken") ?? null);
  return (
    <>
      <Router>
        {token ? <NavBar setToken={setToken} /> : null}
        <Routes>
          <Route exact path="/" element={token ? <Home /> : <Login token={token} setToken={setToken} />} />
          <Route path="/detail/:id" element={token ? <Detail /> : <Login token={token} setToken={setToken} />} />
          <Route path="/edit-product" element={token ? <EditProduct /> : <Login token={token} setToken={setToken} />} />
          <Route path="/cart" element={token ? <Cart /> : <Login token={token} setToken={setToken} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create" element={token ? <Create /> : <Login token={token} setToken={setToken} />} />
          <Route path="/product" element={token ? <Product /> : <Login token={token} setToken={setToken} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {token ? <Footer /> : null}
      </Router>
    </>
  );
}

export default App;
