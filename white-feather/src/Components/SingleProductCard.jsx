import { Box, Img, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';
import Styles from "../Css/Makeup.module.css"

const SingleProductCard = ({id,image,product,title,shade,price}) => {
  return (
      <Box>
        <Link to={`/singleproduct/${id}`}><Img boxSize="18rem" src={image} className={Styles.grow}/></Link> 
        <Text fontWeight={"bold"} lineHeight="50px" mt="70px" fontSize={"20px"}>{product}</Text>
        <Text lineHeight="50px" fontSize={"18px"}> {title} </Text>
        <Text lineHeight="50px" fontSize={"15px"}>{shade}</Text>
        <Text lineHeight="50px" fontSize={"20px"}> {price} </Text>
    </Box>
  )
}

export default SingleProductCard