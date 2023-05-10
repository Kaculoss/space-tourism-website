"use client";

import Image from "next/image";
import React, { MouseEvent } from "react";
import close from "../assets/shared/icon-close.svg";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useWeb } from "@/utilities/WebContext";

const NavMobile = () => {
  const { small_navbar, setSmallNavbarFalse } = useWeb();
  const pathname = usePathname();

  const navigations = [
    { num: "01", nav: "destination", link: "/destination/Moon" },
    { num: "02", nav: "crew", link: "/crew/douglas" },
    { num: "03", nav: "technology", link: "/technology/vehicle" },
  ];

  const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.classList.contains("mobile-navbar")) {
      setSmallNavbarFalse();
    }
  };

  return (
    <div
      className={`${
        small_navbar ? "fixed" : "hidden"
      } mobile-navbar w-screen right-0 top-0 z-50 transition-all`}
      onClick={handleOverlayClick}
    >
      <div className="h-screen w-64 float-right relative bg-white/5 backdrop-blur-2xl flex flex-col pt-8 justify-start items-start gap-16 transition-all">
        <div className="w-full flex items-end justify-end">
          <Image
            alt="close navbar"
            src={close}
            width={20}
            height={21}
            className="mr-7 hover:opacity-70 transition-all cursor-pointer"
            onClick={setSmallNavbarFalse}
          />
        </div>

        <nav className="w-full flex flex-col gap-6 justify-start items-center text-white">
          <Link
            href="/"
            className={`text-white w-full text-base flex items-center justify-start py-1 pl-8 gap-3 transition-all hover:opacity-70 hover:border-r-4 hover:border-r-white hover:border-opacity-50 ${
              pathname === "/" && "border-r-4 border-r-white border-opacity-100"
            }`}
            onClick={setSmallNavbarFalse}
          >
            <p className="leading-4 font-keezy-bold tracking-widest uppercase">
              00
            </p>
            <p className="leading-4 font-keezy-reg tracking-widest uppercase">
              home
            </p>
          </Link>
          {navigations.map((nav) => (
            <Link
              key={nav.num}
              href={nav.link}
              className={`text-white w-full text-base flex items-center justify-start py-1 pl-8 gap-3 transition-all hover:opacity-70 hover:border-r-4 hover:border-r-white hover:border-opacity-50 ${
                pathname.startsWith(`/${nav.nav}`) &&
                "border-r-4 border-r-white border-opacity-100"
              }`}
              onClick={setSmallNavbarFalse}
            >
              <p className="leading-4 font-keezy-bold tracking-widest uppercase">
                {nav.num}
              </p>
              <p className="leading-4 font-keezy-reg tracking-widest uppercase">
                {nav.nav}
              </p>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default NavMobile;
