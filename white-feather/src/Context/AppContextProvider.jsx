import { useDisclosure } from '@chakra-ui/react';
import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

export const AppContext = createContext();


const AppContextProvider = ({children}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [first, setfirst] = useState("second")
  return (
    <AppContext.Provider value={{isOpen, onOpen, onClose,first,setfirst}}>
        {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider