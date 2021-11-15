import React, { useState, useEffect, useRef, FunctionComponent } from "react";
import { FiPlay, FiPause, FiVolume } from "react-icons/fi";
import { BiFullscreen } from "react-icons/bi";
import ReactPlayer from "react-player";

const Controls: FunctionComponent = (): JSX.Element => {
  return (
    <div className="w-full flex items-center justify-between h-auto bg-black p-2">
      <div className="flex text-white space-x-2">
        <FiPlay size={30} />
        <FiVolume size={30} />
      </div>
      <div className="flex text-white">
        <BiFullscreen size={30} />
      </div>
    </div>
  );
};

const Player: FunctionComponent = (): JSX.Element => {
  return (
    <div className="relative w-full h-3/5 bg-red-500">
      <ReactPlayer
        url="https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4"
        width="100%"
        height="100%"
      />
    </div>
  );
};
