import React, { useState, useEffect, useRef } from "react";
import gsap, { Power3 } from "gsap";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Info from "./components/Info";
import "./App.css"
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="Wrapper">
      <div className="Helper">
        <Navbar />
        <Hero />
      </div>
      <Card />
      <Info />
      <Footer />
    </div>
  )
}