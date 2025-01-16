import React from "react";
import Image from "next/image";

const Features = () => {
  return (
    <div className="w-screen bg-white flex items-center flex-col text-black py-[100px] px-[50px] gap-[100px]">
      <div className="flex flex-col items-center gap-[32px]">
        <p className="font-bold text-[56px] text-center w-[727px]">
          Tools Designed with Educators
        </p>
        <p className="text-[18px] text-center w-[727px]">
          VoCake Learning&apos;s innovative tools are designed in collaboration
          with educators and rooted in the science of learning, so they&apos;re
          proven to help students and schools succeed.
        </p>
        <button className="text-white bg-black rounded-md px-[20px] py-[10px]">
          LEARN MORE
        </button>
      </div>
      {/* Feature Sections*/}
      <div>
        <div className="flex items-center gap-10">
          <Image
            src={"/asset/VoCakeAssessment.png"}
            alt="video"
            width={640}
            height={480}
            className="rounded-[16px]"
          />
          <div className="flex flex-col gap-5">
            <p className="text-[#00332C] text-[48px] font-extrabold m-0">
              VoCake Assessment
            </p>
            <p className="m-0 text-[18px]">
              Visualize progress, identify gaps, and drive outcomes, all in one
              easy system.
            </p>
            <div>
              <p className="m-0 text-[18px] font-bold">Explore more</p>
            </div>
          </div>
        </div>
        <div className="w-full h-[186px] relative">
          <Image
            src={"/asset/CurvedDashLine.png"}
            layout="fill"
            objectFit="contain"
            alt="dashed"
          />
        </div>

        <div className="flex items-center gap-10">
          <div className="flex flex-col gap-5">
            <p className="text-[#00332C] text-[48px] font-extrabold m-0">
              VoCake Deck
            </p>
            <p className="m-0 text-[18px]">
              Increase student participation and create more classroom connections with tailor-made presentations and real-time feedback.
            </p>
            <div>
              <p className="m-0 text-[18px] font-bold">Explore more</p>
            </div>
          </div>
          <Image
            src={"/asset/VoCakeDeck.png"}
            alt="video"
            width={640}
            height={480}
            className="rounded-[16px]"
          />
        </div>
        <div className="w-full h-[186px] relative">
          <Image
            src={"/asset/CurvedDashLine2.png"}
            layout="fill"
            objectFit="contain"
            alt="dashed"
          />
        </div>
        <div className="flex items-center gap-10">
          <Image
            src={"/asset/build-confidence@2x.png"}
            alt="video"
            width={640}
            height={480}
            className="rounded-[16px]"
          />
          <div className="flex flex-col gap-5">
            <p className="text-[#00332C] text-[48px] font-extrabold m-0">
              VoCake Assessment
            </p>
            <p className="m-0 text-[18px]">
              Visualize progress, identify gaps, and drive outcomes, all in one
              easy system.
            </p>
            <div>
              <p className="m-0 text-[18px] font-bold">Explore more</p>
            </div>
          </div>
        </div>
        <div className="w-full h-[186px] relative">
          <Image
            src={"/asset/CurvedDashLine.png"}
            layout="fill"
            objectFit="contain"
            alt="dashed"
          />
        </div>
        <div className="flex items-center gap-10">
          <div className="flex flex-col gap-5">
            <p className="text-[#00332C] text-[48px] font-extrabold m-0">
              VoCake Deck
            </p>
            <p className="m-0 text-[18px]">
              Increase student participation and create more classroom connections with tailor-made presentations and real-time feedback.
            </p>
            <div>
              <p className="m-0 text-[18px] font-bold">Explore more</p>
            </div>
          </div>
          <Image
            src={"/asset/gradable-discussion@2x.png"}
            alt="video"
            width={640}
            height={480}
            className="rounded-[16px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
