import { Button } from "../../components/button";
import { Input } from "../../components/input";

import { Container, Content, Section } from "./styles";

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
            <Input placeholder="Nome" />
            <Input placeholder="E-mail" />
            <Input placeholder="Senha" />
          </div>
          <Button title="Cadastrar" />
          <p className="create-account">← Voltar para o login</p>
        </Section>
      </Content>
      <img src="https://source.unsplash.com/random" alt="" />
    </Container>
  );
}
