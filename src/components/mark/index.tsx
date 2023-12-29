import { Container } from "./styles";
import { FiPlus, FiX } from "react-icons/fi";

interface MarkProps {
  value?: string;
  isNew?: boolean;
  onClick?: () => void;
}

export function Mark({ isNew, value, onClick, ...rest }: MarkProps) {
  return (
    <Container isNew={isNew}>
      <input type="text" value={value} readOnly={!isNew} {...rest} />
      <button
        onClick={onClick}
        type="button"
        className={isNew ? "button-add" : "button-delete"}>
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  );
}
