import React from "react";
import { NextPage } from "next";
import { Navbar } from "../../../components/navbar";
import { ChannelLayout } from "../../../components/channellayout";

const About: NextPage = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <ChannelLayout>
        <div>
          <h1>Description</h1>
          <p>this is my null description</p>
        </div>
      </ChannelLayout>
    </>
  );
};

export default About;
