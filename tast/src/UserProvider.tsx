import type React from "react";
import { userContext } from "./UserContext";
interface props {
  children: React.ReactNode;
}
const UserProvider = ({ children }: props) => {
  const user = "Nehal";
  return <userContext.Provider value={user}>{children}</userContext.Provider>;
};

export default UserProvider;
