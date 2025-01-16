import React from "react";

const Statistic = () => {
  return (
    <div className="bg-black flex justify-around text-white px-[80px] py-[20px]">
      <div className="flex flex-col items-center">
        <p className="font-bold text-[48px]">14.2M</p>
        <p className="text-center">
          Students have engaged in lessons in VoCake
        </p>
      </div>
      <div className="flex flex-col items-center">
        <p className="font-bold text-[48px]">80,000+</p>
        <p className="text-center">
          Standards-aligned questions from trusted sources
        </p>
      </div>
      <div className="flex flex-col items-center">
        <p className="font-bold text-[48px]">96.5%</p>
        <p className="text-center">
          Of VoCake users agree that VoCake supports active learning.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <p className="font-bold text-[48px]">97.2%</p>
        <p className="text-center">
          Of users agree that VoCake helps students engage with lessons.
        </p>
      </div>
    </div>
  );
};

export default Statistic;
