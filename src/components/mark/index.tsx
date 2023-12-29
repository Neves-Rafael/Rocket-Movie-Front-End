import { Container } from "./styles";
import { FiPlus, FiX } from "react-icons/fi";

interface MarkProps {
  value?: string;
  placeholder?: string;
  onClick?: () => void;
  isnew?: string;
}

export function Mark({ isnew, value, placeholder, onClick, ...rest }: MarkProps) {
  return (
    <Container isnew={isnew}>
      <input type="text" value={value} readOnly={!isnew} placeholder={placeholder} {...rest}/>
      <button
        onClick={onClick}
        type="button"
        className={isnew === "true" ? "button-add" : "button-delete"}>
        {isnew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  );
}
