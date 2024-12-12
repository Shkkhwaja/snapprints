import React from "react";
import SignIn from "./Component/Forms/Authentication/SignIn";
import SignUp from "./Component/Forms/Authentication/SignUp";
import Home from "./Component/Home/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import ProductView from "./Component/ProductView/ProductView";

export default function App() {
  const location = useLocation();
  return (
    <>
    <Header />
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/forms/signup" element={<SignUp />} />
        <Route path="/forms/signin" element={<SignIn />} />
        <Route path="/product/:id" element={<ProductView />} />
      </Routes>
      <Footer /> 
    </>
  );
}
