import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;

    nav {
        display: flex;
        gap: 0.8rem;

        a {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 4rem;
            width: 4rem;
            color: ${props => props.theme.GRAY_200};
            border-bottom: 2px solid transparent;
            border-radius: 1px;
            transition: all 0.1s ease-in-out;
            padding: 0.6rem 0;

            &:hover{
                border-bottom: 2px solid ${props => props.theme.GREEN_300};
            };

            &.active{
                color: ${props => props.theme.GREEN_500};
                
            }
        }
        
    }

`;