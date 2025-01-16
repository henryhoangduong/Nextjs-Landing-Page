import React from "react";

const NavBar = () => {
  return (
    <div className="bg-white text-black flex justify-between p-5 w-screen px-[80px] items-center">
      <p className="text-[16px] font-extrabold">Logo</p>
      <p className="text-[14px] font-semibold">Product</p>
      <p className="text-[14px] font-semibold">Solution</p>
      <p className="text-[14px] font-semibold">Resources</p>
      <p className="text-[14px] font-semibold">Why Vocake Learning?</p>
      <p className="text-[14px] font-semibold">Pricing</p>
      <p className="text-[14px] font-semibold">English</p>
      <button className="border border-black rounded-md px-[20px] py-[10px] text-[14px]">
        LOG IN
      </button>
      <button className="text-white bg-black rounded-md px-[20px] py-[10px] text-[14px]">
        SIGN UP
      </button>
    </div>
  );
};

export default NavBar;
