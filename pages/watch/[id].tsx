import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image"
import { useUser } from "../../context"
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi"
import { Navbar } from "../../components/navbar";

const Watch: NextPage = (): JSX.Element => {

    const { username, picture } = useUser()

    return (
        <div className="w-screen h-screen">
            <Navbar />
            <div className="w-full h-2/5 bg-black" >
            </div>
            <div className="mt-2 space-y-2 px-2 h-auto border-b border-gray-300">
                <h1 className="text-base text-black font-semibold">Bring Me The Horizon - Drown (Sewerslvt Remix)</h1>
                <p className="text-sm text-gray-600">553,225 views • 10 may. 2020</p>
                <div className="flex p-2 space-x-4 justify-end">
                    <div className="flex items-center space-x-2 text-sm">
                        <FiThumbsUp size={20} />
                        <p>500</p>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                        <FiThumbsDown size={20} />
                        <p>500</p>
                    </div>
                </div>
            </div>
            <div className="mt-4 p-2 w-full flex items-center justify-between border-b border-gray-300">
                <div className="flex space-x-2">
                    <Image
                        loader={({ src }) => src}
                        src={picture}
                        width={50}
                        height={50}
                        className="rounded-full"
                    />
                    <div>
                        <p className="text-sm text-gray-600 font-medium">{username}</p>
                        <p className="text-sm text-gray-500">53.3k subscribers</p>
                    </div>
                </div>
                <div className="p-2 bg-green-300 text-white">Subscribe</div>
            </div>
        </div>
    )
};

export default Watch;