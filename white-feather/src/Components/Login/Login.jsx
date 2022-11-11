import React from "react";
import "./Login.css";
import {Navigate} from 'react-router-dom'
import GoogleButton from "react-google-button";
import {
  Divider,
  Box,
  Spacer,
  HStack,
  Image,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  useDisclosure,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { AppContext } from "../../Context/AppContextProvider";
import { AuthContext } from "../../Context/AuthContextProvider";
import { useContext } from "react";
import { useState } from "react";

function BasicUsage() {
  const { googleSignIn} = useContext(AuthContext);
  const handleGoogleSignIn = async (e) =>{
    e.preventDefault();
    try {
      googleSignIn();
      setIsLogin('got it')
    } catch (error) {
      console.log(error);
      setIsLogin(null)
    }
  }
  const { isOpen, onOpen, onClose,setIsLogin } = useContext(AppContext);
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent style={{ backgroundColor: "#262726" }}>
          <ModalCloseButton className="modelColor" />
          <ModalBody>
            <HStack mt={8}>
              <Spacer />
              <p style={{ fontSize: "0.7rem", color: "white" }}>
                Get 15% Good Points back on every order
              </p>
              <Spacer />
            </HStack>
            <HStack mt={2}>
              <Spacer />
              <Image
                src="https://i.ibb.co/Jtvk4Lf/White-Feather.png"
                alt="White-Feather-Logo"
                boxSize="120px"
                objectFit="cover"
              />
              <Spacer />
            </HStack>
            <HStack> {/* google */}
              <Spacer />
              <GoogleButton
                label="Sign in with Google"
                onClick={handleGoogleSignIn}
              />
              <Spacer />
            </HStack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default BasicUsage;
