import {
    Box, Button, Checkbox, Flex,
    FormControl, Grid, Input, Select, Text
    , Image, Option, FormLabel, Stack, Textarea
} from '@chakra-ui/react'

import logoo from "./logoo.png";

import "./address.css"


export const AddressPage = () => {

  


    // const handleHome = () => {
    


    // }

    // const handleOffice = () => {



    // }



    return (

        <Box className='main' >
            {/* Navbar Part  */}

            <Box className='nub'>
                <Box className='nubl'>
                    <Image className='sr' src={logoo} />
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

            <Box className='bord'>
                <Box className='formC'>
                    <h3>Add New Address</h3>
                </Box>
                <hr />
                <form>
                    <Box px="5">
                        <h4>Contact</h4>
                        <Box className='formF' id='hh'>
                            <input type="text" placeholder='Name' required />

                            <input value="91" type="number" required />

                            <input type="number" placeholder='Number' required />

                        </Box>
                    </Box>
                    <Box className='hrr'>
                        <hr />
                    </Box>

                    <Box className='f'>
                        <h4>Address</h4>
                        <Box className='formF'>
                            <input type="number" placeholder='Pin code' required />
                            <input type="text" placeholder='City' required />
                            <input type="text" placeholder='State' required />

                        </Box>
                        <Textarea placeholder='Address' required />
                    </Box>

                    {/* button part  */}
</form>
                    <Box>

                        <Box className='te'>
                            <Text> Type of Address</Text>
                        </Box>
                        <Box className='btn'>
                            <button >Home</button>
                            <button >Office</button>
                        </Box>

                    </Box>
                    <Stack>
                        <Box className='check'>

                            <Checkbox defaultChecked>Set As Default Address</Checkbox>
                        </Box>
                    </Stack>
            
                <Stack>
                    <Box className='btn btn2'>
                        <button>Back</button>
                    </Box>
                </Stack>
                <Box className='btn1'>
                    <button>SHIP TO THIS ADDRESS</button>
                </Box>
            </Box>

        </Box>

    )

}
