import React, { FunctionComponent } from "react";
import { FiPause, FiPlay, FiRepeat } from "react-icons/fi"

type Props = {
    isPlaying: boolean;
    repeat: boolean;
    handlePlay: () => void;
    handlePause: () => void;
    handleRepeat: () => void;
}

const PlayPauseLoop: FunctionComponent<Props> = ({ isPlaying, repeat, handlePause, handlePlay, handleRepeat }): JSX.Element => {
    const PlayPause = (): JSX.Element => {
        return (
            isPlaying ? <FiPause className="cursor-pointer" size={20} onClick={handlePause} /> : <FiPlay className="cursor-pointer" size={18} onClick={handlePlay} />
        )
    }

    return (
        repeat ? <FiRepeat className="cursor-pointer" size={20} onClick={handleRepeat} /> : <PlayPause />
    )
}

export default PlayPauseLoop;