import { Container } from "./styles";

export interface StarProps {
  fillStar: number;
}

export function Star({ fillStar }: StarProps) {
    let rounder = Math.round(fillStar);
    rounder > 5 ? rounder = 5 : rounder;
    rounder < 0 ? rounder = 0 : rounder;

    let emptyStar = 5 - rounder;

    const filledStars = Array.from({length: rounder},(_, index) => (
        <span key={`filled-star-${index}`}>&#9733;</span>
    ));

    const emptyStars = Array.from({length: emptyStar}, (_, index) => (
        <span key={`empty-star-${index}`}>&#9734;</span>
    ));

  return (
    <Container>
      {filledStars}
      {emptyStars}
    </Container>
  );
}
