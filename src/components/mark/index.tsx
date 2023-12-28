import { Container } from "./styles";

interface MarkProps {
    title: string,
    // disable: string;
}

export function Mark({title}: MarkProps )  {
    return <Container>{title}</Container>;
}