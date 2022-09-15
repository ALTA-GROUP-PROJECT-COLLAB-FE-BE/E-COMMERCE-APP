import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../src/Style/Login.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Create from './pages/Create';
import Product from './pages/Product';
import NavBar from "./component/Navbar";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/Create' element={<Create />} />
          <Route path='/Product' element={<Product />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
