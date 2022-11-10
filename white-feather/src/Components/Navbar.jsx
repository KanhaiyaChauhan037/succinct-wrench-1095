import React from "react";
import "./Navbar.css";
import { BiSearchAlt2, BiStoreAlt } from "react-icons/bi";
import { HiGift } from "react-icons/hi";
import { BsPerson, BsBag } from "react-icons/bs";
import { Image } from "@chakra-ui/react";

/* #262726 #fafafa */
const newNav = () => {
  return (
    <>
      <div className="ad-store">
        <div className="ad-store-left">
          <HiGift color="#faa8a8" />
          <p>Pick Any Product at Rs 199</p>
          <a href="#">SHOP NOW</a>
        </div>
        <div className="ad-store-right">
          <BiStoreAlt />
          <p>White Feather Store</p>
        </div>
      </div>
      <div className="navbar">
        <Image
          src="https://i.ibb.co/Jtvk4Lf/White-Feather.png"
          alt="White-Feather-Logo"
          boxSize="90px"
          objectFit="cover"
        />
        <div className="inputDiv">
          <BiSearchAlt2 color="#a3a8b1" size="1.6rem" />
          <input
            type="text"
            name="search"
            placeholder="Find Lipstick, Eyeliner, Makeup Tutorial, etc"
          />
        </div>
        <div className="navbar-icon">
          <BsBag color="#fafafa" size="1.5rem" className="bagIcon" />
          <div className="lineDiv"></div>
          <BsPerson color="#fafafa" size="1.5rem" />
        </div>
      </div>
    </>
  );
};

export default newNav;
