import styled from "styled-components";

export const Container = styled.button`
    height: 5.6rem;
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.COLORS.RED};
    color: ${({ theme }) => theme.COLORS.WHITE};
    width: 100%;
`