"use client";

import { AccordionDemo } from "@/components/Accordian";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Services2 from "@/components/Services2";
import TimelineContext from "@/components/TimelineContext";
import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Topbar from "@/components/Topbar";

export default function Home() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 1.2, // Adjust scroll pace
    });

    // Clean up on unmount
    return () => scroll.destroy();
  }, []);

  return (
    <div data-scroll-container ref={scrollRef}>
      <main data-scroll-section>
      <Topbar/>
        <Navbar />
        <Hero />
        <Services />
        <Services2 />
        {/* <TimelineDemo /> */}
        <TimelineContext />
        <AccordionDemo />
        <Footer />
      </main>
    </div>
  );
}
