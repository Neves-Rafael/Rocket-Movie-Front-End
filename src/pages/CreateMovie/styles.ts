import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;
export const Section = styled.section`
  width: 100%;
  padding: 0 15%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  margin-top: 4rem;

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
      width: auto;
    }

    > button input {
      width: 10rem;
    }
  }

  .buttons div:nth-child(1) {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    > button {
      color: ${({ theme }) => theme.COLORS.RED};
    }
  }
`;
