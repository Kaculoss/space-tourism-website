import React from "react";

type Props = {
  num: string;
  heading: string;
};

const PageHeading = ({ num, heading }: Props) => {
  return (
    <div className="flex w-full tablet:w-fit items-center tablet:items-start justify-center gap-5 laptop:gap-7 transition-all">
      <p className="font-keezy-bold text-white opacity-25 leading-5 tablet:leading-6 laptop:leading-[34px] tracking-[2.7px] tablet:tracking-[3.5px] laptop:tracking-[5px] text-base tablet:text-xl laptop:text-[28px] transition-all">
        {num}
      </p>
      <p className="font-keezy-reg text-white uppercase leading-5 tablet:leading-6 laptop:leading-[34px] tracking-[2.7px] tablet:tracking-[3.5px] laptop:tracking-[5px] text-base tablet:text-xl laptop:text-[28px] transition-all">
        {heading}
      </p>
    </div>
  );
};

export default PageHeading;
