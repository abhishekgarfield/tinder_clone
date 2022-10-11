import React from "react";
import Homepage from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";
import OnBoarding from "./pages/Onboarding";
import {BrowserRouter , Route ,Routes } from "react-router-dom";
import { useCookies } from "react-cookie";

const App = () =>{
    const [cookies,setCookie,removeCookie]=useCookies([]);
    return(
        <BrowserRouter >
          <Routes>
                <Route path={"/"} index element={<Homepage />}/>
                {cookies.AuthToken && <Route path="/dashboard" element={<Dashboard />} />}
                {cookies.AuthToken && <Route path="onboard" element={< OnBoarding/>} />}
          </Routes>
      </BrowserRouter>
    );
}

export default App;
