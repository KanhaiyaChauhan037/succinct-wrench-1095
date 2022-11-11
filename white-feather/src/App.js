import './App.css';
import MyBag from "./Components/MyBag"
import Headline from './Components/headline';
import AllCircuits from './Routes/AllCircuits';

function App() {
  return (
    <div className="App">
    <Headline />
    <AllCircuits />
      <MyBag/>
    </div>
  );
}

export default App;
