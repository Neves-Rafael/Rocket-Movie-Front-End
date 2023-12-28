import { Container } from "./styles";

export interface StarProps {
  fillStar: number;
}

export function Star({ fillStar = 0}: StarProps) {
  //&#9733; fill star
  //&#9734; empty star
    let rounder = Math.round(fillStar);
    rounder > 5 ? rounder = 5 : rounder;
    rounder < 0 ? rounder = 0 : rounder;

    let emptyStar = 5 - rounder;

    const filledStars = Array.from({ length: fillStar }, (_, index) => (
      <span key={`Star-${index}`}>&#9733;</span>
    ));

    const emptyStars = Array.from({length: emptyStar}, (_, index) => (
      <span key={`Star-${index}`}>&#9734;</span>
    ))

  return (
    <Container>
      {filledStars}
      {emptyStars}
    </Container>
  );
}
