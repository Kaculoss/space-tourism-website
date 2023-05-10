"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const NavTablet = () => {
  const pathname = usePathname();

  const navigations = [
    { num: "01", nav: "destination", link: "/destination/Moon" },
    { num: "02", nav: "crew", link: "/crew/douglas" },
    { num: "03", nav: "technology", link: "/technology/vehicle" },
  ];

  return (
    <div className="hidden tablet:flex h-fit items-center justify-center transition-all">
      <div className="w-[15vw] h-px bg-[#979797] z-50 hidden laptop:block"></div>

      <nav className="m-0 laptop:-ml-8 px-10 laptop:pr-16 laptop:pl-12 bg-white/5 transition-all backdrop-blur-2xl text-white flex justify-center items-center gap-6 laptop:gap-8">
        <Link
          href="/"
          className={`text-white text-sm laptop:text-base flex transition-all items-center justify-center py-8 px-2 gap-0 laptop:gap-3 hover:opacity-70 hover:border-b-4 hover:border-b-white hover:border-opacity-50 ${
            pathname === "/" && "border-b-4 border-b-white border-opacity-100"
          }`}
        >
          <p className="leading-5 font-keezy-bold tracking-[2.7px] uppercase hidden laptop:block">
            00
          </p>
          <p className="leading-4 laptop:leading-5 font-keezy-reg tracking-[2.7px] uppercase">
            home
          </p>
        </Link>
        {navigations.map((nav) => (
          <Link
            key={nav.num}
            href={nav.link}
            className={`text-white text-sm laptop:text-base flex transition-all items-center justify-center py-8 px-2 gap-0 laptop:gap-3 hover:opacity-70 hover:border-b-4 hover:border-b-white hover:border-opacity-50 ${
              pathname.startsWith(`/${nav.nav}`) &&
              "border-b-4 border-b-white border-opacity-100"
            }`}
          >
            <p className="leading-5 font-keezy-bold tracking-[2.7px] uppercase hidden laptop:block">
              {nav.num}
            </p>
            <p className="leading-4 laptop:leading-5 font-keezy-reg tracking-[2.7px] uppercase">
              {nav.nav}
            </p>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default NavTablet;
