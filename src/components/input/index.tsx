import { IconType } from "react-icons";
import { Container } from "./styles";

export interface InputProps {
  icon?: IconType;
  placeholder: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?:string;
}
export function Input({
  placeholder,
  onChange,
  icon: Icon,
  ...rest
}: InputProps) {
  return (
    <Container onChange={onChange}>
      {Icon && <Icon size={20} />}
      <input placeholder={placeholder}  {...rest} />
    </Container>
  );
}
