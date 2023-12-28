import { Container } from "./styles";
import { Tag } from "../Tag";
import { Star } from "../stars";

export interface CardFilmProps {
  title: string;
  description: string;
}

export function CardFilm({ title, description}: CardFilmProps) {
  return (
    <Container>
      <div>
        <h2>{title}</h2>
        <Star fillStar={3}/>
      </div>
      <p>{description}</p>
      <div className="tags">
        <Tag title="Ficção"/>
        <Tag title="Drama"/>
        <Tag title="Fantasia "/>
      </div>
    </Container>
  );
}
