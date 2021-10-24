import React, { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";
import { IProps, INotificationLinkProps } from "./IProps";


export const CustomLink: FunctionComponent<IProps> = ({
  href,
  text,
  leftIcon,
  rightIcon,
}): JSX.Element => {
  return (
    <Link href={href}>
      <a className="flex transition duration-300 cursor-pointer items-center text-white text-lg p-2 font-medium border-2 border-white space-x-2 hover:bg-white hover:text-green-300">
        <div>{leftIcon}</div>
        <p>{text}</p>
        <div>{rightIcon}</div>
      </a>
    </Link>
  );
};

export const UserNavBarMenuPopUpLink: FunctionComponent<IProps> = ({
  href,
  text,
  leftIcon,
}): JSX.Element => {
  return (
    <Link href={href}>
      <a className="group w-full flex items-center px-4 py-2 space-x-4 text-gray-600 hover:bg-green-300 hover:text-white">
        <div className="group-hover:text-white">{leftIcon}</div>
        <p className="font-medium">{text}</p>
      </a>
    </Link>
  );
};

//need fixing
//testing user avatar: https://yt3.ggpht.com/QprPeK62mqF8JF3SesJ7cBq40UuI5L6bEbkIQwcZwrm2kg_QA_6ifiSInuykgmkCDplz8AZE43w=s48-c-k-c0x00ffffff-no-nd-rj
//testing video thumbnail: https://i.ytimg.com/vi/wL2ylkbNVqU/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLA2OQpM_abv3TMlY7R8M8lGHwrqow

export const NotificationPopUpMenuLink: FunctionComponent<INotificationLinkProps> = ({
  userAvatar,
  href,
  text,
  videoThumbnail
}): JSX.Element => {
  return (
    <Link href={href}>
      <a className="flex items-center space-x-4 w-full p-2">
        <Image
          src={userAvatar}
          loader={({ src }) => src}
          width={70}
          height={70}
          className="rounded-full"
        />
        <div className="w-full text-sm font-medium text-gray-500 px-1">
          <p>{text}</p>
        </div>
        <Image
          src={videoThumbnail}
          loader={({ src }) => src}
          width={100}
          height={90}
        />
      </a>
    </Link>
  )
}