import React, { FunctionComponent, useState } from "react";
import { useRouter } from "next/router"
import { VideoCard, HorizontalVideoCard } from "../videocard";
import { FiGrid } from "react-icons/fi"
import { BiColumns } from "react-icons/bi"
import { IProps, ILayoutSelectorProps } from "./IProps"
import {ILayoutSelectorState ,IState } from "./IState"

const GridList: FunctionComponent<IProps> = ({
    videos
}): JSX.Element => {
    return (
        <div className="w-full flex flex-wrap items-center">
            {videos.map((video, index): JSX.Element => {
                return (
                    <VideoCard 
                        key={index}
                        thumbnail={video.thumbnail}
                        title={video.title}
                        channel={video.channel}
                        duration={video.duration}
                        views={video.views}
                        date={video.date}
                        description={video.description}
                    />
                )
            })}
        </div>
    )
}

const ColumnList: FunctionComponent<IProps> = ({
    videos
}): JSX.Element => {
    return (
        <div className="w-full flex flex-col items-center" >
            {videos.map((video, index): JSX.Element => {
                return (
                    <HorizontalVideoCard 
                    key={index}
                    thumbnail={video.thumbnail}
                    title={video.title}
                    views={video.views}
                    date={video.date}
                    channel={video.channel}
                    description={video.description}
                    duration={video.duration}
                  />
                )
            })}
        </div>
    )
}

const LayoutSelector: FunctionComponent<ILayoutSelectorProps> = ({
    onChangeColumn,
    onChangeGrid
}): JSX.Element => {
    const [state, setState] = useState<ILayoutSelectorState>({
        focusColumn: true,
        focusGrid: false
    });

    const router = useRouter();

    const onFocusGrid = (): void => {
        onChangeGrid();
        setState({
            focusGrid: true,
            focusColumn: false
        });
    }

    const onFocusColumn = (): void => {
        onChangeColumn();
        setState({
            focusColumn: true,
            focusGrid: false
        });
    }

    return (
        <div className="w-full flex items-center justify-between border-b border-gray-500">
            <h1 className="text-lg text-gray-500 font-medium">Search results for "{router.query.search}"</h1>
            <div className="flex items-center space-x-4">
                <FiGrid className={`cursor-pointer ${state.focusGrid ? "text-green-300 border-b-2 border-green-300" : "text-gray-500 hover:text-green-400"}`} size={22} onClick={onFocusGrid} />
                <BiColumns className={`cursor-pointer ${state.focusColumn ? "text-green-300 border-b-2 border-green-300" : "text-gray-500 hover:text-green-400"}`} size={22} onClick={onFocusColumn} />
            </div>
        </div>
    )
}

export const LayoutVideoList: FunctionComponent<IProps> = ({
    videos,
    layout
}): JSX.Element => {
    const [state, setState] = useState<IState>({
        _layout: layout as string
    });

    return (
        <div className="mt-8 px-36" >
            <LayoutSelector onChangeColumn={() => setState({ _layout: "column" })} onChangeGrid={() => setState({ _layout: "grid" })} />
            {state._layout === "column" && <ColumnList videos={videos} />}
            {state._layout === "grid" && <GridList videos={videos} />}
        </div>
    ) 
} 