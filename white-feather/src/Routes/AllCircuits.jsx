import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { CartProvider } from "react-use-cart";
import Makeup from "../Routes/Makeup"
import Home from "../Pages/Home";
import SingleProduct from "../Routes/SingleProduct";
import Cart from "../Pages/Cart";
import {Address} from "../Pages/Address";
import CheckOutPage from '../Pages/CheckOut'
import Payment from '../Pages/Payment'
import PrivateRouter from './PrivateRouter'
import { useNavigate } from "react-router-dom";
import Login from '../Pages/Login/Login'

// all the routing using the routing library should be done from here;

    const AllRoutes = () => {
  return (
            
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/makeup" element={<Makeup />} />
      <Route path="/address" element={<Address />} />
      <Route path="/checkout" element={<CartProvider><CheckOutPage /></CartProvider>} />
      <Route path="/payment" element={<CartProvider><Payment /></CartProvider>} />
      <Route path="/cart" element={<CartProvider><Cart /></CartProvider>} />
      <Route path="/singleproduct/:id" element={<CartProvider><SingleProduct /></CartProvider>} />
    </Routes>
  );
};

export default AllRoutes;
