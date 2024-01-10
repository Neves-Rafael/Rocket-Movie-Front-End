import { Container, NewMovie, ScrollY, Search } from "./styles";
import { CardFilm } from "../../components/cardFilm";
import { Button } from "../../components/button";
import { FiPlus } from "react-icons/fi";
import { Title } from "../../components/title";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/placeholder.jpg";
import { Input } from "../../components/input";
import { useAuth } from "../../hooks/auth";

interface Note {
  id: number;
  title: string;
  description: string;
  // Adicione outras propriedades, se necessário
}

export function Films() {
  const { signOut, user } = useAuth();
  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState<Note[]>([]);
  async function fetchNotes() {
    const response = await api.get(`/notes?title=${search}`);
    setNotes(response.data);
  }
  useEffect(() => {
    fetchNotes();
  }, [search]);

  return (
    <Container>
      <Search>
        <Link to={"/"}>
          <h2>Rocket Movies</h2>
        </Link>
        <Input
          placeholder="Pesquisar pelo título"
          onChange={(e) => setSearch(e.target.value)}
        />
        <div>
          <div>
            <p>{user.name}</p>
            <button onClick={signOut}>Sair</button>
          </div>
          <Link to={"/profile"}>
            <img src={avatarUrl} alt={user.name} />
          </Link>
        </div>
      </Search>

      <NewMovie>
        <Title title="Filmes" />
        <Link to="/create">
          <Button title="Novo filme" icon={FiPlus} />
        </Link>
      </NewMovie>
      <ScrollY>
        <Link to={"/preview"}>
          {notes.map((note) => (
            <CardFilm
              key={String(note.id)}
              title={note.title}
              description={note.description}
            />
          ))}
        </Link>
      </ScrollY>
    </Container>
  );
}
