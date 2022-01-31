import React, { FunctionComponent } from "react";
import Image from "next/image";
import { FiX } from "react-icons/fi";
import { CustomInput } from "../custominput";
import { CustomTextArea } from "../customtextarea";
import { ShortButton } from "../buttons";

const Container: FunctionComponent = ({ children }): JSX.Element => {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
      {children}
    </div>
  );
};

export const VideoDetailsModal: FunctionComponent = (): JSX.Element => {
  const DetailsForm = (): JSX.Element => {
    return (
      <div className="w-1/3 h-auto bg-white shadow-md rounded-md text-black opacity-100">
        <div className="w-full flex items-center justify-between p-4 border-b border-gray-300">
          <p className="text-black text-lg font-medium">Pls does this work?</p>
          <FiX size={20} />
        </div>
        <div className="mt-2 p-4 flex flex-1">
          <div className="w-full">
            <h1 className="text-lg font-medium">Video Details</h1>
            <div className="mt-4">
              <CustomInput
                label="Title (required)"
                placeholder="title"
                name=""
                type="text"
                value=""
                onChange={(e) => {
                  e.target.value;
                }}
              />
            </div>
            <div className="w-full mt-2">
              <CustomTextArea
                label="Description (optional)"
                name="description"
                value=""
              />
            </div>
            <div className="mt-2">
              <h1 className="text-base text-black font-semibold mb-2">
                Thumbnail
              </h1>
              <Image
                loader={({ src }) => src}
                src="https://i.blogs.es/0ca5da/ambulo_polar_wide/1366_2000.jpg"
                width={200}
                height={100}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end border-t border-gray-300 w-full p-4">
          <ShortButton text="Save Changes" color="green" />
        </div>
      </div>
    );
  };

  return (
    <Container>
      <DetailsForm />
    </Container>
  );
};
