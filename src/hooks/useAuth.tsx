/* eslint-disable react/jsx-no-constructed-context-values */
import {
  createContext,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import api from "../services/api";
import { useSystemMessage } from "./useSystemMessage";

interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: string;
}
interface LoginProps {
  email: string;
  password: string;
  rememberMe: boolean;
}
interface IUserProvider {
  user: User;
  setUser: React.Dispatch<SetStateAction<User>>;
  isAuthenticated: () => boolean;
  login: ({ email, password, rememberMe }: LoginProps) => Promise<boolean>;
  logout: () => void;
}
interface ChildrenProps {
  children: ReactNode;
}
const AuthContext = createContext({} as IUserProvider);

const AuthProvider = ({ children }: ChildrenProps) => {
  const { notify } = useSystemMessage();

  const [user, setUser] = useState<User>({} as User);
  const projectName = import.meta.env.VITE_API_PROJECT_NAME;

  useEffect(() => {
    const dataUser = localStorage.getItem(`@${projectName}: user`) || "";

    if (dataUser) setUser(JSON.parse(dataUser));
  }, []);

  const isAuthenticated = () => user.id !== undefined;

  const login = async ({
    email,
    password,
    rememberMe,
  }: LoginProps): Promise<boolean> => {
    try {
      const { data } = await api.post("/user/session", {
        email,
        password,
      });
      if (data.user.role !== "Master")
        throw new Error("Faça login com uma conta master");
      if (rememberMe !== undefined)
        localStorage.setItem(
          `@${projectName}: user`,
          JSON.stringify(data.user)
        );

      localStorage.setItem(`@${projectName}: accessToken`, data.access_token);
      localStorage.setItem(`@${projectName}: refreshToken`, data.refresh_token);
      setUser(data.user);
      return true;
    } catch (err: any) {
      notify({
        message: err?.response?.data?.message || err.message,
        type: "error",
      });
      return false;
    }
  };
  const logout = () => {
    localStorage.removeItem(`@${projectName}: user`);
    localStorage.removeItem(`@${projectName}: accessToken`);
    localStorage.removeItem(`@${projectName}: refreshToken`);
    setUser({} as User);
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, login, isAuthenticated, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
export const useAuth = () => useContext(AuthContext);
