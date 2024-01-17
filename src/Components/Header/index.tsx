import LogoIgnite from '../../Assets/logo-ignite.svg'
import { Timer, Scroll } from "@phosphor-icons/react";

import { NavLink } from 'react-router-dom';

import { HeaderContainer } from "./styles"

export function Header(){
    return(
        <HeaderContainer>
            <img src={LogoIgnite} alt="" />
            <nav>
                <NavLink to='/'> <Timer size={24} /> </NavLink>
                <NavLink to='/historic'> <Scroll size={24} /> </NavLink>
            </nav>
        </HeaderContainer>
    )
}