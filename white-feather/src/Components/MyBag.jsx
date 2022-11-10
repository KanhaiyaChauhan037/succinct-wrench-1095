import React from 'react'
import MyBagNavbar from './MyBagNavbar'
import { ChakraProvider } from '@chakra-ui/react'


const MyBag = () => {




    return (
        <div>
         
    

          
            <ChakraProvider>
            <MyBagNavbar />
            </ChakraProvider>
        </div>
    )
}

export default MyBag