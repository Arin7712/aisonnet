"use client";

import { AccordionDemo } from "@/components/Accordian";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Services2 from "@/components/Services2";
import TimelineContext from "@/components/TimelineContext";
import { useEffect, useRef } from "react";
import dynamic from "next/dynamic"; // Import for dynamic loading
import "locomotive-scroll/dist/locomotive-scroll.css";
import Topbar from "@/components/Topbar";
import About from "./About";
import BlackRock from "./BlackRock";

const Home = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    let scroll: any;
    if (typeof window !== "undefined") {
      // Dynamically import LocomotiveScroll to ensure it only runs in the browser
      const LocomotiveScroll = require("locomotive-scroll").default;

      scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        multiplier: 0.3, // Adjust scroll pace
      });
    }

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <div data-scroll-container ref={scrollRef}>
      <main data-scroll-section>
        <Topbar />
        <Navbar />
        <Hero />
        <BlackRock/>
        <About/>
        <Services2 />
        <TimelineContext />
        <AccordionDemo />
        <Footer />
      </main>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Home), { ssr: false });