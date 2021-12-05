import React, { LegacyRef } from "react";

export interface IControls {
    currentSeek: number;
    isPlaying: boolean;
    muted: boolean;
    repeat: boolean;
    loaded: number;
    volume: number;
    totalDurationOfVideo: number;
    handlePause: () => void;
    handlePlay: () => void;
    handleMuted: () => void;
    handleFullScreen: () => void;
    handleRepeat: () => void;
    handleSeekChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleVolumeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


export interface IProps {
    url: string;
}