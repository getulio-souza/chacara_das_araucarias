import React from "react";
import {
  HeaderContainer,
  HeaderTitle,
  HeaderImg,
  HeaderContentContainer,
  HeaderBtn,
} from "./header.style";
import ModalformHeader from "./Modal/ModalformHeader"
import fotoDaEntrada from "../../img/Fotos/sitio_paisagem.jpg";

function Header() {
  return (
    <HeaderContainer>
      <HeaderContentContainer>
        <HeaderTitle>Bem-vindo à <span style={{color: "#00FF00"}}>Chácara das Araucárias!</span></HeaderTitle>
        <HeaderBtn>Conheça mais</HeaderBtn>
      </HeaderContentContainer>
      <ModalformHeader/>
      <HeaderImg src={fotoDaEntrada}></HeaderImg>
    </HeaderContainer>
  );
}

export default Header;
