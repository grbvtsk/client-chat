import { createContext, useState, useContext } from "react";

const UserContext = createContext<{
  nickname: string;
  setNickname: (v: string) => void;
}>({
  nickname: "",
  setNickname: () => {},
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [nickname, setNickname] = useState("");
  return (
    <UserContext.Provider value={{ nickname, setNickname }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
