import React from "react";
import { Routes, Route, Navigate } from "react-router";
import Master from "./Master";
import Home from "./../pages/Home";
import About from "./../pages/About";
import Women from "./../pages/Women";
import ContactUs from "./../pages/ContactUs";
import Men from "../pages/men";
import DetailPage from "../pages/DetailPage";
import Cart from "../pages/Cart";
import PagenotFound from "../pages/PagenotFound";
import Login from "../pages/Login";
import Registration from "../pages/Registration";

const Routing = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/registration" element={<Registration />}></Route>
      <Route path="/" element={<Master />}>
        <Route path="/" element={<Navigate to={"/home"} />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/men" element={<Men />}></Route>
        <Route path="/women" element={<Women />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact-us" element={<ContactUs />}></Route>
        <Route path="/details/:id" element={<DetailPage />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="*" element={<PagenotFound />}></Route>
      </Route>
    </Routes>
  );
};

export default Routing;
