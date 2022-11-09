import { Box } from "@chakra-ui/react";
import React from "react";
import Check from "../Components/Check";
import MinibannerContainer from "../Components/MinibannerContainer";
import MinibannerContainer2 from "../Components/MinibannerContainer2";
import MinibannerContainer3 from "../Components/MinibannerContainer3";
import SingleImage from "../Components/SingleImage";

const cards = [
  "https://files.myglamm.com/site-images/original/Homepage-desktop---1920-x-527.png",
  "https://files.myglamm.com/site-images/original/popxo1920x527.gif",
  "https://files.myglamm.com/site-images/original/Manish1920x527.jpg",
  "https://files.myglamm.com/site-images/original/Homepage-1920x527_3.jpeg",
];
const cards1 = [
  "https://files.myglamm.com/site-images/original/2240x614-Gifting-Store-KV-refresh.jpg",
  "https://files.myglamm.com/site-images/original/1920x527.jpg",
];



export default function Home() {
  return (
    <Box backgroundColor={"#f4f4f4"}>
      {/* <ImageCrousal/> */}
      <Check cards={cards} />
      <SingleImage img="https://files.myglamm.com/site-images/original/ULt2240x614.jpg" />
      <Check cards={cards1} />
      <MinibannerContainer/>
      <SingleImage img="https://files.myglamm.com/site-images/original/make2240X614.jpg"/>
      <MinibannerContainer2/>
      <MinibannerContainer3/>
    </Box>
  );
}
