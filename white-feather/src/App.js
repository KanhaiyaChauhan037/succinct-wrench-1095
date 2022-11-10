import './App.css';
import {CheckoutForm} from './Pages/Address';
// import Delivery from './Pages/Address';
// import { CheckOut } from './Pages/CheckOut';
import AllRoutes from './Routes/AllRoutes';
import Navbar from './Components/Navbar';
import MyBag from "./Components/MyBag"

function App() {
  return (
   <div className="App">
      <Navbar />
      <CheckoutForm/>
       {/* <CheckOut/>
        <Delivery/> */}
      <AllRoutes />
      <MyBag/>
    </div>
  );
}

export default App;

