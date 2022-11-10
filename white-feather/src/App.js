import './App.css';
import AllRoutes from './Routes/AllRoutes';
import Navbar from './Components/Navbar';
import MyBag from "./Components/MyBag"

function App() {
  return (
    <div className="App">
    <Navbar />
    <AllRoutes />
      <MyBag/>
    </div>
  );
}

export default App;
