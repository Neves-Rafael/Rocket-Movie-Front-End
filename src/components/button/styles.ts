import styled from "styled-components";

export const Container = styled.div`
  height: 5.6rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.COLORS.RED};
  color: ${({ theme }) => theme.COLORS.WHITE};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  cursor: pointer;

  > button {
    background: none;
    font-size: 1.8rem;
  }

  > svg {
    margin-top: 0.2rem;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  }

  @media (max-width: 1100px) {
    height: 4.6rem;
    gap: 0;
    padding-left: 1rem;
  }
`;
