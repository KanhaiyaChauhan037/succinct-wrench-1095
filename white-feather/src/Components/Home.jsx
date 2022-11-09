import { Box, Button, Image } from '@chakra-ui/react'
import React from 'react'

let pics=[]

export default function Home() {
  return (
    <Box w="100%" border={"1px solid black"}>
        <Image src="https://files.myglamm.com/site-images/original/popxo1920x527.gif" w="100%"/>
        <Button></Button>
        <Button></Button>      
    </Box>
  )
}
