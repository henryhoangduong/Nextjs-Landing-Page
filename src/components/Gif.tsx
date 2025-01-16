import React from "react";
import Image from "next/image";
const Gif = () => {
  return (
    <div className="bg-[#F5F5F5] w-screen flex flex-col items-center py-[20px] ">
      <div className="h-[695px] w-[1283px] rounded-[16px] relative top-[-50px] bg-white flex justify-center items-center">
        <Image src="/asset/Video.png" alt="video" width={112} height={112} />
      </div>
      <p className="text-black flex flex-col w-[60%] text-center text-[18px] uppercase">
        Create engaging content you can tailor to your teaching and
        students&apos; interests. Powered by generative AI, Instant VoCAKE takes
        any topic, standard, or existing materials and transforms them into
        interactive lessons.
      </p>
    </div>
  );
};

export default Gif;
