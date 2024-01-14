import { Container, Section } from "./styles";
import { Star } from "../../components/stars";
import { Tag } from "../../components/Tag";
import { BackButton } from "../../components/backButton";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import avatarPlaceholder from "../../assets/placeholder.jpg";

interface dataProps {
  title: string;
  rating?: { stars: number }[];
  created_at: string;
  tags?: { name: string; id: number }[];
  description: string;
  id: number;
  user_id: number;
}

interface userCreteProps {
  user?: {
    name: string;
    avatar: string;
  };
}

export function Preview() {
  const [data, setData] = useState<dataProps | null>(null);
  const [userCreate, setUserCreate] = useState<userCreteProps>({});
  const [deleteNote, setDeleteNote] = useState("");
  const params = useParams();

  const { user } = useAuth();
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  console.log(data);

  async function handleDelete() {
    const confirm = window.confirm("Tem certeza que deseja excluir esta nota?");

    if (confirm) {
      await api.delete(`/notes/${params.id}`);
      navigate(-1);
    }
  }
  let avatarUrl;
  if (userCreate.user && !userCreate.user.avatar) {
    avatarUrl = avatarPlaceholder;
  } else {
    avatarUrl = userCreate.user
      ? `${api.defaults.baseURL}/files/${userCreate.user.avatar}`
      : avatarPlaceholder;
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
      if (data) {
        const responseUser = await api.get(`users/${data.user_id}`);
        setUserCreate(responseUser.data);
        if (data.user_id === user.id) {
          setDeleteNote("Excluir nota");
        } else {
          setDeleteNote("");
        }
      }
    }

    fetchUser();
  }, [data]);

  return (
    <Container>
      <div>
        <BackButton onClick={handleBack} />
        {deleteNote && (
          <button className="deleteNote" onClick={handleDelete}>
            Excluir nota
          </button>
        )}
      </div>
      {data && (
        <Section>
          <div className="movie">
            <h2>{data.title}</h2>
            <Star fillStar={data.rating ? data.rating[0].stars : 3} />
          </div>
          <div className="publication">
            <img src={avatarUrl} alt="" />
            <p>
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
        </Section>
      )}
    </Container>
  );
}
