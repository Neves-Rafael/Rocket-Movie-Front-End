import { IconType } from "react-icons";
import { Container } from "./styles";

export interface InputProps {
  icon: IconType;
  placeholder: string;
}
export function Input({ placeholder, icon: Icon, ...rest }: InputProps) {
  return (
    <Container>
      {Icon && <Icon size={20} />}
      <input placeholder={placeholder} {...rest}/>
    </Container>
  );
}
