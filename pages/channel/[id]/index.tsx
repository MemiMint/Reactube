import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import { useUser } from "../../../context";
import { Navbar } from "../../../components/navbar";
import { ChannelLayout } from "../../../components/channellayout";
import { IProps } from "../../../components/videocard/Iprops";
import { PlayList } from "../../../components/playlist";

const Index: NextPage = (): JSX.Element => {
  const { username, picture } = useUser();

  const fakeData: Array<IProps> = [
    {
      thumbnail:
        "https://i.ytimg.com/vi/kvjQEyKkPaA/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD5RIzYrOdy88jvkLsAT3zCILX8Mg",
      title: "VA-11 HALL-A - Second Round [Full Album]",
      views: "4.5k",
      duration: "1:48:30",
      channel: {
        name: username,
        picture,
      },
    },
    {
      thumbnail:
        "https://i.ytimg.com/an_webp/G3hsELGAj1w/mqdefault_6s.webp?du=3000&sqp=CMDglYwG&rs=AOn4CLDVKl8xJx5Rmj68PqJM1IcpFRB8-A",
      title:
        "Pekora Panik After Messing Up Badly & Asked PekoMama For Help【Hololive | Eng Sub】",
      views: "4.5k",
      duration: "33:08",
      channel: {
        name: username,
        picture,
      },
    },
    {
      thumbnail:
        "https://i.ytimg.com/an_webp/kMDcx8IoNpA/mqdefault_6s_480x270.webp?du=3000&sqp=CMDclYwG&rs=AOn4CLAG6LDIJ7mpXz9Iz7lcQOjyObNuDw",
      title:
        "Cómo Mandar un Mensaje Secreto con Física Cuántica | Encriptación Cuántica",
      views: "4.5k",
      duration: "00:45",
      channel: {
        name: username,
        picture,
      },
    },
    {
      thumbnail:
        "https://i.ytimg.com/vi/vZCCb_vFBKs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLARldGYhOPJ7XWUlUluorc8MK7R5g",
      title: "DOY 500€ AL QUE MÁS ME HAGA REÍR | SI TE RÍES PIERDES 9",
      views: "4.5k",
      duration: "1:20",
      channel: {
        name: username,
        picture,
      },
    },
  ];

  return (
    <>
      <Head>
        <title>{username} - Reactube</title>
      </Head>
      <Navbar />
      <ChannelLayout>
        <PlayList title="Recent videos" videos={fakeData} />
        <PlayList title="Popular videos" videos={fakeData} />
        <PlayList title="Random Selection" videos={fakeData} />
      </ChannelLayout>
    </>
  );
};

export default Index;
