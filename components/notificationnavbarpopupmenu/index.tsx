import React, { FunctionComponent } from "react";
import { BsBellFill, BsX } from "react-icons/bs";
import { NotificationPopUpMenuLink } from "../../components/links";
import { INotificationLinkProps } from "../../components/links/IProps";
import { IProps } from "./Iprops"

export const NotificationNavbarMenuPopUp: FunctionComponent<IProps> = ({
  closePopup
}): JSX.Element => {
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
        "https://yt3.ggpht.com/ytc/AKedOLQHRRe2DAH2ZV3_mDJu8jXlnVKzLukoceUF0TZg=s48-c-k-c0x00ffffff-no-rj",
      videoThumbnail:
        "https://yt3.ggpht.com/ytc/AKedOLQHRRe2DAH2ZV3_mDJu8jXlnVKzLukoceUF0TZg=s48-c-k-c0x00ffffff-no-rj",
      text: "AnonC upload: DANGER - 22h39 (Official)",
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
        "https://yt3.ggpht.com/ytc/AKedOLQHRRe2DAH2ZV3_mDJu8jXlnVKzLukoceUF0TZg=s48-c-k-c0x00ffffff-no-rj",
      videoThumbnail:
        "https://yt3.ggpht.com/ytc/AKedOLQHRRe2DAH2ZV3_mDJu8jXlnVKzLukoceUF0TZg=s48-c-k-c0x00ffffff-no-rj",
      text: "AnonC upload: DANGER - 22h39 (Official)",
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
        "https://yt3.ggpht.com/ytc/AKedOLQHRRe2DAH2ZV3_mDJu8jXlnVKzLukoceUF0TZg=s48-c-k-c0x00ffffff-no-rj",
      videoThumbnail:
        "https://yt3.ggpht.com/ytc/AKedOLQHRRe2DAH2ZV3_mDJu8jXlnVKzLukoceUF0TZg=s48-c-k-c0x00ffffff-no-rj",
      text: "AnonC upload: DANGER - 22h39 (Official)",
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
        "https://yt3.ggpht.com/ytc/AKedOLQHRRe2DAH2ZV3_mDJu8jXlnVKzLukoceUF0TZg=s48-c-k-c0x00ffffff-no-rj",
      videoThumbnail:
        "https://yt3.ggpht.com/ytc/AKedOLQHRRe2DAH2ZV3_mDJu8jXlnVKzLukoceUF0TZg=s48-c-k-c0x00ffffff-no-rj",
      text: "AnonC upload: DANGER - 22h39 (Official)",
    },
    {
      href: "/",
      userAvatar:
        "https://yt3.ggpht.com/ytc/AKedOLQHRRe2DAH2ZV3_mDJu8jXlnVKzLukoceUF0TZg=s48-c-k-c0x00ffffff-no-rj",
      videoThumbnail:
        "https://yt3.ggpht.com/ytc/AKedOLQHRRe2DAH2ZV3_mDJu8jXlnVKzLukoceUF0TZg=s48-c-k-c0x00ffffff-no-rj",
      text: "AnonC upload: DANGER - 22h39 (Official)",
    },
  ];

  return (
    <div
      className="absolute w-screen h-screen border border-gray-100 bg-white top-0 right-0 overflow-y-auto 
                  md:w-96 md:h-96 md:shadow-md md:rounded-sm md:top-14 md:right-16 lg:w-96 lg:h-96 lg:shadow-md lg:rounded-sm lg:top-14 lg:right-16"
    >
      <div className="sticky top-0 z-50 flex items-center justify-between p-2 border-b border-gray-300 bg-white">
        <div className="flex items-center space-x-2 text-base text-gray-500 font-medium select-none">
          <BsBellFill />
          <h1>Notifications</h1>
        </div>
        <div className="flex items-center space-x-2 text-gray-500 font-medium">
          <div className="w-6 h-6 rounded-full bg-red-400 text-center flex items-center justify-center text-white font-medium select-none">
            <p>8</p>
          </div>
          <BsX className="md:hidden lg:hidden" size={30} onClick={closePopup} />
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
