"use client";

import React, { useState } from "react";
import Close from "@mui/icons-material/Close";
import Menu from "@mui/icons-material/Menu";
import Mail from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Link from "next/link";
import {navItems} from '@/constants'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div className="md:block hidden">
        <nav className="flex items-center border-b-[1px] border-gray-100 p-4 w-full justify-evenly">
          <div className="flex items-center gap-6">
            <h2 className="text-md font-bold">AI Sonnet.</h2>
            <div>
              <ul className="flex flex-row items-center text-sm text-gray-500 font-normal gap-3">
                {navItems.map((item, index) => (
                  <Link key={index} href={`#${item.title}`} scroll={false}>
                  <li  className="hover:text-gray-900 hover:cursor-pointer transition-all duration-300">{item.title}</li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="rounded-2xl bg-[#f4f4f5] px-4 py-2 text-sm text-black font-medium">
              Our Work
            </button>

            <button className="rounded-2xl bg-[#9c6ef7] px-4 py-2 text-sm text-white font-medium">
              Book a call
            </button>
          </div>
        </nav>
      </div>

      <div className="block md:hidden">
        <section className="flex items-center border-b-[1px] border-gray-100 p-4 w-full justify-between">
          <div>
            <h2 className="text-md font-bold">AI Sonnet.</h2>
          </div>

          <div>
            {menuOpen ? (
              <Close
                style={{ fontSize: 20, color: "gray" }}
                onClick={toggleMenu}
              />
            ) : (
              <Menu
                style={{ fontSize: 20, color: "gray" }}
                onClick={toggleMenu}
              />
            )}
          </div>

          <div
            className={`absolute top-16 left-0 w-full h-scree overflow-hidden rounded-md transform transition-all duration-300 ${
              menuOpen ? "opacity-100 translate-y-0 bg-white" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="bg-[#fafafa] flex flex-col items-start gap-4 p-3">
              <div className="inline-block">
                <Link href="https://www.google.com/maps/place/18%C2%B028'06.8%22N+73%C2%B051'56.6%22E/@18.468568,73.865709,20z/data=!4m4!3m3!8m2!3d18.4685679!4d73.8657093?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D">
                  <div className="text-gray-500 flex items-center text-sm gap-2">
                    <LocationOnIcon style={{ fontSize: 18, color: "gray" }} />
                    Pune, India
                  </div>
                </Link>
              </div>

              <div className="text-gray-500 flex items-center text-sm">
                <a
                  href="mailto:aisonnetagency@gamil.com"
                  className="flex gap-2"
                >
                  <Mail style={{ fontSize: 18, color: "gray" }} />
                  aisonnetagency@gmail.com
                </a>
              </div>
            </div>

            <div className="flex flex-col p-3 mt-6">
              <div>
              <ul className="flex flex-col text-md text-black font-normal gap-3">
              {navItems.map((item, index) => (
                  <li key={index} className="hover:text-gray-900 hover:cursor-pointer transition-all duration-300">{item.title}</li>
                ))}
              </ul>
              </div>
              <div className="flex flex-col items-center gap-2 mt-6">
            <button className="rounded-2xl bg-[#f4f4f5] w-full px-4 py-2 text-md text-black font-medium">
              Our Work
            </button>

            <button className="rounded-2xl bg-[#9c6ef7] w-full px-4 py-2 text-md text-white font-medium">
              Book a call
            </button>
          </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Navbar;
