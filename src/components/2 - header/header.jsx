import React from "react";
import {
  HeaderContainer,
  HeaderTitle,
  HeaderImg,
  HeaderContentContainer,
  HeaderBtn,
} from "./header.style";
import ModalformHeader from "./Modal/ModalformHeader"
import fotoDaEntrada from "../../img/sitio_paisagem.jpg";

function Header() {
  return (
    <HeaderContainer>
      <HeaderImg src={fotoDaEntrada}></HeaderImg>
      <HeaderContentContainer>
        <HeaderTitle>Bem-vindo ao paraíso!</HeaderTitle>
        <HeaderBtn>Conheça mais</HeaderBtn>
      </HeaderContentContainer>
      <ModalformHeader/>
    </HeaderContainer>
  );
}

export default Header;
