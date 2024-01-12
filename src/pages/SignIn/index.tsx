import { Container, Content, Section } from "./styles";
import { Button } from "../../components/button";
import { Input } from "../../components/input";
import { FiMail, FiLock } from "react-icons/fi";

import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import { useState } from "react";

interface AuthContext {
  signIn: (credentials: { email: string; password: string }) => Promise<void>;
}

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth() as AuthContext;

  function handleSignIn() {
    signIn({ email, password });
  }

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
            <Input
              type="email"
              placeholder="E-mail"
              icon={FiMail}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              type="password"
              placeholder="Senha"
              icon={FiLock}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Button title="Sign In" onClick={handleSignIn} />

          <Link to={"/register"} className="create-account">
            Criar Conta
          </Link>
        </Section>
      </Content>
      <img src="https://source.unsplash.com/random" alt="" />
    </Container>
  );
}
