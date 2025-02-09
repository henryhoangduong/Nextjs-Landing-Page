import React from "react";

const NavBar = () => {
  return (
    <div className="bg-white text-black flex justify-between p-5 w-screen px-[80px] items-center">
      <p className="text-[16px] font-extrabold">VOCAKE</p>
      <div className="flex flex-row gap-[32px] items-center">
        <p className="text-[14px] font-semibold">Product</p>
        <p className="text-[14px] font-semibold">Solution</p>
        <p className="text-[14px] font-semibold">Resources</p>
        <p className="text-[14px] font-semibold">Why Vocake Learning?</p>
        <p className="text-[14px] font-semibold">Pricing</p>
        <p className="text-[14px] font-semibold">English</p>
        <button className="border border-[#FF7A1A] text-[#FF7A1A] rounded-md px-[20px] py-[10px] text-[14px]">
          LOG IN
        </button>
        <button className="text-white rounded-md px-[20px] py-[10px] text-[14px] bg-[#FF7A1A]">
          SIGN UP
        </button>
      </div>
    </div>
  );
};

export default NavBar;
