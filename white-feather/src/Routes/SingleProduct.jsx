import React, { useState } from 'react'
import axios from "axios";
import { useEffect } from 'react';
import { useParams ,useNavigate, NavLink } from 'react-router-dom';
import { Box, Img, Text,Flex,Button } from '@chakra-ui/react';
import Styles from "../Css/Makeup.module.css";
import { BsBag } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { IoLogoTwitter } from 'react-icons/io';
import { AiFillInstagram } from 'react-icons/ai';
import { useCart } from 'react-use-cart';

const SingleProduct = () => {

  const [loading,setLoading] = useState(true);

  const [data,setData] = useState({});
  
  const {addItem} = useCart();

  const {id} = useParams();

  useEffect(() => {
    setLoading(true);
    axios.get(`https://localdatawhitefeather.herokuapp.com/data/${id}`)
    .then((res) => {
      console.log(res.data);
      setData(res.data);
      setLoading(false);
 })
    .catch((err) => {
      console.log(err);
      setLoading(false)
    });
}, [id]);

 
 return (
    <>
    {
      loading && <div className={Styles.loader}>
      	  <div className={Styles.spinner}></div>
        </div>
    }
    <Flex  justifyContent={["center","center","center","center"]} gap="45px"  flexDirection={["column","column","row","row"]}>
      <Box >
        <Img src={data.image}  h="450px"/>
      </Box>
      <Box textAlign={["center","center","center","left"]}>
        <Text lineHeight="80px" fontWeight={"bold"}  fontSize={"30px"}>{data.product}</Text>
        <Text lineHeight="45px" fontSize={"22px"} color="grey">Precision Perfect Matte Slimstick</Text>
        <Text fontWeight={"bold"} lineHeight="50px" fontSize={"20px"}>{data.title}</Text>
        <Text lineHeight="65px" fontSize={"22px"}>{data.rating}2802 ratings</Text>
        <Text lineHeight="50px" fontSize={"18px"} color="grey">{data.shade}</Text>
        <Text lineHeight="90px" fontSize={"30px"}>₹{data.price}</Text>
        <NavLink to="/cart">
        <Button
        onClick = {()=>addItem(data)}
        bg="black" size='lg' variant="solid" colorScheme="white"  fontSize={"20px"} p="25px" leftIcon={<BsBag />} >
            ADD To BAG
          </Button> 
        </NavLink> 
        <br/>
        <Flex mt="20px">
        <Box ml="-370px" >
          <Button variant="outline" mt="25px" gap="40px" _hover={{bg:"gold"}}><FaFacebookF /></Button>
          <Button variant="outline" mt="25px" gap="40px"  _hover={{bg:"gold"}}><IoLogoTwitter /></Button>
          <Button variant="outline" mt="25px" gap="40px"  _hover={{bg:"gold"}}><AiFillInstagram/></Button>
        </Box>
        <Box ml="100px">
          <Button mt="25px" fontSize={"14px"} bg="#fee8e8" lineHeight="80px" >
            You will receive &nbsp;<b>cashback worth ₹60 </b> &nbsp; as myglammPOINTS on this purchase
          </Button>
        </Box>
        </Flex>
      
     </Box>
    </Flex>

    </>
  )
}

export default SingleProduct