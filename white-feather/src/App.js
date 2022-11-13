import Home from "./Pages/Home";
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import LoginPopUp from './Components/Login/LoginPopUp'
// import {CheckoutForm} from './Pages/Address';
// import Delivery from './Pages/Address';
import AllRoutes from './Routes/AllRoutes';
import MyBag from "./Components/MyBag"
import {AddressPage} from './Pages/Address';
import CheckOut  from './Pages/CheckOut';
import MainFooter from "./Components/MainFooter";
import { useState,useEffect } from 'react';
import Loader from './Components/Loader/Loader';
import MobNav from './Components/MobNavbar/MobNav'

function App() {
  const [loading,setLoading] = useState(true)
  useEffect(() => {
    const t = setTimeout(()=>{
      setLoading(false)
    },3000)
  
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
      <Home />
       {/* <CheckoutForm/> */}
       {/* <CheckOut/> */}
         {/* <Delivery/>  */}
      {/* <MyBag/> */}
      {/* <AddressPage/>  */}
      {/* <MainFooter/> */}
    </>
  );
}
export default App;

