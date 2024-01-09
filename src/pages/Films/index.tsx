import { Container, NewMovie, ScrollY } from "./styles";
import { Header } from "../../components/header";
import { CardFilm } from "../../components/cardFilm";
import { Button } from "../../components/button";
import { FiPlus } from "react-icons/fi";
import { Title } from "../../components/title";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../services/api";

export function Films(props) {
  const [notes, setNotes] = useState([]);
  const {search} = props;

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}`);
      setNotes(response.data);
    }

    fetchNotes();
  }, [search]);


  return (
    <Container>
      <Header />
      <NewMovie>
        <Title title="Filmes" />
        <Link to="/create">
          <Button title="Novo filme" icon={FiPlus} />
        </Link>
      </NewMovie>
      {notes &&
        notes.map((note) => (
          <ScrollY key={String(note.id)}>
            <Link to={"/preview"}>
              <CardFilm title={note.title} description={note.description} />
            </Link>
          </ScrollY>
        ))}
      <ScrollY>
        <Link to={"/preview"}>
          <CardFilm title={"abc"} description={"abc"} />
        </Link>
      </ScrollY>
    </Container>
  );
}
