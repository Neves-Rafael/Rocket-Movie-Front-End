import { Button } from "../../components/button";
import { Input } from "../../components/input";

import { Container, Content, Section } from "./styles";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";

export function SignUp() {
  return (
    <Container>
      <Content>
        <Section>
          <div>
            <h1>Rocket Movies</h1>
            <p>Encontre seus filmes favoritos aqui</p>
          </div>
          <h2>Crie sua conta</h2>
          <div className="form-signin">
            <Input placeholder="Nome" icon={FiUser} />
            <Input placeholder="E-mail" icon={FiMail} />
            <Input placeholder="Senha" icon={FiLock} />
          </div>
          <Button title="Cadastrar" />
          <Link to={"/"} className="create-account">
            ← Voltar para o login
          </Link>
        </Section>
      </Content>
      <img src="https://source.unsplash.com/random" alt="" />
    </Container>
  );
}
