import React, { FunctionComponent } from "react";
import Image from "next/image";
import { FiEye, FiClock, FiPlayCircle } from "react-icons/fi";
import { UserPicture } from "../userpicture"
import { IProps } from "./Iprops";

const Label: FunctionComponent = ({ children }): JSX.Element => {
  return (
    <div className="p-1 flex space-x-2 items-center text-xs text-white bg-black rounded-md">
      {children}
    </div>
  );
};

export const ThumbnailVideoCard: FunctionComponent<IProps> = ({
  thumbnail,
  title,
  duration,
  views,
  channel,
}): JSX.Element => {
  const shortTitle = (): string => {
    if (title.length > 20) return title.substr(0, 19) + "...";
    return title;
  };

  const ImageContainer: FunctionComponent = ({ children }): JSX.Element => {
    return (
      <div className="relative w-64 h-60 cursor-pointer">
        <Image
          loader={({ src }) => src}
          src={thumbnail}
          layout="fill"
          className="rounded-md"
        />
        <div className="group absolute w-full h-full top-0 p-2 flex flex-col justify-between">
          {children}
        </div>
      </div>
    );
  };

  return (
    <ImageContainer>
      <div
        className="transition duration-300 w-full flex items-center justify-between visible group-hover:flex
                  md:group-hover:flex md:hidden lg:hidden lg:group-hover:flex"
      >
        <Label>
          <UserPicture 
            picture={channel.picture}
            width={25}
            height={25}
          />
          <p>{channel.name}</p>
        </Label>
        <Label>
          <FiEye size={15} />
          <p>{views}</p>
        </Label>
      </div>
      <div
        className="w-full flex justify-center text-white visible
           md:hidden md:group-hover:flex lg:hidden lg:group-hover:flex"
      >
        <FiPlayCircle size={40} />
      </div>
      <div
        className="transition duration-300 w-full flex items-center justify-between visible group-hover:flex
                       md:group-hover:flex md:hidden lg:hidden lg:group-hover:flex"
      >
        <Label>
          <p>{shortTitle()}</p>
        </Label>
        <Label>
          <FiClock size={15} />
          <p>{duration}</p>
        </Label>
      </div>
    </ImageContainer>
  );
};

export const VideoCard: FunctionComponent<IProps> = ({
  thumbnail,
  title,
  duration,
  views,
  channel,
  date,
}): JSX.Element => {
  return (
    <div className="group transition bg-red-400 duration-300 w-80 h-80 h-auto p-2 rounded-md cursor-pointer hover:bg-green-300">
      <div className="relative">
        <Image
          loader={({ src }) => src}
          src={thumbnail}
          width={300}
          height={200}
        />
        <div className="absolute w-full h-full top-0 flex flex-col justify-end p-4">
          <div className="w-full flex justify-end">
            <Label>
              <FiClock size={15} />
              <p>{duration}</p>
            </Label>
          </div>
        </div>
      </div>
      <div className="flex space-x-2">
        <div>
          <UserPicture
            picture={channel.picture}
            width={40}
            height={40}
          />
        </div>
        <div className="flex-1">
          <p className="text-sm text-gray-700 font-semibold">{title}</p>
          <div className="text-sm text-gray-500 mt-1">
            <p>{channel.name}</p>
            <p>
              {views} views • {date}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
