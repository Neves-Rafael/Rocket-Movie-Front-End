import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;
export const Section = styled.section`
  width: 100%;
  padding: 0 30%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  margin-top: 4rem;

  > button {
    margin: 2rem 0;
    display: flex;
    font-size: 1.8rem;
  }

  > div {
    display: flex;
    gap: 4rem;
  }

  > textarea {
    width: 100%;
    resize: none;
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    padding: 1.6rem;
    min-height: 25rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > h3 {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-weight: 400;
  }

  .marks {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    border-radius: 1rem;
    display: flex;
    align-items: center;
    padding: 1.6rem;

    > button {
      width: 15rem;
      &:hover {
        filter: brightness(1.5);
      }
    }

    > button input {
      width: 12rem;
    }
  }

  .buttons div:nth-child(1) {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    > button {
      color: ${({ theme }) => theme.COLORS.RED};
    }
  }

  .buttons div:nth-child(2):hover {
    filter: brightness(1.1);
  }

  @media (min-width: 1100px) {
    padding: 0 15% 10rem;
  }

  @media (max-width: 1100px) {
    padding: 0 10% 10rem;

    > div,
    .buttons {
      flex-direction: column;
    }

    .marks {
      flex-direction: row;
      gap: 1rem;
    }
  }

  @media (max-width: 768px) {
    padding: 0 5% 10rem;

    > div,
    .buttons {
      flex-direction: column;
    }

    .marks {
      flex-direction: row;
      gap: 1rem;
    }
  }
`;
