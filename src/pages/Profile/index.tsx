import { Container, Section, Avatar } from "./styles";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { BackButton } from "../../components/backButton";
import { FiCamera } from "react-icons/fi";
import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";
import { useState } from "react";

export function Profile() {
  const { user } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState();
  const [passwordNew, setPasswordNew] = useState();

  return (
    <Container>
      <header>
        <Link to="/">
          <BackButton />
        </Link>
      </header>
      <Section>
        <Avatar>
          <img src="https://source.unsplash.com/random" alt="" />
          <label htmlFor="avatar">
            <FiCamera />
            <input type="file" id="avatar" />
          </label>
        </Avatar>
        <div>
          <Input
            placeholder="Nome do usuário"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="E-mail do usuário"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <Input
            placeholder="Senha Atual"
            value={passwordOld}
            onChange={(e) => setPasswordOld(e.target.value)}
          />
          <Input
            placeholder="Nova Senha"
            value={passwordNew}
            onChange={(e) => setPasswordNew(e.target.value)}
          />
        </div>
        <Button title="Salvar" />
      </Section>
    </Container>
  );
}
