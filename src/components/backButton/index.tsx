import { Container } from "./styles";

interface BackButtonProps {
  onClick?: () => void;
}

export function BackButton({ onClick }: BackButtonProps) {
  return <Container onClick={onClick}>← Voltar</Container>;
}
