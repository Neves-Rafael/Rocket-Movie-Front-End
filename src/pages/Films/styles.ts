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

  > a div {
    width: 21rem;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
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

  >a{
    color: ${({ theme }) => theme.COLORS.WHITE};
    
    &:hover{
      color: ${({ theme }) => theme.COLORS.RED};
    }
  }

  @media (max-width: 1100px) {
    padding: 0 5%;
  }
`;
