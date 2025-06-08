import { createContext, useState, useContext } from "react";

interface UserContextType {
  nickname: string;
  setNickname: (v: string) => void;
}

const UserContext = createContext<UserContextType>({
  nickname: "",
  setNickname: () => {},
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [nickname, setNickname] = useState<string>("");
  return (
    <UserContext.Provider value={{ nickname, setNickname }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
