import React, { FC, useState } from "react";
import { NextPage } from "next";

type LoginForm = {
  username: string;
  password: string;
};

type CustomComponentProps = {
  username: string;
  password: string;
  email: string;
};

const CustomComponent = ({
  username,
  password,
  email,
}: CustomComponentProps) => {
  return (
    <div>
      <p>{username}</p>
      <p> {password}</p>
      <p>{email}</p>
    </div>
  );
};

const Test: NextPage = () => {
  const [state, setState] = useState<LoginForm>({
    username: "",
    password: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  const onClick = () => {
    alert(state.username);
    alert(state.password);
  };

  return (
    <div>
      <input
        type="text"
        name="username"
        value={state.username}
        onChange={onChange}
      />
      <input
        type="text"
        name="password"
        value={state.password}
        onChange={onChange}
      />
      <button onClick={onClick}>Click Me!</button>
      <CustomComponent
        username={state.username}
        password={state.password}
        email="yeferson@gmail.com"
      />
    </div>
  );
};

export default Test;
