import {
  Box,
  Grid,
  GridItem,
  Image,
  Stack,
  Select,
  Text,
  flexbox,
  Flex,
  Spacer,
  Input,
  Container,Table,Tbody, Td,Tfoot, Th, Thead, Tr, Img
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useCart } from 'react-use-cart';
  

import "./CheckOut.css";
import { useNavigate } from "react-router-dom";
let promo="wf30"
const CheckOutPage = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart
  } = useCart();

  const [dis,setDis]= useState(0);
  const [ap, setAp]=useState(cartTotal)
  const AmountPay = 0

  console.log(items)
const Discount=0
  const price = cartTotal;
  // let promoCode=()=>{
  //   if(promo==="wf30"){
  //     const coupon = Math.ceil((price * 30) / 100);
  //     setDis(coupon)
  //     const AmountPay = Math.ceil(ap - (dis + Discount));
  //     setAp(AmountPay)

  //   }
  // }
  
  const navigate = useNavigate();
// coupon=dis

  // const Discount = Math.ceil((price * 30) / 100);

  const coupon = Math.ceil((Discount * 30) / 100);
  

  const Saved = Discount + coupon;
  const earn = Math.ceil((AmountPay * 2) / 100);


  const User = JSON.parse(localStorage.getItem("user"));

  console.log(User);

  return (
    <div className="mujhe">
      <div>
        {/* navbar par  */}

        <hr />
      </div>

      <Box textAlign="center">
        <Text fontSize="23" fontWeight="bold">
          CHECKOUT
        </Text>
      </Box>

      <div className="Main">
        <div className="Main-part-1">
          <Box p="3">
            <div>
              <Text fontSize="16" p="4" fontWeight="bold">
                SHIPPING ADDRESS
              </Text>
            </div>
            <hr />
            <br />

            {/* fetch part  */}
            <div className="fetchpart-p">
              <Text fontWeight="bold">{User.ad_name}</Text>
              <Text>{User.ad_Address}</Text>
              <br />
              <Text>{User.ad_number}</Text>
              <Text>{User.ad_State}</Text>
              <Text>{User.ad_City}</Text>
            </div>

            <div className="but-but">
              <button onClick={() => navigate("/address")}>CHANGE</button>
            </div>

            <div className="deleviery">
              <Flex alignItems="center">
                <Text fontSize="14" p="4" fontWeight="bold">
                  Expected Delivery Date :{" "}
                </Text>
                <Text fontSize="14">20-NOV-2022</Text>
              </Flex>
            </div>
          </Box>
          {/* order part  */}

          <div className="orderrr">
            <div>
              <Text fontSize="20" p="2" fontWeight="bold">
                YOUR ORDER{" "}
              </Text>
            </div>
            <hr />
          </div>

          <div className="order-part-ab" >
          <Table maxWidth="100%" m="auto" colorScheme="purple"  display={["flex"]}>
        <Tbody>
          {
            items.map((item,index)=>{
              return (
                <Tr key={item.id}>
                  <Td>
                    <Img src={item.image} h="100px" w="100px"/>
                  </Td>
                  <Td fontSize={"20px"}>
                    {item.product}
                  </Td>
                  <Td fontSize={"20px"}>
                  ₹{item.price}
                  </Td>
                  <Td fontSize={"20px"}>
                    {item.quantity} 
                  </Td>
                </Tr>
              )
            })
          }
        </Tbody>
    </Table>
          </div>
        </div>

        {/* your coupen area  */}

        <div className="part2">
          <Box>
            <Text fontSize="24px">Order Summary</Text>
          </Box>
          <Flex>
            <Box p="4">MRP</Box>
            <Spacer />
            <Box p="4">₹. {cartTotal}</Box>
          </Flex>

          <Flex>
            <Box p="4">Discount MRP</Box>
            <Spacer />
            <Box p="4">-{Discount}</Box>
          </Flex>
          <Box>
            <Text fontSize="14px" p="3" fontWeight="bold">
              Apply Promo code
            </Text>
          </Box>

          <div p="5" className="intt">
            <input type="text" placeholder="PROMO CODE" />
            <button>APPLY</button>
          </div>
          <Text fontSize="14px" fontWeight="bold">
            Hint:- MASAI30
          </Text>

          <Flex>
            <Box p="4">Discount</Box>
            <Spacer />
            <Box p="4">-{dis}</Box>
          </Flex>

          <Flex>
            <Box p="4">Shipping Charges</Box>
            <Spacer />
            <Box p="4">FREE</Box>
          </Flex>

          <Flex>
            <Box p="4">
              <Text fontSize="16" fontWeight="bold">
                {" "}
                Amount Payble{" "}
              </Text>
            </Box>
            <Spacer />
            <Box p="4">
              <Text fontSize="16" fontWeight="bold">
                {" "}
                ₹ {ap}
              </Text>
            </Box>
          </Flex>

          <Flex>
            <Box p="4">You Saved</Box>
            <Spacer />
            <Box p="4">₹ {Saved}</Box>
          </Flex>

          <Flex>
            <Box p="4">You will earn</Box>
            <Spacer />
            <Box p="4">{earn}</Box>
          </Flex>
          <div className=" in2">
            <button onClick={() => navigate("/payment")}>
              PROCEED TO PAYMENT
            </button>
          </div>
        </div>
      </div>

      {/* <hr />

      <div className="foll-c">
        <Text>© MyGlamm</Text>
      </div> */}
    </div>
  );
};

export default CheckOutPage;
