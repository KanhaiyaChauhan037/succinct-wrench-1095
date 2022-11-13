import { Box, FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

let init = {
  Eid: "",
  password: "",
};

export default function Login() {
  const [auth, setAuth] = useState(init);
  const navigate = useNavigate();

  let { Eid, password } = auth;
  let handleChange = (e) => {
    let { name, value } = e.target;
    setAuth({ ...auth, [name]: value });
  };

  let handleClick = () => {
    if (Eid == "fw20_0505" && password == "123456") {
      localStorage.setItem("isAuth", true)
      navigate("/");
    } else {
      alert("Invalid Login Details");
    }
  };
  return (
    <Box
      w={{ base: "95%", sm: "95%", md: "80%", lg: "40%" }}      
      m="auto"
      mt="60px"
    >
      <Box w="100%" textAlign={"center"}>
        <Text fontSize={{ base: "xl", sm: "2xl", md: "3xl", lg: "4xl" }} as="b">
          Admin Login
        </Text>
      </Box>
      <Box mb="10px" w="100%">
        <FormControl
          display={"flex"}
          flexDirection="column"
          gap={"20px"}
          isRequired
        >
          <Box>
            <FormLabel>Employee ID</FormLabel>
            <Input
              type="text"
              placeholder="Enter Employee ID"
              name="Eid"
              value={Eid}
              onChange={handleChange}
            />
          </Box>
          <Box>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter Password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </Box>
          <Box>
            <Input
              type={"submit"}
              bg="#000000"
              color={"white"}
              fontWeight="bold"
              cursor={"pointer"}
              onClick={handleClick}
            />
          </Box>
        </FormControl>
      </Box>
      <Text as={"u"} color="blue" cursor={"pointer"} fontWeight="bold">
        Forgot Password
      </Text>
    </Box>
  );
}
