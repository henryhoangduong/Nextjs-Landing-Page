import React from "react";

export type BenefitCardProps = {
  image: string | null;
  title: string;
  desc: string;
};

const BenefitCard = ({ image, title, desc }: BenefitCardProps) => {
  return (
    <div className="bg-[rgba(0,0,0,0.15)] flex flex-col gap-[24px] px-[32px] py-[40px] items-center text-black w-[400px] rounded-[16px] h-[376px] justify-center">
      <div className="bg-[rgba(0,0,0,0.2)] rounded-[500px] h-[100px] w-[100px]" />
      <div className="flex flex-col items-center gap-1">
        <p className="text-[24px] font-bold text-center">{title} </p>
        <p className="text-center text-[18px]">{desc} </p>
        <div className="cursor-pointer text-[18px] font-bold ">
          <p>Explore more</p>
        </div>
      </div>
    </div>
  );
};

export default BenefitCard;
