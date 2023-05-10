"use client";

import React from "react";
import logo from "../assets/shared/logo.svg";
import humburger from "../assets/shared/icon-hamburger.svg";
import Image from "next/image";
import { NavTablet, NavMobile } from ".";
import { useWeb } from "@/utilities/WebContext";

const Navbar = () => {
  const { setSmallNavbarTrue } = useWeb();

  return (
    <div className="w-full p-0 px-6 pt-6 tablet:pr-0 tablet:pt-0 tablet:pl-14 transition-all laptop:pt-10 h-fit flex items-center justify-between">
      <Image alt="the logo" src={logo} height={48} width={48} />

      <Image
        alt="open nav bar"
        src={humburger}
        width={24}
        height={21}
        className="block tablet:hidden transition-all hover:opacity-70 cursor-pointer"
        onClick={setSmallNavbarTrue}
      />

      <NavMobile />
      <NavTablet />
    </div>
  );
};

export default Navbar;
