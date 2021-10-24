import React, { FunctionComponent } from "react";
import { BsBellFill } from "react-icons/bs";
import { NotificationPopUpMenuLink, } from "../../components/links"
import { INotificationLinkProps } from "../../components/links/IProps"

export const NotificationNavbarMenuPopUp: FunctionComponent = (): JSX.Element => {

  const fakeData: Array<INotificationLinkProps> = new Array(4)

  return (
    <div className="absolute w-96 h-96 border border-gray-100 bg-white right-16 rounded-sm shadow-md">
      <div className="flex items-center justify-between p-2 border-b border-gray-300">
        <div className="flex items-center space-x-2 text-base text-gray-500 font-medium">
          <BsBellFill />
          <h1>Notifications</h1>
        </div>
        <div className="w-6 h-6 rounded-full bg-red-400 text-center flex items-center justify-center text-white font-medium">
          <p>8</p>
        </div>
      </div>
      <div className="w-full h-full flex flex-col">

      </div>
    </div >
  );
};

