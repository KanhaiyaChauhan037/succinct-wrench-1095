import {
    Box, Container, Flex, Link, Text, Image,
    Alert, AlertIcon, Button, Heading, Img, CloseButton
} from '@chakra-ui/react'
import React from 'react'
import axios from "axios"

import { ArrowForwardIcon, CloseIcon } from "@chakra-ui/icons";

import { useEffect, useState } from "react";
import { useDispatch, useSelctor } from "react-redux";
import { useNavigate } from "react-router-dom";







const MyBagMainFile = () => {

    const [data, setData] = useState([])
    const [total, setTotal] = useState(0);
    const [remove, setRemove] = useState(false)

    const datas = [
        {
            id: 1,
            title: "batman",
            image: "https://cdn-icons-png.flaticon.com/128/4140/4140048.png",
            price: 999,
            total: 1
        }
        ,
        {
            id: 2,
            title: "batman",
            image: "https://cdn-icons-png.flaticon.com/128/4140/4140048.png",
            price: 9199,
            total: 1
        },



    ]

    // ...................working fine.................................................

    useEffect(() => {
        setData(datas)
    }, [])



    const IncDecValue = (e, id) => {

        setData(data => data.map((el) =>
            el.id === id ? { ...el, total: Number(el.total) + e } : el
        ))
        let amount = data.reduce((sum, el) => {

            return sum += Number(el.price) * Number(el.total)
        }, 0)
        setTotal(amount)
    }

    useEffect(() => {
        let amount = data.reduce((sum, el) => {
            console.log(el, "check el")
            return sum += el.price * Number(el.total)
        }, 0)
        setTotal(amount)
    }, [data, setTotal])


    useEffect(() => {
        localStorage.setItem("total", JSON.stringify(total));

    }, [total]);

    // ..........................delete function...................





    return (


        <Box
            // border="1px solid red" 
            mt="1%" w="auto">

            <Box
            // border="1px solid blue"
            >

                <Text fontSize="30px" paddingBottom={6} textAlign="center" fontFamily="sans-serif">
                    MY BAG(0)
                </Text>
            </Box>
            {/* 2nd //........black border */}

            <Box width="75%" m="auto" gap="5px" bg="black" p="7px" >
                <Box display="flex" justifyContent="center" gap="10px" >
                    <Text fontSize="26px" color="white">Congrats! </Text>
                    <Text fontSize="25px" color="white">You're eligible
                        for free gift
                    </Text >
                    <Text fontSize="25px" color="white" >
                        <Link ><u > Plese Selct  </u> </Link>
                    </Text>
                </Box>
            </Box>
            {/* 2nd */}
            {/* 3rd  .................................   maping............................*/}

            <Flex
                // border="1px solid purple" 
                marginLeft="15%" gap="10" width="70%" mt="2%" direction={"column"} >




                {data.map((el, ind) => (
                    <Flex key={el.id} display={"flex"} textAlign={"center"}
                        justifyContent="center" borderBottom="1px" borderColor="lightgray"
                    // border="1px"
                    >

                        {/* ...................................................................... */}
                        <Box width="100px" >{" "}
                            <Image src={el.image} alt="" />
                        </Box>
                        <Box mt="4%" w="40%" >
                            {el.title}
                        </Box>
                        <Box mt="4%" w="10%" ml="5%">
                            $ {el.price}
                        </Box>

                        {/* ........................................................................ */}
                        {/* button ............................function............*/}

                        <Box mt="3%" w="10%">
                            <Flex>
                                <Button onClick={() => IncDecValue(1, el.id)} >+</Button>
                                <Text textAlign={"center"} margin="6px"> {el.total} </Text>
                                <Button onClick={() => IncDecValue(-1, el.id)} >-</Button>
                            </Flex>
                        </Box>

                        {/* ............................................................................ */}
                        {/* ..............total Price.......................... */}

                        <Box padding={"0px 5px 0px 5px"} mt="4%">
                            ₹ {el.total * el.price}
                        </Box>

                        <Box mt="4%" marginLeft={"5%"} cursor="pointer">
                            <CloseButton />
                        </Box>

                    </Flex>
                ))}
            </Flex>
            {/* 3rd  maping...............................end*/}


            <Flex
                // border="1px solid blue"
                bg="lightgrey"
                mt="2.5%"
                padding="15px 150px 15px 150px"
                color="lightblack"
                justifyContent="space-between"
                display="flex"
                width="100%"
            >
                <Box display="flex" >{" "}

                    <Text paddingRight="10px">
                        You will earn
                    </Text>
                    <Text paddingRight="10px" fontWeight="600">
                        999 Good Points
                    </Text>
                    <Text paddingRight="10px">
                        as cashback on this order.
                    </Text>
                </Box>

                <Box display="flex">
                    <Text paddingRight="10px">
                        {" "} GRAND TOTAL
                    </Text>
                    <Text paddingRight="10px" fontWeight="600">
                        $999
                    </Text>
                </Box>
            </Flex>


            <Box
                border="1px solid teal"
                bg="black"
                padding="8px"
                w="22%"
                color="white"
                marginLeft="35%"
                mt="2%"
                
            >
                PROCEED TO CHECKOUT <ArrowForwardIcon />
            </Box>

            <Box borderBottom="1px" borderColor="lightgray" mt="2%">

            </Box>


        </Box>
    )
}

export default MyBagMainFile

// https://whitefeather123.herokuapp.com/data