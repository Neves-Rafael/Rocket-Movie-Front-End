import { Container, Section } from "./styles";
import { BackButton } from "../../components/backButton";
import { Title } from "../../components/title";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { Mark } from "../../components/mark";

import { useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export function CreateMovie() {
  const [tags, setTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState("");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [stars, setStars] = useState("");

  const navigate = useNavigate();

  function handleAddTags() {
    setTags((prevState) => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted: string) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  function handleClearNote() {
    setDescription("");
    setTitle("");
    setStars("");
    setTags([]);
    setNewTag("");
  }

  async function handleNewNote() {
    if (!title) {
      return alert("Preencha o campo 'Titulo'");
    }

    if (!stars) {
      return alert("Preencha o campo com a sua nota (de 0 a 5)");
    }

    if (newTag) {
      return alert("Existe uma tag não adicionada!");
    }

    await api.post("/notes", { title, description, stars, tags });

    alert("Avaliação criada com sucesso!");
    navigate(-1);
  }

  return (
    <Container>
      <Section>
        <BackButton onClick={() => navigate(-1)} />
        <Title title="Novo Filme"></Title>
        <div>
          <Input
            placeholder="Titulo"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input
            placeholder="Sua nota (de 0 a 5)"
            value={stars}
            onChange={(e) => setStars(e.target.value)}
          />
        </div>
        <textarea
          placeholder="Sua analise"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <h3>Marcadores</h3>
        <div className="marks">
          {tags.map((tag, index) => (
            <Mark
              value={tag}
              key={String(index)}
              onClick={() => {
                handleRemoveTag(tag);
              }}
            />
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
          <Button title="Limpar Campos" onClick={handleClearNote} />
          <Button title="Salvar Avaliação" onClick={handleNewNote} />
        </div>
      </Section>
    </Container>
  );
}
