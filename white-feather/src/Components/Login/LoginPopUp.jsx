import React, { useEffect } from "react";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import "./LoginPopUp.css";
import {Navigate} from 'react-router-dom'
import GoogleButton from "react-google-button";
import { RecaptchaVerifier,signInWithPhoneNumber } from "firebase/auth";
import {auth} from '../../Firebase/Firebase'
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
  VStack,
  Stack,
  Center,
  PinInput, PinInputField
} from "@chakra-ui/react";
import { AppContext } from "../../Context/AppContextProvider";
import { AuthContext } from "../../Context/AuthContextProvider";
import { useContext } from "react";
import { useState } from "react";

function BasicUsage() {
  const { googleSignIn,setUpRecaptcha,setUser,user} = useContext(AuthContext);
  const [confirmObj, setconfirmObj] = useState("")
  
  const getOtp = async (e) =>{
    e.preventDefault()
    number = `+${number}`
    try {
      const response = await setUpRecaptcha(number)
      console.log(response);
      setconfirmObj(response)
      setshowOtpPage(true)
    } catch (error) {
      console.log(error);
    }
  }
  const verifyOtp = async (e) =>{
    e.preventDefault()
    if(otp == '' || otp == null){
      alert("Enter OTP")
      return
    }
    try {
      await confirmObj.confirm(otp)
      setUser(number)
    } catch (error) {
      console.log(error);
      alert("Invalid OTP")
    }
  }
 
  const handleGoogleSignIn = async (e) =>{
    e.preventDefault();
    try {
      googleSignIn();
    } catch (error) {
      console.log(error);
    }
  }
  const { isOpen, onOpen, onClose } = useContext(AppContext);
  let [number, setNumber] = useState("")
  const [otp, setOtp] = useState("")
  const [showOtpPage, setshowOtpPage] = useState(false)
  useEffect(()=>{
    if(user != null){
      onClose()
    }
  },[user])
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} motionPreset='scale'>
        <ModalOverlay />
        <ModalContent style={{ backgroundColor: "#d9d8d9" }}>
          <ModalCloseButton background='#818181' className="modelColor" color='white' />
          {
            showOtpPage?(<ModalBody my='20'>
              <Stack align='center' spacing={6}>
              <HStack >
                <PinInput onChange={(e)=>setOtp(e)}>
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                </PinInput>
              </HStack>
              {
                otp == ""?<Button colorScheme="gray"disabled>Verify OTP</Button>:<Button colorScheme="blue" onClick={verifyOtp}>Verify OTP</Button>
              }
              </Stack>
              </ModalBody>):(<ModalBody>
            <Stack align='center' spacing={4} mb={5}>
            <Spacer />
            <Spacer />
              <p style={{ fontSize: "0.7rem" }}>
                Get 15% Good Points back on every order
              </p>
            <Image my={0}
                src="https://i.ibb.co/K0RKcJt/image-1.png"
                alt="White-Feather-Logo"
                boxSize="110px"
                objectFit="cover"
              />
              <p style={{ fontSize: "0.7rem"}}>
                Enter Phone Number
              </p>
            <PhoneInput
            country={'in'}
            value={number}
            onChange={setNumber}
            placeholder="Enter Phone Number"
          />
          <div id="recaptcha-container"></div>
          {
            number == ""?<Button colorScheme="gray"disabled>Sign in</Button>:<Button colorScheme="blue" onClick={getOtp}>Sign in</Button>
          }
          
          <Divider />
          <p style={{ fontSize: "0.7rem"}}>
                OR
              </p>
          <GoogleButton
                label="Sign in with Google"
                onClick={handleGoogleSignIn}
              />
          </Stack>
          </ModalBody>)
          }
          
          
          {/* <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </>
  );
}

export default BasicUsage;
