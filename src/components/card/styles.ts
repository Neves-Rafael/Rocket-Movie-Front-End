import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  border-radius: 16px;
  background: rgba(255, 133, 155, 0.05);
  padding: 3.2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  cursor: pointer;

  > div h2 {
    font-size: 2.4rem;
    font-weight: 700;
  }

  > p {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    max-height: 10.9rem;
    word-wrap: break-word;
    overflow: hidden;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
    max-height: 5rem;
    overflow-y: hidden;
  }
`;
