import {Box,Grid,GridItem,Image,Stack,Select ,Text, flexbox,Flex,Spacer, Input, Container} from "@chakra-ui/react";
import { useEffect } from "react";

import "./CheckOut.css";



const CheckOutPage=()=>{

  const price = 349;

const Discount = Math.ceil(price*30/100)

const coupon =Math.ceil(Discount*30/100);

const AmountPay =Math.ceil(price-(coupon+Discount))

const Saved = Discount+coupon;
const earn = Math.ceil(AmountPay*2/100);

const User = JSON.parse(localStorage.getItem("user"));


console.log(User);



  return (
    <div className="mujhe">

<div>
{/* navbar par  */}

<hr />

</div>



    <Box  textAlign="center" >
      <Text fontSize="23" fontWeight="bold">CHECKOUT</Text>
    </Box>


<div className="Main">
<div className="Main-part-1">

<Box p="3">

  <div><Text fontSize="16" p='4'  fontWeight="bold" >SHIPPING ADDRESS</Text></div>
  <hr/>
  <br />

{/* fetch part  */}
<div  className="fetchpart-p">

<Text fontWeight="bold">{User.ad_name}</Text>
<Text>{User.ad_Address}</Text>
<br />
<Text>{User.ad_number}</Text>
<Text>{User.ad_State}</Text>
<Text>{User.ad_City}</Text>
      
</div>

<div className="but-but">
  <button>CHANGE</button>
</div>

<div className="deleviery">
  <Flex alignItems="center" >
    <Text fontSize="14" p='4'  fontWeight="bold" >Expected Delivery Date : </Text>
<Text fontSize="14">20-NOV-2022</Text>
  </Flex>

</div>




</Box>
{/* order part  */}



<div className="orderrr">

<div>
  <Text  fontSize="16" p='2'  fontWeight="bold">YOUR ORDER </Text>
</div>
<hr/>



</div>

<div className="order-part-ab">
  <img src="https://imgmedia.lbb.in/media/2020/07/5efefd94c36ef475084d3eb8_1593769364270.jpg"/>
  <Text>Buy Long Lasting Lipstiks Online LLB</Text>
  <Text fontWeight="bold">₹. 349</Text>
</div>



</div>

{/* your coupen area  */}

 <div className="part2">
<Box>
  <Text fontSize='24px'>Order Summary</Text>
</Box>
<Flex>
  <Box p="4" >
   MRP
  </Box>
  <Spacer />
  <Box p="4" >
  ₹. {price}
  </Box>
</Flex>

<Flex>
  <Box p="4" >
  Discount MRP
  </Box>
  <Spacer />
  <Box p="4" >
   -{Discount}
  </Box>
</Flex>
<Box ><Text fontSize="14px" p="3" fontWeight="bold">Apply Promo code</Text></Box>

<div p="5" className="intt" >
  <input type="text" placeholder="PROMO CODE" />
  <button>APPLY</button>
</div>
<Text fontSize="14px" fontWeight="bold">Hint:- MASAI30</Text>

<Flex>
  <Box p="4" >
  Discout
  </Box>
  <Spacer />
  <Box p="4" >
   -{coupon}
  </Box>
</Flex>

<Flex>
  <Box p="4" >
  Shipping Charges
  </Box>
  <Spacer />
  <Box p="4" >
   FREE
  </Box>
</Flex>

<Flex>
  <Box p="4" >
<Text fontSize="16" fontWeight="bold"> Amount Payble </Text>
  </Box>
  <Spacer />
  <Box p="4" >
   <Text fontSize="16" fontWeight="bold"> ₹ {AmountPay}</Text>
  </Box>
</Flex>


<Flex>
  <Box p="4" >
 You Saved
  </Box>
  <Spacer />
  <Box p="4" >
  ₹ {Saved}
  </Box>
</Flex>


<Flex>
  <Box p="4" >
  You will earn
  </Box>
  <Spacer />
  <Box p="4" >
   {earn}
  </Box>
</Flex>
<div className=" in2" >
  <button >PROCEED TO PAYMENT</button>
</div>




 </div>









</div>





<hr />


<div className="foll-c">
    <Text>© MyGlamm</Text>
</div>




</div>













   
  )
}

export default CheckOutPage;