import React from "react";
import AnimatedButton from "./AnimatedButton";
import { navItems } from "@/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <div className=" mt-[6rem] text-white bg-black p-6 flex md:items-center flex-col">
      <div className="">
      <section className="rounded-md p-8 md:p-12 flex flex-col gap-6 md:gap-0 md:flex-row md:items-center border-[1px] border-gray-800 justify-between mt-6">
        <div className="w-full md:w-2/5 flex flex-col gap-4">
          <h1 className="text-white text-lg font-medium">
            Looking for more answers?
          </h1>
          <p className="text-gray-400 text-sm font-medium">
            Schedule a quick 15-minute chat to see how AI Sonnet can help you
          </p>
        </div>

        <div>
          <AnimatedButton black="yes" />
        </div>
      </section>
      </div>

    <div className="rounded-md p-10 flex md:items-center justify-between mt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:mt-6">
        <div className="h-[50px] md:h-[160px] flex flex-col justify-between w-full md:w-52">
          <h1 className="font-medium text-lg">AI Sonnet</h1>
          <p className="text-gray-400 text-sm font-normal">© ️2024 - BuildBloq</p>
        </div>
        <div className="h-[200px] order-[-1] md:order-1 flex gap-20 w-full md:w-52">
          <div>
          <ul className="flex flex-col gap-4">
            {navItems.map((item, index) => (
              <li key={index}
              className="text-md md:text-sm font-normal hover:text-gray-400 duration-300 transition-all hover:cursor-pointer"
              >
                {item.title}
              </li>
            ))}
          </ul>
          </div>

          <div className="">
            <ul className="flex flex-col gap-4">
              <li className="text-md md:text-sm font-normal hover:text-gray-400 duration-300 transition-all hover:cursor-pointer">
                <Link href="https://www.linkedin.com/company/aifloww/">
                Twitter
                </Link>
              </li>
              <li className="text-md md:text-sm font-normal hover:text-gray-400 duration-300 transition-all hover:cursor-pointer">
              <Link href="https://www.linkedin.com/company/aifloww/">
                Linkedin
                </Link>
              </li>
              <li className="text-md md:text-sm font-normal hover:text-gray-400 duration-300 transition-all hover:cursor-pointer">
              <Link href="https://www.instagram.com/aisonnet/">
                Instagram
                </Link>
              </li>
            </ul>
          </div>
          </div>
        </div>
        
      </div>
      </div>
  );
};

export default Footer;
