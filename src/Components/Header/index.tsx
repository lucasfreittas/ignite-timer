import LogoIgnite from '../../Assets/logo-ignite.svg'
import { Timer, Scroll } from "@phosphor-icons/react";

import { NavLink } from 'react-router-dom';

import { HeaderContainer } from "./styles"

export function Header(){
    return(
        <HeaderContainer>
            <img src={LogoIgnite} alt="" />
            <nav>
                <NavLink to='/' title='Timer'> <Timer size={24} /> </NavLink>
                <NavLink to='/historic' title='Histórico'> <Scroll size={24} /> </NavLink>
            </nav>
        </HeaderContainer>
    )
}