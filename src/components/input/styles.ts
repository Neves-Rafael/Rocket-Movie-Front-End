import styled from "styled-components";


export const Container = styled.input`
    width: 100%;
    height: 5.6rem;
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    padding-left: 2rem;
    color: ${({theme}) => theme.COLORS.WHITE};
`