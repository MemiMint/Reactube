import React, { FunctionComponent } from "react";
import Link from "next/link";
import { IProps } from "./IProps";

export const CustomLink: FunctionComponent<IProps> = ({
  href,
  text,
  leftIcon,
  rightIcon,
}): JSX.Element => {
  return (
    <Link href={href}>
      <a className="flex transition duration-300 cursor-pointer items-center text-white text-lg p-2 font-medium border-2 border-white space-x-2 hover:bg-white hover:text-green-300">
        <div>{leftIcon}</div>
        <p>{text}</p>
        <div>{rightIcon}</div>
      </a>
    </Link>
  );
};

export const UserNavBarMenuPopUpLink: FunctionComponent<IProps> = ({
  href,
  text,
  leftIcon,
}): JSX.Element => {
  return (
    <Link href={href}>
      <a className="group w-full flex items-center px-4 py-2 space-x-4 text-gray-600 hover:bg-green-300 hover:text-white">
        <div className="group-hover:text-white">{leftIcon}</div>
        <p className="font-medium">{text}</p>
      </a>
    </Link>
  );
};
