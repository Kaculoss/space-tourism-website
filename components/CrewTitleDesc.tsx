import React from "react";

type Props = {
  title: string;
  desc: string;
};

const CrewtitleDesc = ({ title, desc }: Props) => {
  return (
    <div className="flex flex-col items-center laptop:items-start justify-between text-center text-white gap-0 laptop:gap-6 transition-all">
      <h1 className="uppercase font-keezy-bellefar text-[24px] tablet:text-[40px] laptop:text-[56px] transition-all text-left">
        {title}
      </h1>
      <p className="font-keezy text-[15px] tablet:text-base leading-6 text-center laptop:text-lg max-w-[500px] laptop:leading-8 laptop:text-left text-[#D0D6F9] transition-all">
        {desc}
      </p>
    </div>
  );
};

export default CrewtitleDesc;
