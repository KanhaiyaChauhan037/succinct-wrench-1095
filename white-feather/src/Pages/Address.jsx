import {
    Box, Button, Checkbox, Flex,
    FormControl, Grid, Input, Select, Text
    , Image, Option, FormLabel, Stack, Textarea
} from '@chakra-ui/react'

import axios from "axios"

import React, { useState } from "react";

import "./address.css"


export const AddressPage = () => {


    const [user, setUser] = useState({
        ad_name: "",
        ad_number: "",
        ad_State: "",
        ad_City: "",
        ad_Pin_code: "",
        ad_Address: ""

    })


const  handleClick =()=> {

    localStorage.setItem("user",JSON.stringify(user));
}

    const { ad_name, ad_number, ad_City, ad_State, ad_Pin_code, ad_Address } = user;


    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };


    // const handleClick = async () => {
    //     await axios.post("https://aditya-fake-server.herokuapp.com/post", user);
    //     alert('data is saved')
    //     console.log(user)
    // }




    return (

        <Box className='main' >
            {/* Navbar Part  */}


            <Box className='bord'>
                <Box className='formC'>
                    <Text fontSize="18" fontWeight="bold">Add New Address</Text>
                </Box>
                <br />
                <hr />
                <br />
                <form   >
                    <Box >
                        <Text fontSize="16" fontWeight="bold">Contact</Text>
                        <Box className='formF-f' id='hh'>
                            <input type="text" placeholder='Name' required
                                value={ad_name}
                                name="ad_name"
                                onChange={e => onInputChange(e)}

                            />

                            <input value="+91" placeholder='+91' type="number" 

                            />

                            <input type="number" placeholder='Number' required
                                value={ad_number}
                                name="ad_number"
                                onChange={e => onInputChange(e)}
                            />

                        </Box>
                    </Box>
                    <Box className='hrr'>
                        <hr />
                        <br />
                    </Box>

                    <Box className='f'>
                        <Text fontSize="16" fontWeight="bold">Address</Text>
                        <Box className='formF-f'>
                            <input type="number" placeholder='Pin code' required
                                value={ad_Pin_code}
                                name="ad_Pin_code"
                                onChange={e => onInputChange(e)}
                            />
                            <input type="text" placeholder='City' required
                                value={ad_City}
                                name="ad_City"
                                onChange={e => onInputChange(e)}
                            />
                            <input type="text" placeholder='State' required
                                value={ad_State}
                                name="ad_State"
                                onChange={e => onInputChange(e)}
                            />

                        </Box>
                        <Textarea placeholder='Address' required
                            value={ad_Address}
                            name="ad_Address"
                            onChange={e => onInputChange(e)}
                        />
                    </Box>

                    {/* button part  */}

                    <br />
                    <Box>

                        <Box className='te'>
                            <Text> Type of Address</Text>
                        </Box>
                        <br />
                        <Box className='btn-bs btn-ss'>
                            <button >Home</button>
                            <button >Office</button>
                        </Box>

                    </Box>
                    <br />
                    <Stack>
                        <Box className='check'>

                            <Checkbox defaultChecked>Set As Default Address</Checkbox>
                        </Box>
                    </Stack>

                    <Stack>
                        <Box className='btn-bs btn2'>
                            <button>Back</button>
                        </Box>
                    </Stack>
                    <Box className='btn1'>
                        <button onClick={handleClick}  >SHIP TO THIS ADDRESS</button>
                    </Box>
                </form>
            </Box>

        </Box>

    )

}
