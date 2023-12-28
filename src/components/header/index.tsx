import { Container } from "./styles";
import { Input } from "../input";

export function Header() {
    return (
        <Container>
            <h2>Rocket Movies</h2>
            <Input placeholder="Pesquisar pelo título"/>
            <div>
                <div>
                    <p>Nome do usuário</p>
                    <p>Sair</p>
                </div>
                <img src="https://source.unsplash.com/random" alt="" />
            </div>
        </Container>
    );
}