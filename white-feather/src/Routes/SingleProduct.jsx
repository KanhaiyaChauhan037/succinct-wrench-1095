import React, { useState } from 'react'
import axios from "axios";
import { useEffect } from 'react';
import { useParams ,useNavigate } from 'react-router-dom';
import { Box, Img, Text,Flex,Button } from '@chakra-ui/react';
import Styles from "../Css/Makeup.module.css";
import { BsBag } from 'react-icons/bs';

const SingleProduct = () => {
  const [loading,setLoading] = useState(true);
  const [data,setData] = useState({});
  // const navigate = useNavigate()

  const {id} = useParams();

  useEffect(() => {
    setLoading(true);
    axios.get(`https://whitefeather123.herokuapp.com/data/${id}`)
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

// if(loading){
//   return <h1>...Loading</h1>
// }

  return (
    <>
    <Flex border="1px solid red" justifyContent="center" gap="35px" >
    <Box>
      <Img src={data.image} className={Styles.pic}/>
    </Box>
      <Box textAlign="left">
      <Text fontWeight={"bold"} lineHeight="80px" fontSize={"30px"}>{data.product}</Text>
      <Text lineHeight="45px" fontSize={"22px"} color="grey">Precision Perfect Matte Slimstick</Text>
      <Text fontWeight={"bold"} lineHeight="50px" fontSize={"20px"}>{data.title}</Text>
      <Text lineHeight="65px" fontSize={"22px"}>{data.rating}2802 ratings</Text>
      <Text lineHeight="50px" fontSize={"18px"} color="grey">{data.shade}</Text>
      <Text lineHeight="75px" fontSize={"22px"}>{data.price}</Text>
      <Button bg="black" size='lg' variant="solid" colorScheme="white"  fontSize={"20px"} leftIcon={<BsBag />} p="25px">ADD To BAG</Button> <br/>
      <Button mt="25px" fontSize={"14px"} bg="#fee8e8">You will receive <b>cashback worth ₹60 </b> as myglammPOINTS on this purchase</Button>
    </Box>
    </Flex>
    </>
  )
}

export default SingleProduct