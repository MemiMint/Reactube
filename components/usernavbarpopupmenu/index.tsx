import React, { FunctionComponent } from "react";
import { HiUserCircle, HiVideoCamera, HiUpload } from "react-icons/hi";
import { FaTv } from "react-icons/fa";
import { BsX } from "react-icons/bs";
import { UserNavBarMenuPopUpLink } from "../links";
import { useUser } from "../../context";
import { UserPicture } from "../userpicture"
import { IProps } from "./Iprops";

export const UserNavbarMenuPopUp: FunctionComponent<IProps> = ({
  closePopUp
}): JSX.Element => {
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
    <div className="absolute w-screen h-screen top-0 right-0 border border-gray-100 bg-white
                   md:w-72 md:h-auto md:space-y-2 md:top-14 md:right-2 md:rounded-sm md:shadow-md lg:w-72 lg:h-auto lg:space-y-2 lg:top-14 lg:right-2 lg:rounded-sm lg:shadow-md"
    >
      <div className="w-full flex justify-end text-gray-400 md:hidden lg:hidden">
        <BsX size={30} onClick={closePopUp} />
      </div>
      <div className="w-full flex flex-col items-center p-2 space-y-2 border-b border-gray-100
                     md:flex md:flex-row md:items-center md:space-x-4 md:px-4 md:py-2 lg:flex lg:flex-row lg:items-center lg:space-x-4 lg:px-4 lg:py-2"
      >
        <UserPicture 
          picture={picture} 
          width={60}
          height={60}
          border 
        />
        <div className="text-center md:text-justify" >
          <p className="text-lg font-semibold text-gray-500 md:text-base lg:text-base">{username}</p>
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
