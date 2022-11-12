import Home from "./Pages/Home";
import './App.css';
// import {AddressPage} from './Pages/Address';
// import Delivery from './Pages/Address';
import AllRoutes from './Routes/AllRoutes';
import Navbar from './Components/Navbar';
import MyBag from "./Components/MyBag"
import {AddressPage} from './Pages/Address';
import CheckOut  from './Pages/CheckOut';

import Payment from "./Pages/Payment";

function App() {
  return (
   <div className="App">
      {/* <Navbar />
      <Home />
      <AddressPage/>
       <CheckOut/>
        <Delivery/>
      <AllRoutes />
      <MyBag/>
      <AddressPage/> */}
      <Payment/>
    </div>
  );
}

export default App;

