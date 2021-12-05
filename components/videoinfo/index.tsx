import React, { FunctionComponent } from "react";
import { LikesAndDislikes } from "../likes-and-dislikes";
import { IProps } from "./Iprops";

export const VideoInfo: FunctionComponent<IProps> = ({
    title,
    views,
    date,
    likesAndDislikes
}): JSX.Element => {
    const { likes, dislikes } = likesAndDislikes;

    return (
        <div className="w-full mt-4 border-b border-gray-300" >
        <h1 className="text-lg text-black">{ title }</h1>
        <p className="text-sm text-gray-500 mt-2">{ views } views • { date }</p>
        <div className="flex justify-end" >
            <LikesAndDislikes
                size="big"
                likes={likes}
                dislikes={dislikes}
            />
        </div>
      </div>
    )
}