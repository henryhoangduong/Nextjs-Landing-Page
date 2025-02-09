import Image from "next/image";
import React from "react";

const CTA = () => {
  return (
    <div className="w-full bg-gradient-to-b to-[#FAFAFA] from-[#FFFFFF] items-center flex flex-col px-[80px] py-[120px] gap-[80px]">
      <Image src={"/asset/ppp-02 1.png"} alt="" height={315} width={420} />
      <div className="flex flex-col items-center gap-[10px]">
        <p className="text-black text-[48px] font-bold text-center">
          A million people are already having deeper understanding with VoCake —
          join them now
        </p>
        <div className="flex flex-row gap-[10px]">
          <button className="text-[#FF7A1A] rounded-md px-[20px] py-[10px] text-[14px] border border-[#FF7A1A]">
            LOG IN
          </button>
          <button className="text-white bg-[#FF7A1A] rounded-md px-[20px] py-[10px] text-[14px]">
            SIGN UP
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTA;
