import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;

    width: 65.5rem;
    gap: 6.4rem;

    margin: auto;
    
`;

export const InputContainer = styled.form`
    display: flex;
    width: 100%;
    color: ${props => props.theme.GRAY_200};
    gap: 0.8rem;
    align-items: center;

    > p {
        font-size: 1.8rem;
        font-weight: 700;
        line-height: 160%;
    };

    > input {
        font-size: 1.8rem;
        font-weight: 700;
        line-height: 160%;
        background-color: transparent;
        border: none;
        border-bottom: 1px solid ${props => props.theme.GRAY_200};
        height: 4rem;
        width: 100%;
        flex: 1;
        text-align: left;
        color: ${props => props.theme.GRAY_200};
        
        &::placeholder{
            color: ${props => props.theme.GRAY_500};
            text-align: center;
        };

        &:focus{
            outline: none;   
        };
    };

    .amountTimer{
        flex: 0;
        width: 6.4rem;
        text-align: center;
    }
`;

export const TimerContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    gap: 1.6rem;
    font-size: 15rem;
    font-family: 'Roboto Mono', monospace;

    > p {
        padding: 0 1.6rem;
        border-radius: 8px;
        background-color: ${props => props.theme.GRAY_900};
        
    };

    > span{
        color: ${props => props.theme.GREEN_500};
    }
`;

export const Button = styled.button`
    display: flex;
    gap: 0.8rem;
    align-items: center;
    justify-content: center;
    padding: 2.2rem;
    width: 100%;
    border-radius: 8px;
    background-color: ${props => props.theme.GREEN_500};
    color: ${props => props.theme.GRAY_200};
    font-size: 1.6rem;
    font-weight: 700;
    transition: all 0.1s ease-in-out;

    &:hover{
        background-color: ${props => props.theme.GREEN_700};
    };

    &:disabled{
        opacity: 0.7;
        cursor: not-allowed;
    };

    &.stopButton{
        background-color: ${props => props.theme.RED_500};

       &:hover{
            background-color: ${props => props.theme.RED_700};
        }
    };
`;