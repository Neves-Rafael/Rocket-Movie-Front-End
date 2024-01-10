import { Container, Section } from "./styles";
import { Star } from "../../components/stars";
import { Tag } from "../../components/Tag";
import { BackButton } from "../../components/backButton";
import { api } from "../../services/api";

import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export function Preview() {
  const [data, setData] = useState([]);
  const params = useParams();

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`notes/${params.id}`);
      setData(response.data);
      console.log(response.data);
    }
    fetchNote();
  }, []);

  return (
    <Container>
      <Link to={"/"}>
        <BackButton />
      </Link>
      {data && (
        <Section>
          <div className="movie">
            <h2>{data.title}</h2>
            <Star fillStar={data.rating ? data.rating[0].stars : 3} />
          </div>
          <div className="publication">
            <img src="https://source.unsplash.com/random" alt="" />
            <p>
              Por <span>Rafael Neves</span>
            </p>
            <p>29/12/2023 às 15:00 </p>
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
