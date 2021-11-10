import React, { FunctionComponent } from "react";
import { IProps } from "./Iprops";
import { ThumbnailVideoCard } from "../videocard";

export const PlayList: FunctionComponent<IProps> = ({
  title,
  videos,
}: IProps): JSX.Element => {
  return (
    <div
      className="mt-4 mb-4 py-2 h-auto border-b border-gray-400 text-xl font-semibold text-gray-500 text-center
                 md:text-left md:text-lg lg:text-left lg:text-lg"
    >
      <h2>{title}</h2>
      <div
        className="mt-4 flex flex-col items-center justify-center space-y-2 overflow-x-auto
                     md:flex-row md:justify-start md:space-y-0 md:space-x-2 lg:flex-row lg:justify-start lg:space-y-0 lg:space-x-2"
      >
        {videos.map((video, index): JSX.Element => {
          return (
            <ThumbnailVideoCard
              key={index}
              thumbnail={video.thumbnail}
              title={video.title}
              views={video.views}
              duration={video.duration}
              channel={video.channel}
            />
          );
        })}
      </div>
    </div>
  );
};
