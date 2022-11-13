import React from "react";
import { Route, Routes } from "react-router-dom";
<<<<<<< HEAD:white-feather/src/Routes/AllCircuits.jsx
import { CartProvider } from "react-use-cart";
import Home from "../Routes/Home";
import Makeup from "../Routes/Makeup"
=======
import Home from "../Pages/Home";
import Makeup from "../Routes/Makeup";
>>>>>>> e7aa4a2f2301e95efa6be312949767d84a465cea:white-feather/src/Routes/AllRoutes.jsx
import SingleProduct from "../Routes/SingleProduct";
import Cart from "./Cart";

// all the routing using the routing library should be done from here;

<<<<<<< HEAD:white-feather/src/Routes/AllCircuits.jsx
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
=======
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/makeup" element={<Makeup />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/singleproduct/:id" element={<SingleProduct />} />
>>>>>>> e7aa4a2f2301e95efa6be312949767d84a465cea:white-feather/src/Routes/AllRoutes.jsx
    </Routes>
  );
};

<<<<<<< HEAD:white-feather/src/Routes/AllCircuits.jsx
export default AllCircuits;
=======
export default AllRoutes;
>>>>>>> e7aa4a2f2301e95efa6be312949767d84a465cea:white-feather/src/Routes/AllRoutes.jsx
