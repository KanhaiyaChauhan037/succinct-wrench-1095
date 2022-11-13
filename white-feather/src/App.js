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


import Payment from "./Pages/Payment";

function App() {
  return (
    <div className="App">
      <Navbar />
       {/* <Headline /> */}
     {/* <AllCircuits /> */}
      {/* <CheckoutForm/> */}
      {/* <CheckOut/> */}
      {/* <Delivery/>  */}
      <AllRoutes />
      {/* <MyBag/> */}
      {/* <AddressPage/>  */}
      {/* Keep this both file for responsive footer */}
      <MainFooter/>
      <MainFooterMob/>
    </div>
  );
}
export default App;
