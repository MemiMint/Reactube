import React, { FunctionComponent, useState } from "react";
import { NextPage } from "next";
import Head from "next/head";
import { FiMail } from "react-icons/fi"
import { CustomInput } from "../components/custominput"
import { PrimaryButton } from "../components/buttons"
import { Validator } from "../utils/validator"

const ForgotPassword: NextPage = (): JSX.Element => {
    const [email, setEmail] = useState<string>("");
    const [error, setError] = useState<string>("");

    const validator = new Validator(email);

    const validate = (): void => {
        if (validator.isEmpty()) setError("email cannot be empty");

        else if (!validator.itMatchRegex(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)) setError("invalid email");
    }

    const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const { value } = event.target;
        setEmail(value);
    }

    const onSubmit = (): void => {
        validate();
    }

    return (
        <>
            <Head>
                <title>Forgot Password</title>
            </Head>
            <div className="w-screen h-screen bg-gray-100 flex items-center justify-center">
                <div className="flex items-center justify-between w-1/3 h-72 bg-white rounded-sm p-4">
                    <div className="w-40 h-40 rounded-full bg-red-400" >

                    </div>
                    <div className="flex flex-col items-center justify-evenly flex-1 h-full px-8">
                        <div>
                            <h1 className="text-2xl text-gray-500 font-medium">Password Recovery</h1>
                            <p className="text-xs text-gray-400 mt-2">
                                Enter the email associated with your account and we will send you an email with
                                instructions to reset your password
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
                        />
                        <PrimaryButton text="Send Email" onClick={onSubmit} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgotPassword;