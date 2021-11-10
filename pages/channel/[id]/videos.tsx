import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import { useUser } from "../../../context";
import { Navbar } from "../../../components/navbar";
import { ChannelLayout } from "../../../components/channellayout";
import { VideoCard } from "../../../components/videocard";
import { IProps } from "../../../components/videocard/Iprops";

const fakeData: Array<IProps> = [
  {
    thumbnail:
      "https://i.ytimg.com/an_webp/HYv55DhgTuA/mqdefault_6s.webp?du=3000&sqp=CID_pIwG&rs=AOn4CLDo2a_UZqIRBMIKyvALCVAwRO0MUw",
    title: "Build the best blog app with react!",
    date: "3 years ago",
    duration: "1:20:32",
    views: "1032",
    channel: {
      picture:
        "https://i.ytimg.com/vi/RoStZSd9CWk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCc6wj1cg2b13bXQWy8zwL6IDj9lg",
      name: "Average channel",
    },
  },
  {
    thumbnail:
      "https://i.ytimg.com/an_webp/7o6m_TwVS9Y/mqdefault_6s.webp?du=3000&sqp=CIrlpowG&rs=AOn4CLAEGTDKw-QVjSWZFXcXsG-k75uCCQ",
    title: "Mi madre se puso a llorar cuando me fui al atletico madrid",
    duration: "8:08",
    views: "553k",
    date: "8 months ago",
    channel: {
      picture:
        "https://yt3.ggpht.com/ytc/AKedOLRlh_qkceyzmadF0Uxyy606XWFIbLMpq1o_FGE-=s68-c-k-c0x00ffffff-no-rj",

      name: "Charlando Tranquilamente",
    },
  },
  {
    thumbnail:
      "https://i.ytimg.com/an_webp/4ZTP_QpQkYk/mqdefault_6s.webp?du=3000&sqp=CMTtpowG&rs=AOn4CLCe3OKeB-P2uNjRh2ruk5-6wl8DeA",
    title: "Los objetos mas raros del universo",
    duration: "11:03",
    views: "649k",
    date: "4 months ago",
    channel: {
      picture:
        "https://i.ytimg.com/vi/RLN3EDIg-bA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAiN6qZS3AAiv8j30Cm90IWTMAXaQ",
      name: "El robot de platon",
    },
  },
];

const Videos: NextPage = (): JSX.Element => {
  const { username } = useUser();

  return (
    <>
      <Head>
        <title>{username} - Videos</title>
      </Head>
      <Navbar />
      <ChannelLayout>
        <main>
          <section
            className="w-full flex-col items-center p-4
                          md:flex md:flex-row md:flex-wrap lg:flex lg:flex-row lg:flex-wrap"
          >
            {fakeData.map((video, index): JSX.Element => {
              return (
                <VideoCard
                  key={index}
                  thumbnail={video.thumbnail}
                  title={video.title}
                  views={video.views}
                  date={video.date}
                  duration={video.duration}
                  channel={video.channel}
                />
              );
            })}
          </section>
        </main>
      </ChannelLayout>
    </>
  );
};

export default Videos;
