"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const TechnologyNavbar = () => {
  const pathname = usePathname();

  const navs = [
    { name: "1", path: "/technology/vehicle" },
    { name: "2", path: "/technology/spaceport" },
    { name: "3", path: "/technology/capsule" },
  ];

  return (
    <div className="flex flex-row laptop:flex-col items-center justify-center gap-4 transition-all">
      {navs.map((nav) => (
        <Link
          key={nav.name}
          href={nav.path}
          className={`${
            pathname === nav.path
              ? "bg-white border-white text-[#B0D17]"
              : "bg-transparent border-white/20 text-white hover:bg-white/20 hover:text-[#B0D17]"
          } w-10 h-10 tablet:w-16 tablet:h-16 laptop:w-20 laptop:h-20 flex items-center justify-center font-keezy-bellefar text-base tablet:text-2xl laptop:text-[32px] border rounded-full transition-all`}
        >
          {nav.name}
        </Link>
      ))}
    </div>
  );
};

export default TechnologyNavbar;
