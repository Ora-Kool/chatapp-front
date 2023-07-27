import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import DashboardPage from "./Pages/DashboardPage";
import RegisterPage from "./Pages/RegisterPage";

function App() {
    return (<BrowserRouter>
        <Routes>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/dashboard" element={<DashboardPage/>}/>
        </Routes>
    </BrowserRouter>)
}

export default App;
