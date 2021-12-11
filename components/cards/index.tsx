import React, { FunctionComponent } from "react";
import Link from "next/link"
import { RiVideoUploadFill  } from "react-icons/ri"
import { FaChartBar, FaUsers, FaUserEdit } from "react-icons/fa"
import { kFormatter } from "../../utils/k-formatter"
import { UserPicture } from "../userpicture"
import { IStatisticsCardProps, ISubscribeCardProps } from "./IProps";

export const StatisticsCard: FunctionComponent<IStatisticsCardProps> = ({
    totalSubscribers,
    totalViews
}): JSX.Element => {
    return (
        <div className="m-4 w-80 h-auto p-4 bg-white shadow-md border border-gray-300 rounded-md" >
            <div className="text-black pb-4 border-b border-gray-300">
                <div className="flex items-center justify-between" >
                    <h3 className="text-base font-medium" >Channel Statistics</h3>
                    <FaChartBar className="text-gray-500" size={18} />
                </div>
                <p className="text-sm mt-2">Total Subscribers</p>
                <h3 className="text-2xl mt-2">{totalSubscribers}</h3>
            </div>
            <div className="text-black mt-2 pb-4 border-b border-gray-300" >
                <p className="text-base font-medium" >Resume</p>
                <div className="mt-2" >
                    <div className="text-sm flex justify-between">
                        <p>Total Views</p>
                        <p>{kFormatter(totalViews)}</p>
                    </div>
                    <div className="mt-2 text-sm flex justify-between">
                        <p>Total Views (hours)</p>
                        <p>100 hrs</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const UploadVideoPanelCard: FunctionComponent = (): JSX.Element => {
    return (
        <Link href="/" >
            <a className="m-4 w-80 h-96 p-2 border border-gray-300 rounded-md bg-white shadow-md">
                <div
                    className="transition duration-300 group w-full flex flex-col items-center justify-center h-full cursor-pointer
                       border-2 border-dashed border-gray-300 space-y-4 hover:bg-green-300 hover:text-white hover:border-transparent"
                >
                    <div className="p-4 rounded-full bg-green-300 text-white group-hover:bg-white group-hover:text-green-300">
                        <RiVideoUploadFill size={40} />
                    </div>
                    <h1 className="text-base font-medium text-gray-500 group-hover:text-white">Upload your next great video</h1>
                </div>
            </a>
        </Link>
    )
}

export const CustomizeChannelPanelCard: FunctionComponent = (): JSX.Element => {
    return (
        <div className="m-4 w-80 h-auto bg-white shadow-md p-4 rounded-md border border-gray-300">
            <div className="flex items-center space-x-2">
                <div>
                    <h1 className="text-black font-medium">Wants to look better?</h1>
                    <p className="mt-2 text-gray-600 text-sm font-medium">Customize your channel!</p>
                    <p className="mt-2 text-sm text-gray-500" >Customize your channel creating a new brand that represents your content.</p>
                </div>
                <div className="p-4 rounded-full bg-green-300 text-white group-hover:bg-white group-hover:text-green-300">
                    <RiVideoUploadFill size={40} />
                </div>
            </div>
            <div className="mt-2" >
                <Link href="/account/customize" >
                    <a className="text-blue-500 font-medium">Start customizing</a>
                </Link>
            </div>
        </div>
    )
}

export const SubscribeCard: FunctionComponent<ISubscribeCardProps> = ({ type }): JSX.Element => {
    let href: string = `/account/${type === 'subscribers' ? 'subscribers' : 'subscriptions'}`;

    return (
        <div className="m-4 w-80 h-auto p-4 bg-white shadow-md border border-gray-300 rounded-md">
            <div className="flex items-center justify-between" >
                <h3 className="text-base font-medium">Recent { type === "subscribers" ? 'Subscribers' : 'Subscriptions' }</h3>
                <FaUsers className="text-gray-500" size={18} />
            </div>
            <div className="my-4 flex items-center space-x-4">
                <UserPicture 
                    picture="https://yt3.ggpht.com/ytc/AKedOLQwjKSwyDgelDobQLukn7vJYyLnZwORGcSVzr5Otw=s48-c-k-c0x00ffffff-no-rj"
                    width={40}
                    height={40}
                />
                <div>
                    <h1 className="text-sm font-medium">The Bootleg boy 2</h1>
                    <p className="text-xs text-gray-500">30.8k subscribers</p>
                </div>
            </div>
            <div className="my-4 flex items-center space-x-4">
                <UserPicture 
                    picture="https://yt3.ggpht.com/ytc/AKedOLQwjKSwyDgelDobQLukn7vJYyLnZwORGcSVzr5Otw=s48-c-k-c0x00ffffff-no-rj"
                    width={40}
                    height={40}
                />
                <div>
                    <h1 className="text-sm font-medium">The Bootleg boy 2</h1>
                    <p className="text-xs text-gray-500">30.8k subscribers</p>
                </div>
            </div>
            <div className="my-4 flex items-center space-x-4">
                <UserPicture 
                    picture="https://yt3.ggpht.com/ytc/AKedOLQwjKSwyDgelDobQLukn7vJYyLnZwORGcSVzr5Otw=s48-c-k-c0x00ffffff-no-rj"
                    width={40}
                    height={40}
                />
                <div>
                    <h1 className="text-sm font-medium">The Bootleg boy 2</h1>
                    <p className="text-xs text-gray-500">30.8k subscribers</p>
                </div>
            </div>
            <div className="mt-2" >
                <Link href={href} >
                    <a className="text-blue-500 font-medium">See All</a>
                </Link>
            </div>
        </div>
    )
}