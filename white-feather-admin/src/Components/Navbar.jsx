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
  Text,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserAlt } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";

export function Navbar() {
  const navigate = useNavigate();
  let handleLogout = () => {
    localStorage.setItem("isAuth", false);
    navigate("/");
  };

  return (
    <Box
      w="100%"
      px="30px"
      h="70px"
      display={{ base: "none", sm: "none", md: "block", lg: "block" }}
      bg="#fee8e8"
      position={"sticky"}
      top={"0px"}
      zIndex={100}
      boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
    >
      <HStack alignItems={"center"} h="100%" justifyContent={"space-between"}>
        <HStack justifyContent={"space-between"} gap="30px">
          <Link to={"/"}>
            <Image
              src="White-Feather.png"
              w="50px"
              h="50px"
              borderRadius={"50%"}
            />
          </Link>
          <Link to="/">
            <Button bg="transperant" _hover={{ bg: "#ff9797" }}>
              All Products
            </Button>
          </Link>
          <Link to={"/add-product"}>
            <Button bg="transperant" _hover={{ bg: "#ff9797" }}>
              Add Product
            </Button>
          </Link>
        </HStack>
        <HStack>
          <Button bg="transperant" _hover={{ bg: "#ff9797" }}>
            <HStack>
              <FaUserAlt />
              <Text>Admin</Text>
            </HStack>
          </Button>
          <Button
            bg="transperant"
            _hover={{ bg: "#ff9797" }}
            onClick={handleLogout}
          >
            <HStack>
              <TbLogout />
              <Text>Logout</Text>
            </HStack>
          </Button>
        </HStack>
      </HStack>
    </Box>
  );
}

export function NavbarMob() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  let handleLogout2 = () => {
    localStorage.setItem("isAuth", false);
    navigate("/");
  };
  return (
    <Box
      w="100%"
      border={"1px solid red"}
      display={{ base: "block", sm: "block", md: "none", lg: "none" }}
      px="0px"
      bg="#fee8e8"
      position={"sticky"}
      top={"0px"}
      zIndex={100}
      boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
      h="50px"
    >
      <HStack justifyContent={"space-between"} alignItems={"center"} h="100%">
        <Button onClick={onOpen} bg="transperant">
          <GiHamburgerMenu />
        </Button>
        <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth="1px">
              <Link to={"/"}>
                <Image
                  src="White-Feather.png"
                  w="60px"
                  h="60px"
                  display={"block"}
                  m="auto"
                  borderRadius={"50%"}
                />
              </Link>
            </DrawerHeader>
            <DrawerBody>
              <VStack>
                <Link to={"/"}>
                  <Button bg="transperant" _hover={{ bg: "#ff9797" }} w="140px">
                    All Products
                  </Button>
                </Link>
                <Link to="/add-product">
                  <Button bg="transperant" _hover={{ bg: "#ff9797" }} w="140px">
                    Add Products
                  </Button>
                </Link>
                <Button
                  onClick={handleLogout2}
                  w="140px"
                  bg={"#000000"}
                  as="b"
                  color={"white"}
                >
                  <HStack>
                    <TbLogout />
                    <Text>Logout</Text>
                  </HStack>
                </Button>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
        <Button bg="transperant" _hover={{ bg: "#ff9797" }}>
          <FaUserAlt />
        </Button>
      </HStack>
    </Box>
  );
}
