import { Container, Section, Avatar } from "./styles";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { BackButton } from "../../components/backButton";
import { FiCamera } from "react-icons/fi";
import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";
import { useState } from "react";
import { api } from "../../services/api";

import avatarPlaceholder from "../../assets/placeholder.jpg"

export function Profile() {
  const { user, updateProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState("");
  const [passwordNew, setPasswordNew] = useState("");

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);

  async function handleUpdate() {
    const user = {
      name,
      email,
      new_password: passwordNew,
      old_password: passwordOld,
    };
    await updateProfile({ user, avatarFile });
  }

  function handleChangeAvatar(event){
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  return (
    <Container>
      <header>
        <Link to="/">
          <BackButton />
        </Link>
      </header>
      <Section>
        <Avatar>
          <img src={avatar} alt="" />
          <label htmlFor="avatar">
            <FiCamera />
            <input type="file" id="avatar" onChange={handleChangeAvatar} />
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
            onChange={(e) => setPasswordOld(e.target.value)}
          />
          <Input
            placeholder="Nova Senha"
            onChange={(e) => setPasswordNew(e.target.value)}
          />
        </div>
        <Button title="Salvar" onClick={handleUpdate} />
      </Section>
    </Container>
  );
}
