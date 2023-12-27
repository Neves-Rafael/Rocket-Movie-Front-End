import { Button } from "../../components/button";
import { Input } from "../../components/input";

import { Container, Content, Section } from "./styles";

export function SignIn() {
  return (
    <Container>
      <Content>
        <Section>
          <div>
            <h1>Rocket Movies</h1>
            <p>Encontre seus filmes favoritos aqui</p>
          </div>
          <h2>Faça seu Login</h2>
          <div className="form-signin">
            <Input placeholder="E-mail" />
            <Input placeholder="Senha" />
          </div>
          <Button title="Sign In" />
        </Section>
      </Content>
        <img src="https://source.unsplash.com/random" alt="" />
    </Container>
  );
}
