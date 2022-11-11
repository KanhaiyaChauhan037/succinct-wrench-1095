import Home from "./Pages/Home";
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Login from './Components/Login/Login'
import {CheckoutForm} from './Pages/Address';
// import Delivery from './Pages/Address';
import AllRoutes from './Routes/AllRoutes';
import MyBag from "./Components/MyBag"
import {AddressPage} from './Pages/Address';
import CheckOut  from './Pages/CheckOut';

function App() {
  return (
   <div className="App">
      <Navbar />
      <Login />
      <Home />
      <CheckoutForm/>
       <CheckOut/>
        {/* <Delivery/> */}
      <AllRoutes />
      <MyBag/>
      {/* <AddressPage/> */}
    </div>
  );
}
export default App;

