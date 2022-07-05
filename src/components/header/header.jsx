import React from 'react'
import { HeaderContainer, HeaderTitle, HeaderImg, HeaderContentContainer, HeaderBtn, } from "./header.style"
import fotoDaEntrada from "../../img/sitio_ilustrativa.jpg"

function Header() {
  return (
      <HeaderContainer>
          <HeaderImg src={fotoDaEntrada}>     
          </HeaderImg>
          <HeaderContentContainer>
          <HeaderTitle>Bem-vindo ao paraíso!</HeaderTitle>
          <HeaderBtn>Conheça mais</HeaderBtn>
          </HeaderContentContainer>
    </HeaderContainer>
  )
}

export default Header