import React from "react";
import Image from "next/image";
const Pattern = () => {
  return (
    <div className="bg-gradient-to-b from-[#F0F3F7] to-[#FFFFFF] h-64 w-full px-[80px] flex justify-between">
      <Image src="Isolation_Mode (1).svg" alt="" height={91.29} width={133} />
      <Image src="Isolation_Mode (2).svg" alt="" height={36} width={36} className="transform translate-y-9"/>
      <Image src="Isolation_Mode (1).svg" alt="" height={91.29} width={133} className="transform -translate-y-[100px]"/>
      <Image src="Isolation_Mode (2).svg" alt="" height={36} width={36} className="transform translate-y-[100px]"/>
      <Image src="Isolation_Mode (1).svg" alt="" height={91.29} width={133} />
    </div>
  );
};

export default Pattern;
