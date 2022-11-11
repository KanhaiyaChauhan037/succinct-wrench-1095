import React from "react";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Image,
  useDisclosure,
  VStack,
  Text
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <Box
      w="100%"      
      px="30px"
      h="70px"
      display={{ base: "none", sm: "none", md: "block", lg: "block" }}
      bg="#fee8e8"
      position={'sticky'}
      top={"0px"}
      zIndex={100}
      boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
    >
      <HStack alignItems={"center"} h="100%" justifyContent={"space-between"}>
        <HStack justifyContent={"space-between"} gap="30px">
          <Image src="White-Feather.png" w="50px" h="50px" borderRadius={"50%"}/>
          <Link to="/"><Button bg='transperant'>All Products</Button></Link>
         <Link to={"/add-product"}><Button bg='transperant'>Add Product</Button></Link>
        </HStack>
        <Button bg='transperant'><HStack><FaUserAlt/><Text>Admin</Text></HStack></Button>
      </HStack>
    </Box>
  );
}


export function NavbarMob() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      w="100%"
      border={"1px solid red"}
      display={{ base: "block", sm: "block", md: "none", lg: "none" }}
      px="0px"
      bg="#fee8e8"
      position={'sticky'}
      top={"0px"}
      zIndex={100}
      boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
      h="50px"
    >
      <HStack justifyContent={"space-between"} alignItems={"center"} h="100%">
        <Button onClick={onOpen} bg='transperant'>
          <GiHamburgerMenu />
        </Button>
        <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth="1px">
              <Image src="White-Feather.png" w="60px" h="60px" display={"block"} m="auto" borderRadius={"50%"}/>
            </DrawerHeader>
            <DrawerBody>
                <VStack>
                <Link to={"/"}><Button bg='transperant'>All Products</Button></Link>
                <Link to="/add-product"><Button bg='transperant'>Add Products</Button></Link>
                </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
        <Button bg='transperant'>
          <FaUserAlt />
        </Button>
      </HStack>
    </Box>
  );
}
