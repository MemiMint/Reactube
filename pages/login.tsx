import React, { useState, useEffect } from "react";
import { NextPage } from "next";
import Head from "next/head"
import Link from "next/link"
import { Logo } from "../components/logo";
import { FiUser, FiLock } from "react-icons/fi";
import { CustomInput } from "../components/custominput";
import { IProps as ICustomInputProps } from "../components/custominput/Iprops";
import { LongButton } from "../components/buttons"
import { Validator } from "../utils/validator"

interface Istate {
  username: string;
  password: string;
  fakeloading: boolean;
  errors: {
    username: string;
    password: string;
  }
}

const Login: NextPage = (): JSX.Element => {
  const [state, setState] = useState<Istate>({
    username: "",
    password: "",
    errors: {
      username: "",
      password: ""
    },
    fakeloading: false
  });

  const inputs: Array<ICustomInputProps> = [
    {
      label: "username",
      icon: <FiUser size={20} />,
      name: "username",
      value: state.username,
      placeholder: "username",
      type: "text",
      maxLength: 32,
      errorLabel: state.errors.username
    },
    {
      label: "password",
      link: {
        href: "/forgotpassword",
        text: "forgot password?",
      },
      icon: <FiLock size={20} />,
      name: "password",
      value: state.password,
      placeholder: "password",
      type: "password",
      maxLength: 32,
      errorLabel: state.errors.password,
      displayEye: true,
    }
  ]

  const validate = () => {
    const { username, password } = state;

    const fields = {
      username,
      password
    };

    let k: keyof typeof fields;

    for (k in fields) {
      const validator: Validator = new Validator(fields[k]);

      if (validator.isEmpty()) {
        setState({
          ...state,
          errors: {
            ...state.errors,
            [k]: `${k} cannot be empty`
          }
        })
      }
    }
  }

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  const onClean = (key: string) => {
    setState({
      ...state,
      errors: {
        ...state.errors,
        [key]: ""
      }
    })
  }

  const onSubmit = (): void => {
    validate();
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
            <p className="text-gray-400 text-sm">
              Dont you have an account?{" "}
              <Link href="/signup" >
                <a className="text-green-300">Sign Up</a>
              </Link>
            </p>
          </div>
          <div className="w-full space-y-8 ">
            {
              inputs.map((input, index): JSX.Element => {
                return (
                  <CustomInput
                    key={index}
                    icon={input.icon}
                    label={input.label}
                    link={input.link}
                    name={input.name}
                    type={input.type}
                    value={input.value}
                    placeholder={input.placeholder}
                    maxLength={input.maxLength}
                    errorLabel={input.errorLabel}
                    displayEye={input.displayEye}
                    onChange={onChange}
                    onFocus={() => {
                      onClean(input.name)
                    }}
                  />
                )
              })
            }
          </div>
          <LongButton text="Login" onClick={onSubmit} />
        </div>
      </div>
    </>
  );
};

export default Login;
