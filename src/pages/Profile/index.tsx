import { Container, Section, Avatar } from "./styles";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { BackButton } from "../../components/backButton";
import { FiCamera } from "react-icons/fi";

export function Profile() {
  return (
    <Container>
      <header>
        <BackButton />

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
