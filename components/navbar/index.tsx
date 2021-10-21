import React, { useState, FunctionComponent } from "react";
import { HiUserCircle } from "react-icons/hi";
import { Logo } from "../logo";
import { CustomLink } from "../links";
import { SearchBar } from "../searchbar";
import { UserNavbarMenu } from "../usernavbarmenu";
import { Istate } from "./Istate";
import { UserNavbarMenuPopUp } from "../usernavbarpopupmenu";
import { useUser } from "../../context";

export const Navbar: FunctionComponent = (): JSX.Element => {
  const [state, setState] = useState<Istate>({
    isLoggedIn: true,
    ShowUserMenuPopUp: false,
    ShowNotificationsMenuPopUp: false,
  });

  const { picture } = useUser();

  const showUserMenu = (): void => {
    setState({
      ...state,
      ShowUserMenuPopUp: !state.ShowUserMenuPopUp,
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
          {state.isLoggedIn ? (
            <UserNavbarMenu showUserMenuPopUp={showUserMenu} />
          ) : (
            <CustomLink
              href="/test"
              text="Sign In"
              leftIcon={<HiUserCircle />}
            />
          )}
          {state.ShowUserMenuPopUp && <UserNavbarMenuPopUp />}
        </div>
      </nav>
    </header>
  );
};
