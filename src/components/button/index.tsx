import { Container } from "./styles";
import { IconType } from "react-icons";

interface ButtonProps {
  title: string;
  icon?: IconType;
}

export function Button({ title, icon: Icon }: ButtonProps) {
  return <Container >
    {Icon ? Icon && <Icon  size={20}/> : ""}
    <button type="button">{title}</button>
    </Container>;
}
