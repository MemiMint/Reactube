import React, { useState, FunctionComponent } from "react";
import { HiUserCircle } from "react-icons/hi";
import { Logo } from "../logo";
import { PrimaryLink } from "../links";
import { SearchBar } from "../searchbar";
import { UserNavbarMenu } from "../usernavbarmenu";
import { Istate } from "./Istate";
import { UserNavbarMenuPopUp } from "../usernavbarpopupmenu";
import { NotificationNavbarMenuPopUp } from "../notificationnavbarpopupmenu";
import { useUser } from "../../context";

export const Navbar: FunctionComponent = (): JSX.Element => {
  const [state, setState] = useState<Istate>({
    isLoggedIn: true,
    ShowUserMenuPopUp: false,
    ShowNotificationsMenuPopUp: false,
  });

  const { id } = useUser();

  const showUserMenu = (): void => {
    setState({
      ...state,
      ShowUserMenuPopUp: !state.ShowUserMenuPopUp,
      ShowNotificationsMenuPopUp: false,
    });
  };

  const showNotificationsMenu = (): void => {
    setState({
      ...state,
      ShowNotificationsMenuPopUp: !state.ShowNotificationsMenuPopUp,
      ShowUserMenuPopUp: false,
    });
  };

  const closePopUp = (): void => {
    setState({
      ...state,
      ShowNotificationsMenuPopUp: false,
      ShowUserMenuPopUp: false,
    });
  };

  return (
    <header className="sticky top-0 z-50">
      <nav
        className="flex items-center justify-between space-x-2 w-full h-16 bg-green-300 p-2 lg:justify-between"
        role="navigation"
      >
        <Logo color="white" size={28} />
        <SearchBar />
        <div className="">
          {id ? (
            <UserNavbarMenu
              showUserMenuPopUp={showUserMenu}
              showNotificationsPopUp={showNotificationsMenu}
            />
          ) : (
            <PrimaryLink
              href="/login"
              text="Sign In"
              leftIcon={<HiUserCircle />}
            />
          )}
          {state.ShowUserMenuPopUp && (
            <UserNavbarMenuPopUp closePopUp={closePopUp} />
          )}
          {state.ShowNotificationsMenuPopUp && (
            <NotificationNavbarMenuPopUp closePopup={closePopUp} />
          )}
        </div>
      </nav>
    </header>
  );
};
