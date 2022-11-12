import React from "react";
import { Box, SimpleGrid, Text, Spinner } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteData, getData } from "../Redux/actions";
import ProductCard from "../Components/ProductCard";
import { Navbar, NavbarMob } from "../Components/Navbar";
import { Navigate, useNavigate } from "react-router-dom";



export default function AllProduct() {
  const { isError, isLoading, data } = useSelector((store) => store.prod);
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(getData());
  }, []);

  let del = (id) => {
    deleteData(id).then(() => dispatch(getData()));
    alert("Product deleted successfully");
  };

  
  return (
    <>
      <Navbar />
      <NavbarMob />
      <Box
        w={{ base: "96%", sm: "96%", md: "96%", lg: "80%" }}
        m="auto"
        mt="20px"
        mb="20px"
      >
        <Text fontSize={{ base: "xl", sm: "2xl", md: "3xl", lg: "4xl" }} as="b">
          Products
        </Text>
      </Box>
      <Box
        w={{ base: "96%", sm: "96%", md: "96%", lg: "80%" }}
        m="auto"
        display={"flex"}
        justifyContent="center"
      >
        {isLoading ? <Spinner size="xl" /> : null}
        {isError? <Text>Something Went Wrong</Text>:null}
      </Box>
      <Box w={{ base: "96%", sm: "96%", md: "96%", lg: "80%" }} m="auto">
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} gap="20px">
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
                  del={del}
                />
              );
            })}
        </SimpleGrid>
      </Box>
    </>
  );
}
