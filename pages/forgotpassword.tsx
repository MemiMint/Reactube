import React, { useState } from "react";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { FiMail } from "react-icons/fi";
import { CustomInput } from "../components/custominput";
import { PrimaryButton } from "../components/buttons";
import { Validator } from "../utils/validator";

const ForgotPassword: NextPage = (): JSX.Element => {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");

  const validator = new Validator(email);

  const validate = (): void => {
    if (validator.isEmpty()) setError("email cannot be empty");
    else if (
      validator.itMatchRegex(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)
    )
      setError("invalid email");
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    setEmail(value);
  };

  const onSubmit = (): void => {
    validate();
  };

  return (
    <>
      <Head>
        <title>Forgot Password</title>
      </Head>
      <div className="w-screen h-screen bg-gray-100 flex items-center justify-center">
        <div
          className="flex flex-col items-center w-screen h-screen bg-white p-4 
                    md:flex md:flex-row md:items-center md:justify-between md:w-1/3 md:h-72 md:rounded-sm 
                    lg:w-1/3 lg:h-72 lg:rounded-sm lg:flex lg:flex-row lg:items-center lg:justify-between"
        >
          <div className="relative w-28 h-28 md:w-40 md:h-40 lg:w-40 lg:h-40">
            <Image
              loader={({ src }) => src}
              src="/spot-closed.png"
              layout="fill"
            />
          </div>
          <div
            className="  flex flex-col flex-1 justify-between
                         md:flex md:flex-col md:items-center md:justify-evenly md:flex-1 md:h-full md:px-8
                         lg:flex lg:flex-col lg:items-center lg:justify-evenly lg:flex-1 lg:h-full lg:px-8
          "
          >
            <div className="text-center mt-14 md:m-0 lg:m-0">
              <h1 className="text-2xl text-gray-500 font-medium">
                Password Recovery
              </h1>
              <p className="text-xs text-gray-400 mt-2">
                Enter the email associated with your account and we will send
                you an email with instructions to reset your password
              </p>
            </div>
            <CustomInput
              icon={<FiMail size={20} />}
              name="email"
              value={email}
              type="text"
              placeholder="email"
              errorLabel={error}
              onChange={onChange}
              onFocus={() => setError("")}
            />
            <PrimaryButton text="Send Email" onClick={onSubmit} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
