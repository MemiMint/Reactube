import React, { FunctionComponent, useState } from "react";
import { IProps } from "./IProps"
import { IState } from "./Istate"

export const VideoDescription: FunctionComponent<IProps> = ({
    description
}): JSX.Element => {

    const [state, setState] = useState<IState>({
       showMore: false 
    });

    const { showMore } = state;

    return (
        <div className="w-full">
            <div className={`w-2/3 ${showMore ? "h-auto" : "h-24"} overflow-hidden mt-4 text-sm`} >
                {description}
            </div>
            <div className="mt-2">
                <b className="text-sm text-gray-500 cursor-pointer" onClick={() => setState({ showMore: !showMore })} >{ showMore ? "Show Less" : "Show More" }</b>
            </div>
        </div>
    )
}