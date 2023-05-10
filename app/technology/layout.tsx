import Image from "next/image";
import React from "react";
import desktopBg from "../../assets/technology/background-technology-desktop.jpg";
import tabletBg from "../../assets/technology/background-technology-tablet.jpg";
import mobileBg from "../../assets/technology/background-technology-mobile.jpg";
import { PageHeading } from "@/components";

const TechnologyLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="pb-12">
      <Image
        alt="technology background"
        src={desktopBg}
        width={1440}
        height={900}
        className="w-full h-full hidden laptop:block transition-all absolute inset-0 -z-10"
        priority
      />
      <Image
        alt="technology background"
        src={tabletBg}
        width={768}
        height={1024}
        className="w-full h-full hidden tablet:block laptop:hidden transition-all absolute inset-0 -z-10"
        priority
      />
      <Image
        alt="technology background"
        src={mobileBg}
        width={375}
        height={710}
        className="w-full h-full tablet:hidden transition-all absolute inset-0 -z-10"
        priority
      />
      <div className="w-full ">
        <div className="w-full h-full py-12 laptop:pt-20 laptop:pl-24 laptop:pb-0 flex flex-col items-start transition-all">
          <div className="w-full tablet:pl-12 laptop:pl-0">
            <PageHeading num="03" heading="Space launch 101" />
          </div>
          <div className="w-full">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyLayout;
