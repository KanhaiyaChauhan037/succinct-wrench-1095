import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Styles from "../Css/Makeup.module.css"
import SingleProductCard from "../Components/SingleProductCard";

const Makeup = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading ] = useState(false)
//   const navigate = useNavigate();

  useEffect(()=>{
    setLoading(true)
    axios.get("https://localdatawhitefeather.herokuapp.com/data")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        setLoading(false);
   })
      .catch((err) => {
        console.log(err);
        setLoading(false)
      });
  }, []);

 return <Box>
    {
      loading && <div className={Styles.loader}>
      	  <div className={Styles.spinner}></div>
        </div>
    }
    <Box mt="40px">
      <Text fontWeight={"bold"} lineHeight="50px" fontSize={"40px"}>MAKEUP</Text>
    </Box>
   <SimpleGrid className={Styles.grid} columns={[1,2,3]} spacing={10}>
        {data &&
          data.map((item) => {
            return (
              <Box key={item.id}>
                <Stack className={Styles.Stack}>
                  <SingleProductCard key={item.id}
                    image={item.image}
                    product={item.product}
                    shade={item.shade}
                    price={item.price}
                    id={item.id}
                  />
                </Stack>
              </Box>
            );
          })}
          </SimpleGrid>
  </Box>;
};

export default Makeup;