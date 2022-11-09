import React from "react";
import {Box, Text, Image} from "@chakra-ui/react"

export default function CatagoriesCard({ img, title }) {
  return (
    <Box >
      <Image src={img} w="100%" />
      <Text as="b">{title}</Text>
    </Box>
  );
}
