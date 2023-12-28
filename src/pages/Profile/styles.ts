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
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4.8rem;
  width: 34rem;

  margin-top: -9rem;

  >img {
    height: 18rem;
    width: 18rem;
    object-fit: cover;
    border-radius: 50%;
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: .8rem;
  }
`;
