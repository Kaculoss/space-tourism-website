"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const DestinationNavbar = () => {
  const pathname = usePathname();

  const navs = [
    { name: "moon", path: "/destination/Moon" },
    { name: "mars", path: "/destination/Mars" },
    { name: "europa", path: "/destination/Europa" },
    { name: "titan", path: "/destination/Titan" },
  ];

  return (
    <div className="flex items-center justify-center gap-7 tablet:gap-9 transition-all">
      {navs.map((nav) => (
        <Link
          key={nav.name}
          href={nav.path}
          className={`${
            pathname === nav.path ? "text-white" : "text-[#D0D6F9]"
          } text-sm tablet:text-base transition-all pb-2 tablet:pb-3  hover:border-b-[3px] hover:border-b-[#D0D6F9]  ${
            pathname === nav.path &&
            "border-b-[3px] border-b-white hover:border-b-white"
          }`}
        >
          <p className="leading-4 tablet:leading-5 tracking-[2.4px] tablet:tracking-[2.7px] font-keezy-reg  uppercase">
            {nav.name}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default DestinationNavbar;
