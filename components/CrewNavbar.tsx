"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const CrewNavbar = () => {
  const pathname = usePathname();

  const navs = [
    { name: "douglas", path: "/crew/douglas" },
    { name: "mark", path: "/crew/mark" },
    { name: "victor", path: "/crew/victor" },
    { name: "anousheh", path: "/crew/anousheh" },
  ];

  return (
    <div className="flex items-center justify-center gap-7 tablet:gap-9 transition-all">
      {navs.map((nav) => (
        <Link
          key={nav.name}
          href={nav.path}
          className={`${
            pathname === nav.path ? "bg-white" : "bg-white/20 mix-blend-normal"
          } w-[10px] h-[10px] tablet:w-3 tablet:h-3 laptop:w-4 laptop:h-4 rounded-full transition-all ${
            pathname !== nav.path && "hover:bg-white/50"
          }`}
        ></Link>
      ))}
    </div>
  );
};

export default CrewNavbar;
