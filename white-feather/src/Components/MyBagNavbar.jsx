import React, { useState } from 'react'
import {
    Box, Flex, Image, Slider, SliderFilledTrack, SliderMark,
    SliderThumb, SliderTrack, Tooltip, HStack, Progress
} from "@chakra-ui/react"
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,

} from '@chakra-ui/react'



function MyBagNavbar() {
    const [sliderValue, setSliderValue] = useState(50)






    return (
        <div>

            <Box border='2px' borderColor='gray.200' p="6px"
            
            height="100px"
           
            
           
              width={[
                '100%', // 0-30em
                '50%', // 30em-48em
                '75%', // 48em-62em
                '100%', // 62em+
              ]}

                display="flex" gap="1%"
                alignItems="center"
               
                fontFamily="sans-serif"

            >
                <Box ml="6%" mt="1%">
                    <Image src='https://files.myglamm.com/site-images/original/MyGlamm-Logo_1.jpg' alt='m_logo'
                        objectFit="cover" />
                </Box>



                <Box h="70%" w="65%" 
                >
                    <Slider
                        id='slider'
                        defaultValue={25}
                        min={0}
                        max={100}
                        colorScheme='teal'
                        onChange={(v) => setSliderValue(v)} >

                        <SliderMark value={20}   >
                            SHOPPING BAG
                        </SliderMark>
                        <SliderMark value={40}   >
                            SELECT ADDRESS
                        </SliderMark>
                        <SliderMark value={60}  >
                            CHECKOUT
                        </SliderMark>
                        <SliderMark value={80}  >
                            PAYMENT
                        </SliderMark>

                        <SliderTrack mt="40px" >
                            <SliderFilledTrack bg='black' />
                        </SliderTrack>

                        <Tooltip
                            hasArrow
                            bg='teal.500'
                            color='white'
                            placement='top'


                        >
                            <SliderThumb borderRadius='50%'
                                border='10px solid lightgray' mt="40px" />
                        </Tooltip>
                    </Slider>
                </Box>

                <Box display="flex">
                    <Menu  >
                        <Image src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
                            alt="" w="20px"  />
                        <MenuButton ml="5px">
                            Users

                        </MenuButton>
                        <MenuList>
                            <MenuItem>My Profile</MenuItem>
                            <MenuItem>My Order</MenuItem>
                            <MenuItem>My Dashboard</MenuItem>
                            <MenuItem>Delete</MenuItem>
                            <MenuItem>My GlammXO Party</MenuItem>
                        </MenuList>
                    </Menu>
                </Box>


            </Box>







        </div >
    )
}

export default MyBagNavbar




