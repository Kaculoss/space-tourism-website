import Image from "next/image";
import React from "react";
import desktopBg from "../../assets/crew/background-crew-desktop.jpg";
import tabletBg from "../../assets/crew/background-crew-tablet.jpg";
import mobileBg from "../../assets/crew/background-crew-mobile.jpg";
import { PageHeading } from "@/components";

const CrewLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Image
        alt="crew background"
        src={desktopBg}
        width={1440}
        height={900}
        className="w-full h-full hidden laptop:block transition-all absolute inset-0 -z-10"
        priority
      />
      <Image
        alt="crew background"
        src={tabletBg}
        width={768}
        height={1024}
        className="w-full h-full hidden tablet:block laptop:hidden transition-all absolute inset-0 -z-10"
        priority
      />
      <Image
        alt="crew background"
        src={mobileBg}
        width={375}
        height={710}
        className="w-full h-full tablet:hidden transition-all absolute inset-0 -z-10"
        priority
      />
      <div className="w-full ">
        <div className="w-full h-full p-12 pb-0 flex flex-col items-start transition-all">
          <PageHeading num="02" heading="Meet your crew" />
          <div className="w-full">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default CrewLayout;
