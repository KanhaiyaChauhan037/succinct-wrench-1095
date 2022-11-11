import React from "react";
import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getData } from "../Redux/actions";
import ProductCard from "../Components/ProductCard";

export default function AllProduct() {
  const { isError, isLoading, data } = useSelector((store) => store.prod);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <>
    <Box w={{base:"96%", sm:"96%", md:"96%", lg:"80%"}} m="auto" mt="20px" mb="20px">
      <Text fontSize={{base:"xl", sm:"2xl", md:"3xl", lg:"4xl"}} as="b">Products</Text>
    </Box>
    <Box w={{base:"96%", sm:"96%", md:"96%", lg:"80%"}} m="auto">
      <SimpleGrid columns={{base:1, sm:2, md:3, lg:4}} gap="20px">
        {data &&
          data.map((el) => {
            return (
              <ProductCard
                key={el.id}
                img={el.image}
                name={el.product}
                desc={el.title}
                shade={el.shade}
                price={el.price}
                id={el.id}
              />
            );
          })}
      </SimpleGrid>
    </Box>
    </>
  );
}
