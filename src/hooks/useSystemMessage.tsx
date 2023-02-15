/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, ReactNode, useContext } from "react";
import { toast, ToastContainer, ToastOptions } from "react-toastify";
import { useAuth } from "./useAuth";

interface ISystemMessageProvider {
  notify: (arg0: MessageProps) => void;
}
interface Props {
  children: ReactNode;
}
interface MessageProps {
  message: string;
  type: "success" | "info" | "warning" | "error" | "default";
}
const SystemErrorMessageContext = createContext({} as ISystemMessageProvider);
const SystemMessageProvider = ({ children }: Props) => {
  const { logout } = useAuth();
  const toastSettings: ToastOptions = {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };
  const notify = ({ type, message }: MessageProps) => {
    switch (type) {
      case "success":
        return toast.success(message, toastSettings);
      case "info":
        return toast.info(message, toastSettings);
      case "warning":
        return toast.warning(message, toastSettings);
      case "error":
        if (message === "Token Inválido") {
          logout();
          return;
        }
        return toast.error(message, toastSettings);
      default:
        return toast(message, toastSettings);
    }
  };
  return (
    <SystemErrorMessageContext.Provider value={{ notify }}>
      {children}
      <ToastContainer />
    </SystemErrorMessageContext.Provider>
  );
};
export default SystemMessageProvider;
export const useSystemMessage = () => useContext(SystemErrorMessageContext);
