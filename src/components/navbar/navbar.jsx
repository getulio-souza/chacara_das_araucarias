import React from 'react'
import { NavbarContainer, NavbarLogo, NavbarLinks, NavbarLink, NavbarLinkSpecial } from './navbar.style'

import Logo from "../../img/logo_2.png"

function navbar() {
  return (
      <NavbarContainer>
          <NavbarLogo src={Logo}></NavbarLogo>
          <NavbarLinks>
              <NavbarLink>Quem somos</NavbarLink>
              <NavbarLink>Como Chegar</NavbarLink>
              <NavbarLinkSpecial>Faça sua reserva</NavbarLinkSpecial>
          </NavbarLinks>
    </NavbarContainer>
  )
}

export default navbar