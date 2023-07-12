import { createContext, useState } from "react";

import "./mainPage.css";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import HeadlineCards from "../../components/HeadlineCards";
import Food from "../../components/Food";
import Category from "../../components/Category";

function MainPage() {
  return (
    <>
      {console.log("Mainpage.jsx")}
      <Navbar />
      <Hero />
      <HeadlineCards />
      <Food />
      <Category />
    </>
  );
}

export default MainPage;
