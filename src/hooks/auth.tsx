import { ReactNode, createContext, useContext, useState } from "react";

import { api } from "../services/api";
import axios from "axios";

export const AuthContext = createContext({});

interface signInProps {
  children: ReactNode;
  email: string;
  password: string;
  user: string;
}

function AuthProvider({ children }: signInProps) {
  const [data, setData] = useState({});
  async function signIn({ email, password }: signInProps) {
    try {
      const response = await api.post("/sessions", { email, password });
      const { token, user } = response.data;

      api.defaults.headers.authorization = `Bearer ${token}`;
      setData({ token, user });

    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível entrar!");
      }
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, user: data.user }}>{children}</AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
