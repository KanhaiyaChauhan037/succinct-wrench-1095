import { Box, Button, Flex, Img, Table,Tbody, Td, Text, Tfoot, Th, Thead, Tr } from '@chakra-ui/react';
import React from 'react';
import { useCart } from 'react-use-cart';
// import MyBag from "../Components/MyBag"
import {GiTireIronCross} from 'react-icons/gi';
import {GrSubtract ,GrAdd} from "react-icons/gr";

const Cart = () => {

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

     <Text fontWeight="medium" fontSize={"35px"}>MY BAG ({totalUniqueItems})</Text> 

    {
      (isEmpty) && <Box>
        <Box><Text fontSize={"40px"} mt="25px">Oops! Your bag is empty!</Text></Box>
        <Box mt="40px"><Img src="https://files.myglamm.com/site-images/original/img-empty-shopping-cart.png" m="auto"/></Box>
      </Box>
    }
   
   <Table maxWidth={["100%","100%","100%","70%"]} m="auto" colorScheme="purple" mt="30px" display={["flex"]}>
        <Tbody>
          {
            items.map((item,index)=>{
              return (
                <Tr>
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
      <Button bg="black" size='lg' variant="solid" colorScheme="white"  fontSize={"25px"} p="35px" mt="40px">PROCEED TO CHECKOUT</Button>
    </>
  )
}

export default Cart;