import {  Flex } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

// 1. Navbar should be responsive
// 2. On the left hand side; If the user has logged in; Token should be displated; else Token shouldn't be shown.
// 3. on the right hand side; There will be there different links. `HOME` `LOGIN` `CART`

const Navbar = () => {
  return (
    <Flex alignItems="center" justifyContent="end" gap="10px" p="5px" bg="cyan">
      
      <Link to="/">
        <h3>Home </h3>
      </Link>
      <Link to="/makeup">
        <h3>Makeup </h3>
      </Link>
      <Link to="/cart">
        <h3 >Cart</h3>
      </Link>
    </Flex>
  
  )
};

export default Navbar;