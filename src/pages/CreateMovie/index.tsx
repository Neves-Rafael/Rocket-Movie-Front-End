import { Container, Section } from "./styles";
import { Header } from "../../components/header";
import { BackButton } from "../../components/backButton";
import { Title } from "../../components/title";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { Mark } from "../../components/mark";

import { useState } from "react";

import { Link } from "react-router-dom";

export function CreateMovie() {
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  function handleAddTags() {
    setTags((prevState) => [...prevState, newTag]);
    setNewTag("");
  }

  return (
    <Container>
      <Header />
      <Section>
        <Link to={"/"}>
          <BackButton />
        </Link>
        <Title title="Novo Filme"></Title>
        <div>
          <Input placeholder="Tiulo" />
          <Input placeholder="Sua nota (de 0 a 5)" />
        </div>
        <textarea placeholder="Sua analise" />
        <h3>Marcadores</h3>
        <div className="marks">
          {tags.map((tag, index) => (
            <Mark value={tag} key={String(index)} onClick={()=>{}} />
          ))}

          <Mark
            $isnew="true"
            placeholder="New tag"
            onChange={(e) => setNewTag(e.target.value)}
            value={newTag}
            onClick={handleAddTags}
          />
        </div>
        <div className="buttons">
          <Button title="Excluir Filme" />
          <Button title="Salvar alteração" />
        </div>
      </Section>
    </Container>
  );
}
