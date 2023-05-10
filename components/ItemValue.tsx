import React from "react";

type Props = {
  item: string;
  value: string;
};

const ItemValue = ({ item, value }: Props) => {
  return (
    <div className="flex flex-col justify-between items-center laptop:items-start gap-2 transition-all">
      <p className="text-[#D0D6F9] text-sm font-keezy-reg leading-4 tracking-[2.3px] uppercase transition-all">
        {item}
      </p>
      <p className="text-white font-keezy-bellefar text-[28px] uppercase leading-8 transition-all">
        {value}
      </p>
    </div>
  );
};

export default ItemValue;
