// pages/index.js

import React, { useEffect } from "react";
import Star from "@mui/icons-material/Star";
import AnimatedButton from './AnimatedButton'
import AOS from 'aos'
import "aos/dist/aos.css";


const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 600, // Animation duration in milliseconds
      offset: 100, // Offset to trigger animations earlier/later
    });
  }, []);
  return (
    <section className="w-full p-6 md:p-0 mt-[2rem] md:mt-[6rem] flex flex-col md:items-center">
      <div className="flex flex-col md:flex-row md:items-center gap-2">
        <div className="md:text-sm  text-md font-medium text-neutral-900">
          Leading AI Automations
        </div>
        <div className="flex gap-1 order-[-1] md:order-1">
          {[...Array(5)].map((_, index) => (
            <Star key={index} style={{ fontSize: 20, color: "#eab308" }} />
          ))}
        </div>
      </div>

      <div className="w-full flex flex-col items-start md:items-center justify-start md:justify-center mt-8 gap-6">
        <div className="flex md:justify-center">
          <h1 className=" text-5xl md:text-4xl w-full md:w-3/5 md:text-center font-medium" data-aos="fade-up" data-aos-delay="200">
            Building the Future of AI Solutions, Better & Faster.
          </h1>
        </div>
        <div className="flex md:justify-center">
          <p className="text-md md:text-sm text-gray-400 w-4/5 md:w-3/5 md:text-center font-normal" data-aos="fade-up" data-aos-delay="300">
            At AI Sonnet, we create powerful, scalable automated workflows that saves your money, time and keeps up with the world!
          </p>
        </div>
      </div>

      <div className="mt-10" data-aos="fade-up" data-aos-delay="400">
        <AnimatedButton black="no"/>
      </div>
    </section>
  );
};

export default Hero;
