import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 83.3rem;
    margin: auto;

    > table{
        width: 100%;
        border-collapse: separate;
        border-spacing: 0 0.4rem;
        font-size: 1.4rem;
        font-weight: 400;
        line-height: 160%;
        color: ${props => props.theme.GRAY_300};
        margin-top: 3.2rem;

        thead td{
            padding: 1.6rem 2.4rem;
            background-color: ${props => props.theme.GRAY_600};
            font-weight: 700;
            color: ${props => props.theme.GRAY_200};

            &:first-child{
                border-radius: 0.8rem 0 0 0;
            };

            &:last-child{
                border-radius: 0 0.8rem 0 0;
            };
           
        };

        tbody td{
            padding: 1.6rem 2.4rem;
            background-color: ${props => props.theme.GRAY_900};
           
        };
    };
`;