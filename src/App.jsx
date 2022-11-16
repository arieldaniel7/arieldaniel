import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import gsap, { Power3 } from "gsap";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Info from "./components/Info";
import Footer from "./components/Footer";
import Data from "./Data";
import "./App.css"

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