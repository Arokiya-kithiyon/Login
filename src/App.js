import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Authorization from "./Components/Authorization";
function App() {
  const [child, setChild] = useState(<></>);
  useEffect(() => {
    setChild(<Login setChild={setChild} />);
  }, []);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <Authorization>
                <Home />
              </Authorization>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
