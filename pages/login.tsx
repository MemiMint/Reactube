import React, { useState, useEffect } from "react";
import { NextPage } from "next";
import Head from "next/head"
import { Logo } from "../components/logo";
import { FiUser, FiLock } from "react-icons/fi";
import { CustomInput } from "../components/custominput";
import { PrimaryButton } from "../components/buttons"

interface Istate {
  username: string;
  password: string;
  fakeloading: boolean;
}

const Login: NextPage = (): JSX.Element => {
  const [state, setState] = useState<Istate>({
    username: "",
    password: "",
    fakeloading: false
  });

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  const onSubmit = (): void => {
    setState({
      ...state,
      fakeloading: true
    });

    setTimeout(() => {
      setState({
        ...state,
        fakeloading: false
      });
    }, 5000)
  };

  return (
    <>
      <Head>
        <title>
          Sign in
        </title>
      </Head>
      <div className="w-screen h-screen flex items-center justify-center md:bg-gray-200 lg:bg-gray-200">
        <div className={`flex flex-col items-center justify-around w-full h-full bg-white p-8 md:w-96 md:h-96 md:justify-between md:p-4 md:rounded-sm lg:w-1/4 lg:h-2/4 lg:p-8 lg:rounded-sm ${state.fakeloading ? "animate-pulse" : ""}`}>
          <div className="flex flex-col items-center space-y-2">
            <Logo color="green" size={40} />
            <h2 className="text-xl font-semibold text-gray-500 antialiased">
              Login to your account
            </h2>
            <p className="text-gray-400 text-sm font-semibold">
              Dont you have an account?{" "}
              <span className="text-green-300">Sign Up</span>
            </p>
          </div>
          <div className="w-full space-y-8 ">
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
          </div>
          <PrimaryButton text="Login" onClick={onSubmit} />
        </div>
      </div>
    </>
  );
};

export default Login;
