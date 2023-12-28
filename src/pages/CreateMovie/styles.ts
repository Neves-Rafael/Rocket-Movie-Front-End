import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
`
export const Section = styled.section`
    width: 100%;
    padding: 0 15%;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    margin-top: 4rem;

    >div{
        display: flex;
        gap: 4rem;
    }

    >textarea{
        width: 100%;
        resize: none;
        border-radius: 1rem;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
        padding: 1.6rem;
        min-height: 25rem;
    }

    >h3{
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        font-weight: 400;
    }

    .marks{
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        padding: 1.6rem;
        border-radius: 1.6rem;
        display: flex;
    }

    .buttons button:first-child{
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        color: ${({ theme }) => theme.COLORS.RED};
    }
`;