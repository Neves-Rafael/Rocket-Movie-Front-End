import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  > div button {
    font-size: 1.8rem;
    margin-top: 10rem;
    margin-bottom: 10rem;
    margin-left: 15%;
  }

  > div {
    display: flex;
    justify-content: space-between;
  }

  .deleteNote {
    margin-top: 10rem;
    align-self: flex-end;
    padding: 1rem 2rem;
    width: auto;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.RED};
    border-radius: 0.8rem;
    margin-right: 15%;
    font-weight: 700;

    &:hover {
      filter: brightness(1.1);
      background-color: ${({ theme }) => theme.COLORS.RED};
      color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    }
  }

  @media (max-width: 768px) {
    > div button {
      margin-left: 5%;
    }

    > div button,
    .deleteNote {
      margin: 5rem 5%;
    }

    .deleteNote {
      margin-right: 5%;
    }
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 15%;

  > .description {
    word-wrap: break-word;
    padding: 1rem 0 10rem;
  }

  .movie {
    display: flex;
    align-items: center;
    margin-bottom: 2.4rem;

    > h2 {
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 3.6rem;
      font-weight: 500;
      margin-right: 2rem;
    }

    span {
      font-size: 3rem;
    }
  }

  .publication {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-bottom: 4rem;

    > img {
      width: 4rem;
      height: 4rem;
      object-fit: cover;
      border-radius: 50%;
    }

    > p span {
      color: ${({ theme }) => theme.COLORS.RED};
    }
  }

  .tags {
    display: flex;
    gap: 1rem;
    margin-bottom: 4rem;
  }

  @media (max-width: 768px) {
    padding: 0 5% 10rem;

    .tags {
      justify-content: center;
    }

    > .movie h2 {
      margin-right: 0;
    }

    .movie {
      flex-direction: column;
    }

    .publication {
      flex-direction: column;
    }
  }
`;
