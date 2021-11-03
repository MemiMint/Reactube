import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import { useUser } from "../../context";
import { Navbar } from "../../components/navbar";
import { ChannelLayout } from "../../components/channellayout";
import { VideoList } from "../../components/videolist";

const Index: NextPage = (): JSX.Element => {
  const { username } = useUser();

  const arr: Array<any> = [0, 0, 0, 0, 0, 0];

  return (
    <>
      <Head>
        <title>{username} - Reactube</title>
      </Head>
      <Navbar />
      <ChannelLayout>
        <VideoList title="Recent Videos" videos={arr} />
      </ChannelLayout>
    </>
  );
};

export default Index;
