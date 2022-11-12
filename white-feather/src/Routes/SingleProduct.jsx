import React, { useState } from 'react'
import axios from "axios";
import { useEffect } from 'react';
import { useParams , NavLink } from 'react-router-dom';
import { Box, Img, Text,Flex,Button } from '@chakra-ui/react';
import Styles from "../Css/Makeup.module.css";
import { BsBag } from 'react-icons/bs';
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
    <Flex  justifyContent={["center","center","center","center"]} gap="45px"  flexDirection={["column","column","column","row"]}>
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
        <Box mt="25px" fontSize={"22px"} bg="#fee8e8" lineHeight="80px" textAlign="center" p="20px">
          <Text >You will receive &nbsp;<b>cashback worth ₹60 </b>&nbsp;as myglamm <b>POINTS</b> on this purchase</Text>
        </Box>
      </Box>
    </Flex>

    </>
  )
}

export default SingleProduct