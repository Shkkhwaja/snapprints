import React from "react";
import SignIn from "./Component/Forms/Authentication/SignIn";
import SignUp from "./Component/Forms/Authentication/SignUp";
import Home from "./Component/Home/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";

export default function App() {
  const location = useLocation(); // Correctly extract the location

  return (
    <>
    <Header />
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/forms/signup" element={<SignUp />} />
        <Route path="/forms/signin" element={<SignIn />} />
      </Routes>
      <Footer />
    </>
  );
}
