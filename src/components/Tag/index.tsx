import { Container } from "./styles";

export interface TagProps {
  title: string;
}

export function Tag({title}: TagProps) {
  return (
    <Container>
      <p>{title}</p>
    </Container>
  );
}
