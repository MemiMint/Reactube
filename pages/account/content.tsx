import React from "react";
import { NextPage } from "next";
import { AccountLayout } from "../../components/accoutlayout";
import { VideoTable } from "../../components/videotable";
import { IVideoTableDataProps as IVideoProps } from "../../components/videotable/IProps";
import { VideoDetailsModal } from "../../components/modals";

const Content: NextPage = (): JSX.Element => {
  const fakeData: Array<IVideoProps> = [
    {
      thumbnail: "https://i.blogs.es/0ca5da/ambulo_polar_wide/1366_2000.jpg",
      title: "Deathmetal",
      views: 300,
      comments: 109,
      date: "20/02/2010",
      likesDislikesPercentage: 67,
    },
    {
      thumbnail: "https://i.blogs.es/0ca5da/ambulo_polar_wide/1366_2000.jpg",
      title: "Deathmetal",
      views: 300,
      comments: 109,
      date: "20/02/2010",
      likesDislikesPercentage: 67,
    },
    {
      thumbnail: "https://i.blogs.es/0ca5da/ambulo_polar_wide/1366_2000.jpg",
      title: "Deathmetal",
      views: 300,
      comments: 109,
      date: "20/02/2010",
      likesDislikesPercentage: 67,
    },
    {
      thumbnail: "https://i.blogs.es/0ca5da/ambulo_polar_wide/1366_2000.jpg",
      title: "Deathmetal",
      views: 300,
      comments: 109,
      date: "20/02/2010",
      likesDislikesPercentage: 67,
    },
  ];

  return (
    <>
      <AccountLayout>
        <div className="w-full h-full bg-white">
          <div className="p-14">
            <h1 className="text-black font-medium text-lg">Channel Content</h1>
          </div>
          <VideoTable videos={fakeData} />
        </div>
      </AccountLayout>
    </>
  );
};

export default Content;
