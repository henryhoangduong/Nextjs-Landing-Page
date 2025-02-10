import Image from "next/image";
import React from "react";

const Feedback = () => {
  return (
    <div className="flex flex-col w-full justify-center items-start bg-[#FF7A1A] h-[661px] gap-[20px] px-[64px] border">
      <div className="w-[80%] relative flex flex-col items-center p-0">
        <p className="text-[96px] font-bold text-white p-0 m-0">“</p>
        <p className="text-[48px] font-bold text-white text-center m-0">
          The analytics reports save me so much time and make our professional
          development workshops much more effective.
        </p>
        <div className="flex flex-col items-center">
          <p className="text-[18px] font-bold text-white">Michele Scribner</p>
          <p className="text-[18px] font-medium text-white">
             Assistant Principal of Serrano High School
          </p>
        </div>
        <div className="flex flex-row gap-2">
          <Image
            src={"/arrow-circle-right.svg"}
            alt=""
            width={40}
            height={40}
          />
          <Image
            src={"/arrow-circle-right.svg"}
            alt=""
            width={40}
            height={40}
            style={{ transform: "scaleX(-1)" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Feedback;
