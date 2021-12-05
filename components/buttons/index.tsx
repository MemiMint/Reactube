import React, { FunctionComponent } from "react";
import { IProps } from "./IProps"

export const LongButton: FunctionComponent<IProps> = ({
    text,
    onClick
}): JSX.Element => {
    return (
        <button
            className="transition duration-300 w-full mt-2 p-2 bg-green-300 text-base text-white font-medium hover:bg-green-400"
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export const ShortButton: FunctionComponent<IProps> = ({
    text,
    color,
    onClick
}): JSX.Element => {

    let bgColor;

    if (color === "green") bgColor = "bg-green-300 hover:bg-green-700";

    else if (color === "red") bgColor = "bg-red-300 hover:bg-red-700";

    else bgColor = "bg-gray-300 hover:bg-gray-500"

    return (
        <button 
            className={`transition duration-300 w-28 h-10 ${bgColor} text-base font-medium text-white cursor-pointer`}
            onClick={onClick}
        >
            <p>{text}</p>
        </button>
    )
}