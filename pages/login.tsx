import React, { useState, useEffect } from "react";
import { NextPage } from "next";
import { Logo } from "../components/logo";
import { FiUser, FiLock } from "react-icons/fi";
import { CustomInput } from "../components/custominput";

interface Istate {
  username: string;
  password: string;
}

const Login: NextPage = (): JSX.Element => {
  const [state, setState] = useState<Istate>({
    username: "",
    password: "",
  });

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  const onSubmit = (): void => {
    alert(state);
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-200">
      <div className="flex flex-col space-y-8 items-center w-full h-full bg-white p-8 md:1/4">
        <Logo color="green" />
        <div className="flex flex-col items-center space-y-2">
          <h2 className="text-xl font-semibold text-gray-500 antialiased">
            Login to your account
          </h2>
          <p className="text-gray-400 text-sm font-semibold">
            Dont you have an account?{" "}
            <span className="text-green-300">Sign Up</span>
          </p>
        </div>
        <CustomInput
          label="username"
          icon={<FiUser size={20} />}
          name="username"
          value={state.username}
          placeholder="username"
          type="text"
          maxLength={32}
          onChange={onChange}
        />
        <CustomInput
          label="password"
          link={{
            href: "/",
            text: "forgot password?",
          }}
          icon={<FiLock size={20} />}
          name="password"
          value={state.password}
          placeholder="password"
          type="password"
          maxLength={32}
          onChange={onChange}
        />
        <button className="w-full h-10 bg-green-300 text-base text-white font-medium">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
