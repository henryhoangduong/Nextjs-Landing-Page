import React from "react";
import Image from "next/image";
const Gif = () => {
  return (
    <div className="bg-white w-screen flex flex-col items-center py-[20px] ">
      <Image
        src="/asset/Untitled-1-01-01 1.png"
        alt="video"
        width={736}
        height={529}
        className="transform -translate-y-[120px]"
      />
      <p className="text-black flex flex-col w-[60%] text-center text-[18px] uppercase transform -translate-y-[70px]">
        Create engaging content you can tailor to your teaching and
        students&apos; interests. Powered by generative AI, Instant VoCAKE takes
        any topic, standard, or existing materials and transforms them into
        interactive lessons.
      </p>
    </div>
  );
};

export default Gif;
