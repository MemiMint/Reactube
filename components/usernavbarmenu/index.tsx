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
    <div className="flex items-center p-2 space-x-2 lg:space-x-4">
      <RiVideoAddFill
        className="text-white cursor-pointer"
        size={24}
      />
      <BsBellFill
        className="text-white cursor-pointer"
        size={24}
        onClick={showNotificationsPopUp}
      />
      <div
        className="transition duration-300 relative w-8 h-8 bg-white border-2 rounded-full cursor-pointer hover:border-green-400 select-none lg:w-10 lg:h-10"
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
