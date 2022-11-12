
import {Box, Flex,Text} from "@chakra-ui/react"
import "./payment.css"



 const Payment=()=>{

return (

<Box>
dfdf

<hr/>

<Box> 
<Text align="center" fontSize="28px" fontWeight="600">Payment</Text>
 </Box>


<div className="part1">

    <div className="part1-1">
<Text fontSize="16px" p="5" fontWeight="bold">PAYMENT METHOD</Text>


<Box className="imgeSs">
    <Flex className="imgeS">
    <img className="imges" src="https://play-lh.googleusercontent.com/B5cNBA15IxjCT-8UTXEWgiPcGkJ1C07iHKwm2Hbs8xR3PnJvZ0swTag3abdC_Fj5OfnP"/>
   <Box className="tes">
    <Text>Google Pay / PhonePe / UPI</Text>
   </Box>
    
</Flex>
</Box>
<Box>
    <Flex className="imgeS">
    <img src="https://image.shutterstock.com/image-vector/browser-icon-260nw-681469750.jpg"/>
   
   <Box className="tes">
    
    <Text>Net Banking</Text>
    </Box> 
</Flex>
</Box>

<Box>
    <Flex className="imgeS imgsss">
    <img src="https://cdns.iconmonstr.com/wp-content/releases/preview/2018/240/iconmonstr-credit-card-thin.png"/>
    <Box className="tes">
        <Text>Credit or Debit Card</Text>
    </Box>

    
</Flex>
</Box>


<Box>
    <Flex className="imgeS">
    <img src="http://cdn.onlinewebfonts.com/svg/img_559811.png"/>
    <Box className="tes">
       <Text>Wallets</Text> 
    </Box>
    
</Flex>
</Box>
<Box>
    <Flex className="imgeS">
    <img src="https://static.thenounproject.com/png/2247068-200.png"/>
    <Box className="tes">
   <Text>Cash On Delivery</Text>
    </Box>
 
</Flex>
</Box>

    </div>
    <div className=" part2">
<br />
<Box className="amout">
<Text  fontSize="20px" fontWeight="bold" >AMOUNT PAYABLE </Text>
<Text>Price++</Text>
</Box>
<Text  p="3" fontSize="14px" fontWeight="bold">New Card</Text>

<Box>

<form>

<div className="card-c da">
    <Text fontWeight="bold">Card Number :</Text>
    <input type="text" placeholder="XXXX-XXXX-XXXX-XXXX" maxLength="16" required />
</div>
<br />
<br />
<div className="card-c">
    <Text fontWeight="bold">Cardholder’s Name :</Text>
    <input type="text" placeholder="eg. James Bond" maxLength="16" required />
</div>
<br />
<div className=" car">
    <div className="carddd">
 <Text fontWeight="bold">Validity :</Text>
    </div>
    
    <div className="ca">
    <input type="number"  placeholder="MM"  required />
    <input type="number" placeholder="YY"  required />
    </div>
    <div className="ca4">
        <input  type="password" maxLength="3" placeholder="***" required />
    </div>

</div>

<div className="btn-b">
    <button onClick={alert("Payment is successsfull")}>Price</button>
</div>




</form>




</Box>



 </div>
 



</div>
<div className="hr-f">
<hr />

</div>
<div className="foll-c">
    <Text>© MyGlamm</Text>
</div>


</Box>


)



}

export default Payment;