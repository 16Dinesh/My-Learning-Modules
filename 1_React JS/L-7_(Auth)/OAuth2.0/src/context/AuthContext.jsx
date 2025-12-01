import { createContext, useState, useEffect } from "react";
import { saveToken, getToken, clearToken } from "../utils/storage";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [token, setToken] = useState(getToken());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const login = (t) => {
    saveToken(t);
    setToken(t);
  };

  const logout = () => {
    clearToken();
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
