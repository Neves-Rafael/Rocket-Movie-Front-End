import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    border-radius: .8rem;
    display: flex;
    padding: .6rem 1.6rem;

    >p{
        font-size: 1.2rem;
    }
`