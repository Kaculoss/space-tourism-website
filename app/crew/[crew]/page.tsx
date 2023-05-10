import { CrewNavbar, CrewTitleDesc } from "@/components";
import { myData } from "@/data";
import Image from "next/image";
import React from "react";

type Props = {
  params: { crew: string };
};

const CrewPage = ({ params }: Props) => {
  const slug = params.crew;

  const data = myData.crew.find((crew) => {
    if (slug === "douglas") {
      return crew.name === "Douglas Hurley";
    }
    if (slug === "mark") {
      return crew.name === "Mark Shuttleworth";
    }
    if (slug === "victor") {
      return crew.name === "Victor Glover";
    }
    if (slug === "anousheh") {
      return crew.name === "Anousheh Ansari";
    }
  });

  if (data)
    return (
      <div className="h-full w-full px-6 pt-8 tablet:pt-0 flex flex-col tablet:flex-col-reverse laptop:flex-row-reverse items-center laptop:items-end justify-center gap-12 laptop:gap-16 transition-all">
        <Image
          alt={data.name}
          src={data.images.webp}
          width={575}
          height={700}
          priority
          className="w-full tablet:w-[350px] laptop:w-[400px] transition-all border-b border-b-white/10 tablet:border-b-0 object-contain"
        />
        <div className="flex h-full pt-0 tablet:pt-12 laptop:pt-28   flex-col tablet:flex-col-reverse gap-8 laptop:gap-24 pb-4 laptop:pb-16 items-center laptop:items-start justify-between transition-all">
          <CrewNavbar />

          <div className="flex flex-col gap-2  items-center laptop:items-start justify-between transition-all">
            <p className="font-keezy-bellefar text-base tablet:text-2xl laptop:text-[32px] uppercase text-white/50 mix-blend-normal leading-[18px] tablet:leading-7 laptop:leading-9">
              {data.role}
            </p>

            <CrewTitleDesc title={data.name} desc={data.bio} />
          </div>
        </div>
      </div>
    );
};

export default CrewPage;
