import React, { useRef } from "react";
import {
  Image,
  useDisclosure,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Stack,
  Box,
  FormLabel,
  Input,
  DrawerFooter,
  HStack,
  Text,
  Spacer,AccordionButton,Accordion,AccordionItem,AccordionIcon,AccordionPanel
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { BsBag } from "react-icons/bs";
import "./MobNav.css";

function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = useRef();

  return (
    <div className="mobNavbar">
      <div className="mobNavbarShowBar">
        <GiHamburgerMenu
          onClick={onOpen}
          style={{ fontSize: "1.2rem", cursor: "pointer" }}
        />
        <Image
          src="https://i.ibb.co/Jtvk4Lf/White-Feather.png"
          alt="White-Feather-Logo"
          boxSize="50px"
          objectFit="cover"
        />
        <BsBag size="1.5rem" className="bagIcon" />
      </div>
      <Drawer
        isOpen={isOpen}
        placement="left"
        initialFocusRef={firstField}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader
            borderBottomWidth="1px"
            style={{ backgroundColor: "#fee9e9" }}
          >
            <Stack spacing={4} mt={2}>
              <HStack align="center">
                <RiAccountPinCircleFill
                  color="white"
                  style={{ fontSize: "2.5rem" }}
                />
                <div>
                  <p>Welcome,</p>
                  <h2>Login/Signup</h2>
                </div>
              </HStack>
              <Spacer />
              <HStack align="left">
                <div>
                  <Text fontSize="sm">My Rewards</Text>
                  <Text fontSize="xs">
                    Invite your friends and unlock goodies worth 5 Lakhs
                  </Text>
                </div>
              </HStack>
            </Stack>
          </DrawerHeader>

          <DrawerBody>
            <Accordion allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Home
                    </Box>
                  </AccordionButton>
                </h2>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Shop by Category
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    <Stack spacing={2}>

                    <a href="#">Makeup</a>
                    <a href="#">Skincare</a>
                    <a href="#">Bath & Body</a>
                    <a href="#">Hair Care</a>
                    <a href="#">Santizing Care</a>
                    <a href="#">Accessories and Kits</a>
                    </Stack>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </DrawerBody>

          {/* <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Submit</Button>
          </DrawerFooter> */}
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default DrawerExample;
