import logo from './logo.svg';
import './App.css';
import {Navbar, NavbarMob} from './Components/Navbar';
import AllProduct from './Pages/AllProduct';
import AllRoutes from './Pages/AllRoutes';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <NavbarMob/>
      {/* <AllProduct/> */}
      <AllRoutes/>
    </div>
  );
}

export default App;
