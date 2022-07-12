import React from "react";
import {
  HeaderContainer,
  HeaderTitle,
  HeaderImg,
  HeaderContentContainer,
  HeaderBtn,
  ModalContainer,
  ModalTitle,
  ModalWhereLabelContainer,
  ModalCheckinTitle,
  ModalCheckinInput,
  ModalCheckoutTitle,
  ModalCheckOutInput,
  ModalGuests,
  ModalTitleGuests,
  ModalInputHGuests,
  ModalSearchBtn,
} from "./header.style";
import fotoDaEntrada from "../../img/sitio_ilustrativa.jpg";

function Header() {
  return (
    <HeaderContainer>
      <HeaderImg src={fotoDaEntrada}></HeaderImg>
      <HeaderContentContainer>
        <HeaderTitle>Bem-vindo ao paraíso!</HeaderTitle>
        <HeaderBtn>Conheça mais</HeaderBtn>
      </HeaderContentContainer>
      <ModalContainer>
        <ModalTitle>Faça sua reserva</ModalTitle>
        <ModalWhereLabelContainer>
          <ModalCheckinTitle>Entrada</ModalCheckinTitle>
          <ModalCheckinInput></ModalCheckinInput>
          <ModalCheckoutTitle>Saída</ModalCheckoutTitle>
          <ModalCheckOutInput></ModalCheckOutInput>
        </ModalWhereLabelContainer>
        <ModalGuests>
          <ModalTitleGuests>Convidados</ModalTitleGuests>
          <ModalInputHGuests></ModalInputHGuests>
        </ModalGuests>
        <ModalSearchBtn>Consultar</ModalSearchBtn>
      </ModalContainer>

    </HeaderContainer>
  );
}

export default Header;
