import React, {useState} from "react";
import {
  NavbarContainer,
  NavbarLogo,
  NavbarLinks,
  NavbarLink,
  NavbarLinkSpecial,
  NavbarMobile,
  NavbarMobileLink,
  NavbarMobileLinks,
  NavbarOpenCloseBtn,
} from "./navbar.style";

import Logo from "../../img/logo_2.png";

function navbar() {

  const [closeBtn, SetCloseBtn] = useState(false);
  
  return (
    <NavbarContainer>
      <NavbarLogo src={Logo}></NavbarLogo>
      <NavbarLinks>
        <NavbarLink>Quem somos</NavbarLink>
        <NavbarLink>Como Chegar</NavbarLink>
        <NavbarLinkSpecial>Faça sua reserva</NavbarLinkSpecial>
      </NavbarLinks>
      <NavbarMobile>
        <NavbarOpenCloseBtn>X</NavbarOpenCloseBtn>
        <NavbarMobileLinks>
        <NavbarMobileLink>Quem somos</NavbarMobileLink>
        <NavbarMobileLink>Como Chegar</NavbarMobileLink>
        <NavbarMobileLink>Faça sua reserva</NavbarMobileLink>
        </NavbarMobileLinks>
      </NavbarMobile>
    </NavbarContainer>
  );
}

export default navbar;
