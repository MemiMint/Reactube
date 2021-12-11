import React, { FunctionComponent } from "react";
import { useRouter } from "next/router"
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaDiscord,
  FaReddit
} from "react-icons/fa";
import { UserPicture } from "../userpicture"
import { IProps, INotificationLinkProps, ISocialLinkProps, IAccountSidebarLinkProps } from "./IProps";

export const PrimaryLink: FunctionComponent<IProps> = ({
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

export const SecondaryLink: FunctionComponent<IProps> = ({
  href,
  text,
  leftIcon,
  rightIcon,
}): JSX.Element => {
  return (
    <Link href={href}>
      <a className="transition duration-300 flex items-center justify-center w-40 h-10 bg-blue-500 text-white text-center hover:bg-blue-600">
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
      <a className="group w-full flex items-center px-4 py-2 space-x-4 text-lg text-gray-600 hover:bg-green-300 hover:text-white md:text-base lg:text-base">
        <div className="group-hover:text-white">{leftIcon}</div>
        <p className="font-medium">{text}</p>
      </a>
    </Link>
  );
};

//need fixing
//testing user avatar: https://yt3.ggpht.com/QprPeK62mqF8JF3SesJ7cBq40UuI5L6bEbkIQwcZwrm2kg_QA_6ifiSInuykgmkCDplz8AZE43w=s48-c-k-c0x00ffffff-no-nd-rj
//testing video thumbnail: https://i.ytimg.com/vi/wL2ylkbNVqU/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLA2OQpM_abv3TMlY7R8M8lGHwrqow

export const NotificationPopUpMenuLink: FunctionComponent<INotificationLinkProps> =
  ({ userAvatar, href, text, videoThumbnail }): JSX.Element => {
    return (
      <Link href={href}>
        <a className="flex items-center space-x-2 w-full p-2 text-xs font-medium text-gray-500 select-none hover:bg-green-300 hover:text-white">
          <UserPicture
            picture={userAvatar}
            width={60}
            height={60}
          />
          <div className="w-full px-1">
            <p>{text}</p>
          </div>
          <Image
            src={videoThumbnail}
            loader={({ src }) => src}
            width={100}
            height={80}
          />
        </a>
      </Link>
    );
  };

export const SocialLink: FunctionComponent<ISocialLinkProps> = ({
  href,
  social
}): JSX.Element => {
  let icon: React.ReactNode;

  switch (social) {
    case "Facebook":
      icon = <FaFacebook size={30} color="#4267b2" />
      break;
    case "Instagram":
      icon = <FaInstagram size={30} color="#5b51d8" />
      break;
    case "Twitter":
      icon = <FaTwitter size={30} color="#1da1f2" />
      break;
    case "Discord":
      icon = <FaDiscord size={30} color="#738adb" />
      break;
    case "Reddit":
      icon = <FaReddit size={30} color="#f77737" />
      break;
  }

  return (
    <Link href={href} >
      <a className="flex flex-col items-center justify-center space-y-1 text-sm font-medium text-gray-600">
        {icon}
        <p>{social}</p>
      </a>
    </Link>
  )
}

export const TabLink: FunctionComponent<IProps> = ({
  href,
  text
}): JSX.Element => {
  const router = useRouter();

  return (
    <Link href={href} >
      <a
        className={`${router.asPath === href ? "border-b-2 border-gray-500" : ""
          } text-gray-500 font-medium text-sm px-2 py-2 md:text-lg lg:text-lg`}
      >
        {text}
      </a>
    </Link>
  )
}

export const AccountSideBarLink: FunctionComponent<IAccountSidebarLinkProps> = ({
  href,
  leftIcon,
  text
}): JSX.Element => {
  
  const router = useRouter();

  return (
    <Link href={href} >
      <a 
        className={`w-full ${router.asPath === href ? "bg-green-300 text-white border-l-4 border-green-500" : "text-gray-500 hover:bg-gray-200"} flex items-center p-4 text-base font-medium space-x-2`} 
      >
        { leftIcon }
        <p>{ text }</p>
      </a>
    </Link>
  )
}