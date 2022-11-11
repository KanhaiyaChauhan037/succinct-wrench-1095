import { Box, FormControl, FormLabel, Input, VStack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSingleData } from "../Redux/actions";
import { useSelector, useDispatch } from "react-redux";

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
  const dispatch=useDispatch()

  useEffect(() => {
     dispatch(getSingleData(id));
     setState(singleData)
  }, []);

  useEffect(()=>{
    setState(singleData)
  },[singleData])

 const handleChange = (event) => {
    let na=event.target.name
    let val=event.target.value;
    setState({[na]:val})
  }
const handleClick=()=>{
  console.log(state);
}

  const { image, product, title, price, shade } = state;
  return (
    <Box w="40%" border={"1px solid red"} m="auto">
      <FormControl >
        <VStack gap="10px">
          <Box w="100%">
            <FormLabel>Enter Image URL</FormLabel>
            <Input type="text" name="image" value={image} onChange={handleChange}/>
          </Box>
          <Box w="100%">
            <FormLabel>Enter Product Name</FormLabel>
            <Input type="text" name="product" value={product} onChange={handleChange}/>
          </Box>
          <Box w="100%">
            <FormLabel>Enter Product Description</FormLabel>
            <Input type="text" name="title" value={title} onChange={handleChange}/>
          </Box>
          <Box w="100%">
            <FormLabel>Enter Shades</FormLabel>
            <Input type="text" name="shade" value={shade} onChange={handleChange} />
          </Box>
          <Box w="100%">
            <FormLabel>Enter Product Price</FormLabel>
            <Input type="text" name="price" value={price} onChange={handleChange}/>
          </Box>
          <Box>
            <Input type="submit" onClick={handleClick}/>
          </Box>
        </VStack>
      </FormControl>
    </Box>
  );
}
