import React from 'react'
import { Spacer,HStack,Image,Button,Modal,ModalOverlay,ModalContent,ModalHeader,ModalCloseButton, useDisclosure,ModalBody,ModalFooter } from "@chakra-ui/react";
import { LoremIpsum } from 'react-lorem-ipsum';
import { AppContext } from '../../Context/AppContextProvider'
import { useContext } from 'react';

function BasicUsage() {
  const { isOpen, onOpen, onClose } = useContext(AppContext);
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent style={{backgroundColor:'#262726'}}>
          <HStack mt={8}><Spacer /><p style={{fontSize:'0.7rem'}}>Get 15% Good Points back on every order</p><Spacer /></HStack>
          {/* <ModalHeader>Modal Title</ModalHeader> */}
          <HStack mt={2}>
            <Spacer />
          <Image
            src="https://i.ibb.co/Jtvk4Lf/White-Feather.png"
            alt="White-Feather-Logo"
            boxSize="90px"
            objectFit="cover"
          />
          <Spacer />
          </HStack>
          <ModalCloseButton />
          <ModalBody>
            <LoremIpsum p={1} />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default BasicUsage