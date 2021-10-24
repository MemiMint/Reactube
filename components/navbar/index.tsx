import React, { useState, FunctionComponent } from "react";
import { HiUserCircle } from "react-icons/hi";
import { Logo } from "../logo";
import { CustomLink } from "../links";
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

  return (
    <header>
      <nav
        className="relative sticky top-0 z-50 flex items-center justify-between w-full h-16 bg-green-300 p-4"
        role="navigation"
      >
        <Logo />
        <SearchBar />
        <div className="relative">
          {id ? (
            <UserNavbarMenu
              showUserMenuPopUp={showUserMenu}
              showNotificationsPopUp={showNotificationsMenu}
            />
          ) : (
            <CustomLink
              href="/test"
              text="Sign In"
              leftIcon={<HiUserCircle />}
            />
          )}
          {state.ShowUserMenuPopUp && <UserNavbarMenuPopUp />}
          {state.ShowNotificationsMenuPopUp && <NotificationNavbarMenuPopUp />}
        </div>
      </nav>
    </header>
  );
};
