import {
  Box,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Text,
} from "@chakra-ui/react";
import { useRef } from "react";
import { useState } from "react";
import { Navbar, NavbarMob } from "../Components/Navbar";
import { postData } from "../Redux/actions";

let init = {
  image: "",
  product: "",
  title: "",
  shade: "",
  price: "",
};
export default function AddProduct() {
  const [state, setState] = useState(init);

  const { image, product, title, price, shade } = state;
  const handleChange = (event) => {
    let na = event.target.name;
    let val = event.target.value;
    setState({ ...state, [na]: val });
  };

  const handleClick = () => {
    if (
      image != "" &&
      product != "" &&
      title != "" &&
      price != "" &&
      shade != ""
    ) {
      postData(state);

      alert("Product updated successfully");
    } else {
      alert("All fields are required!");
      return;
    }
    setState(init);
  };

  return (
    <>
    <Navbar/>
      <NavbarMob/>
      <Box
        w={{ base: "95%", sm: "95%", md: "80%", lg: "40%" }}
        m="auto"
        mt="20px"
        mb="20px"
      >
        <Text fontSize={{ base: "xl", sm: "2xl", md: "3xl", lg: "4xl" }} as="b">
          Add Product
        </Text>
      </Box>
      <Box w={{ base: "95%", sm: "95%", md: "80%", lg: "40%" }} m="auto">
        <FormControl>
          <VStack gap="10px">
            <Box w="100%">
              <FormLabel>Enter Image URL</FormLabel>
              <Input
                type="text"
                name="image"
                value={image}
                onChange={handleChange}
                outline="1px solid #000000"
                _focus={{
                  outline: "none",
                  boxShadow:
                    "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
                }}
              />
            </Box>
            <Box w="100%">
              <FormLabel>Enter Product Name</FormLabel>
              <Input
                type="text"
                name="product"
                value={product}
                onChange={handleChange}
                outline="1px solid #000000"
                _focus={{
                  outline: "none",
                  boxShadow:
                    "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
                }}
              />
            </Box>
            <Box w="100%">
              <FormLabel>Enter Product Description</FormLabel>
              <Input
                type="text"
                name="title"
                value={title}
                onChange={handleChange}
                outline="1px solid #000000"
                _focus={{
                  outline: "none",
                  boxShadow:
                    "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
                }}
              />
            </Box>
            <Box w="100%">
              <FormLabel>Enter Shades</FormLabel>
              <Input
                type="number"
                name="shade"
                value={shade}
                onChange={handleChange}
                outline="1px solid #000000"
                _focus={{
                  outline: "none",
                  boxShadow:
                    "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
                }}
              />
            </Box>
            <Box w="100%">
              <FormLabel>Enter Product Price</FormLabel>
              <Input
                type="number"
                name="price"
                value={price}
                onChange={handleChange}
                outline="1px solid #000000"
                _focus={{
                  outline: "none",
                  boxShadow:
                    "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
                }}
              />
            </Box>
            <Box>
              <Input
                type="submit"
                onClick={handleClick}
                bg="#000000"
                color={"white"}
                fontWeight="bold"
                cursor={"pointer"}
              />
            </Box>
          </VStack>
        </FormControl>
      </Box>
    </>
  );
}
