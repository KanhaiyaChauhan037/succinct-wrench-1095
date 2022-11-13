import "./App.css";
import AllRoutes from "./Pages/AllRoutes";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();
  let isAuth = localStorage.getItem("isAuth") || null;

  useEffect(() => {
    isAuth = localStorage.getItem("isAuth");
    if (isAuth == "false" || isAuth == null) {
      navigate("/login");
    }
  }, [isAuth]);

  return (
    <div className="App">
      <AllRoutes />
    </div>
  );
}

export default App;
