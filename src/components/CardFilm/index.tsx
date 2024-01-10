import { Container } from "./styles";
import { Tag } from "../Tag";
import { Star } from "../stars";

export interface CardFilmProps {
  title: string;
  description: string;
}

export function CardFilm({ title, description, data, onClick }: CardFilmProps) {

  return (
    <Container onClick={onClick}>
      <div>
        <h2>{title}</h2>
        <Star fillStar={3} />
      </div>
      <p>{description}</p>
      <div className="tags">
        <Tag title="Fic" />
        <Tag title="Drama" />
        <Tag title="Fantasia " />
      </div>
    </Container>
  );
}
