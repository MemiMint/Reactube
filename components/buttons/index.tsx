import React, { FunctionComponent } from "react";
import { IProps } from "./IProps"

export const PrimaryButton: FunctionComponent<IProps> = ({
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