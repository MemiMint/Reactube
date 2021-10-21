import React, { FunctionComponent } from "react";
import Link from "next/link";
import { SiReact } from "react-icons/si";

export const Logo: FunctionComponent = (): JSX.Element => {
  return (
    <Link href="/">
      <a>
        <SiReact className="text-white text-4xl" />
      </a>
    </Link>
  );
};
