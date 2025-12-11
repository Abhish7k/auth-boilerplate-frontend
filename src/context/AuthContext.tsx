import { createContext, useContext, useEffect, useState } from "react";
import { fetchSessionUser, loginRequest, logoutRequest } from "../lib/auth";

type User = {
  fullName: string;
  email: string;
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const isAuthenticated = user !== null;

  useEffect(() => {
    fetchSessionUser().then((data) => {
      setUser(data);
    });
  });

  const login = async (email: string, password: string) => {
    await loginRequest(email, password);

    const data = await fetchSessionUser();

    setUser(data);
  };

  const logout = async () => {
    await logoutRequest();

    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) throw new Error("auth context is missing");

  return context;
};
