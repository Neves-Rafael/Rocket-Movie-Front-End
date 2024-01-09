import { Container } from "./styles";
import { useAuth } from "../../hooks/auth";
import { Input } from "../input";

import { api } from "../../services/api";

import { Link } from "react-router-dom";
import avatarPlaceholder from "../../assets/placeholder.jpg";

export function Header() {
  const { signOut, user } = useAuth();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  return (
    <Container>
      <Link to={"/"}>
        <h2>Rocket Movies</h2>
      </Link>
      <Input placeholder="Pesquisar pelo título" />
      <div>
        <div>
          <p>{user.name}</p>
          <button onClick={signOut}>Sair</button>
        </div>
        <Link to={"/profile"}>
          <img src={avatarUrl} alt={user.name} />
        </Link>
      </div>
    </Container>
  );
}
