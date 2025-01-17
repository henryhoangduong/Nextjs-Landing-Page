import React from "react";

const Feedback = () => {
  return (
    <div className="flex flex-col w-full items-center bg-black py-[120px] gap-[20px]">
      <p className="text-[96px] font-bold text-white ">“</p>
      <p className="text-[48px] font-bold text-white w-[77%] text-center">
        The analytics reports save me so much time and make our professional
        development workshops much more effective.
      </p>
      <div className="flex flex-col items-center">
        <p className="text-[18px] font-bold text-white">Michele Scribner</p>
        <p className="text-[18px] font-medium text-white">
           Assistant Principal of Serrano High School
        </p>
      </div>
    </div>
  );
};

export default Feedback;
