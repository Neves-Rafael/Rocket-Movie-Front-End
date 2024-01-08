import {
  ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

import { api } from "../services/api";
import axios from "axios";

export const AuthContext = createContext({});

interface signInProps {
  children: ReactNode;
  email: string;
  password: string;
}

function AuthProvider({ children }: signInProps) {
  const [data, setData] = useState({});
  async function signIn({ email, password }: signInProps) {
    try {
      const response = await api.post("/sessions", { email, password });
      const { token, user } = response.data;

      localStorage.setItem("@RocketMovies:user", JSON.stringify(user));
      localStorage.setItem("@RocketMovies:token", token);

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

  function signOut(){
    localStorage.removeItem("@RocketMovies:token");
    localStorage.removeItem("@RocketMovies:user");

    setData({});
  }

  useEffect(() => {
    const token = localStorage.getItem("@RocketMovies:token");
    const user = localStorage.getItem("@RocketMovies:user");

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      setData({ token, user: JSON.parse(user) });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, signOut, user: data.user }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
