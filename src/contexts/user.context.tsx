import { createContext, useState, useEffect } from "react";
import { IUserModel } from "../models/user.model";
import { fetchLoggedUser } from "../services/fetch-data.service";

interface IValueProvider {
  userData: IUserModel | null;
  setUserData: (data: IUserModel | null) => void;
}

const UserContext = createContext<IValueProvider>({
  userData: null,
  setUserData: () => {},
});

export const UserProvider: TProvider = ({ children }) => {
  const [userData, setUserData] = useState<IUserModel | null>(null);

  const value: IValueProvider = {
    userData,
    setUserData,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContext;
