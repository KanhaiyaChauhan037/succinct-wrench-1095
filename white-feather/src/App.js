import Home from "./Pages/Home";

import "./App.css";
// import {CheckoutForm} from './Pages/Address';
// import Delivery from './Pages/Address';
import AllRoutes from "./Routes/AllCircuits";
import Navbar from "./Components/Navbar/Navbar";
import MyBag from "./Components/MyBag";
import { AddressPage } from "./Pages/Address";
import CheckOut from "./Pages/CheckOut";
import { MainFooter, MainFooterMob } from "./Components/MainFooter";
import './App.css';
// import Headline from './Components/Headline';
// import AllCircuits from './Routes/AllCircuits';
import LoginPopUp from "./Components/Login/LoginPopUp"

import Payment from "./Pages/Payment";
import { useState,useEffect } from 'react';
import Loader from './Components/Loader/Loader';
import MobNav from './Components/MobNavbar/MobNav'




function App() {
  
  const [loading,setLoading] = useState(true)
  useEffect(() => {
    const t = setTimeout(()=>{
      setLoading(false)
    },1000)
  
    return () => {
      clearTimeout(t);
    }
  }, [])
  return  loading? <Loader />: (
   <>
      <Navbar />
      <MobNav />
       <AllRoutes />
       <LoginPopUp />
       <MainFooter/>
      <MainFooterMob/>
    </>
  );
}
export default App;
