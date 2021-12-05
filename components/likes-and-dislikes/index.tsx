import React, { FunctionComponent, useState } from "react" ;
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";
import { kFormatter } from "../../utils/k-formatter"
import { IProps } from "./Iprops"

type ThumbProps = {
    type: "up" | "down";
    val: number;
    size: "big" | "small"
}

const Thumb: FunctionComponent<ThumbProps> = ({
    type,
    val,
    size
}):JSX.Element => {

    let [_val, setVal] = useState<number>(val);

    let iconSize: number;
    let fontSize: string;

    switch (size) {
        case "big":
            iconSize = 20;
            fontSize = "text-base";
            break;
        case "small": 
            iconSize = 15;
            fontSize = "text-sm";
            break;
        default:
            iconSize = 20;
            fontSize = "text-base";
            break;
    }

    return (
        <div className="flex items-center space-x-2 select-none cursor-pointer">
        { (type === "up") && <FiThumbsUp size={iconSize} onClick={() => setVal(++_val)} /> }
        { (type === "down") && <FiThumbsDown size={iconSize} onClick={() => setVal(++_val)} /> }
        <p className={fontSize} >{ kFormatter(_val) }</p>
      </div>
    )
}

export const LikesAndDislikes:FunctionComponent<IProps> = ({
    likes,
    dislikes,
    size
}): JSX.Element => {

    const thumbs: Array<ThumbProps> = [
        {
            type: "up",
            val: likes,
            size
        },
        {
            type: "down",
            val: dislikes,
            size
        }
    ]

    return (
        <div className="text-base my-2 flex items-center space-x-4">
            {
                thumbs.map((thumb, index): JSX.Element => {
                    return (
                        <Thumb 
                            key={index}
                            type={thumb.type}
                            val={thumb.val}
                            size={thumb.size}
                        />
                    )
                })
            }
        </div>
    )
}
