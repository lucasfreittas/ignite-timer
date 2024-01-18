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
            white-space: nowrap;
            
            &:first-of-type{
                width: 50%;
            };
        };
    };
`;

const STATUS_COLOR = { // Cria um objeto com as chaves e valores que iremos aceitar
    yellow: 'YELLOW_500',
    green: 'GREEN_500',
    red: 'RED_500',
} as const

interface StatusProps{ // Passa essa informação como uma propriedade chamada statusColor
    statusColor: keyof typeof STATUS_COLOR
};


export const Status = styled.span<StatusProps>` // Passa essa prorpriedade para o componente
    display: flex;
    flex: 0;
    align-items: center;
    justify-content: flex-start;
    gap: 0.8rem;
    &::before{
        content: '';
        display: block;
        width: 100%;
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 100%;
        background-color: ${props => props.theme[STATUS_COLOR[props.statusColor]]}; // Procura no nosso theme essa cor
    };
`;