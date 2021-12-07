import React, { FunctionComponent } from "react";
import Image from "next/image";
import { IProps } from "./IProps"

const UserPicture: FunctionComponent<IProps> = ({
    picture,
    width,
    height,
    border,
    hover,
    onClick
}): JSX.Element => {
    return (
        <Image
            src={picture}
            width={width}
            height={height}
            loader={({ src }) => src}
            objectFit="cover"
            className={`flex items-center justify-center transition w-auto hover-auto duration-300 bg-white border-2 ${border && 'border-green-400'} rounded-full select-none ${hover && 'cursor-pointer hover:border-green-400'}`}
            onClick={onClick}
        />
    )
}

UserPicture.defaultProps = {
    hover: false
};

export { UserPicture };