import React, { FunctionComponent } from "react";
import Image from "next/image";
import { HiUserCircle, HiVideoCamera, HiUpload } from "react-icons/hi";
import { FaTv } from "react-icons/fa";
import { UserNavBarMenuPopUpLink } from "../links";
import { useUser } from "../../context";

export const UserNavbarMenuPopUp: FunctionComponent = (): JSX.Element => {
  const links: Array<{
    href: string;
    icon: React.ReactNode;
    text: string;
  }> = [
    {
      href: "/",
      icon: <FaTv />,
      text: "Your channel",
    },
    {
      href: "/",
      icon: <HiUpload />,
      text: "Upload a video",
    },
    {
      href: "/",
      icon: <HiVideoCamera />,
      text: "Your videos",
    },
    {
      href: "/",
      icon: <HiUserCircle />,
      text: "Account",
    },
  ];

  const { picture, username, email } = useUser();

  return (
    <div className="absolute w-64 space-y-2 border border-gray-100 bg-white right-2 rounded-sm">
      <div className="w-full px-4 py-2 flex space-x-4 border-b border-gray-100">
        <div className="relative w-14 h-14 bg-white rounded-full">
          <Image
            src={picture}
            loader={({ src }) => src}
            layout="fill"
            className="rounded-full"
          />
        </div>
        <div>
          <p className="text-base font-semibold text-gray-500">{username}</p>
          <p className="text-xs text-gray-400">{email}</p>
        </div>
      </div>
      {links.map((link) => {
        return (
          <UserNavBarMenuPopUpLink
            href={link.href}
            leftIcon={link.icon}
            text={link.text}
          />
        );
      })}
    </div>
  );
};
