import { Container, Section } from "./styles";
import { Input } from "../../components/input";
import { Button } from "../../components/button";

export function Profile() {
  return (
    <Container>
        <header>
            <p>← Voltar</p>
        </header>
      <Section>
        <img src="https://source.unsplash.com/random" alt="" />
        <div>
            <Input placeholder="Nome do usuário" />
            <Input placeholder="E-mail do usuário" />
        </div>
        <div>
            <Input placeholder="Senha Atual" />
            <Input placeholder="Nova Senha" />
        </div>
        <Button title="Salvar" />
      </Section>
    </Container>
  );
}
