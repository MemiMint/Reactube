import React, { FunctionComponent } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { useUser } from "../../context";
import { SecondaryLink } from "../links";

export const ChannelLayout: FunctionComponent = ({ children }): JSX.Element => {
  const { id, picture, username } = useUser();

  const Wallpaper = (): JSX.Element => {
    return (
      <div
        className="relative w-full h-36 bg-red-400
                     md:h-64 lg:h-64"
      >
        <Image
          loader={({ src }) => src}
          src="https://fondosmil.com/fondo/17010.jpg"
          layout="fill"
        />
      </div>
    );
  };

  const ChannelHeader = (): JSX.Element => {
    const primaryLinks: Array<string> = ["Customize Channel", "Manage Videos"];
    const tabs: Array<{
      text: string;
      href: string;
    }> = [
      {
        text: "Main Page",
        href: "/channel/2021",
      },
      {
        text: "Videos",
        href: "/channel/2021/videos",
      },
      {
        text: "Playlist",
        href: "/channel/2021/playlists",
      },
      {
        text: "About",
        href: "/channel/2021/about",
      },
    ];

    const ChannelInfo = (): JSX.Element => {
      return (
        <div
          className="w-full flex flex-col items-center justify-center mt-2 space-y-4
                        md:flex-row md:space-x-4 md:justify-start lg:flex-row lg:space-x-4 lg:justify-start"
        >
          <div
            className="relative w-16 h-16 bg-red-300 ring-4 ring-green-300 rounded-full
                         md:w-20 md:h-20 lg:w-20 lg:h-20"
          >
            <Image
              loader={({ src }) => src}
              src={picture}
              layout="fill"
              className="rounded-full"
            />
          </div>
          <div className="space-y-1 text-center md:text-left lg:text-left">
            <h2 className="text-base font-semibold text-gray-700 md:text-lg lg:text-lg">
              {username}
            </h2>
            <p className="text-sm text-gray-500 font-medium">2 subscribers</p>
          </div>
        </div>
      );
    };

    const PrimaryLinks = (): JSX.Element => {
      return (
        <div className="hidden space-x-2 md:flex lg:flex">
          {primaryLinks.map((text, index): JSX.Element => {
            return <SecondaryLink key={index} href="/" text={text} />;
          })}
        </div>
      );
    };

    const Tabs = (): JSX.Element => {
      const router = useRouter();

      return (
        <div className="w-full mt-4 flex justify-between md:justify-start md:space-x-16 lg:space-x-16 lg:justify-start">
          {tabs.map((tab, index): JSX.Element => {
            return (
              <a
                key={index}
                href={tab.href}
                className={`${
                  router.asPath === tab.href ? "border-b-2 border-gray-500" : ""
                } text-gray-500 font-medium text-sm px-2 py-2 md:text-lg lg:text-lg`}
              >
                {tab.text}
              </a>
            );
          })}
        </div>
      );
    };

    return (
      <div className="w-full h-auto bg-gray-100 px-4 md:px-10 lg:px-40">
        <div className="flex items-center justify-between py-2">
          <ChannelInfo />
          <PrimaryLinks />
        </div>
        <Tabs />
      </div>
    );
  };

  if (!picture) return <h1>loading...</h1>;

  return (
    <div className="w-full h-auto">
      <Wallpaper />
      <ChannelHeader />
      <div className="md:px-10 lg:px-40">{children}</div>
    </div>
  );
};
