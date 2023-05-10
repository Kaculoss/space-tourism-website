import React from "react";
import Image from "next/image";
import {
  DestinationNavbar,
  DestinationTitleDesc,
  ItemValue,
} from "@/components";
import { myData } from "@/data";

type Props = {
  params: { destination: string };
};

const Destination = ({ params }: Props) => {
  const slug = params.destination;

  const data = myData.destinations.find(
    (destination) => destination.name === slug
  );

  if (data)
    return (
      <div className="h-full w-full px-6 flex flex-col laptop:flex-row items-center justify-center gap-12 laptop:gap-24 transition-all">
        <Image
          alt={data.name}
          src={data.images.webp}
          width={445}
          height={445}
          className="w-[170px] h-[170px] tablet:w-[300px] tablet:h-[300px] laptop:w-[445px] laptop:h-[445px] transition-all"
          priority
        />

        <div className="flex flex-col gap-8 items-center laptop:items-start justify-between transition-all">
          <DestinationNavbar />

          <DestinationTitleDesc title={data.name} desc={data.description} />

          <div className="w-full h-px bg-[#D0D6F9]"></div>

          <div className="w-full flex flex-col tablet:flex-row gap-8 tablet:gap-10 laptop:gap-12 items-center laptop:items-start  justify-between transition-all">
            <ItemValue item="avg. distance" value={data.distance} />
            <ItemValue item="est. travel time" value={data.travel} />
          </div>
        </div>
      </div>
    );
};

export default Destination;
