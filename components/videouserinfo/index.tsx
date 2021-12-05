import React, { FunctionComponent, useState } from "react";
import { useUser } from "../../context"
import { UserPicture } from "../userpicture"
import { VideoDescription } from "../videodescription"
import { kFormatter } from "../../utils/k-formatter"
import { ShortButton } from "../buttons"
import { IProps } from "./IProps"


export const VideoUserInfo: FunctionComponent<IProps> = ({
    userPicture,
    username,
    subscribers,
    description
}) => {
    return (
        <div className="flex mt-4 py-2 border-b border-gray-300">
            <div className="flex flex-1 space-x-2">
                <div>
                    <UserPicture
                        picture={userPicture}
                        width={50}
                        height={50}
                    />
                </div>
                <div className="w-full" >
                    <p className="text-sm font-medium text-gray-800">{username}</p>
                    <p className="text-xs text-gray-500">{kFormatter(subscribers)} subscribers</p>
                    <VideoDescription description={description} />
                </div>
            </div>
            <ShortButton 
                text="Subscribe"
                color="green"
            />
        </div>
    )
}
