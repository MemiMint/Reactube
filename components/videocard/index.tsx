import React, { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link"
import { FiEye, FiClock, FiPlayCircle } from "react-icons/fi";
import { stringShortener } from "../../utils/string-shortener"
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
    <Link href="/watch/HWKmN89mNL" >
      <a>
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
              <p>{stringShortener(title, 20, 19)}</p>
            </Label>
            <Label>
              <FiClock size={15} />
              <p>{duration}</p>
            </Label>
          </div>
        </ImageContainer>
      </a>
    </Link>
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
    <Link href="/watch/ifhwefe8fe9w" >
      <a>
        <div className="group transition duration-300 w-80 h-80 m-4 p-2 rounded-md hover:bg-green-300">
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
          <div className="mt-2 flex space-x-2">
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
      </a>
    </Link>
  );
};

export const HorizontalVideoCard: FunctionComponent<IProps> = ({
  thumbnail,
  duration,
  title,
  views,
  date,
  description,
  channel,
}): JSX.Element => {
  return (
    <Link href="/watch/732KOH8">
      <a className="transition duration-300 w-2/4 flex flex-1 space-x-4 p-2 my-4 rounded-md hover:bg-green-300">
        <div className="relative w-full h-48">
          <Image
            loader={({ src }) => src}
            src={thumbnail}
            layout="fill"
            objectFit="cover"
          />
          <div className="flex flex-col justify-end absolute top-0 right-0 w-full h-full " >
            <div className="w-full flex justify-end p-2">
              <Label>
                <p>{duration}</p>
              </Label>
            </div>
          </div>
        </div>
        <div className="w-full" >
          <h1 className="text-black text-lg">{title}</h1>
          <p className="text-xs text-gray-500">{views} views • {date}</p>
          <div className="mt-4 flex items-center space-x-2" >
            <UserPicture
              picture={channel.picture}
              width={30}
              height={30}
            />
            <p style={{ fontSize: 13 }} className="text-gray-500 font-medium" >{channel.name}</p>
          </div>
          <p style={{ fontSize: 12 }} className="mt-4 text-gray-500 font-medium">{stringShortener((description as string), 30, (description as string).length - 80)}</p>
        </div>
      </a>
    </Link>
  )
}