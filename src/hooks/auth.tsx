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
  const [data, setData] = useState<{ token?: string; user?: string }>({});
  async function signIn({ email, password }: signInProps) {
    try {
      const response = await api.post("/sessions", { email, password });
      const { token, user } = response.data;

      localStorage.setItem("@rocketMovies:user", JSON.stringify(user));
      localStorage.setItem("@rocketMovies:token", token);

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setData({ token, user });
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível entrar!");
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@rocketMovies:token");
    localStorage.removeItem("@rocketMovies:user");

    setData({});
  }

  async function updateProfile({
    user,
    avatarFile,
  }: {
    user?: any;
    avatarFile: File;
  }) {
    try {
      if (avatarFile) {
        const fileUploadForm = new FormData();
        fileUploadForm.append("avatar", avatarFile);
        const response = await api.patch("/users/avatar", fileUploadForm);
        user.avatar = response.data.avatar;
      }

      await api.put("/users", user);
      localStorage.setItem("@rocketMovies:user", JSON.stringify(user));

      setData({ user, token: data.token });
      alert("Perfil atualizado com sucesso");
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível atualizar o perfil");
      }
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("@rocketMovies:token");
    const user = localStorage.getItem("@rocketMovies:user");

    if (token && user) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setData({ token, user: JSON.parse(user) });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ signIn, signOut, updateProfile, user: data.user }}>
      {children}
    </AuthContext.Provider>
  );
}

interface AuthData {
  signOut?: () => void;
  user?: any; // Substitua 'any' pelo tipo correto do objeto 'user'
  updateProfile?: (params: { user?: any; avatarFile: File | null }) => Promise<void>;
}

function useAuth(): AuthData {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
