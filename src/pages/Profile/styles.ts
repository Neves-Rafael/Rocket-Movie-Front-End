import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  > header {
    height: 14rem;
    width: 100%;
    background-color: rgba(255, 133, 155, 0.05);
    display: flex;
    align-items: center;
    padding-left: 15%;
    >button{
      font-size: 1.8rem;
    }
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4.8rem;
  width: 34rem;

  margin-top: -9rem;

  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }

  @media (max-width: 768px) {
    padding: 0 1rem;
    margin-top: -5rem;
  }
`;

export const Avatar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
  > img {
    height: 18rem;
    width: 18rem;
    object-fit: cover;
    border-radius: 50%;
  }

  > label {
    width: 4.8rem;
    height: 4.8rem;

    background-color: ${({ theme }) => theme.COLORS.RED};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0.7rem;
    right: 25%;

    cursor: pointer;

    > input {
      display: none;
    }

    > svg {
      width: 2rem;
      height: 2rem;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }
  }

  @media (max-width: 768px) {
    > img {
      width: 10rem;
      height: 10rem;
    }

    > label {
      width: 3.8rem;
      height: 3.8rem;
      right: 30%;
    }
  }
`;
