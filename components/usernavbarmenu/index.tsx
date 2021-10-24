import React, { FunctionComponent } from "react";
import Image from "next/image";
import { BsBellFill } from "react-icons/bs";
import { RiVideoAddFill } from "react-icons/ri";
import { useUser } from "../../context";
import { IProps } from "./IProps";

export const UserNavbarMenu: FunctionComponent<IProps> = ({
  showUserMenuPopUp,
  showNotificationsPopUp,
}): JSX.Element => {
  const { picture } = useUser();

  return (
    <div className="flex items-center p-2 space-x-4">
      <RiVideoAddFill className="text-2xl text-white cursor-pointer" />
      <BsBellFill
        className="text-2xl text-white cursor-pointer"
        onClick={showNotificationsPopUp}
      />
      <div
        className="transition duration-300 relative w-10 h-10 bg-white border-2 rounded-full cursor-pointer hover:border-green-400 select-none"
        onClick={showUserMenuPopUp}
      >
        <Image
          src={picture}
          loader={({ src }) => src}
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
    </div>
  );
};
