import React, { FunctionComponent } from "react";
import { FiVolume1, FiVolume2, FiVolumeX } from "react-icons/fi"

type Props = {
    muted: boolean;
    volume: number;
    handleMuted: () => void;
    handleVolumeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const VolumeMeter: FunctionComponent<Props> = ({ muted, volume, handleVolumeChange, handleMuted }): JSX.Element => {
    return (
        <div className="flex items-center space-x-2" >
            {volume > 50 && <FiVolume2 className="cursor-pointer" size={20} onClick={handleMuted} />}
            {(volume <= 50 && volume !== 0) && <FiVolume1 className="cursor-pointer" size={20} onClick={handleMuted} />}
            {volume === 0 && <FiVolumeX className="cursor-pointer" size={20} onClick={handleMuted} />}
            <div style={{ height: 3 }} className="relative w-16 bg-gray-400 flex items-center z-0">
                <input className="absolute w-full cursor-pointer volume-bar z-20" type="range" value={volume} onInput={handleVolumeChange} />
                <progress className="w-full h-full cursor-pointer volume-progress-bar z-10" value={volume} max={100} />
            </div>
        </div>
    )
}

export default VolumeMeter;