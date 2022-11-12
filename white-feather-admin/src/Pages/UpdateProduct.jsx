import {
  Box,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Text,
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSingleData, updateData } from "../Redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { Navbar, NavbarMob } from "../Components/Navbar";

let init = {
  image: "",
  product: "",
  title: "",
  shade: "",
  price: "",
};
export default function UpdateProduct() {
  const { id } = useParams();
  const [state, setState] = useState(init);
  const { singleData } = useSelector((store) => store.prod);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getSingleData(id));
    setState(singleData);
  }, []);

  useEffect(() => {
    setState(singleData);
  }, [singleData]);

  const handleChange = (event) => {
    let na = event.target.name;
    let val = event.target.value;
    setState({ [na]: val });
  };
  const handleClick = () => {
    updateData(id, state);
    navigate("/");
    alert("Product updated successfully");
  };

  const { image, product, title, price, shade } = state;
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
          Update Product
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
                type="text"
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
