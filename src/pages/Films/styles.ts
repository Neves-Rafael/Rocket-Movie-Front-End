import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 0 15%;
`;

export const NewMovie = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4.8rem;
  margin-bottom: 3.8rem;

  > button {
    width: 21rem;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  }
`;

export const ScrollY = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  overflow-y: auto;
  max-height: calc(100vh - 25rem);
`;
