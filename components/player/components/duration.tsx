import React, { FunctionComponent } from "react";

type Props = {
    currentTime: number;
    totalDurationOfVideo: number
}

const Duration: FunctionComponent<Props> = ({ currentTime, totalDurationOfVideo }) => {
    return (
        <div className="flex items-center space-x-1 text-sm" >
            <time dateTime={`P${Math.round(currentTime)}S`} >
                {format(currentTime)}
            </time>
            <p>/</p>
            <time dateTime={`P${Math.round(totalDurationOfVideo)}S`} >
                {format(totalDurationOfVideo)}
            </time>
        </div>
    )
}

const format = (seconds: number): string => {
    const date = new Date(seconds * 1000);
    const hh = date.getUTCHours();
    const mm = date.getUTCMinutes();
    const ss = pad(date.getUTCSeconds());

    if (hh) {
        return `${hh}:${mm}:${ss}`;
    }

    return `${mm}:${ss}`;
}

const pad = (padNumber: number): string => {
    return ('0' + padNumber).slice(-2);
}

export default Duration;