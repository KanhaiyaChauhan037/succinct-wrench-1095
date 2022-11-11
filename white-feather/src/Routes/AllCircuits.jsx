import React from "react";
import { Route, Routes } from "react-router-dom";
import { CartProvider } from "react-use-cart";
import Home from "../Routes/Home";
import Makeup from "../Routes/Makeup"
import SingleProduct from "../Routes/SingleProduct";
import Cart from "./Cart";


// all the routing using the routing library should be done from here; 

const AllCircuits = () => {
  return <Routes>
    <Route path="/" element={<Home />}/>
      <Route path="/makeup" element={<Makeup />}/>
      <Route path="/cart" element={
        <CartProvider>
          <Cart />
        </CartProvider>
       }/>
      <Route path="/singleproduct/:id" element={
        <CartProvider>
          <SingleProduct />
        </CartProvider>
      }/>
    </Routes>
}

export default AllCircuits;