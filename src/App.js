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
import HistoryOrder from "./pages/HistoryOrder";
import "./App.css";

function App() {
  const [token, setToken] = useState(localStorage.getItem("userToken") ?? null);
  return (
    <>
      <Router>
        {token ? <NavBar token={token} setToken={setToken} /> : null}
        <Routes>
          <Route exact path="/" element={token ? <Home /> : <Login token={token} setToken={setToken} />} />
          <Route path="/detail/:id" element={token ? <Detail /> : <Login token={token} setToken={setToken} />} />
          <Route path="/edit-product" element={token ? <EditProduct /> : <Login token={token} setToken={setToken} />} />
          <Route path="/cart" element={token ? <Cart /> : <Login token={token} setToken={setToken} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={token ? <Profile token={token} setToken={setToken} /> : <Login token={token} setToken={setToken} />} />
          <Route path="/editprofile/:id" element={token ? <EditProfile /> : <Login token={token} setToken={setToken} />} />
          <Route path="/checkout" element={token ? <Checkout /> : <Login token={token} setToken={setToken} />} />
          <Route path="/historyorder" element={token ? <HistoryOrder /> : <Login token={token} setToken={setToken} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {token ? <Footer /> : null}
      </Router>
    </>
  );
}

export default App;
