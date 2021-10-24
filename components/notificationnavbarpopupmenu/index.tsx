import React, { FunctionComponent } from "react";
import { BsBellFill } from "react-icons/bs";
import { NotificationPopUpMenuLink } from "../../components/links";
import { INotificationLinkProps } from "../../components/links/IProps";

export const NotificationNavbarMenuPopUp: FunctionComponent =
  (): JSX.Element => {
    const fakeData: Array<INotificationLinkProps> = [
      {
        href: "/",
        userAvatar:
          "https://yt3.ggpht.com/ytc/AKedOLQdSaj30OhNb9wt1NJLN3uuFfLN18lWHDN0rJRgDA=s48-c-k-c0x00ffffff-no-rj",
        videoThumbnail:
          "https://i.ytimg.com/vi/0BNsnWppO0k/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCl5FpBxySAc2NPN_MwZNCpJ7Iuow",
        text: "AnonA uploaded: TempleOS Hymn Risen (Remix) - Dave Eddy",
      },
      {
        href: "/",
        userAvatar:
          "https://yt3.ggpht.com/ytc/AKedOLRx5gH9CeRaNsjOjGnp2dAz8gi1BRiLncWPOU6nLw=s48-c-k-c0x00ffffff-no-rj-mo",
        videoThumbnail:
          "https://i.ytimg.com/vi/W2TE0DjdNqI/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAtAV8WPwaYyhKQxk9e-F7bx-IjPw",
        text: "AnonB uploaded: Bird Analogy - Terry A. Davis",
      },
      {
        href: "/",
        userAvatar:
          "https://yt3.ggpht.com/ytc/AKedOLQHRRe2DAH2ZV3_mDJu8jXlnVKzLukoceUF0TZg=s48-c-k-c0x00ffffff-no-rj",
        videoThumbnail:
          "https://yt3.ggpht.com/ytc/AKedOLQHRRe2DAH2ZV3_mDJu8jXlnVKzLukoceUF0TZg=s48-c-k-c0x00ffffff-no-rj",
        text: "AnonC upload: DANGER - 22h39 (Official)",
      },
      {
        href: "/",
        userAvatar:
          "https://yt3.ggpht.com/ytc/AKedOLQy56BSEdx__P-0Cm-2QH_r2AI3PPSE26FxpIC4vA=s48-c-k-c0x00ffffff-no-rj",
        videoThumbnail:
          "https://i.ytimg.com/vi/JUxITamPWrY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAoM5OqPuciUYdL_LQRaa8gyhucYQ",
        text: "AnonD upload: BAD BUNNY x DADDY YANKEE - LA SANTA | YHLQMDLG [Visualizer] CANCION DEL 2020 POPULARIZADA EN TODA LATAM",
      },
    ];

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
          {fakeData.map((notification, i): JSX.Element => {
            return (
              <NotificationPopUpMenuLink
                key={i}
                href={notification.href}
                userAvatar={notification.userAvatar}
                text={notification.text}
                videoThumbnail={notification.videoThumbnail}
              />
            );
          })}
        </div>
      </div>
    );
  };
