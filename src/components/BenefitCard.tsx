import Image from "next/image";
import React from "react";

export type BenefitCardProps = {
  image: string | null;
  title: string;
  desc: string;
  bg?: string;
};
const BenefitCard = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  image,
  title,
  desc,
  bg = "black",
}: BenefitCardProps) => {
  return (
    <div
      className="bg-[rgba(0,0,0,0.15)] flex flex-col gap-[24px] p-[32px] items-center text-black w-[400px] rounded-[16px] min-h-[376px] justify-center "
      style={{ backgroundColor: bg }}
    >
      <Image src={"/asset/ppp-02 1.png"} alt="" height={315} width={304} />
      <div className="flex flex-col items-center gap-1">
        <p className="text-[24px] font-bold text-center">{title} </p>
        <p className="text-center text-[18px]">{desc} </p>
      </div>
    </div>
  );
};

export default BenefitCard;
