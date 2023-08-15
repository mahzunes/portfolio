"use client";
import React from "react";
import Home from "./pages/home";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Abouttwo from "./pages/abouttwo";
import Header from "./components/header";
import Skills from "./pages/Skills";
import Contact from "./pages/contact";
const page = () => {
  return (
    <>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/abouttwo" element={<Abouttwo />}></Route>
        <Route path="/skills" element={<Skills></Skills>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
      </Routes>
    </>
  );
};

export default page;
