import React from "react";
import BenefitCard, { BenefitCardProps } from "./BenefitCard";

const data: BenefitCardProps[] = [
  {
    image: null,
    title: "Powerful Practice",
    desc: "Bring standards-aligned content to life and offer students real-time feedback ",
    bg: "#B7EBDD",
  },
  {
    image: null,
    title: "Game Experiences",
    desc: "The best of collaboration and differentiation — in one  ",
    bg: "#F5C2D7",
  },
  {
    image: null,
    title: "Data Warehousing",
    desc: "VoCake Assessment is a versatile platform that combines ease-of-use ",
    bg: "#F7F296",
  },
];

const Benefit = () => {
  return (
    <div className="bg-[#ffffff] w-full p-[120px] flex flex-col gap-[120px]">
      <div className="flex flex-col items-center gap-[24px]">
        <p className="text-[#9A62CB] text-[40px] font-extrabold">
          For every student, every day
        </p>
        <p className="text-black font-medium text-[18px] uppercase">
          We have a solution for every step of the learning journey.
        </p>
      </div>
      <div className="flex flex-row justify-between gap-10">
        {data.map((item, index) => {
          return (
            <BenefitCard
              key={index}
              title={item.title}
              image={item.image}
              desc={item.desc}
              bg={item.bg}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Benefit;
