import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const NewMovie = styled.div`
  padding: 0 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4.8rem;
  margin-bottom: 3.8rem;

  > div {
    margin-right: 1.7rem;
    width: 21rem;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  }
  :last-child {
    &:hover {
      filter: brightness(1.1);
    }
  }

  @media (max-width: 1100px) {
    padding: 0 5%;

    > a div {
      width: 15rem;
      height: 4rem;
    }
  }
`;

export const ScrollY = styled.div`
  padding: 0 15%;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  overflow-y: auto;
  max-height: calc(100vh - 25rem);

  > a {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  > a div {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  @media (max-width: 1100px) {
    padding: 0 5%;
  }
`;

export const Search = styled.header`
  height: 10rem;
  width: 100%;
  display: flex;
  gap: 6.4rem;
  align-items: center;
  border-bottom: solid 1px ${({ theme }) => theme.COLORS.GRAY_300};
  padding: 0 15%;

  > button {
    font-weight: 700;
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.RED};
    min-width: 17rem;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  > div img {
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 50%;
    object-fit: cover;
    cursor: pointer;
    &:hover {
      filter: brightness(1.2);
    }
  }

  > div div {
    display: flex;
    flex-direction: column;
    align-items: end;
    width: max-content;
  }

  > div div button {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    cursor: pointer;
    background: none;

    &:hover {
      color: ${({ theme }) => theme.COLORS.RED};
    }
  }

  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: end;
    gap: 1rem;
    height: auto;
    padding: 5rem 5%;

    > :nth-child(1) {
      display: none;
    }

    > :nth-child(2) {
      order: 2;
      margin-top: 2rem;
    }
  }
`;
