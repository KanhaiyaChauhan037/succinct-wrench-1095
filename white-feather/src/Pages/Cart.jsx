import { Box, Button, Flex, Img, Table,Tbody, Td, Text, Tfoot, Th, Thead, Tr } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useCart } from 'react-use-cart';
// import MyBag from "../Components/MyBag"
import {GiTireIronCross} from 'react-icons/gi';
import {GrSubtract ,GrAdd} from "react-icons/gr";
import {useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate()
  
   const {
    isEmpty,
    totalUniqueItems,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart
    } = useCart();

    // console.log(items)
    // console.log(cartTotal)
  return (
    <>
    <Box w='100%' m='auto' textAlign='center' mt='20px'>
     <Text fontWeight="medium" fontSize={"35px"}>MY BAG ({totalUniqueItems})</Text> 
    </Box>
    {
      (isEmpty) && <Box>
        <Box><Text fontSize={"40px"} mt="25px">Oops! Your bag is empty!</Text></Box>
        <Box mt="40px"><Img src="https://files.myglamm.com/site-images/original/img-empty-shopping-cart.png" m="auto"/></Box>
      </Box>
    }
   
   <Table maxWidth="80%" m="auto" colorScheme="purple" mt="30px" display={["flex"]}>
        <Tbody>
          {
            items.map((item,index)=>{
              return (
                <Tr key={item.id}>
                  <Td>
                    <Img src={item.image} h="130px" w="130px"/>
                  </Td>
                  <Td fontSize={"20px"}>
                    {item.product}
                  </Td>
                  <Td fontSize={"20px"}>
                  ₹{item.price}
                  </Td>
                  <Td fontSize={"20px"}>
                    {item.quantity}  &nbsp;
                    <Button colorScheme='gray'
                    onClick={()=> 
                      updateItemQuantity(item.id,item.quantity -1)
                    }><GrSubtract/></Button>  &nbsp;
                      <Button colorScheme='gray'
                      onClick={()=>
                      updateItemQuantity(item.id,item.quantity +1)
                    }><GrAdd/></Button> &nbsp;
                      <Button  
                      onClick={()=>
                      removeItem(item.id)
                    }><GiTireIronCross/></Button>
                  </Td>
                </Tr>
              )
            })
          }
        </Tbody>
    </Table>
      <Flex justifyContent={"space-between"} m="auto" w="60%" mt="35px" bg="#f4f4f4!important" p="20px">
        <Flex>  
          <Text>You will earn</Text> &nbsp;
          <Text fontWeight={"bold"}  >Good Points</Text> &nbsp;
          <Text>as cashback on this order</Text>
        </Flex>
        <Flex>
          <Text fontWeight={"medium"} fontSize="20px">GRAND TOTAL</Text> &nbsp;&nbsp;
          <Text fontWeight={"bold"}  fontSize="20px">₹{cartTotal}</Text>
        </Flex>
      </Flex>
      <Button m='auto' display='block' bg="black" size='lg' variant="solid" colorScheme="white"  fontSize={"22px"} px='20px' pt='5px' mt='20px' onClick={()=>navigate('/address')}>PROCEED TO CHECKOUT</Button>
    </>
  )
}

export default Cart;