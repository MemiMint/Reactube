import React, { FunctionComponent, useState } from "react";
import { UserPicture } from "../userpicture";
import { LikesAndDislikes } from "../likes-and-dislikes";
import { IProps } from "./Iprops"

export const Comment: FunctionComponent<IProps> = ({
    picture,
    username,
    date,
    comment,
    likesAndDislikes
}): JSX.Element => {
    const { likes, dislikes } = likesAndDislikes

    return (
        <div className="flex flex-1 my-8">
            <div>
                <UserPicture
                    picture={picture}
                    width={40}
                    height={40}
                />
            </div>
            <div className="w-full ml-4" >
                <div style={{ fontSize: 13 }}>
                    <p className="text-black font-medium" >
                        {username}
                        &nbsp;
                        &nbsp;
                        <span className="text-gray-500">{date}</span>
                    </p>
                </div>
                <div className="text-sm text-black" >
                    <p>{comment}</p>
                </div>
                <LikesAndDislikes size="small" likes={likes} dislikes={dislikes} />
            </div>
        </div>
    )
}
