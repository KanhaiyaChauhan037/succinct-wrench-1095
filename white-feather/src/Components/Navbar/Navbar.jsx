import React from "react";
import "./Navbar.css";
import { BiSearchAlt2, BiStoreAlt } from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io";
import { HiGift } from "react-icons/hi";
import { BsPerson, BsBag } from "react-icons/bs";
import { Image,Heading,HStack,Text,Spacer } from "@chakra-ui/react";
import { AppContext } from '../../Context/AppContextProvider'
import { AuthContext } from '../../Context/AuthContextProvider'
import { useContext } from "react";
import { useEffect } from "react";

/* #262726 #fafafa */
const Navbar = () => {

  function accountNameDrop() {
    document.getElementById("accountdrop").classList.toggle("show");
  }
  const handleSignout = async () =>{
    try {
      await logOut();
    } catch (error) {
      console.log(error);
      
    }
  } 
  const {user,logOut} = useContext(AuthContext)
  const { isOpen, onOpen, onClose,isLogin,setIsLogin } = useContext(AppContext)
  useEffect(()=>{
    if(user != null){
      onClose()
    }
  },[user])
  const checkVal = user?.email || user
  console.log(checkVal);
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
        <div className="navbar-top">
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
            {
              checkVal?(
              <div className="accountName">
                <div>
                  <button id="accountName-btn" onClick={accountNameDrop}>
                  {
                    checkVal
                  }
                  <IoMdArrowDropdown className="accountName-icon" />
                  </button>
                </div>
              <div className="accountName-dropDown" id="accountdrop">
                <a href="#">My Profile</a>
                <a href="#">My Orders</a>
                <a href="#">My Dashboard</a>
                <button onClick={handleSignout}>Sign Out</button>
              </div>
              </div>
              ):(<BsPerson color="#fafafa" size="1.5rem" onClick={onOpen} style={{cursor:'pointer'}} />)
            }
            
          </div>
        </div>
        <div className="navbar-bottom">
          <ul class="navbar-nav">
           {/* ============== 1st Nav Item ==============  */}
            <li class="nav-item">
              <button>

              <a href="#">HOME</a>
              </button>
            </li>
             {/* ============== 2nd Nav Item ==============  */}
            <li class="nav-item has-dropdown">
              <li class="nav-item">
                <button>
                <a href="#">MAKEUP</a>
                </button>
              </li>
              <div className="dropdown">
                <div className="dropdown-content">
                  <div>
                    <a href="#" className="dropdown-content-heading">
                      LIPS
                    </a>
                    <button>
                      <a href="#">Lipstick</a>
                    </button>
                    <button>
                      <a href="#">Crayon Lipstick</a>
                    </button>
                    <button>
                      <a href="#">Liquid Lipstick</a>
                    </button>
                    <button>
                      <a href="#">Hi-Shine Lipstick</a>
                    </button>
                    <button>
                      <a href="#">Matte Lipstick</a>
                    </button>
                    <button>
                      <a href="#">Lip Gloss</a>
                    </button>
                    <button>
                      <a href="#">Lip Liner</a>
                    </button>
                    <button>
                      <a href="#">Lip Balm</a>
                    </button>
                    <button>
                      <a href="#">Lip Glitter</a>
                    </button>
                    <button>
                      <a href="#">Lip Stain</a>
                    </button>
                    <button>
                      <a href="#">Lipstick Set</a>
                    </button>
                    <button>
                      <a href="#">Lip Kit</a>
                    </button>
                    <button>
                      <a href="#">Find Your Lipstick</a>
                    </button>
                  </div>
                  <div>
                    <a href="#" className="dropdown-content-heading">
                      LIPS
                    </a>
                    <button>
                      <a href="#">Lipstick</a>
                    </button>
                    <button>
                      <a href="#">Crayon Lipstick</a>
                    </button>
                    <button>
                      <a href="#">Liquid Lipstick</a>
                    </button>
                    <button>
                      <a href="#">Hi-Shine Lipstick</a>
                    </button>
                    <button>
                      <a href="#">Matte Lipstick</a>
                    </button>
                    <button>
                      <a href="#">Lip Gloss</a>
                    </button>
                    <button>
                      <a href="#">Lip Liner</a>
                    </button>
                    <button>
                      <a href="#">Lip Balm</a>
                    </button>
                    <button>
                      <a href="#">Lip Glitter</a>
                    </button>
                    <button>
                      <a href="#">Lip Stain</a>
                    </button>
                    <button>
                      <a href="#">Lipstick Set</a>
                    </button>
                    <button>
                      <a href="#">Lip Kit</a>
                    </button>
                    <button>
                      <a href="#">Find Your Lipstick</a>
                    </button>
                  </div>
                  <div>
                    <a href="#" className="dropdown-content-heading">
                      LIPS
                    </a>
                    <button>
                      <a href="#">Lipstick</a>
                    </button>
                    <button>
                      <a href="#">Crayon Lipstick</a>
                    </button>
                    <button>
                      <a href="#">Liquid Lipstick</a>
                    </button>
                    <button>
                      <a href="#">Hi-Shine Lipstick</a>
                    </button>
                    <button>
                      <a href="#">Matte Lipstick</a>
                    </button>
                    <button>
                      <a href="#">Lip Gloss</a>
                    </button>
                    <button>
                      <a href="#">Lip Liner</a>
                    </button>
                    <button>
                      <a href="#">Lip Balm</a>
                    </button>
                    <button>
                      <a href="#">Lip Glitter</a>
                    </button>
                    <button>
                      <a href="#">Lip Stain</a>
                    </button>
                    <button>
                      <a href="#">Lipstick Set</a>
                    </button>
                    <button>
                      <a href="#">Lip Kit</a>
                    </button>
                    <button>
                      <a href="#">Find Your Lipstick</a>
                    </button>
                  </div>
                  <div>
                    <a href="#" className="dropdown-content-heading">
                      LIPS
                    </a>
                    <button>
                      <a href="#">Lipstick</a>
                    </button>
                    <button>
                      <a href="#">Crayon Lipstick</a>
                    </button>
                    <button>
                      <a href="#">Liquid Lipstick</a>
                    </button>
                    <a href="#" className="dropdown-content-heading">
                      LIPS
                    </a>
                    <button>
                      <a href="#">Hi-Shine Lipstick</a>
                    </button>
                    <button>
                      <a href="#">Matte Lipstick</a>
                    </button>
                    <button>
                      <a href="#">Lip Gloss</a>
                    </button>
                    <a href="#" className="dropdown-content-heading">
                      LIPS
                    </a>
                    <button>
                      <a href="#">Lip Liner</a>
                    </button>
                    <button>
                      <a href="#">Lip Balm</a>
                    </button>
                    <button>
                      <a href="#">Lip Glitter</a>
                    </button>
                  </div>
                </div>
              </div>
            </li>
             {/* ============== 3rd Nav Item ==============  */}
            <li class="nav-item has-dropdown">
              <li class="nav-item">
                <button>

                <a href="#">HAIR CARE</a>
                </button>
              </li>
              <div className="dropdown">
                <div className="dropdown-content">
                  <div>
                    <a href="#" className="dropdown-content-heading">
                      HAIR CARE
                    </a>
                    <button>
                      <a href="#">Lipstick</a>
                    </button>
                    <button>
                      <a href="#">Crayon Lipstick</a>
                    </button>
                    <button>
                      <a href="#">Liquid Lipstick</a>
                    </button>
                    <button>
                      <a href="#">Hi-Shine Lipstick</a>
                    </button>
                    <button>
                      <a href="#">Matte Lipstick</a>
                    </button>
                    <button>
                      <a href="#">Lip Gloss</a>
                    </button>
                  </div>
                  <div className="dropdown-content-imageProduct" style={{display:'flex',flexDirection:'row',gap:'2rem',marginLeft:'auto'}}>
                    <center>
                    <a href="#">
                      <Image
                        src="https://files.myglamm.com/site-images/400x400/Artboard-1-(1).jpg"
                        alt="White-Feather-Logo"
                        boxSize="150px"
                        objectFit="cover"
                      />
                      <Heading size='xs'>White feather</Heading>
                      <p>For hair fall control</p>
                      <HStack>
                        <Spacer />
                        <Text as='b'>195</Text>
                        <Text as='s' color='BlackAlpha 400'>299</Text>
                        <Spacer />
                      </HStack>
                    </a>
                    </center>
                    <center>
                    <a href="#">
                      <Image
                        src="https://files.myglamm.com/site-images/400x400/Artboard-1-(1).jpg"
                        alt="White-Feather-Logo"
                        boxSize="150px"
                        objectFit="cover"
                      />
                      <Heading size='xs'>White feather</Heading>
                      <p>For hair fall control</p>
                      <HStack>
                        <Spacer />
                        <Text as='b'>195</Text>
                        <Text as='s' color='BlackAlpha 400'>299</Text>
                        <Spacer />
                      </HStack>
                    </a>
                    </center>
                    <center>
                    <a href="#">
                      <Image
                        src="https://files.myglamm.com/site-images/400x400/Artboard-1-(1).jpg"
                        alt="White-Feather-Logo"
                        boxSize="150px"
                        objectFit="cover"
                      />
                      <Heading size='xs'>White feather</Heading>
                      <p>For hair fall control</p>
                      <HStack>
                        <Spacer />
                        <Text as='b'>195</Text>
                        <Text as='s' color='BlackAlpha 400'>299</Text>
                        <Spacer />
                      </HStack>
                    </a>
                    </center>
                    <center>
                    <a href="#">
                      <Image
                        src="https://files.myglamm.com/site-images/400x400/Artboard-1-(1).jpg"
                        alt="White-Feather-Logo"
                        boxSize="150px"
                        objectFit="cover"
                      />
                      <Heading size='xs'>White feather</Heading>
                      <p>For hair fall control</p>
                      <HStack>
                        <Spacer />
                        <Text as='b'>195</Text>
                        <Text as='s' color='BlackAlpha 400'>299</Text>
                        <Spacer />
                      </HStack>
                    </a>
                    </center>
                  </div>
                </div>
              </div>
            </li>
             {/* ============== 4th Nav Item ==============  */}
             <li class="nav-item has-dropdown">
              <li class="nav-item">
                <button>

                <a href="#">SKIN CARE</a>
                </button>
              </li>
              <div className="dropdown">
                <div className="dropdown-content">
                  <div>
                    <a href="#" className="dropdown-content-heading">
                      LIPS
                    </a>
                    <button>
                      <a href="#">Lipstick</a>
                    </button>
                    <button>
                      <a href="#">Crayon Lipstick</a>
                    </button>
                    <button>
                      <a href="#">Liquid Lipstick</a>
                    </button>
                    <a href="#" className="dropdown-content-heading">
                      LIPS
                    </a>
                    <button>
                      <a href="#">Hi-Shine Lipstick</a>
                    </button>
                    <button>
                      <a href="#">Matte Lipstick</a>
                    </button>
                    <button>
                      <a href="#">Lip Gloss</a>
                    </button>
                    <a href="#" className="dropdown-content-heading">
                      LIPS
                    </a>
                    <button>
                      <a href="#">Lip Liner</a>
                    </button>
                    <button>
                      <a href="#">Lip Balm</a>
                    </button>
                    <button>
                      <a href="#">Lip Glitter</a>
                    </button>
                  </div>
                </div>
              </div>
            </li>
            {/* ============== 5th Nav Item ==============  */}
            <li class="nav-item has-dropdown">
              <li class="nav-item">
                <button>

                <a href="#">SANITIZING CARE</a>
                </button>
              </li>
              <div className="dropdown">
                <div className="dropdown-content">
                  <div>
                    <a href="#" className="dropdown-content-heading">
                    SANITIZING CARE
                    </a>
                    <button>
                      <a href="#">Lipstick</a>
                    </button>
                    <button>
                      <a href="#">Crayon Lipstick</a>
                    </button>
                    <button>
                      <a href="#">Liquid Lipstick</a>
                    </button>
                    <button>
                      <a href="#">Hi-Shine Lipstick</a>
                    </button>
                    <button>
                      <a href="#">Matte Lipstick</a>
                    </button>
                    <button>
                      <a href="#">Lip Gloss</a>
                    </button>
                  </div>
                  <div className="dropdown-content-imageProduct" style={{display:'flex',flexDirection:'row',gap:'2rem',marginLeft:'auto'}}>
                    <center>
                    <a href="#">
                      <Image
                        src="https://files.myglamm.com/site-images/400x400/Game-over-Germs_2.jpg"
                        boxSize="150px"
                        objectFit="cover"
                      />
                      <Heading size='xs'>White feather</Heading>
                      <p>For hair fall control</p>
                      <HStack>
                        <Spacer />
                        <Text as='b'>195</Text>
                        <Text as='s' color='BlackAlpha 400'>299</Text>
                        <Spacer />
                      </HStack>
                    </a>
                    </center>
                    <center>
                    <a href="#">
                      <Image
                        src="https://files.myglamm.com/site-images/400x400/Game-over-Germs_2.jpg"
                        boxSize="150px"
                        objectFit="cover"
                      />
                      <Heading size='xs'>White feather</Heading>
                      <p>For hair fall control</p>
                      <HStack>
                        <Spacer />
                        <Text as='b'>195</Text>
                        <Text as='s' color='BlackAlpha 400'>299</Text>
                        <Spacer />
                      </HStack>
                    </a>
                    </center>
                    <center>
                    <a href="#">
                      <Image
                        src="https://files.myglamm.com/site-images/400x400/Game-over-Germs_2.jpg"
                        boxSize="150px"
                        objectFit="cover"
                      />
                      <Heading size='xs'>White feather</Heading>
                      <p>For hair fall control</p>
                      <HStack>
                        <Spacer />
                        <Text as='b'>195</Text>
                        <Text as='s' color='BlackAlpha 400'>299</Text>
                        <Spacer />
                      </HStack>
                    </a>
                    </center>
                    <center>
                    <a href="#">
                      <Image
                        src="https://files.myglamm.com/site-images/400x400/Game-over-Germs_2.jpg"
                        boxSize="150px"
                        objectFit="cover"
                      />
                      <Heading size='xs'>White feather</Heading>
                      <p>For hair fall control</p>
                      <HStack>
                        <Spacer />
                        <Text as='b'>195</Text>
                        <Text as='s' color='BlackAlpha 400'>299</Text>
                        <Spacer />
                      </HStack>
                    </a>
                    </center>
                  </div>
                </div>
              </div>
            </li>
            {/* ============== 6th Nav Item ==============  */}
            <li class="nav-item has-dropdown">
              <li class="nav-item">
                <button>

                <a href="#">COLLECTION</a>
                </button>
              </li>
              <div className="dropdown">
                <div className="dropdown-content">
                  <div>
                    <a href="#" className="dropdown-content-heading">
                    SHOP BY COLLECTION
                    </a>
                    <button>
                      <a href="#">Lipstick</a>
                    </button>
                    <button>
                      <a href="#">Crayon Lipstick</a>
                    </button>
                    <button>
                      <a href="#">Liquid Lipstick</a>
                    </button>
                    <button>
                      <a href="#">Hi-Shine Lipstick</a>
                    </button>
                    <button>
                      <a href="#">Matte Lipstick</a>
                    </button>
                    <button>
                      <a href="#">Lip Gloss</a>
                    </button>
                  </div>
                  <div className="dropdown-content-imageProduct" style={{display:'flex',flexDirection:'row',gap:'2rem',marginLeft:'auto'}}>
                    <center>
                    <a href="#">
                      <Image
                        src="https://files.myglamm.com/site-images/400x400/Tile-1-Soiree_1.jpg"
                        boxSize="150px"
                        objectFit="cover"
                      />
                      <Heading size='xs'>White feather</Heading>
                      <p>For hair fall control</p>
                      <HStack>
                        <Spacer />
                        <Text as='b'>195</Text>
                        <Text as='s' color='BlackAlpha 400'>299</Text>
                        <Spacer />
                      </HStack>
                    </a>
                    </center>
                    <center>
                    <a href="#">
                      <Image
                        src="https://files.myglamm.com/site-images/400x400/Tile-1-Soiree_1.jpg"
                        boxSize="150px"
                        objectFit="cover"
                      />
                      <Heading size='xs'>White feather</Heading>
                      <p>For hair fall control</p>
                      <HStack>
                        <Spacer />
                        <Text as='b'>195</Text>
                        <Text as='s' color='BlackAlpha 400'>299</Text>
                        <Spacer />
                      </HStack>
                    </a>
                    </center>
                    <center>
                    <a href="#">
                      <Image
                        src="https://files.myglamm.com/site-images/400x400/Tile-1-Soiree_1.jpg"
                        boxSize="150px"
                        objectFit="cover"
                      />
                      <Heading size='xs'>White feather</Heading>
                      <p>For hair fall control</p>
                      <HStack>
                        <Spacer />
                        <Text as='b'>195</Text>
                        <Text as='s' color='BlackAlpha 400'>299</Text>
                        <Spacer />
                      </HStack>
                    </a>
                    </center>
                  </div>
                </div>
              </div>
            </li>
            {/* ============== 7th Nav Item ==============  */}
            <li class="nav-item has-dropdown">
              <li class="nav-item">
                <button>

                <a href="#">REWARDS</a>
                </button>
              </li>
              <div className="dropdown">
                <div className="dropdown-content" style={{height:'12rem'}}>
                </div>
              </div>
            </li>
            {/* ============== 8th Nav Item ==============  */}
            <li class="nav-item has-dropdown">
              <li class="nav-item">
                <button>

                <a href="#">COLLECTION</a>
                </button>
              </li>
              <div className="dropdown">
                <div className="dropdown-content"  style={{height:'12rem'}}>
                  <div>
                    <a href="#" className="dropdown-content-heading">
                    WHITE FEATHER STUDIO
                    </a>
                    <button>
                      <a href="#">Lipstick</a>
                    </button>
                  </div>
                  
                </div>
              </div>
            </li>
            {/* ============== 8th Nav Item ==============  */}
            <li class="nav-item">
              <button>

              <a href="#">OFFER</a>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
