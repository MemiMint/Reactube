import React, { FunctionComponent, useState } from "react";
import Link from "next/link";
import { FiEye, FiEyeOff } from "react-icons/fi"
import { IProps } from "./Iprops";
import { IState } from "./IState"

export const CustomInput: FunctionComponent<IProps> = ({
  label,
  link,
  icon,
  name,
  value,
  type,
  placeholder,
  errorLabel,
  maxLength,
  displayEye,
  onChange,
  onFocus
}): JSX.Element => {

  const [state, setState] = useState<IState>({
    _type: type
  });

  const Label = (): JSX.Element => {
    return (
      <div className="flex items-center justify-between mb-1">
        {" "}
        <label htmlFor="username" className={`text-xs ${errorLabel ? "text-red-500" : "text-gray-400"} font-semibold`}>{label}</label>
        {
          errorLabel && <label htmlFor="error" className="text-xs text-red-500 font-semibold">{errorLabel}</label>
        }
        {(link && !errorLabel) && (
          <Link href={link.href}>
            <a className="text-xs text-green-300 font-semibold">{link.text}</a>
          </Link>
        )}
      </div>
    );
  };

  const Eye = (): JSX.Element => {
    const { _type } = state

    return (
      <div className={`w-10 flex items-center justify-center ${errorLabel ? "bg-red-500" : "bg-green-300"} text-white select-none cursor-pointer`}>
        {
          _type === "text" ? <FiEye size={20} onClick={() => setState({ _type: "password" })} /> : <FiEyeOff size={20} onClick={() => setState({ _type: "text" })} />
        }
      </div>
    )
  }

  return (
    <div className="w-full">
      <Label />
      <div className={`flex w-full h-10 border-2 ${errorLabel ? "border-red-500" : "border-green-300"}`}>
        <div className={`w-10 flex items-center justify-center ${errorLabel ? "bg-red-500" : "bg-green-300"} text-white`}>
          {icon}
        </div>
        <input
          className="w-full px-2 text-sm text-gray-400 font-semibold outline-none"
          name={name}
          value={value}
          placeholder={placeholder}
          type={state._type}
          maxLength={maxLength}
          onChange={onChange}
          onFocus={onFocus}
        />
        {
          displayEye && <Eye />
        }
      </div>
    </div>
  );
};