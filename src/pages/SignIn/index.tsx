import { Container, Content, Section } from "./styles";
import { Button } from "../../components/button";
import { Input } from "../../components/input";
import {FiMail, FiLock} from "react-icons/fi"

import { Link } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../../myContext";


export function SignIn() {

  const data = useContext(MyContext)
  console.log(data)

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
            <Input placeholder="E-mail" icon={FiMail} />
            <Input placeholder="Senha" icon={FiLock}/>
          </div>
          <Button title="Sign In" />
          <Link to={"/register"} className="create-account">Criar Conta</Link>
        </Section>
      </Content>
      <img src="https://source.unsplash.com/random" alt="" />
    </Container>
  );
}
