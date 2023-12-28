import {Container} from "./styles";

interface TitleProps {
    title: string;
}

export function Title({title}: TitleProps) {
    return <Container>{title}</Container>;
}