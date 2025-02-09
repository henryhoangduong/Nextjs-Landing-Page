import React from "react";
import Image from "next/image";

const Features = () => {
  return (
    <div className="w-screen bg-[white] flex items-center flex-col text-black py-[120px] px-[50px] gap-[100px]">
      <div className="flex flex-col items-center gap-[32px]">
        <p className="font-bold text-[#9A62CB] text-[56px] text-center w-[727px]">
          Tools Designed with Educators
        </p>
        <p className="text-[18px] text-center w-[651px] ">
          VoCake Learning&apos;s innovative tools are designed in collaboration
          with educators and rooted in the science of learning, so they&apos;re
          proven to help students and schools succeed.
        </p>
        <button className="text-white  rounded-md px-[20px] py-[10px] uppercase bg-[#FF7A1A]">
          why vocake learning
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
            <p className="text-[#9A62CB] text-[48px] font-extrabold m-0">
              VoCake Assessment
            </p>
            <p className="m-0 text-[18px]">
              Our convenient, fast, and affordable English test integrates the
              latest assessment science and AI — empowering anyone to accurately
              test their English where and when they’re at their best.
            </p>
            <div>
              <button className="m-0 text-[14px] font-medium uppercase text-[#FF7A1A] border border-[#FF7A1A] p-4 rounded-[8px]">
                Let&apos;s start
              </button>
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
            <p className="text-[#9A62CB] text-[48px] font-extrabold m-0">
              VoCake For Schools
            </p>
            <p className="m-0 text-[18px]">
              Teachers, we’re here to help you! Our free tools support your
              students as they learn languages through VoCake, both in and out
              of the classroom.
            </p>
            <div>
              <button className="m-0 text-[14px] font-medium uppercase text-[#FF7A1A] border border-[#FF7A1A] p-4 rounded-[8px]">
                get your class started
              </button>
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
            <p className="text-[#9A62CB] text-[48px] font-extrabold m-0">
              VoCake Challenges
            </p>
            <p className="m-0 text-[18px]">
              Our free, bite-sized approach — but for fun! Challenges help
              students get ahead in their language skills, while adults can
              brain train to boost their speaking skills.
            </p>
            <div>
              <button className="m-0 text-[14px] font-medium uppercase text-[#FF7A1A] border border-[#FF7A1A] p-4 rounded-[8px]">
                Face off and boost your fluency
              </button>
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
            <p className="text-[#9A62CB] text-[48px] font-semibold m-0">
              VoCake Tools
            </p>
            <p className="m-0 text-[18px]">
              No more students waiting for their turn to speak! On VoCake,
              students can contribute instantly, simultaneously, and from
              anywhere.
            </p>
            <div>
              <button className="m-0 text-[14px] font-medium uppercase text-[#FF7A1A] border border-[#FF7A1A] p-4 rounded-[8px]">
                search and save your own vocab
              </button>
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
