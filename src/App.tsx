import React from "react";
import Layout from "./components/Layout/Index";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// page
import Error from "./pages/Error";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NoFound from "./pages/NoFound";

const PrivateRoutes = () => {
  const user = localStorage.getItem("user");
  return(
      user ? <Layout/> : <Navigate to="/login"/>
  )
}

export default function App() {

  return (
    <BrowserRouter>
    <Routes>
          <Route path="/" element={<PrivateRoutes />}>
            <Route index element={<Dashboard />} />
            <Route path="/home" element={<Home/>} />
            <Route path="/error" element={<Error/>} />
          </Route>
        <Route path="/login" element={<Login/>} />
        <Route path="*" element={<NoFound />} />
      </Routes>
    </BrowserRouter>  
  );

}
