import styled from "styled-components";

export const Container = styled.h1`
  font-size: 3.6rem;
  font-weight: 500;
  line-height: normal;
  color: ${({ theme }) => theme.COLORS.WHITE};

  @media (max-width: 1100px) {
    font-size: 3rem;
  }
`;
