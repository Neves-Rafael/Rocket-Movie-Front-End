import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  > button {
    font-size: 1.8rem;
    margin-top: 10rem;
    margin-bottom: 10rem;
    margin-left: 15%;
  }

  @media (max-width: 768px) {
    > a div {
      margin-left: 5%;
    }
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 15%;

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

    .movie {
      flex-direction: column;
    }

    .publication {
      flex-direction: column;
    }
  }
`;
