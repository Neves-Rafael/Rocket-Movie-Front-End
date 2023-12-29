import styled from "styled-components";

interface ContainerProps {
  isnew?: string;
}

export const Container = styled.button<ContainerProps>`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme, isnew }) =>
    isnew === "true" ? "transparent" : theme.COLORS.BACKGROUND_900};

  color: ${({ theme }) => theme.COLORS.GRAY_300};

  border: ${({ theme, isnew }) =>
    isnew === "true" ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};

  border-radius: 1rem;
  padding-right: 1.6rem;

  >button{
    background: none;
  }

  .button-delete{
    color: ${({ theme }) => theme.COLORS.RED};
  }

  .button-add{
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  >input {
    height: 5.6rem;
    width: 100;

    padding: 1.2rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`;
