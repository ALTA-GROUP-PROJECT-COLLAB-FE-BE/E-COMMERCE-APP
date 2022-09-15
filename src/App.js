import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Cart from "./pages/Cart";
import Detail from "./pages/Detail";

import EditProduct from "./pages/EditProduct";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import EditProfile from "./pages/EditProfile";
import Profile from "./pages/Profile";
import Checkout from "./pages/Checkout";
import HistoryOrder from "./pages/HistoryOrder"
import "./App.css";


function App() {
  const [token, setToken] = useState(localStorage.getItem("userToken") ?? null);
  return (
    <>
      <Router>
        {token ? <NavBar setToken={setToken} /> : null}
        <Routes>

          <Route exact path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />

          <Route exact path="/" element={token ? <Home /> : <Login token={token} setToken={setToken} />} />
          <Route path="/detail/:id" element={token ? <Detail /> : <Login token={token} setToken={setToken} />} />
          <Route path="/edit-product" element={token ? <EditProduct /> : <Login token={token} setToken={setToken} />} />
          <Route path="/cart" element={token ? <Cart /> : <Login token={token} setToken={setToken} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/editprofile/:id" element={<EditProfile />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/historyorder" element={<HistoryOrder />} />
        </Routes>
        {token ? <Footer /> : null}
      </Router>
    </>
  );
}

export default App;
