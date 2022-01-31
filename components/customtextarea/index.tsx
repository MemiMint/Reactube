import React, { FunctionComponent } from "react";
import { IProps } from "./IProps";

export const CustomTextArea: FunctionComponent<IProps> = ({
  label,
  placeholder,
  name,
  value,
  onChange,
}): JSX.Element => {
  const Label = (): JSX.Element => {
    return (
      <label className="text-xs text-gray-400 font-semibold mb-2">
        {label}
      </label>
    );
  };

  return (
    <>
      <Label />
      <textarea
        placeholder={placeholder}
        name={name}
        value={value}
        className="w-full h-40 border-2 border-green-300 p-2 text-sm text-gray-400 font-semibold resize-none outline-none"
        onChange={onChange}
      />
    </>
  );
};
