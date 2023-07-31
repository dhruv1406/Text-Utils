import "./App.css";
import Aboutus from "./components/Aboutus";
import Navbar from "./components/Navbar";
import Textbox from "./components/Textbox";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  // Toggle Background Mode
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#404040";
      showAlert("Dark Mode Enabled", "success");
    }
  };


  // Alert Mode
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      typ: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <BrowserRouter>
      <Navbar
          title="Text-Utils"
          mode={mode}
          toggleMode={toggleMode}
      />
      <Alert alert={alert} /> 
      <div className="container my-2" mode={mode}>
      <Routes>
        <Route path="/" element={<Textbox
            heading="Enter Your Text To Analyze:"
            mode={mode}
            showAlert={showAlert} 
        />}/>
        <Route path="/Aboutus" element={<Aboutus/>}/>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
