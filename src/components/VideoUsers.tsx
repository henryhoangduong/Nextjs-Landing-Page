import React from "react";
import Image from "next/image";
const VideoUsers = () => {
  return (
    <div className="bg-[#F0F3F7] w-screen flex flex-col items-center py-[20px] ">
      <div className="h-[695px] w-[1283px] rounded-[16px] relative top-[-50px] bg-white flex justify-center items-center">
        <Image src="/asset/Video.png" alt="video" width={112} height={112} />
      </div>
    </div>
  );
};

export default VideoUsers;
