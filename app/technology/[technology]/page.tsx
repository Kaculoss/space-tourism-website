import { CrewTitleDesc, TechnologyNavbar } from "@/components";
import { myData } from "@/data";
import Image from "next/image";
import React from "react";

type Props = {
  params: { technology: string };
};

const TechnologyPage = ({ params }: Props) => {
  const slug = params.technology;

  const data = myData.technology.find((technology) => {
    if (slug === "vehicle") {
      return technology.name === "Launch vehicle";
    }
    if (slug === "spaceport") {
      return technology.name === "Spaceport";
    }
    if (slug === "capsule") {
      return technology.name === "Space capsule";
    }
  });

  if (data)
    return (
      <div className="h-full w-full pt-8 flex flex-col items-center justify-center gap-8 tablet:gap-12 transition-all">
        <Image
          alt={data.name}
          src={data.images.landscape}
          width={768}
          height={310}
          priority
          className="w-full block transition-all laptop:hidden"
        />
        <div className="flex w-full h-full flex-col laptop:flex-row gap-8 tablet:gap-12 laptop:gap-16 pb-4 px-8 laptop:px-0 items-center justify-between transition-all">
          <TechnologyNavbar />

          <div className="flex flex-col gap-2 items-center laptop:items-start justify-center transition-all">
            <p className="font-keezy-reg text-sm tablet:text-base uppercase text-[#D0D6F9] leading-[17px] tracking-[2.3px] tablet:leading-[19px] tablet:tracking-[2.7px]">
              The technology...
            </p>

            <CrewTitleDesc title={data.name} desc={data.description} />
          </div>

          <div className="hidden transition-all laptop:block">
            <Image
              alt={data.name}
              src={data.images.portrait}
              width={515}
              height={527}
              priority
            />
          </div>
        </div>
      </div>
    );
};

export default TechnologyPage;
