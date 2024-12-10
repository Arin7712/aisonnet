// pages/index.js

import React, { useEffect } from "react";
import Star from "@mui/icons-material/Star";
import AnimatedButton from './AnimatedButton'
import AOS from 'aos'
import "aos/dist/aos.css";
import { AnimatedBeamMultipleOutputDemo } from "./Animated-beam-demo";
import AnimatedGridPattern from "./ui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import Image from "next/image";


const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 600, // Animation duration in milliseconds
      offset: 100, // Offset to trigger animations earlier/later
    });
  }, []);
  return (
    <section className="w-full p-0 mt-[2rem] md:mt-[8rem] flex flex-col md:flex-row  justify-between">
      <div className="flex flex-col ml-6 mr-6 md:ml-[6rem]">
      <div className="flex flex-col md:flex-row gap-2">
        <div className="md:text-sm  text-md font-medium text-neutral-900">
          Leading AI Automations
        </div>
        <div className="flex gap-1 order-[-1] md:order-1">
          {[...Array(5)].map((_, index) => (
            <Star key={index} style={{ fontSize: 20, color: "#eab308" }} />
          ))}
        </div>
      </div>

      <div className="w-full flex flex-col items-start justify-start  mt-8 gap-6">
        <div className="flex">
          <h1 className=" text-5xl md:text-5xl w-full md:w-[660px] font-medium" data-aos="fade-up" data-aos-delay="200">
            Building the Future of AI Solutions, Better & Faster.
          </h1>
        </div>
        <div className="flex ">
          <p className="text-md md:text-md text-gray-400 w-4/5 md:w-3/5  font-normal" data-aos="fade-up" data-aos-delay="300">
            At AI Sonnet, we create powerful, scalable automated workflows that saves your money, time and keeps up with the world!
          </p>
        </div>
      </div>

      <div className="mt-10" data-aos="fade-up" data-aos-delay="400">
        <AnimatedButton black="no"/>
      </div>
      </div>

      <div className="relative mt-[6rem] md:mt-0 rounded-lg ml-[2rem] md:ml-0">
  <Image
    src="/assets/mockup2.jpg"
    alt="MOCKUP"
    width={600}
    height={800}
    className="rounded-lg md:w-auto w-full md:h-[800px] overflow-hidden"
  />
  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
</div>
    </section>
  );
};

export default Hero;
