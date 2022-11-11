import { Box, Button, Divider, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
export default function ProductCard({ img, name, desc, shade, price, id }) {
  return (
    <Box
      display={"flex"}
      flexDirection="column"
      gap="10px"
      textAlign={"center"}
      pb="15px"
      borderRadius={"5px"}
      boxShadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"
      bg="white"
    >
      <Image src={img} w="100%" borderTopRadius={"5px"} />
      <Box px="10px">
        <Text
          overflow={"hidden"}
          textOverflow="ellipsis"
          whiteSpace={"nowrap"}
          fontWeight="bold"
        >
          {name}
        </Text>
        <Text overflow={"hidden"} textOverflow="ellipsis" whiteSpace={"nowrap"}>
          {desc}
        </Text>
      </Box>
      <HStack justifyContent={"center"} w="100%">
        <Text as={"b"}>{shade}</Text>
        <Divider orientation="vertical" borderColor={"black"} h="25px" />
        <Text as={"b"}>{price}</Text>
      </HStack>
      <HStack justifyContent={"center"} w="100%">
        <Link to={`/${id}`}>
          <Button bg={"transparent"}>
            <HStack>
              <Text>Edit</Text>
              <BiEditAlt />
            </HStack>
          </Button>
        </Link>
        <Button bg={"transparent"}>
          <HStack>
            <Text color="red">Delete</Text>
            <RiDeleteBin6Line color="red" />
          </HStack>
        </Button>
      </HStack>
    </Box>
  );
}
