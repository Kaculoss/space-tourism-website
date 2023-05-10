import Image from "next/image";
import React from "react";
import desktopBg from "../../assets/destination/background-destination-desktop.jpg";
import tabletBg from "../../assets/destination/background-destination-tablet.jpg";
import mobileBg from "../../assets/destination/background-destination-mobile.jpg";
import { PageHeading } from "@/components";

const DestinationLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Image
        alt="destination background"
        src={desktopBg}
        width={1440}
        height={900}
        className="w-full h-full hidden laptop:block transition-all  absolute inset-0 -z-10"
        priority
      />
      <Image
        alt="destination background"
        src={tabletBg}
        width={768}
        height={1024}
        className="w-full h-full hidden tablet:block laptop:hidden transition-all  absolute inset-0 -z-10"
        priority
      />
      <Image
        alt="destination background"
        src={mobileBg}
        width={375}
        height={850}
        className="w-full h-full tablet:hidden transition-all absolute inset-0 -z-10"
        priority
      />
      <div className="w-full ">
        <div className="w-full h-full p-12 flex flex-col items-start transition-all">
          <PageHeading num="01" heading="Pick your destination" />
          <div className="w-full pt-8">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default DestinationLayout;
