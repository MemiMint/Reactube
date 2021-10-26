import React, { FunctionComponent } from "react";
import Link from "next/link";
import { SiReact } from "react-icons/si";
import { IProps } from "./Iprops";

export const Logo: FunctionComponent<IProps> = ({ color }): JSX.Element => {
  let textColor;

  if (color === "white") textColor = "text-white";
  else if (color === "green") textColor = "text-green-300";
  else textColor = "text-gray-500";

  return (
    <Link href="/">
      <a>
        <SiReact className={`${textColor}`} size={50} />
      </a>
    </Link>
  );
};
