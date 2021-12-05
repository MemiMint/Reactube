import React, { FunctionComponent } from "react";
import { BsBellFill } from "react-icons/bs";
import { RiVideoAddFill } from "react-icons/ri";
import { useUser } from "../../context";
import { UserPicture } from "../userpicture"
import { IProps } from "./IProps";

export const UserNavbarMenu: FunctionComponent<IProps> = ({
  showUserMenuPopUp,
  showNotificationsPopUp,
}): JSX.Element => {
  const { picture } = useUser();

  return (
    <div className="flex items-center p-2 space-x-4 lg:space-x-4">
      <RiVideoAddFill
        className="text-white cursor-pointer"
        size={24}
      />
      <BsBellFill
        className="text-white cursor-pointer"
        size={24}
        onClick={showNotificationsPopUp}
      />
      <div className="flex items-center justify-center" >
        <UserPicture
          picture={picture}
          width={32}
          height={32}
          onClick={showUserMenuPopUp}
          hover
        />
      </div>
    </div>
  );
};
