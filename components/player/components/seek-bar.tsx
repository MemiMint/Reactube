import React, { FunctionComponent } from "react";

type Props = {
    loaded: number;
    currentSeek: number;
    totalDurationOfVideo: number;
    handleSeekChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SeekBar: FunctionComponent<Props> = ({ loaded, currentSeek, totalDurationOfVideo, handleSeekChange }): JSX.Element => {
    return (
        <div className="relative w-full h-2 hidden group-hover:block" onClick={(e) => e.stopPropagation()} >
            <progress className="absolute top-0 right-0 cursor-pointer w-full h-full load-progress-bar" value={loaded} />
            <progress className="absolute top-0 right-0 cursor-pointer w-full h-full seek-progress-bar" value={currentSeek} max={totalDurationOfVideo} />
            <input className="absolute top-0 right-0 cursor-pointer w-full seek-bar" type="range" value={currentSeek} min={0} max={totalDurationOfVideo} onInput={handleSeekChange} />
        </div>
    )
}

export default SeekBar;