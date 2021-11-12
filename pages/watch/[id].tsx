import React, { useState } from "react";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import ReactPlayer from "react-player";
import { useUser } from "../../context";
import {
  FiThumbsUp,
  FiThumbsDown,
  FiPlay,
  FiPause,
  FiVolume,
} from "react-icons/fi";
import { BiFullscreen } from "react-icons/bi";
import { Navbar } from "../../components/navbar";

const Watch: NextPage = (): JSX.Element => {
  const [isPlay, setIsPlay] = useState<boolean>(false);
  const [currentSeek, setCurrentSeek] = useState<number>(0);
  const [volumeBar, setVolumeBar] = useState<number>(0);
  const [volume, setVolume] = useState<number>(0);
  const [totalDurationOfVideo, setTotalDurationOfVideo] = useState<number>(0);
  const [muted, setMuted] = useState<boolean>(false);

  const hostVideo = React.createRef<any>();

  const handleVolumeChange = (e: any): void => {
    setVolume(e.target.value / 100);
    setVolumeBar(e.target.value / 100);
  };

  const handleOnProgress = (e: any) => {
    setCurrentSeek(e.target.value);
    hostVideo.current.seekTo(e.target.value);
  };

  const handlePlay = () => {
    if (totalDurationOfVideo === 0)
      setTotalDurationOfVideo(hostVideo.current.getDuration());
    setIsPlay(true);
  };

  const handlePuse = () => {
    setIsPlay(false);
  };

  return (
    <div className="w-screen h-screen">
      <Navbar />
      <div className="relative w-full h-3/5 bg-red-500">
        <ReactPlayer
          url="https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4"
          width="100%"
          height="100%"
        />
        <div className="absolute top-0 right-0 w-full h-full flex flex-col justify-end">
          <div className="w-full flex items-center justify-between h-auto bg-black p-2">
            <div className="flex text-white space-x-2">
              <FiPlay size={30} />
              <FiVolume size={30} />
            </div>
            <div className="flex text-white">
              <BiFullscreen size={30} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watch;
