import Home from "./Pages/Home";

import "./App.css";
// import {CheckoutForm} from './Pages/Address';
// import Delivery from './Pages/Address';
import AllRoutes from "./Routes/AllRoutes";
import Navbar from "./Components/Navbar";
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
       {/* <Headline /> */}
     {/* <AllCircuits /> */}
      <Navbar />
      <Home />
      {/* <CheckoutForm/> */}
      {/* <CheckOut/> */}
      {/* <Delivery/>  */}
      {/* <AllRoutes /> */}
      {/* <MyBag/> */}
      {/* <AddressPage/>  */}
      {/* Keep this both file for responsive footer */}
      {/* <MainFooter/> */}
      {/* <MainFooterMob/> */}
    </div>
  );
}
export default App;
