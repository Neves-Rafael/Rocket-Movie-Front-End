import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;

  > img {
    width: 60%;
    object-fit: cover;
  }

  @media (max-width: 1000px) {
    > img {
      display: none;
    }
  }
`;

export const Content = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4.8rem;
  max-width: 34rem;

  > div h1 {
    font-size: 4.8rem;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.RED};
  }

  > div p {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }

  > h2 {
    font-size: 2.4rem;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > .form-signin {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }

  .create-account {
    width: 100%;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.RED};
  }

  > a {
    font-size: 1.8rem;
  }

  @media (max-width: 1000px) {
    width: 80%;
    > div h1 {
      font-size: 4rem;
    }
  }
`;
