import React, { useEffect } from "react";
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
  PinInput,
  PinInputField,
} from "@chakra-ui/react";
import GoogleButton from "react-google-button";
import PhoneInput from "react-phone-input-2";
import { AppContext } from "../../Context/AppContextProvider";
import { AuthContext } from "../../Context/AuthContextProvider";
import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [confirmObj, setconfirmObj] = useState("")
  const { googleSignIn,setUpRecaptcha,setUser,user} = useContext(AuthContext);
  const [showOtpPage, setshowOtpPage] = useState(false)
  let [number, setNumber] = useState("")
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
  const handleGoogleSignIn = async (e) =>{
    e.preventDefault();
    try {
      googleSignIn();
      localStorage.setItem('isAuth',true)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    if(user != null){
      navigate('/')
    }
  },[user])
  return (
    <>
      <Stack align="center" mt="5rem">
        <p style={{ fontSize: "0.7rem" }}>
          Get 15% Good Points back on every order
        </p>
        <Image
          my={0}
          src="https://i.ibb.co/K0RKcJt/image-1.png"
          alt="White-Feather-Logo"
          boxSize="110px"
          objectFit="cover"
        />
        <p style={{ fontSize: "0.7rem" }}>Enter Phone Number</p>
        <PhoneInput
          country={"in"}
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
    </>
  );
};

export default Login;
