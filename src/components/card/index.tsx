import { Container } from "./styles";
import { Tag } from "../Tag";
import { Star } from "../stars";
import { api } from "../../services/api";

import { useState, useEffect, Key } from "react";
interface CardFilmProps {
  title: string;
  data: number;
  description: string;
  onClick?: () => void;
}

interface dataIdProps {
  tags: any;
  id: number;
  rating?: {
    0: {
      stars: number;
    };
  };
}

export function CardFilme({ title, description, data, onClick }: CardFilmProps) {
  const [dataId, setDataId] = useState<dataIdProps>({ tags: [], id: 0 });

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`notes/${data}`);
      setDataId(response.data);
    }
    fetchNote();
  }, []);


  return (
    <Container onClick={onClick}>
      <div>
        <h2>{title}</h2>
        <Star fillStar={dataId.rating ? dataId.rating[0].stars : 3} />
      </div>
      <p>{description}</p>
      {dataId.tags && (
        <div className="tags">
          {dataId.tags.map(
            (tag: { name: string; id: Key | null | undefined }) => (
              <Tag title={tag.name} key={tag.id} />
            )
          )}
        </div>
      )}
    </Container>
  );
}
