import { Container } from "./styles";
import { Input } from "../input";

import { Link } from "react-router-dom";

export function Header() {
  return (
    <Container>
      <Link to={"/"}>
        <h2>Rocket Movies</h2>
      </Link>
      <Input placeholder="Pesquisar pelo título" />
      <div>
        <div>
          <p>Nome do usuário</p>
          <p>Sair</p>
        </div>
        <Link to={"/profile"}>
          <img src="https://source.unsplash.com/random" alt="" />
        </Link>
      </div>
    </Container>
  );
}
