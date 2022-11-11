import {Box,Grid,GridItem,Image,Stack,Select ,Text, flexbox,Flex,Spacer, Input, Container} from "@chakra-ui/react";

import "./CheckOut.css";

import logo from  "./logoo.png";

const CheckOutPage=()=>{



  return (
    <div className="mujhe">

<div>

<Box className='nub'>
                <Box className='nubl'>
                    <Image className='sr' src={logo} />
                    </Box>

                <Box>
                    <Stack spacing={3}>
                        <Select placeholder='User Accout' size="md">
                            <option>My Profile</option>
                            <option>My Order</option>
                            <option>My Dashboard</option>
                            <option>My GlammOX Party</option>
                            <button>dffdfdf</button>
                        </Select>
                    </Stack>
                </Box>
            </Box>
</div>
<hr />







    <Box  textAlign="center" >
      <h2>CHECKOUT</h2>
    </Box>


<div className="Main">
 <div className="part1">

  <div>
    <h4>SHIPING ADDRESS</h4>
    <hr />
<Flex w="40%">
  <Box>
    <Text fontWeight="bold">Expected Delivery Date..</Text>
  </Box>
  <Spacer/>
  <p>20-Nov-2022</p>
</Flex>

   
  </div>
  <div>
    <h4>YOUR ORDER</h4>
    <hr />
  </div>
 </div>

{/* your coupen area  */}

 <div className="part2">
<Box>
  <Text fontSize='24px'>Order Summary</Text>
</Box>
<Flex>
  <Box p='10' >
   MRP
  </Box>
  <Spacer />
  <Box p='10' >
   -10222
  </Box>
</Flex>

<Flex>
  <Box p='10' >
  Discout MRP
  </Box>
  <Spacer />
  <Box p='10' >
   -10222
  </Box>
</Flex>
<Box ><h4>Apply Promo code</h4></Box>

<div className="intt" >
  <input type="text" placeholder="PROMO CODE" />
  <button>APPLY</button>
</div>

<Flex>
  <Box p='10' >
  Discout
  </Box>
  <Spacer />
  <Box p='10' >
   (-Rs 0)
  </Box>
</Flex>

<Flex>
  <Box p='10' >
  Shipping Charges
  </Box>
  <Spacer />
  <Box p='10' >
   FREE
  </Box>
</Flex>

<Flex>
  <Box p='10' >
<h4> Amount Payble </h4>
  </Box>
  <Spacer />
  <Box p='10' >
   <h4>Rs. price</h4>
  </Box>
</Flex>


<Flex>
  <Box p='10' >
 You Saved
  </Box>
  <Spacer />
  <Box p='10' >
 rs 0
  </Box>
</Flex>


<Flex>
  <Box p='10' >
  You will earn
  </Box>
  <Spacer />
  <Box p='10' >
   gold coin
  </Box>
</Flex>
<div className=" in2" >
  <button >PROCEED TO PAYMENT</button>
</div>




 </div>









</div>










</div>













   
  )
}

export default CheckOutPage;