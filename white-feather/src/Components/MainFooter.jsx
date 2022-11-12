import { Image, Box, Button, Container, Flex, HStack, Input, InputGroup, InputRightElement, SimpleGrid, Text, useMediaQuery, VStack } from '@chakra-ui/react'
import React from 'react'

function MainFooter() {

    // const [pixel720]=useMediaQuery(z)


    return (
        <Box  >

            <Box
                //  border="1px solid blue"
                w="90%" m="auto" p="10px" display="flex" flexWrap="wrap">

                <HStack spacing={8}>
                    <Box
                        //  border="2px solid red"
                        h="600px">
                        <VStack textAlign="center" >

                            <Text fontFamily="sans-serif" fontSize="14px" color=" darkgray" >LIPS</Text>
                            <Text fontFamily="sans-serif" fontSize="14px">Lipstic</Text>
                            <Text fontFamily="sans-serif" fontSize="14px" >Crayon Lipstick</Text>
                            <Text fontFamily="sans-serif" fontSize="14px">Matte Lipstick</Text>
                            <Text fontFamily="sans-serif" fontSize="14px">Lip Gloss</Text>
                            <Text fontFamily="sans-serif" fontSize="14px">Hi-Shine Lipgloss</Text>
                            <Text fontFamily="sans-serif" fontSize="14px">Lip Liner</Text>
                            <Text fontFamily="sans-serif" fontSize="14px">Lip Balm</Text>
                            <Text fontFamily="sans-serif" fontSize="14px"> Glitter</Text>
                            <Text fontFamily="sans-serif" fontSize="14px">Lip Stain</Text>
                            <Text fontFamily="sans-serif" fontSize="14px">Lipstick Set</Text>
                            <Text fontFamily="sans-serif" fontSize="14px">Lip Kit</Text>
                            <Text fontFamily="sans-serif" fontSize="14px">Find Your Lipstic</Text>

                        </VStack>
                    </Box>







                    <Box
                        // border="2px solid red"
                        h="600px">
                        <VStack textAlign="center">
                            <Text fontFamily="sans-serif" fontSize="14px" color=" gray">FACE</Text>
                            <Text fontFamily="sans-serif" fontSize="14px">Face Sets</Text>
                            <Text fontFamily="sans-serif" fontSize="14px" >Fixing Powder</Text>
                            <Text fontFamily="sans-serif" fontSize="14px">Primer</Text>
                            <Text fontFamily="sans-serif" fontSize="14px">Concealer</Text>
                            <Text fontFamily="sans-serif" fontSize="14px">Foundation</Text>
                            <Text fontFamily="sans-serif" fontSize="14px">Compact</Text>
                            <Text fontFamily="sans-serif" fontSize="14px">Banana Powder</Text>
                            <Text fontFamily="sans-serif" fontSize="14px" >Highlighter</Text>
                            <Text fontFamily="sans-serif" fontSize="14px">Blush</Text>
                            <Text fontFamily="sans-serif" fontSize="14px">Bronzer</Text>
                            <Text fontFamily="sans-serif" fontSize="14px">Sindoor</Text>
                            <Text fontFamily="sans-serif" fontSize="14px">Makeup Brushes</Text>
                        </VStack></Box>

                    <Box
                        // border="2px solid red"
                        h="600px">
                        <VStack textAlign="center" >
                            <Text fontFamily="sans-serif" fontSize="14px" color=" gray">EYE</Text>
                            <Text fontFamily="sans-serif" fontSize="14px">Eye Shadow</Text>
                            <Text fontFamily="sans-serif" fontSize="14px">Eyeliner</Text>
                            <Text fontFamily="sans-serif" fontSize="14px" >Eyebrows</Text>
                            <Text fontFamily="sans-serif" fontSize="14px"> Glitter</Text>
                            <Text fontFamily="sans-serif" fontSize="14px">Lip Gloss</Text>
                            <Text fontFamily="sans-serif" fontSize="14px">Mascara</Text>
                            <Text fontFamily="sans-serif" fontSize="14px"> Kajal</Text>
                        </VStack></Box>

                    <Box
                        //  border="2px solid red"
                        h="600px">
                        <VStack textAlign="center" >

                            <Text fontFamily="sans-serif" fontSize="14px" color=" gray">NAILS</Text>
                            <Text fontFamily="sans-serif" fontSize="14px">Nail Polish</Text>
                            <Text fontFamily="sans-serif" fontSize="14px" >Matte Nail Polish</Text>
                            <Text fontFamily="sans-serif" fontSize="14px">Nail Lacquer</Text>


                        </VStack></Box>

                    <Box
                        //  border="2px solid red"
                        h="600px">
                        <VStack textAlign="center" >
                            <Text fontFamily="sans-serif" fontSize="14px" color=" gray">SKINCARE</Text>
                            <Text fontFamily="sans-serif" fontSize="14px">Moisturiser</Text>
                            <Text fontFamily="sans-serif" fontSize="14px" >Night Cream</Text>
                            <Text fontFamily="sans-serif" fontSize="14px">Eye Cream</Text>
                            <Text fontFamily="sans-serif" fontSize="14px">Body lotion</Text>
                            <Text fontFamily="sans-serif" fontSize="14px">Serum</Text>
                            <Text fontFamily="sans-serif" fontSize="14px">Sunscreen</Text>
                            <Text fontFamily="sans-serif" fontSize="14px">Skincare Kits</Text>
                            <Text fontFamily="sans-serif" fontSize="14px" >Cleansing Products</Text>
                            <Text fontFamily="sans-serif" fontSize="14px">Exfoliator & Scrub</Text>
                            <Text fontFamily="sans-serif" fontSize="14px">Face Wash</Text>
                            <Text fontFamily="sans-serif" fontSize="14px">Mask</Text>
                            <Text fontFamily="sans-serif" fontSize="14px">face Pack</Text>


                        </VStack></Box>
                    <Box
                        // border="2px solid red"
                        h="600px">
                        <VStack textAlign="center" >
                            <Text fontFamily="sans-serif" fontSize="14px" color=" gray">BATH & BODY</Text>
                            <Text fontFamily="sans-serif" fontSize="14px">Shower Gels</Text>
                            <Text fontFamily="sans-serif" fontSize="14px" >Soaps</Text>
                            <Text fontFamily="sans-serif" fontSize="14px">Body Lotion</Text>
                            <Text fontFamily="sans-serif" fontSize="14px">Body Spray & Mists</Text>
                            <Text fontFamily="sans-serif" fontSize="14px">Hand Wash</Text>
                            <Text fontFamily="sans-serif" fontSize="14px"> Foot Cream</Text>


                        </VStack></Box>

                    {/*  */}

                    <Box
                        // border="2px solid red" 
                        h="600px">
                        <VStack textAlign="center" >

                            <Text fontFamily="sans-serif" fontSize="14px"color=" gray">SANITIZEING CARE</Text>
                            <Text fontFamily="sans-serif" fontSize="14px">Sanitizing Kits</Text>
                            <Text fontFamily="sans-serif" fontSize="14px" >Sanitizing Soray</Text>
                            <Text fontFamily="sans-serif" fontSize="14px">Sanitizing Wipes</Text>
                            <Text fontFamily="sans-serif" fontSize="14px">Hand Sanitizer</Text>



                        </VStack></Box>
                    <Box
                        // border="2px solid red" 
                        h="600px">
                        <VStack textAlign="center" >
                            <Text fontFamily="sans-serif" fontSize="14px"color=" gray">KITS AND COMBOS</Text>
                            <Text fontFamily="sans-serif" fontSize="14px">Makeup Kits</Text>
                            <Text fontFamily="sans-serif" fontSize="14px" >Bridal makeup Kits</Text>
                            <Text fontFamily="sans-serif" fontSize="14px">Makeup Combo</Text>
                            <Text fontFamily="sans-serif" fontSize="14px">Makeup Gift Sets</Text>
                            <Text fontFamily="sans-serif" fontSize="14px">Cosmetics Kits & Combos</Text>

                        </VStack></Box>
                    <Box
                        // border="2px solid red" 
                        h="600px">
                        <VStack textAlign="center" >
                            <Text fontFamily="sans-serif" fontSize="14px"color=" gray">HAIR CARE</Text>
                            <Text fontFamily="sans-serif" fontSize="14px">Shampoo</Text>
                            <Text fontFamily="sans-serif" fontSize="14px" >Conditioner</Text>
                            <Text fontFamily="sans-serif" fontSize="14px">Hair Oil</Text>
                            <Text fontFamily="sans-serif" fontSize="14px">Serum</Text>
                            <Text fontFamily="sans-serif" fontSize="14px">Hair Mask</Text>
                            <Text fontFamily="sans-serif" fontSize="14px">Combos</Text>






                        </VStack></Box>
                    <Box
                        // border="2px solid red"
                        h="600px">
                        <VStack textAlign="center" >
                            <Text fontFamily="sans-serif" fontSize="14px"color=" gray">MYGLAMMSTUDIO</Text>
                            <Text fontFamily="sans-serif" fontSize="14px">Style</Text>
                            <Text fontFamily="sans-serif" fontSize="14px" >Lifestyle</Text>
                            <Text fontFamily="sans-serif" fontSize="14px">Trends</Text>
                            <Text fontFamily="sans-serif" fontSize="14px">Tips</Text>
                            <Text fontFamily="sans-serif" fontSize="14px">Beauty Tutorials</Text>


                        </VStack></Box>
                    <Box
                        //  border="2px solid red"
                        h="600px">
                        <VStack textAlign="center" >
                            <Text fontFamily="sans-serif" fontSize="14px" color=" gray" fontWeight="light bold"> KNOW MORE</Text>
                            <Text fontFamily="sans-serif" fontSize="14px">About Us</Text>
                            <Text fontFamily="sans-serif" fontSize="14px" >Exclusive Offers</Text>
                            <Text fontFamily="sans-serif" fontSize="14px">Refer & Earn</Text>
                            <Text fontFamily="sans-serif" fontSize="14px">myglammPARTIES</Text>
                            <Text fontFamily="sans-serif" fontSize="14px">Store Locator</Text>
                            <Text fontFamily="sans-serif" fontSize="14px"> Press & Media</Text>
                            <Text fontFamily="sans-serif" fontSize="14px">Terms & Conditions</Text>
                            <Text fontFamily="sans-serif" fontSize="14px" >Privacy Policy</Text>
                            <Text fontFamily="sans-serif" fontSize="14px"> Shipping and Delivery policy</Text>
                            <Text fontFamily="sans-serif" fontSize="14px">Returns and Replacements</Text>
                            <Text fontFamily="sans-serif" fontSize="14px">Loyalty Program PolicySitemap</Text>
                            <Text fontFamily="sans-serif" fontSize="14px">  Responsible Disclosure Policy</Text>

                        </VStack></Box>

                </HStack>
            </Box>

            <Box w="85%" m="auto" mt="-4%">
                <Flex justifyContent="space-between">
                    <Text fontFamily="sans-serif" fontSize="14px">SUBSCRIBE FOR MYGLAMM EMAILS</Text>
                    <Text fontFamily="sans-serif" fontSize="14px">EXPERIENCE THE MYGLAMM MOBILE APP</Text>
                </Flex>
                <Flex mt="20px">
                    <InputGroup size='md' w="35%">
                        <Input

                            type="text"
                            placeholder='Please enter valid email ID'
                            borderColor="black"
                            borderRadius="none"
                        />
                        <InputRightElement width='-5.2rem'>
                            <Button h='40px' size='m' color="white" bg="black" borderRadius="none">
                                SUBSCRIBE NOW
                            </Button>
                        </InputRightElement>
                    </InputGroup>

                  
                        <Text fontFamily="sans-serif" fontSize="11px" mt="10px" ml="20px">STAY CONNECTED |</Text>
                        <Box display="flex" gap="20px" ml="30px" w="25%" p="5px">
                            <Image src="https://cdn-icons-png.flaticon.com/128/174/174855.png" w="15px" h="25px "/>
                            <Image src="https://cdn-icons-png.flaticon.com/128/733/733579.png" w="15px" h="25px " />
                            <Image src="https://cdn-icons-png.flaticon.com/128/733/733566.png" w="15px" h="25px " />
                            <Image src="https://cdn-icons-png.flaticon.com/128/174/174883.png" w="15px" h="25px " />
                        </Box>
                

                    <Box display="flex"  p="10px" ml="80px" gap="40px">
                        <Image src="https://files.myglamm.com/site-images/original/iosStore.png" w="100px" />
                        <Image src="https://files.myglamm.com/site-images/original/playStore.png" w="100px" />
                    </Box>
                </Flex>
            </Box>
        </Box>

    )
}

export default MainFooter



