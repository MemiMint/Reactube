import React, { useState, FunctionComponent, useRef } from "react";
import { findDOMNode } from "react-dom"
import { BiFullscreen } from "react-icons/bi";
import ReactPlayer from "react-player";
import screenfull from "screenfull";
import { IControls, IProps } from "./Iprops"
import { ControlContainer, PlayPauseLoop, VolumeMeter, SeekBar, Duration } from "./components"

const Controls: FunctionComponent<IControls> = ({
  currentSeek,
  isPlaying,
  loaded,
  volume,
  muted,
  repeat,
  totalDurationOfVideo,
  handlePause,
  handlePlay,
  handleMuted,
  handleFullScreen,
  handleRepeat,
  handleSeekChange,
  handleVolumeChange,
}): JSX.Element => {

  const handleTogglePlayPause = (): void => {
    return isPlaying ? handlePause() : handlePlay()
  }

  return (
    <div className="group absolute top-0 right-0 w-full h-full flex flex-col justify-end select-none" onClick={handleTogglePlayPause}>
      <SeekBar currentSeek={currentSeek} loaded={loaded} totalDurationOfVideo={totalDurationOfVideo} handleSeekChange={handleSeekChange} />
      <ControlContainer>
        <div className="flex items-center space-x-4">
          <PlayPauseLoop isPlaying={isPlaying} repeat={repeat} handlePause={handlePause} handlePlay={handlePlay} handleRepeat={handleRepeat} />
          <VolumeMeter muted={muted} volume={volume} handleVolumeChange={handleVolumeChange} handleMuted={handleMuted} />
          <Duration currentTime={currentSeek} totalDurationOfVideo={totalDurationOfVideo} />
        </div>
        <BiFullscreen size={20} className="cursor-pointer" onClick={handleFullScreen} />
      </ControlContainer>
    </div>
  );
};

export const Player: FunctionComponent<IProps> = ({ url }): JSX.Element => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentSeek, setCurrentSeek] = useState<number>(0);
  const [loaded, setLoaded] = useState<number>(0);
  const [volume, setVolume] = useState<number>(0);
  const [volumeBar, setVolumeBar] = useState<number>(0);
  const [currentVolume, setCurrentVolume] = useState<number>(0);
  const [currentVolumeBar, setCurrentVolumeBar] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [totalDurationOfVideo, setTotalDurationOfVideo] = useState<number>(0);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [repeat, setRepeat] = useState<boolean>(false);

  const ref = useRef<any>(null);

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value: number = parseInt(e.target.value);
    setVolume(value / 100);
    setVolumeBar(value);
    saveCurrentVolume((value / 100), value);
  }

  const handleDuration = (_duration: number): void => {
    console.log("onDuration", duration);
    setDuration(_duration);
  }

  const handleOnProgress = (e: any): void => {
    setCurrentSeek(e.playedSeconds);
  }

  const handleSeekChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value: number = parseFloat(e.target.value);
    setCurrentSeek(value);
    ref.current.seekTo(value);
  }

  const handlePlay = (): void => {
    if (totalDurationOfVideo === 0) setTotalDurationOfVideo(ref.current.getDuration());
    setIsPlaying(true);
  }

  const handlePause = (): void => {
    setIsPlaying(false);
  }

  const saveCurrentVolume = (volume: number, volumeBar: number): void => {
    setCurrentVolume(volume);
    setCurrentVolumeBar(volumeBar);
  }

  const toggleMuted = (): void => {
    setIsMuted(!isMuted);

    if (isMuted) {
      setVolume(currentVolume);
      setVolumeBar(currentVolumeBar);
    }

    else {
      setVolume(0);
      setVolumeBar(0);
    }
  }

  const handleRepeat = (): void => {
    setRepeat(false);
    ref.current.seekTo(0)
  }

  const handleFullScreen = (): void => {
    const fullscreen = require("fullscreen");
    let fs = fullscreen(ref.current.wrapper);

    fs.request();
  }

  return (
    <div className="relative w-full h-full bg-green-500">
      <ReactPlayer
        url={url}
        width="100%"
        height="100%"
        volume={volume}
        muted={isMuted}
        ref={ref}
        playing={isPlaying}
        onProgress={(e) => {
          handleOnProgress(e)
          setLoaded(e.loaded);
        }}
        onDuration={(e) => {
          handleDuration(e);
        }}
        onEnded={() => {
          setRepeat(true);
        }}
      />
      <Controls
        currentSeek={currentSeek}
        isPlaying={isPlaying}
        muted={isMuted}
        volume={volumeBar}
        totalDurationOfVideo={totalDurationOfVideo}
        loaded={loaded}
        repeat={repeat}
        handlePause={handlePause}
        handlePlay={handlePlay}
        handleMuted={toggleMuted}
        handleFullScreen={handleFullScreen}
        handleRepeat={handleRepeat}
        handleSeekChange={handleSeekChange}
        handleVolumeChange={handleVolumeChange}
      />
    </div>
  );
};
