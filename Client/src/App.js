import React from "react";
import ReactDOM from "react-dom";
import Homepage from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";
import OnBoarding from "./pages/Onboarding";
import {BrowserRouter , Route ,Routes } from "react-router-dom";

const App = () =>{
    return(
        <BrowserRouter basename={process.env.PUBLIC_URL} >
          <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/onboard" element={< OnBoarding/>} />
          </Routes>
      </BrowserRouter>
    );
}

export default App;
