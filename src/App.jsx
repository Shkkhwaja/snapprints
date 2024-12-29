import React from "react";
import SignIn from "./Component/Forms/Authentication/SignIn";
import SignUp from "./Component/Forms/Authentication/SignUp";
import Home from "./Component/Home/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import Tshirt from "./Component/ProductCategories/Tshirts/Tshirt";
import Polo from "./Component/ProductCategories/Polo/Polo";
import Hoodie from "./Component/ProductCategories/Hoodie/Hoodie";
import Sweatshirt from "./Component/ProductCategories/Sweatshirt/Sweatshirt";
import Customdesign from "./Component/ProductCategories/Customdesign/Customdesign";
import Jacket from "./Component/ProductCategories/Jacket/Jacket";
import ProductView from "./Component/ProductView/PrductView";
import AccountDetails from "./Component/Forms/Profile/AccountDetails";

export default function App() {
  const location = useLocation();
  return (
    <>
    <Header />
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/forms/signup" element={<SignUp />} />
        <Route path="/forms/signin" element={<SignIn />} />
        <Route path="/product/tshirt" element={<Tshirt />} />
        <Route path="/product/polo" element={<Polo/>} />
        <Route path="/product/hoodie" element={<Hoodie />} />
        <Route path="/product/sweatshirt" element={<Sweatshirt />} />
        <Route path="/product/customdesign" element={<Customdesign />} />
        <Route path="/product/jacket" element={<Jacket />} />
        <Route path="/product/:category/:id" element={<ProductView />} />
        <Route path="/account/profile" element={<AccountDetails />} />

      </Routes>
      
      <Footer /> 
    </>
  );
}
