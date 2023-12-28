import { ReactElement } from "react"
import {Container} from "./styles"

export interface InputProps{
    icon: ReactElement,
    placeholder: string
}
export function Input({placeholder, icon:Icon, ...rest}: InputProps){
    return(
        <Container >
            {Icon && <Icon size={20}/>}
        </Container>
    )
}