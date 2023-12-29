import styled from "styled-components";

export const Container = styled.header`
  height: 10rem;
  width: 100%;
  display: flex;
  gap: 6.4rem;
  align-items: center;
  border-bottom: solid 1px ${({ theme }) => theme.COLORS.GRAY_300};
  padding: 0 15%;

  > a h2 {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.RED};
    min-width: 17rem;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  > div img {
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 50%;
    object-fit: cover;
  }

  > div div {
    display: flex;
    flex-direction: column;
    align-items: end;
    width: max-content;
  }

  > div div p:nth-child(2) {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`;
