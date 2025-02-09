import React from "react";
import Image from "next/image";
const VideoUsers = () => {
  return (
    <div className="bg-[hsl(214,30%,95%)] w-screen flex flex-col items-center py-[20px] ">
      <Image
        src="/asset/Untitled-1-01-01 1.png"
        alt="video"
        width={1180}
        height={850}
        className="transform -translate-y-[120px]"
      />
    </div>
  );
};

export default VideoUsers;
