import React from "react";

const CTA = () => {
  return (
    <div className="w-full bg-[#f2f2f2] items-center flex flex-col px-[80px] py-[120px] gap-[80px]">
      <div className="bg-[rgba(0,0,0,0.2)] rounded-[500px] h-[250px] w-[250px]" />
      <div className="flex flex-col items-center gap-[10px]">
        <p className="text-black text-[48px] font-bold text-center">
          A million people are already having deeper understanding with VoCake —
          join them now
        </p>
        <div className="flex flex-row gap-[10px]">
          <button className="border border-black rounded-md px-[20px] py-[10px] text-[14px] text-black">
            LEARN MORE
          </button>
          <button className="text-white bg-black rounded-md px-[20px] py-[10px] text-[14px]">
            EXPLORE PRODUCT
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTA;
