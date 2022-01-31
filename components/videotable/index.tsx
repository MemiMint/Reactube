import React, { FunctionComponent } from "react";
import Image from "next/image";
import { IVideoListProps, IVideoTableDataProps, IProps } from "./IProps";

const TableHeader: FunctionComponent = (): JSX.Element => {
  const headers: Array<string> = [
    "thumbnail",
    "title",
    "views",
    "comments",
    "date",
    "likes and dislikes (%perc.)",
  ];

  return (
    <thead className="border-b border-gray-300">
      <tr className="text-center text-gray-700 font-medium">
        <th>
          <input
            className="border-2 border-red-300"
            style={{ width: 20, height: 20 }}
            type="checkbox"
          />
        </th>
        {headers.map((header, index): JSX.Element => {
          return <th key={index}>{header}</th>;
        })}
      </tr>
    </thead>
  );
};

const VideoTableData: FunctionComponent<IVideoTableDataProps> = ({
  thumbnail,
  title,
  views,
  comments,
  date,
  likesDislikesPercentage,
}): JSX.Element => {
  return (
    <tr className="text-center border-b border-gray-300 hover:bg-green-300">
      <td>
        <input style={{ width: 20, height: 20 }} type="checkbox" />
      </td>
      <td className="p-2">
        <Image
          loader={({ src }) => src}
          src={thumbnail}
          width={200}
          height={90}
        />
      </td>
      <td className="text-gray-600 font-medium">{title}</td>
      <td className="text-gray-600 font-medium">{views}</td>
      <td className="text-gray-600 font-medium">{comments}</td>
      <td className="text-gray-600 font-medium">{date}</td>
      <td className="text-gray-600 font-medium">{likesDislikesPercentage}%</td>
    </tr>
  );
};

const VideoList: FunctionComponent<IVideoListProps> = ({
  videos,
}): JSX.Element => {
  return (
    <tbody>
      {videos.map((video, index): JSX.Element => {
        return (
          <VideoTableData
            key={index}
            thumbnail={video.thumbnail}
            title={video.title}
            views={video.views}
            comments={video.comments}
            date={video.date}
            likesDislikesPercentage={video.likesDislikesPercentage}
          />
        );
      })}
    </tbody>
  );
};

export const VideoTable: FunctionComponent<IProps> = ({
  videos,
}): JSX.Element => {
  return (
    <table className="w-full table-auto">
      <TableHeader />
      <VideoList videos={videos} />
    </table>
  );
};
