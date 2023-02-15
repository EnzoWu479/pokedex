import AuthProvider from "./hooks/useAuth";
import SystemMessageProvider from "./hooks/useSystemMessage";
import AppRoutes from "./routes";
import { GlobalStyle } from "./styles/global";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <AuthProvider>
      <SystemMessageProvider>
        <GlobalStyle />
        <AppRoutes />
      </SystemMessageProvider>
    </AuthProvider>
  );
};

export default App;
