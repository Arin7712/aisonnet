// pages/index.js

import React from "react";
import Star from "@mui/icons-material/Star";
import AnimatedButton from './AnimatedButton'

const Hero = () => {
  return (
    <section className="w-full p-6 md:p-0 mt-[2rem] md:mt-[6rem] flex flex-col md:items-center">
      <div className="flex md:items-center gap-2">
        <div className="md:text-sm text-md font-medium text-neutral-900">
          Leading No-code AI innovators
        </div>
        <div className="flex gap-1">
          {[...Array(5)].map((_, index) => (
            <Star key={index} style={{ fontSize: 20, color: "#eab308" }} />
          ))}
        </div>
      </div>

      <div className="w-full flex flex-col items-start md:items-center justify-start md:justify-center mt-10 gap-6">
        <div className="flex md:justify-center">
          <h1 className=" text-5xl md:text-4xl w-full md:w-3/5 md:text-center font-medium">
            Building the Future of Digital Solutions, Better & Faster.
          </h1>
        </div>
        <div className="flex md:justify-center">
          <p className="text-md md:text-sm text-gray-400 w-4/5 md:w-3/5 md:text-center font-normal">
            At BuildBloq, we create powerful, scalable apps using no-code,
            low-code, and AI integration, turning ideas into reality fast!
          </p>
        </div>
      </div>

      <div className="mt-10">
        <AnimatedButton/>
      </div>
    </section>
  );
};

export default Hero;
