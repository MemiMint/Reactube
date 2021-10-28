import React, { FunctionComponent } from "react";
import Link from "next/link";
import { IProps } from "./Iprops";

export const CustomInput: FunctionComponent<IProps> = ({
  label,
  link,
  icon,
  name,
  value,
  type,
  placeholder,
  maxLength,
  onChange,
}): JSX.Element => {
  const Label = (): JSX.Element => {
    {
      /* label containers */
    }
    return (
      <div className="flex items-center justify-between mb-1">
        {" "}
        <label className="text-xs text-gray-400 font-semibold">{label}</label>
        {link && (
          <Link href={link.href}>
            <a className="text-xs text-green-300 font-semibold">{link.text}</a>
          </Link>
        )}
      </div>
    );
  };
  //mt-4
  return (
    <div className="w-full">
      <Label />
      <div className="flex w-full h-10 border-2 border-green-300">
        <div className="w-10 flex items-center justify-center bg-green-300 text-white">
          {icon}
        </div>
        <input
          className="w-full px-2 text-sm text-gray-400 font-semibold outline-none"
          name={name}
          value={value}
          placeholder={placeholder}
          type={type}
          maxLength={maxLength}
          onChange={onChange}
        />
      </div>
    </div>
  );
};
