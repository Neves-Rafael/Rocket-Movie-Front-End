import { Container } from "./styles";
import { IconType } from "react-icons";

interface ButtonProps {
  title: string;
  icon?: IconType;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export function Button({ title, onClick, icon: Icon }: ButtonProps) {
  return (
    <Container onClick={onClick}>
      {Icon ? Icon && <Icon size={20} /> : ""}
      <button type="button">{title}</button>
    </Container>
  );
}
