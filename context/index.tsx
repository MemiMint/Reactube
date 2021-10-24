import React, {
  useState,
  useContext,
  createContext,
  FunctionComponent,
  useEffect,
} from "react";
import { Iuser } from "./Iuser";

const UserContext = createContext<Iuser | null>(null);

export const UserProvider: FunctionComponent = ({ children }): JSX.Element => {
  const [user, setUser] = useState<Iuser>({
    id: "",
    picture: "",
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const fetchUser = async (): Promise<void> => {
    try {
      const request = await fetch("https://randomuser.me/api/");
      const response = await request.json();
      const user = response.results[0];

      setUser({
        id: user.login.uuid,
        picture: user.picture.large,
        username: user.login.username,
        firstname: user.name.first,
        lastname: user.name.last,
        email: user.email,
        password: user.login.password,
      });
    }

    catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  return useContext(UserContext) as Iuser;
};
