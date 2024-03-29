import { useState } from "react";

import { Button } from "../../components/button";
import { Input } from "../../components/input";

import { Container, Content, Section } from "./styles";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos!");
    }

    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso!");
        navigate(-1);
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível cadastrar!");
        }
      });
  }
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
            <Input
              type="text"
              placeholder="Nome"
              icon={FiUser}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              type="email"
              placeholder="E-mail"
              icon={FiMail}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="Senha"
              type="password"
              icon={FiLock}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button title="Cadastrar" onClick={handleSignUp} />

          <button onClick={() => navigate(-1)} className="create-account">
            ← Voltar para o login
          </button>
        </Section>
      </Content>
      <img
        src="https://images.pexels.com/photos/375885/pexels-photo-375885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
    </Container>
  );
}
