import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 1rem;

  > input {
    width: 100%;
    height: 5.6rem;
    background: transparent;

    padding: 2rem;
    color: ${({ theme }) => theme.COLORS.WHITE};

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  > svg {
    margin-left: 1.6rem;
  }
`;
