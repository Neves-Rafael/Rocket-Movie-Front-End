import { Container, Section } from "./styles";
import { Star } from "../../components/stars";
import { Tag } from "../../components/Tag";
import { BackButton } from "../../components/backButton";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Preview() {
  const [data, setData] = useState([]);
  const [userCreate, setUserCreate] = useState([]);
  const [deleteNote, setDeleteNote] = useState("");
  const params = useParams();

  const { user } = useAuth();

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  async function handleDelete() {
    const confirm = window.confirm("Tem certeza que deseja excluir esta nota?");

    if (confirm) {
      await api.delete(`/notes/${params.id}`);
      navigate(-1);
    }
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`notes/${params.id}`);
      setData(response.data);
    }
    fetchNote();
  }, []);

  useEffect(() => {
    async function fetchUser() {
      const responseUser = await api.get(`users/${data.user_id}`);
      setUserCreate(responseUser.data);
      if (data.user_id === user.id) {
        setDeleteNote("Excluir nota");
      } else {
        setDeleteNote("");
      }
    }

    fetchUser();
  }, [data]);

  return (
    <Container>
      <BackButton onClick={handleBack} />
      {data && (
        <Section>
          <div className="movie">
            <h2>{data.title}</h2>
            <Star fillStar={data.rating ? data.rating[0].stars : 3} />
          </div>
          <div className="publication">
            <img src="https://source.unsplash.com/random" alt="" />
            <p>
              Por{" "}
              <span>
                {userCreate.user ? userCreate.user.name : "User desconhecido"}
              </span>
            </p>
            <p>{data.created_at}</p>
          </div>
          {data.tags && (
            <div className="tags">
              {data.tags.map((tag) => (
                <Tag title={tag.name} key={String(tag.id)} />
              ))}
            </div>
          )}
          <p>{data.description}</p>
          {deleteNote && <button onClick={handleDelete}>Excluir nota</button>}
        </Section>
      )}
    </Container>
  );
}
