import React, { useState } from "react";
import { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import { FiUser, FiLock, FiMail } from "react-icons/fi"
import { Logo } from "../components/logo";
import { CustomInput } from "../components/custominput";
import { IProps as ICustomInputProps } from "../components/custominput/Iprops";
import { PrimaryButton } from "../components/buttons";
import { Validator } from "../utils/validator";

interface IState {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    fakeLoading: boolean;
    errors: {
        username: string;
        email: string;
        password: string;
        confirmPassword: string
    }
}

const SignUp: NextPage = (): JSX.Element => {

    const [state, setState] = useState<IState>({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        fakeLoading: false,
        errors: {
            username: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    });

    const inputs: Array<ICustomInputProps> = [
        {
            icon: <FiUser size={20} />,
            label: "username",
            name: "username",
            type: "text",
            value: state.username,
            placeholder: "username",
            errorLabel: state.errors.username,
            maxLength: 32,
            displayEye: false
        },
        {
            icon: <FiMail size={20} />,
            label: "email",
            name: "email",
            type: "text",
            value: state.email,
            placeholder: "email",
            errorLabel: state.errors.email,
            displayEye: false
        },
        {
            icon: <FiLock size={20} />,
            label: "password",
            name: "password",
            type: "password",
            value: state.password,
            placeholder: "password",
            errorLabel: state.errors.password,
            maxLength: 32,
            displayEye: true
        },
        {
            icon: <FiLock size={20} />,
            label: "password",
            name: "confirmPassword",
            type: "password",
            value: state.confirmPassword,
            placeholder: "confirm password",
            errorLabel: state.errors.confirmPassword,
            maxLength: 32,
            displayEye: true
        }
    ]

    const validate = () => {
        const { username, email, password } = state;

        const fields = {
            username,
            email,
            password
        };

        let key: keyof typeof fields;

        let validator: Validator;

        for (key in fields) {

            validator = new Validator(fields[key], 6, 32);

            if (key === "email") {
                if (validator.itMatchRegex(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)) {
                    setState({
                        ...state,
                        errors: {
                            ...state.errors,
                            [key]: `${key} is not valid`
                        }
                    })
                }
            }

            if (validator.isEmpty()) {
                setState({
                    ...state,
                    errors: {
                        ...state.errors,
                        [key]: `${key} cannot be empty`
                    }
                })
            }

            else if (!validator.isInLengthRange()) {
                setState({
                    ...state,
                    errors: {
                        ...state.errors,
                        [key]: `${key} cannot be less than 6 and greater than 32`
                    }
                })
            }

            else if (!validator.confirmPassword(fields["password"], state.confirmPassword)) {
                setState({
                    ...state,
                    errors: {
                        ...state.errors,
                        confirmPassword: "password does not match"
                    }
                })
            }
        }
    }

    const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = event.target;

        setState({
            ...state,
            [name]: value
        });
    }

    const onClean = (key: string): void => {
        setState({
            ...state,
            errors: {
                ...state.errors,
                [key]: ""
            }
        });
    }

    const onSubmit = (): void => {
        validate();
    }

    return (
        <>
            <Head>
                <title>
                    Sign Up
                </title>
            </Head>
            <div className="w-screen h-screen flex items-center justify-center md:bg-gray-200 lg:bg-gray-200">
                <div className={`flex flex-col items-center justify-around w-full h-full bg-white p-8 md:w-96 md:h-auto md:justify-between md:p-4 md:rounded-sm lg:w-1/4 lg:h-auto lg:p-8 lg:rounded-sm ${state.fakeLoading ? "animate-pulse" : ""}`}>
                    <div className="flex flex-col items-center space-y-2">
                        <Logo color="green" size={40} />
                        <h2 className="text-xl font-semibold text-gray-500 antialiased">
                            Create an account
                        </h2>
                        <p className="text-gray-400 text-sm font-semibold">
                            Already have an account?{" "}
                            <Link href="/login" >
                                <a className="text-green-300">Sign In</a>
                            </Link>
                        </p>
                    </div>
                    <div className="mt-4 w-full space-y-4">
                        {
                            inputs.map((input, index): JSX.Element => {
                                return (
                                    <CustomInput
                                        key={index}
                                        icon={input.icon}
                                        label={input.label}
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
                    <div className="w-full mt-4" >
                        <PrimaryButton text="Sign Up" onClick={onSubmit} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp;